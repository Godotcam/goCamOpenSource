namespace Avs {

	export namespace Plugin {

		export namespace Library {

			export namespace Ml {

				export class Challenge25 extends Avs.Plugin.Handler {

					static readonly MANIFEST_FILE_NAME      = 'manifest.json';
					static readonly CHALLENGE_NET_FILE_NAME = 'challenge_net.bin';
					static readonly AGE_NET_FILE_NAME       = 'age_net.bin';
					static readonly SCALERS_FILE_NAME       = 'scalers.bin';

					static readonly DEFAULT_MAX_DELTA = 16.0;
					static readonly DEFAULT_BASE_AGE  = 25.0;
					static readonly DEFAULT_Q17_MINOR = 0.85;

					static readonly DEFERRED_CHALLENGE_MINOR_AGE = 18.0;

					static readonly LANDMARK_NUMBER       = 68;
					static readonly ORDINAL_BUCKET_NUMBER = 6;

					static readonly POSE_FEATURE_NUMBER    = 4;
					static readonly RATIO_FEATURE_NUMBER   = 8;
					static readonly GEOMETRY_FEATURE_MEAN  = 30.0;
					static readonly GEOMETRY_FEATURE_SCALE = 20.0;

					static readonly SCALER_GEOM_SIZE = 148;
					static readonly SCALER_FULL_SIZE = 150;

					// challenge net shapes
					static readonly CHALLENGE_NET_W0_ROWS   = 96;
					static readonly CHALLENGE_NET_W0_COLS   = 148;
					static readonly CHALLENGE_NET_W1_ROWS   = 64;
					static readonly CHALLENGE_NET_HEAD_ROWS = 6;

					// age net shapes
					static readonly AGE_NET_W0_ROWS       = 112;
					static readonly AGE_NET_W0_COLS       = 149;
					static readonly AGE_NET_W1_ROWS       = 56;
					static readonly AGE_NET_DELTA_W0_ROWS = 32;
					static readonly AGE_NET_DELTA_W0_COLS = 68;
					static readonly AGE_NET_GATE_W0_ROWS  = 16;

					// Pure JS math & activations
					static readonly ACTIVATION_GELU    = 'gelu';
					static readonly ACTIVATION_SIGMOID = 'sigmoid';

					static readonly RISK_BAND_DEFINITE_MINOR          = 'DEFINITE_MINOR';
					static readonly RISK_BAND_BORDERLINE_CHALLENGE_25 = 'BORDERLINE_CHALLENGE_25';
					static readonly RISK_BAND_LOW_RISK_ADULT          = 'LOW_RISK_ADULT';

					public config: IChallenge25Config;
					public event: Avs.Event.Listener;
					public api: Avs.IGenericApi;

					public manifest: any;
					public bundle: any;

					public modelLoaded: boolean;

					public predictAgeList: Array<number>;

					constructor(
						config: IChallenge25Config,
						event: Avs.Event.Listener,
						api: Avs.IGenericApi
					) {

						super(config, event, api);

						this.config = config;
						this.api    = api;

						this.manifest    = null;
						this.bundle      = null;
						this.modelLoaded = false;

						this.predictAgeList = [];

					}

					public loadModel(cb: Function) {

						fetch(this.config.manifestPath).then(
							(res: Response) => {

								if (!res.ok) {
									this.debug.error(25102, 'Failed to fetch challenge 25 manifest.');
									cb(null);
									return;
								}

								res.json().then(
									(json: any) => {

										this.manifest = json;

										if (json.challenge_net && json.challenge_net.w0 && Array.isArray(json.challenge_net.w0)) {
											this.bundle      = json;
											this.modelLoaded = true;
											cb(true);
											return;
										}

										let baseUrl     = '';
										const lastSlash = this.config.manifestPath.lastIndexOf('/');
										if (lastSlash !== -1) {
											baseUrl = this.config.manifestPath.substring(0, lastSlash + 1);
										}

										const files = json.files || {};

										const challengeNetUrl = baseUrl + (files.challenge_net || Challenge25.CHALLENGE_NET_FILE_NAME);
										const ageNetUrl       = baseUrl + (files.age_net || Challenge25.AGE_NET_FILE_NAME);
										const scalersUrl      = baseUrl + (files.scalers || Challenge25.SCALERS_FILE_NAME);

										Promise.all([
											fetch(challengeNetUrl),
											fetch(ageNetUrl),
											fetch(scalersUrl)
										]).then(
											(shardList: Response[]) => {

												for (let i = 0; i < shardList.length; i++) {
													if (!shardList[i].ok) {
														this.debug.error(25103, 'Failed to fetch challenge 25 binary model shards.');
														cb(null);
														return;
													}
												}

												Promise.all([
													shardList[0].arrayBuffer(),
													shardList[1].arrayBuffer(),
													shardList[2].arrayBuffer()
												]).then(
													(bufferList: ArrayBuffer[]) => {

														this.bundle      = this.buildBundle(json, bufferList);
														this.modelLoaded = true;

														cb(true);

													},
													(error: Error) => {

														this.debug.error(25104, 'Failed to decode challenge 25 binary model shards.');
														cb(null);

													}
												);

											},
											(error: Error) => {

												this.debug.error(25105, 'Failed to fetch challenge 25 binary model shards.');
												cb(null);

											}
										);

									},
									(error: Error) => {

										this.debug.error(25106, 'Failed to parse challenge 25 manifest.');
										cb(null);

									}
								);

							},
							(error: Error) => {

								this.debug.error(25107, 'Failed to fetch challenge 25 manifest.');
								cb(null);

							}
						);

					}

					private buildBundle(manifest: any, bufferList: ArrayBuffer[]): any {

						const challengeNetF32 = new Float32Array(bufferList[0]);
						const ageNetF32       = new Float32Array(bufferList[1]);
						const scalersF32      = new Float32Array(bufferList[2]);

						const cnOffset = {value: 0};
						const cnW0     = Challenge25.unpack2D(challengeNetF32, Challenge25.CHALLENGE_NET_W0_ROWS, Challenge25.CHALLENGE_NET_W0_COLS, cnOffset);
						const cnB0     = Challenge25.unpack1D(challengeNetF32, Challenge25.CHALLENGE_NET_W0_ROWS, cnOffset);
						const cnW1     = Challenge25.unpack2D(challengeNetF32, Challenge25.CHALLENGE_NET_W1_ROWS, Challenge25.CHALLENGE_NET_W0_ROWS, cnOffset);
						const cnB1     = Challenge25.unpack1D(challengeNetF32, Challenge25.CHALLENGE_NET_W1_ROWS, cnOffset);
						const cnWHead  = Challenge25.unpack2D(challengeNetF32, Challenge25.CHALLENGE_NET_HEAD_ROWS, Challenge25.CHALLENGE_NET_W1_ROWS, cnOffset);
						const cnBHead  = Challenge25.unpack1D(challengeNetF32, Challenge25.CHALLENGE_NET_HEAD_ROWS, cnOffset);

						const anOffset  = {value: 0};
						const anW0      = Challenge25.unpack2D(ageNetF32, Challenge25.AGE_NET_W0_ROWS, Challenge25.AGE_NET_W0_COLS, anOffset);
						const anB0      = Challenge25.unpack1D(ageNetF32, Challenge25.AGE_NET_W0_ROWS, anOffset);
						const anW1      = Challenge25.unpack2D(ageNetF32, Challenge25.AGE_NET_W1_ROWS, Challenge25.AGE_NET_W0_ROWS, anOffset);
						const anB1      = Challenge25.unpack1D(ageNetF32, Challenge25.AGE_NET_W1_ROWS, anOffset);
						const anDeltaW0 = Challenge25.unpack2D(ageNetF32, Challenge25.AGE_NET_DELTA_W0_ROWS, Challenge25.AGE_NET_DELTA_W0_COLS, anOffset);
						const anDeltaB0 = Challenge25.unpack1D(ageNetF32, Challenge25.AGE_NET_DELTA_W0_ROWS, anOffset);
						const anDeltaW1 = Challenge25.unpack2D(ageNetF32, 1, Challenge25.AGE_NET_DELTA_W0_ROWS, anOffset);
						const anDeltaB1 = Challenge25.unpack1D(ageNetF32, 1, anOffset);
						const anGateW0  = Challenge25.unpack2D(ageNetF32, Challenge25.AGE_NET_GATE_W0_ROWS, Challenge25.AGE_NET_W1_ROWS, anOffset);
						const anGateB0  = Challenge25.unpack1D(ageNetF32, Challenge25.AGE_NET_GATE_W0_ROWS, anOffset);
						const anGateW1  = Challenge25.unpack2D(ageNetF32, 1, Challenge25.AGE_NET_GATE_W0_ROWS, anOffset);
						const anGateB1  = Challenge25.unpack1D(ageNetF32, 1, anOffset);

						const sOffset    = {value: 0};
						const sGeomMean  = Challenge25.unpack1D(scalersF32, Challenge25.SCALER_GEOM_SIZE, sOffset);
						const sGeomScale = Challenge25.unpack1D(scalersF32, Challenge25.SCALER_GEOM_SIZE, sOffset);
						const sFullMean  = Challenge25.unpack1D(scalersF32, Challenge25.SCALER_FULL_SIZE, sOffset);
						const sFullScale = Challenge25.unpack1D(scalersF32, Challenge25.SCALER_FULL_SIZE, sOffset);

						return {
							decision_config: manifest.decision_config,
							scalers        : {
								scaler_geom: {
									mean : sGeomMean,
									scale: sGeomScale
								},
								scaler_full: {
									mean : sFullMean,
									scale: sFullScale
								}
							},
							challenge_net  : {
								w0    : cnW0,
								b0    : cnB0,
								w1    : cnW1,
								b1    : cnB1,
								w_head: cnWHead,
								b_head: cnBHead
							},
							age_net        : {
								w0      : anW0,
								b0      : anB0,
								w1      : anW1,
								b1      : anB1,
								delta_w0: anDeltaW0,
								delta_b0: anDeltaB0,
								delta_w1: anDeltaW1,
								delta_b1: anDeltaB1,
								gate_w0 : anGateW0,
								gate_b0 : anGateB0,
								gate_w1 : anGateW1,
								gate_b1 : anGateB1
							}
						};

					}

					private static unpack2D(f32: Float32Array, rows: number, cols: number, offset: {
						value: number
					}): Float32Array[] {

						const mat: Float32Array[] = [];
						for (let i = 0; i < rows; i++) {
							mat.push(f32.subarray(offset.value, offset.value + cols));
							offset.value += cols;
						}

						return mat;

					}

					private static unpack1D(f32: Float32Array, length: number, offset: {
						value: number
					}): Float32Array {

						const vec = f32.subarray(offset.value, offset.value + length);
						offset.value += length;

						return vec;

					}

					public predict(detectionResult: IChallenge25DetectionResult): IChallenge25Prediction {

						if (!this.modelLoaded) {
							this.debug.error(25108, 'Challenge 25 model bundle not loaded.');
							throw new Error('Challenge 25 model bundle not loaded. Call loadModel first.');
						}

						const rawBaseAge = detectionResult.age !== undefined ? detectionResult.age : Challenge25.DEFAULT_BASE_AGE;
						const gender     = detectionResult.gender;
						const landmarks  = detectionResult.landmarks;

						if (!landmarks) {
							this.debug.error(25109, 'Detection result must contain 68 face landmarks.');
							throw new Error('Detection result must contain 68 face landmarks.');
						}

						const extracted = Challenge25.extractFeatures(landmarks, rawBaseAge, gender);
						const normGeom  = Challenge25.standardize(extracted.xGeom, this.bundle.scalers.scaler_geom);
						const normFull  = Challenge25.standardize(extracted.xFull, this.bundle.scalers.scaler_full);

						const cn      = this.bundle.challenge_net;
						const cnH0    = Challenge25.matvec(cn.w0, cn.b0, normGeom, Challenge25.ACTIVATION_GELU);
						const cnH1    = Challenge25.matvec(cn.w1, cn.b1, cnH0, Challenge25.ACTIVATION_GELU);
						const rawHead = Challenge25.matvec(cn.w_head, cn.b_head, cnH1);

						const qProbabilities = Challenge25.ordinalProbabilities(rawHead);
						const q17            = qProbabilities[2];

						const an       = this.bundle.age_net;
						const ageInput = new Float32Array(normFull.length - 1);
						ageInput[0]    = normFull[0];
						for (let i = 2; i < normFull.length; i++) {
							ageInput[i - 1] = normFull[i];
						}

						const anH0       = Challenge25.matvec(an.w0, an.b0, ageInput, Challenge25.ACTIVATION_GELU);
						const anH1       = Challenge25.matvec(an.w1, an.b1, anH0, Challenge25.ACTIVATION_GELU);
						const poseScores = normFull.subarray(normFull.length - (Challenge25.POSE_FEATURE_NUMBER + Challenge25.RATIO_FEATURE_NUMBER));

						const deltaInput = new Float32Array(anH1.length + poseScores.length);
						deltaInput.set(anH1, 0);
						deltaInput.set(poseScores, anH1.length);

						const deltaH0  = Challenge25.matvec(an.delta_w0, an.delta_b0, deltaInput, Challenge25.ACTIVATION_GELU);
						const rawDelta = Challenge25.matvec(an.delta_w1, an.delta_b1, deltaH0)[0];

						const maxDelta = this.bundle.decision_config.max_delta || Challenge25.DEFAULT_MAX_DELTA;
						const delta    = maxDelta * Math.tanh(rawDelta / maxDelta);

						const gateH0 = Challenge25.matvec(an.gate_w0, an.gate_b0, anH1, Challenge25.ACTIVATION_GELU);
						const gamma  = Challenge25.sigmoid(Challenge25.matvec(an.gate_w1, an.gate_b1, gateH0)[0]);

						const predAge = Math.max(0.0, Math.min(120.0, rawBaseAge + gamma * delta));

						const q17Opt            = this.bundle.decision_config.q17_probability_threshold;
						const thresholdAge      = this.bundle.decision_config.threshold_age;
						const requiresChallenge = (predAge < thresholdAge) || (q17 >= q17Opt);

						let riskBand = Challenge25.RISK_BAND_LOW_RISK_ADULT;
						if (predAge < Challenge25.DEFERRED_CHALLENGE_MINOR_AGE || q17 >= Challenge25.DEFAULT_Q17_MINOR) {
							riskBand = Challenge25.RISK_BAND_DEFINITE_MINOR;
						}
						else if (requiresChallenge) {
							riskBand = Challenge25.RISK_BAND_BORDERLINE_CHALLENGE_25;
						}

						return {
							rawBaseAge          : Number(rawBaseAge.toFixed(1)),
							predAge             : Number(predAge.toFixed(1)),
							averageAge          : Number(this.interpolateAgePredictions(parseInt(predAge.toFixed(1))).toFixed()),
							ageDelta            : Number((gamma * delta).toFixed(2)),
							gateGamma           : Number(gamma.toFixed(3)),
							q17MinorProbability : Number(q17.toFixed(3)),
							ordinalProbabilities: {
								pUnder12: Number(qProbabilities[0].toFixed(3)),
								pUnder15: Number(qProbabilities[1].toFixed(3)),
								pUnder17: Number(qProbabilities[2].toFixed(3)),
								pUnder20: Number(qProbabilities[3].toFixed(3)),
								pUnder24: Number(qProbabilities[4].toFixed(3)),
								pUnder29: Number(qProbabilities[5].toFixed(3))
							},
							requiresChallenge   : requiresChallenge,
							riskBand            : riskBand,
						};

					}

					private static ordinalProbabilities(rawHead: Float32Array): Float32Array {

						const baseLogit        = rawHead[0];
						const logits: number[] = [baseLogit];

						let current = baseLogit;
						for (let i = 1; i < Challenge25.ORDINAL_BUCKET_NUMBER; i++) {
							current += Challenge25.softplus(rawHead[i]) + 1e-4;
							logits.push(current);
						}

						const probabilities = new Float32Array(logits.length);
						for (let i = 0; i < logits.length; i++) {
							probabilities[i] = Challenge25.sigmoid(logits[i]);
						}

						return probabilities;

					}

					private static standardize(featureList: number[], scaler: any): Float32Array {

						const normalized = new Float32Array(featureList.length);
						for (let i = 0; i < featureList.length; i++) {
							normalized[i] = (featureList[i] - scaler.mean[i]) / scaler.scale[i];
						}

						return normalized;

					}

					static gelu(x: number): number {
						return 0.5 * x * (1.0 + Math.tanh(Math.sqrt(2.0 / Math.PI) * (x + 0.044715 * Math.pow(x, 3))));
					}

					static softplus(x: number): number {
						return Math.log(1.0 + Math.exp(Math.min(x, 20.0)));
					}

					static sigmoid(x: number): number {
						return 1.0 / (1.0 + Math.exp(-x));
					}

					static matvec(W: any, b: Float32Array, x: Float32Array, activation: string = null): Float32Array {

						const out = new Float32Array(W.length);

						for (let i = 0; i < W.length; i++) {
							let sum   = b[i];
							const row = W[i];

							for (let j = 0; j < row.length; j++) {
								sum += row[j] * x[j];
							}

							if (activation === Challenge25.ACTIVATION_GELU) {
								out[i] = Challenge25.gelu(sum);
							}
							else if (activation === Challenge25.ACTIVATION_SIGMOID) {
								out[i] = Challenge25.sigmoid(sum);
							}
							else {
								out[i] = sum;
							}
						}

						return out;

					}

					private static computePediatricRatios(alignedPts: number[][]): number[] {

						const chin       = alignedPts[8];
						const nasion     = alignedPts[27];
						const subnasale  = alignedPts[33];
						const leftJaw    = alignedPts[0];
						const rightJaw   = alignedPts[16];
						const leftCheek  = alignedPts[3];
						const rightCheek = alignedPts[13];
						const leftInner  = alignedPts[39];
						const leftOuter  = alignedPts[36];
						const rightInner = alignedPts[42];
						const rightOuter = alignedPts[45];

						const distance     = (p1: number[], p2: number[]) => Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
						const totalH       = distance(chin, nasion) + 1e-6;
						const lowerH       = distance(chin, subnasale) + 1e-6;
						const faceW        = distance(rightCheek, leftCheek) + 1e-6;
						const jawW         = distance(rightJaw, leftJaw) + 1e-6;
						const intercanthal = distance(rightInner, leftInner) + 1e-6;

						const leftEyeH  = distance(alignedPts[37], alignedPts[41]) + distance(alignedPts[38], alignedPts[40]);
						const rightEyeH = distance(alignedPts[43], alignedPts[47]) + distance(alignedPts[44], alignedPts[46]);
						const eyeH      = (leftEyeH + rightEyeH) / 4.0;

						const leftTilt  = (leftOuter[1] - leftInner[1]) / (Math.abs(leftOuter[0] - leftInner[0]) + 1e-6);
						const rightTilt = (rightOuter[1] - rightInner[1]) / (Math.abs(rightOuter[0] - rightInner[0]) + 1e-6);

						const vector1   = [nasion[0] - subnasale[0], nasion[1] - subnasale[1]];
						const vector2   = [chin[0] - subnasale[0], chin[1] - subnasale[1]];
						const dot       = vector1[0] * vector2[0] + vector1[1] * vector2[1];
						const norm1     = Math.hypot(vector1[0], vector1[1]);
						const norm2     = Math.hypot(vector2[0], vector2[1]);
						const convexity = dot / (norm1 * norm2 + 1e-6);
						const eyeArea   = (distance(leftOuter, leftInner) + distance(rightOuter, rightInner)) * eyeH;

						return [
							lowerH / totalH,
							eyeH / totalH,
							intercanthal / faceW,
							convexity,
							jawW / faceW,
							(leftTilt + rightTilt) / 2.0,
							totalH / faceW,
							eyeArea / (totalH * faceW + 1e-6)
						];

					}

					private static extractFeatures(landmarks: any, rawBaseAge: number, gender: string): {
						xGeom: number[],
						xFull: number[],
						ratios: number[]
					} {

						const positions = landmarks._positions || landmarks.positions || landmarks;
						const pts       = positions.map((p: any) => [p._x !== undefined ? p._x : p.x, p._y !== undefined ? p._y : p.y]);

						let leftEyeX  = 0;
						let leftEyeY  = 0;
						let rightEyeX = 0;
						let rightEyeY = 0;

						for (let i = 36; i < 42; i++) {
							leftEyeX += pts[i][0];
							leftEyeY += pts[i][1];
						}
						for (let i = 42; i < 48; i++) {
							rightEyeX += pts[i][0];
							rightEyeY += pts[i][1];
						}

						const leftEye  = [leftEyeX / 6, leftEyeY / 6];
						const rightEye = [rightEyeX / 6, rightEyeY / 6];

						const eyeVector = [rightEye[0] - leftEye[0], rightEye[1] - leftEye[1]];
						const roll      = Math.atan2(eyeVector[1], eyeVector[0]);
						const cosRoll   = Math.cos(-roll);
						const sinRoll   = Math.sin(-roll);
						const midEye    = [(leftEye[0] + rightEye[0]) / 2, (leftEye[1] + rightEye[1]) / 2];

						const aligned = pts.map((p: number[]) => {
							const dx = p[0] - midEye[0];
							const dy = p[1] - midEye[1];
							return [dx * cosRoll - dy * sinRoll, dx * sinRoll + dy * cosRoll];
						});

						const eyeDistance         = Math.hypot(eyeVector[0], eyeVector[1]);
						const canonical: number[] = [];

						for (let i = 0; i < Challenge25.LANDMARK_NUMBER; i++) {
							canonical.push(aligned[i][0] / eyeDistance);
							canonical.push(aligned[i][1] / eyeDistance);
						}

						const nose          = aligned[30];
						const leftCorner    = aligned[36];
						const rightCorner   = aligned[45];
						const leftDistance  = Math.abs(nose[0] - leftCorner[0]);
						const rightDistance = Math.abs(rightCorner[0] - nose[0]);
						const yaw           = (rightDistance - leftDistance) / (rightDistance + leftDistance + 1e-6);
						const pitch         = Math.abs(nose[1] - aligned[27][1]) / (Math.abs(aligned[8][1] - nose[1]) + 1e-6);
						const pose          = [yaw, pitch, Math.sin(roll), Math.cos(roll)];

						const ratios = Challenge25.computePediatricRatios(aligned);
						const xGeom  = canonical.concat(pose).concat(ratios);

						const genderScore = (gender === 'female' || gender === 'Female') ? 1.0 : ((gender === 'male' || gender === 'Male') ? -1.0 : 0.0);
						const xFull       = [(rawBaseAge - Challenge25.GEOMETRY_FEATURE_MEAN) / Challenge25.GEOMETRY_FEATURE_SCALE, genderScore].concat(xGeom);

						return {xGeom: xGeom, xFull: xFull, ratios: ratios};

					}

					public interpolateAgePredictions(age: number) {
						this.predictAgeList = [age].concat(this.predictAgeList).slice(0, 30);

						if (this.predictAgeList.length === 1) {
							return this.predictAgeList[0];
						}

						return this.predictAgeList.reduce((total: number, a: number) => total + a) / this.predictAgeList.length;
					}

				}

				export interface IChallenge25Config {
					manifestPath: string,
					debugLevel?: number,
				}

				export interface IChallenge25DetectionResult {
					age?: number,
					predictedAge?: number,
					gender?: string,
					predictedGender?: string,
					landmarks?: any,
					predictedLandmarks?: any,
				}

				export interface IChallenge25OrdinalProbabilities {
					pUnder12: number,
					pUnder15: number,
					pUnder17: number,
					pUnder20: number,
					pUnder24: number,
					pUnder29: number,
				}

				export interface IChallenge25Prediction {
					rawBaseAge: number,
					predAge: number,
					averageAge: number,
					ageDelta: number,
					gateGamma: number,
					q17MinorProbability: number,
					ordinalProbabilities: IChallenge25OrdinalProbabilities,
					requiresChallenge: boolean,
					riskBand: string,
				}

			}

		}

	}

}
