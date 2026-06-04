Skip to content
MathWorks
MATLAB Help Center
Community
Learning
Dániel

Documentation Home
Functions
 AI and Statistics
Category
Deep Learning Toolbox
133
Applications
1
Deep Learning with Simulink
10
Preprocess Data for Deep Neural Networks
167
Import and Build Deep Neural Networks
94
Train Deep Neural Networks
51
Visualize and Verify Deep Neural Networks
34
Generate Code and Deploy Deep Neural Networks
Extended Capability
2Tall Arrays
157C/C++ Code Generation
155GPU Code Generation
4Automatic Parallel Support
6Thread-Based Environment
100GPU Arrays
3Distributed Arrays
Added or Updated
Starting Release
Before R2022a
Ending Release
R2026a
Add-Ons

Deep Learning Toolbox Model Compression Library
16

Deep Learning Toolbox Converter for ONNX Model Format
2

Deep Learning Toolbox Converter for PyTorch Models
1

Deep Learning Toolbox Converter for TensorFlow Models
3

AI Verification Library for Deep Learning Toolbox
16

Deep Learning Toolbox Importer for Caffe Models
2

Deep Learning Toolbox Interface for alpha-beta-CROWN Verifier
2

Deep Learning Toolbox Interface for LiteRT Library
3
Documentation Examples Functions Blocks Apps Videos Answers
Deep Learning Toolbox — Functions
By CategoryAlphabetical List
Applications
Image Processing and Computer Vision
Image Processing
blockedImageDatastore	Datastore for use with blocks from blockedImage objects
randomPatchExtractionDatastore	Datastore for extracting random 2-D or 3-D random patches from images or pixel label images
Computer Vision
bisenetv2	Create BiSeNet v2 convolutional neural network for semantic segmentation (Since R2025a)
clipNetwork	Create pretrained CLIP deep learning neural network for vision-language tasks (Since R2026a)
deeplabv3plus	Create DeepLab v3+ convolutional neural network for semantic image segmentation (Since R2024a)
detectTextCRAFT	Detect texts in images by using CRAFT deep learning model (Since R2022a)
efficientADAnomalyDetector	Detect anomalies using EfficientAD network (Since R2024b)
fastFlowAnomalyDetector	Detect anomalies using FastFlow network (Since R2023a)
fcddAnomalyDetector	Detect anomalies using fully convolutional data description (FCDD) network for anomaly detection (Since R2022b)
groundingDinoObjectDetector	Detect and localize objects using Grounding DINO object detector (Since R2026a)
hrnetObjectKeypointDetector	Create object keypoint detector using HRNet deep learning network (Since R2023b)
maskrcnn	Detect objects using Mask R-CNN instance segmentation (Since R2021b)
moondream	Create pretrained Moondream vision-language model (VLM) (Since R2026a)
ocr	Recognize text using optical character recognition
patchCoreAnomalyDetector	Detect anomalies using PatchCore network (Since R2023a)
patchEmbeddingLayer	Patch embedding layer (Since R2023b)
posemaskrcnn	Predict object pose using Pose Mask R-CNN pose estimation (Since R2024a)
reidentificationNetwork	Re-identification deep learning network for re-identifying and tracking objects (Since R2024a)
rtmdetObjectDetector	Detect objects using RTMDet object detector (Since R2024b)
semanticseg	Semantic image segmentation using deep learning
solov2	Segment objects using SOLOv2 instance segmentation network (Since R2023b)
ssdObjectDetector	Detect objects using SSD deep learning detector
unet	Create U-Net convolutional neural network for semantic segmentation (Since R2024a)
unet3d	Create 3-D U-Net convolutional neural network for semantic segmentation of volumetric images (Since R2024a)
visionTransformer	Pretrained vision transformer (ViT) neural network (Since R2023b)
yolov2ObjectDetector	Detect objects using YOLO v2 object detector
yolov3ObjectDetector	Detect objects using YOLO v3 object detector
yolov4ObjectDetector	Detect objects using YOLO v4 object detector (Since R2022a)
yoloxObjectDetector	Detect objects using YOLOX object detector (Since R2023b)
Medical Imaging
cellpose	Configure Cellpose model for cell segmentation (Since R2023b)
medicalSegmentAnythingModel	Pretrained Medical Segment Anything Model (MedSAM) for medical image segmentation (Since R2024b)
segmentCells2D	Segment 2-D image using Cellpose (Since R2023b)
segmentCells3D	Segment 3-D image volume using Cellpose (Since R2023b)
Lidar Processing
detect	Detect objects using PointPillars object detector (Since R2021b)
pointnetplusLayers	(Not recommended) Create PointNet++ segmentation network (Since R2021b)
pointPillarsObjectDetector	Create PointPillars object detector (Since R2021b)
squeezesegv2Layers	(Not recommended) Create SqueezeSegV2 segmentation network for organized lidar point cloud
trainPointPillarsObjectDetector	Train PointPillars object detector (Since R2021b)
Signal Processing, Audio, and Wireless
Signal Processing
arrayDatastore	Datastore for in-memory data
audioDatastore	Datastore for collection of audio files
binmask2sigroi	Convert binary mask to matrix of ROI limits
countlabels	Count number of unique labels
cwtfilterbank	Continuous wavelet transform filter bank
cwtLayer	Continuous wavelet transform layer (Since R2022b)
cwtmag2sig	Signal reconstruction from CWT magnitude (Since R2023b)
deepSignalAnomalyDetector	Create signal anomaly detector (Since R2023a)
detrend	Remove polynomial trend
dlcwt	Deep learning continuous wavelet transform (Since R2022b)
dldwt	Differentiable discrete wavelet transform (Since R2025a)
dlicwt	Deep learning inverse continuous 1-D wavelet transform (Since R2024b)
dlidwt	Differentiable inverse discrete wavelet transform (Since R2025a)
dlistft	Deep learning inverse short-time Fourier transform (Since R2024a)
dlmodwt	Deep learning maximal overlap discrete wavelet transform and multiresolution analysis (Since R2022a)
dlstft	Deep learning short-time Fourier transform
edfheader	Create header structure for EDF or EDF+ file
edfinfo	Get information about EDF/EDF+ file
edfread	Read data from EDF/EDF+ file
edfwrite	Create or modify EDF or EDF+ file
envelope	Signal envelope
extendsigroi	Extend signal regions of interest to left and right
extractsigroi	Extract signal regions of interest
filenames2labels	Get list of labels from filenames (Since R2022b)
findchangepts	Find abrupt changes in signal
findpeaks	Find local maxima
folders2labels	Get list of labels from folder names
icwtLayer	Inverse continuous wavelet transform layer (Since R2024b)
imageDatastore	Datastore for image data
istftLayer	Inverse short-time Fourier transform layer (Since R2024a)
labeledSignalSet	Create labeled signal set
lowpass	Lowpass-filter signals
mergesigroi	Merge signal regions of interest
modwt	Maximal overlap discrete wavelet transform
modwtLayer	Maximal overlap discrete wavelet transform layer (Since R2022b)
paddata	Pad data by adding elements (Since R2023b)
plotsigroi	Plot signal regions based on signal mask
removesigroi	Remove signal regions of interest
resize	Resize data by adding or removing elements (Since R2023b)
risetime	Rise time of positive-going bilevel waveform transitions
shortensigroi	Shorten signal regions of interest from left and right
signalDatastore	Datastore for collection of signals
signalFrequencyFeatureExtractor	Streamline signal frequency feature extraction (Since R2021b)
signalLabelDefinition	Create signal label definition
signalMask	Modify and convert signal masks and extract signal regions of interest
signalTimeFeatureExtractor	Streamline signal time feature extraction
signalTimeFrequencyFeatureExtractor	Streamline signal time-frequency feature extraction (Since R2024a)
sigrangebinmask	Label signal samples with values within a specified range (Since R2023a)
sigroi2binmask	Convert matrix of ROI limits to binary mask
smoothdata	Smooth noisy data
splitlabels	Find indices to split labels according to specified proportions
stft	Short-time Fourier transform
stftLayer	Short-time Fourier transform layer (Since R2021b)
stftmag2sig	Signal reconstruction from STFT magnitude
timeFrequencyScattering	Joint time-frequency scattering (Since R2024b)
trimdata	Trim data by removing elements (Since R2023b)
waveletScattering	Wavelet time scattering
Audio Processing
audioDataAugmenter	Augment audio data
audioDatastore	Datastore for collection of audio files
audioFeatureExtractor	Streamline audio feature extraction
audioPretrainedNetwork	Pretrained audio neural networks (Since R2024a)
classifySound	Classify sounds in audio signal
detectspeechnn	Detect boundaries of speech in audio signal using AI (Since R2023a)
openl3Embeddings	Extract OpenL3 feature embeddings (Since R2022a)
pitchnn	Estimate pitch with deep learning neural network
separateSpeakers	Separate signal by speakers (Since R2023b)
vggishEmbeddings	Extract VGGish feature embeddings (Since R2022a)
Physics-Informed Machine Learning
Neural Network Layers
complexFullyConnectedLayer	Complex fully connected layer (Since R2026a)
complexReluLayer	Complex rectified linear unit (ReLU) layer (Since R2025a)
complexToRealLayer	Complex-to-real layer (Since R2024b)
neuralODELayer	Neural ODE layer (Since R2023b)
realToComplexLayer	Real-to-complex layer (Since R2024b)
spectralConvolution1dLayer	1-D spectral convolutional layer (Since R2026a)
spectralConvolution2dLayer	2-D spectral convolutional layer (Since R2026a)
spectralConvolution3dLayer	3-D spectral convolutional layer (Since R2026a)
Automatic Differentiation
dlarray	Deep learning array for customization
dldivergence	Divergence of deep learning data (Since R2024b)
dlfeval	Evaluate deep learning model for custom training loops
dlgradient	Compute gradients for custom training loops using automatic differentiation
dljacobian	Jacobian matrix deep learning operation (Since R2024b)
dllaplacian	Laplacian of deep learning data (Since R2024b)
dlode45	Deep learning solution of nonstiff ordinary differential equation (ODE) (Since R2021b)
Reduced Order Modeling
exportNetworkToSimulink	Generate Simulink model that contains deep learning layer blocks and subsystems that correspond to deep learning layer objects (Since R2024b)
Text Analytics and Computational Finance
Text Analytics
doc2sequence	Convert documents to sequences for deep learning
fastTextWordEmbedding	Pretrained fastText word embedding
ind2word	Map encoding index to word
isVocabularyWord	Test if word is member of word embedding or encoding
readWordEmbedding	Read word embedding from file
trainWordEmbedding	Train word embedding
vec2word	Map embedding vector to word
word2ind	Map word to encoding index
word2vec	Map word to embedding vector
wordEmbedding	Word embedding model to map words to vectors and back
wordEmbeddingLayer	Word embedding layer for deep learning neural network
wordEncoding	Word encoding model to map words to indices and back
writeWordEmbedding	Write word embedding file
Deep Learning with Simulink
exportNetworkToSimulink	Generate Simulink model that contains deep learning layer blocks and subsystems that correspond to deep learning layer objects (Since R2024b)
Preprocess Data for Deep Neural Networks
augment	Apply identical random transformations to multiple images
augmentedImageDatastore	Transform batches to augment image data
combine	Combine data from multiple datastores
CombinedDatastore	Datastore to combine data read from multiple underlying datastores
imageDataAugmenter	Configure image data augmentation
imageDatastore	Datastore for image data
minibatchqueue	Create mini-batches for deep learning
padsequences	Pad or truncate sequence data to same length
transform	Transform datastore
TransformedDatastore	Datastore to transform underlying datastore
Import and Build Deep Neural Networks
Built-In Pretrained Networks
imagePretrainedNetwork	Pretrained neural network for images (Since R2024a)
Pretrained Networks from External Platforms
Network Import
addParameter	Add parameter to ONNXParameters object
freezeParameters	Convert learnable network parameters in ONNXParameters to nonlearnable
importCaffeLayers	Import convolutional neural network layers from Caffe
importCaffeNetwork	Import pretrained convolutional neural network models from Caffe
importNetworkFromKeras	Import Keras 3 network as MATLAB network (Since R2026a)
importNetworkFromONNX	Import ONNX network as MATLAB network (Since R2023b)
importNetworkFromPyTorch	Import PyTorch network as MATLAB network (Since R2022b)
importNetworkFromTensorFlow	Import TensorFlow network as MATLAB network (Since R2023b)
ONNXParameters	Parameters of imported ONNX network for deep learning
removeParameter	Remove parameter from ONNXParameters object
unfreezeParameters	Convert nonlearnable network parameters in ONNXParameters to learnable
Network Assembly
addLayers	Add layers to neural network
dlnetwork	Deep learning neural network
functionLayer	Function layer (Since R2021b)
removeLayers	Remove layers from neural network
replaceLayer	Replace layer in neural network
Built-In Layers
Built-In Layers
Input Layers
featureInputLayer	Feature input layer
image3dInputLayer	3-D image input layer
imageInputLayer	Image input layer
inputLayer	Input layer (Since R2023b)
sequenceInputLayer	Sequence input layer
Convolution and Fully Connected Layers
complexFullyConnectedLayer	Complex fully connected layer (Since R2026a)
convolution1dLayer	1-D convolutional layer (Since R2021b)
convolution2dLayer	2-D convolutional layer
convolution3dLayer	3-D convolutional layer
fullyConnectedLayer	Fully connected layer
groupedConvolution2dLayer	2-D grouped convolutional layer
spectralConvolution1dLayer	1-D spectral convolutional layer (Since R2026a)
spectralConvolution2dLayer	2-D spectral convolutional layer (Since R2026a)
spectralConvolution3dLayer	3-D spectral convolutional layer (Since R2026a)
transposedConv1dLayer	Transposed 1-D convolution layer (Since R2022a)
transposedConv2dLayer	Transposed 2-D convolution layer
transposedConv3dLayer	Transposed 3-D convolution layer
Recurrent Layers
bilstmLayer	Bidirectional long short-term memory (BiLSTM) layer for recurrent neural network (RNN)
gruLayer	Gated recurrent unit (GRU) layer for recurrent neural network (RNN)
gruProjectedLayer	Gated recurrent unit (GRU) projected layer for recurrent neural network (RNN) (Since R2023b)
lstmLayer	Long short-term memory (LSTM) layer for recurrent neural network (RNN)
lstmProjectedLayer	Long short-term memory (LSTM) projected layer for recurrent neural network (RNN) (Since R2022b)
Transformer Layers
attentionLayer	Dot-product attention layer (Since R2024a)
embeddingConcatenationLayer	Embedding concatenation layer (Since R2023b)
embeddingLayer	Embedding layer (Since R2026a)
indexing1dLayer	1-D indexing layer (Since R2023b)
positionEmbeddingLayer	Position embedding layer (Since R2023b)
selfAttentionLayer	Self-attention layer (Since R2023a)
sinusoidalPositionEncodingLayer	Sinusoidal position encoding layer (Since R2023b)
Neural ODE Layers
deep.ode.options.ODE1	Neural ODE solver options for nonstiff differential equations using Euler method (Since R2025a)
deep.ode.options.ODE45	Neural ODE solver options for nonstiff differential equations (Since R2025a)
neuralODELayer	Neural ODE layer (Since R2023b)
Activation Layers
clippedReluLayer	Clipped rectified linear unit (ReLU) layer
complexReluLayer	Complex rectified linear unit (ReLU) layer (Since R2025a)
eluLayer	Exponential linear unit (ELU) layer
functionLayer	Function layer (Since R2021b)
geluLayer	Gaussian error linear unit (GELU) layer (Since R2022b)
leakyReluLayer	Leaky rectified linear Unit (ReLU) layer
preluLayer	Parametrized rectified linear unit (PReLU) layer (Since R2024a)
reluLayer	Rectified linear unit (ReLU) layer
sigmoidLayer	Sigmoid layer
softmaxLayer	Softmax layer
softplusLayer	Softplus layer
swishLayer	Swish layer
tanhLayer	Hyperbolic tangent (tanh) layer
zreluLayer	ZReLU Layer (Since R2026a)
Normalization Layers
batchNormalizationLayer	Batch normalization layer
crossChannelNormalizationLayer	Channel-wise local response normalization layer
groupNormalizationLayer	Group normalization layer
instanceNormalizationLayer	Instance normalization layer
inverseNormalizationLayer	Inverse normalization layer (Since R2026a)
layerNormalizationLayer	Layer normalization layer
Utility Layers
complexToRealLayer	Complex-to-real layer (Since R2024b)
crop2dLayer	2-D crop layer
crop3dLayer	3-D crop layer
dropoutLayer	Dropout layer
flattenLayer	Flatten layer
identityLayer	Identity layer (Since R2024b)
networkLayer	Network Layer (Since R2024a)
permuteLayer	Permute layer (Since R2025a)
quadraticLayer	Quadratic layer
realToComplexLayer	Real-to-complex layer (Since R2024b)
reshapeLayer	Reshape layer (Since R2025a)
scalingLayer	Scaling layer
spatialDropoutLayer	Spatial dropout layer (Since R2024a)
Pooling and Unpooling Layers
adaptiveAveragePooling2dLayer	Adaptive average pooling 2-D layer (Since R2024a)
averagePooling1dLayer	1-D average pooling layer (Since R2021b)
averagePooling2dLayer	Average pooling layer
averagePooling3dLayer	3-D average pooling layer
globalAveragePooling1dLayer	1-D global average pooling layer (Since R2021b)
globalAveragePooling2dLayer	2-D global average pooling layer
globalAveragePooling3dLayer	3-D global average pooling layer
globalMaxPooling1dLayer	1-D global max pooling layer (Since R2021b)
globalMaxPooling2dLayer	Global max pooling layer
globalMaxPooling3dLayer	3-D global max pooling layer
maxPooling1dLayer	1-D max pooling layer (Since R2021b)
maxPooling2dLayer	Max pooling layer
maxPooling3dLayer	3-D max pooling layer
maxUnpooling2dLayer	Max unpooling layer
Combination Layers
additionLayer	Addition layer
concatenationLayer	Concatenation layer
depthConcatenationLayer	Depth concatenation layer
multiplicationLayer	Multiplication layer
Network Creation
dag2dlnetwork	Convert SeriesNetwork and DAGNetwork to dlnetwork (Since R2024a)
dlnetwork	Deep learning neural network
imagePretrainedNetwork	Pretrained neural network for images (Since R2024a)
resnet3dNetwork	3-D residual neural network (Since R2024a)
resnetNetwork	2-D residual neural network (Since R2024a)
Network Editing
addInputLayer	Add input layer to network (Since R2022b)
addLayers	Add layers to neural network
connectLayers	Connect layers in neural network
disconnectLayers	Disconnect layers in neural network
expandLayers	Expand network layers (Since R2024a)
getLayer	Look up a layer by name or path (Since R2024a)
groupLayers	Group layers into network layers (Since R2024a)
removeLayers	Remove layers from neural network
replaceLayer	Replace layer in neural network
Learnable Parameters
getL2Factor	Get L2 regularization factor of layer learnable parameter
getLearnRateFactor	Get learn rate factor of layer learnable parameter
initialize	Initialize learnable and state parameters of neural network
networkDataLayout	Deep learning network data layout for learnable parameter initialization (Since R2022b)
setL2Factor	Set L2 regularization factor of layer learnable parameter
setLearnRateFactor	Set learn rate factor of layer learnable parameter
Network Information
analyzeNetwork	Analyze deep learning network architecture
checkLayer	Check validity of custom or function layer
isequal	Check equality of neural networks
isequaln	Check equality of neural networks ignoring NaN values
plot	Plot neural network architecture
summary	Print network summary (Since R2022b)
Custom Layers
checkLayer	Check validity of custom or function layer
dlnetwork	Deep learning neural network
findPlaceholderLayers	(Not recommended) Find placeholder layers in network architecture imported from Keras or ONNX
functionLayer	Function layer (Since R2021b)
getL2Factor	Get L2 regularization factor of layer learnable parameter
getLearnRateFactor	Get learn rate factor of layer learnable parameter
networkDataLayout	Deep learning network data layout for learnable parameter initialization (Since R2022b)
PlaceholderLayer	Layer replacing an unsupported Keras or ONNX layer
replaceLayer	Replace layer in neural network
setL2Factor	Set L2 regularization factor of layer learnable parameter
setLearnRateFactor	Set learn rate factor of layer learnable parameter
Operations
Automatic Differentiation
dims	Data format of dlarray object
dlarray	Deep learning array for customization
extractdata	Extract data from dlarray object
finddim	Find dimensions with specified label
isdlarray	Check if object is dlarray
stripdims	Remove dlarray data format
Deep Learning Operations
attention	Dot-product attention (Since R2022b)
avgpool	Pool data to average values over spatial dimensions
batchnorm	Normalize data across all observations for each channel independently
crosschannelnorm	Cross channel square-normalize using local responses
dlconv	Deep learning convolution
dlode45	Deep learning solution of nonstiff ordinary differential equation (ODE) (Since R2021b)
dltranspconv	Deep learning transposed convolution
embed	Embed discrete data
fullyconnect	Sum all weighted input data and apply a bias
groupnorm	Normalize data across grouped subsets of channels for each observation independently
gru	Gated recurrent unit
instancenorm	Normalize across each channel for each observation independently
layernorm	Normalize data across all channels for each observation independently
lstm	Long short-term memory
maxpool	Pool data to maximum value
maxunpool	Unpool the output of a maximum pooling operation
Activations
gelu	Apply Gaussian error linear unit (GELU) activation (Since R2022b)
leakyrelu	Apply leaky rectified linear unit activation
relu	Apply rectified linear unit activation
sigmoid	Apply sigmoid activation
softmax	Apply softmax activation to channel dimension
Transformations
deep.transform.doublelogit	Double logit transform (Since R2026a)
deep.transform.invlogit	Inverse logit transform (Since R2026a)
deep.transform.ismax	Is-maximum mask transform (Since R2026a)
deep.transform.logit	Logit transform (Since R2026a)
deep.transform.sign	Sign transform (Since R2026a)
deep.transform.symmetric	Symmetric transform (Since R2026a)
deep.transform.symmetricismax	Symmetric is-maximum mask transform (Since R2026a)
deep.transform.symmetriclogit	Symmetric logit transform (Since R2026a)
Loss Operations
crossentropy	Cross-entropy loss for classification tasks
ctc	Connectionist temporal classification (CTC) loss for unaligned sequence classification
huber	Huber loss for regression tasks
indexcrossentropy	Index cross-entropy loss for classification tasks (Since R2024b)
l1loss	L1 loss for regression tasks (Since R2021b)
l2loss	L2 loss for regression tasks (Since R2021b)
mse	Half mean squared error
Function Acceleration
AcceleratedFunction	Accelerated deep learning function
clearCache	Clear accelerated deep learning function trace cache
dlaccelerate	Accelerate deep learning function
Train Deep Neural Networks
Built-In Training
Training
close	Close training information plot (Since R2023b)
dlnetwork	Deep learning neural network
show	Show training information plot (Since R2023b)
TrainingInfo	Neural network training information (Since R2023b)
trainingOptions	Options for training deep learning neural network
trainnet	Train deep learning neural network (Since R2023b)
Learning Rate Schedules
cosineLearnRate	Cosine learning rate schedule (Since R2024b)
cyclicalLearnRate	Cyclical learning rate schedule (Since R2024b)
exponentialLearnRate	Exponential learning rate schedule (Since R2024b)
piecewiseLearnRate	Piecewise learning rate schedule (Since R2024b)
polynomialLearnRate	Polynomial learning rate schedule (Since R2024b)
warmupLearnRate	Warm-up learning rate schedule (Since R2024b)
Metrics
accuracyMetric	Deep learning accuracy metric (Since R2023b)
aucMetric	Deep learning area under ROC curve (AUC) metric (Since R2023b)
fScoreMetric	Deep learning F-score metric (Since R2023b)
precisionMetric	Deep learning precision metric (Since R2023b)
recallMetric	Deep learning recall metric (Since R2023b)
rmseMetric	Deep learning root mean squared error metric (Since R2023b)
testnet	Test deep learning neural network (Since R2024b)
Prediction
confusionchart	Create confusion matrix chart for classification problem
minibatchpredict	Mini-batched neural network prediction (Since R2024a)
predict	Compute deep learning network output for inference
scores2label	Convert prediction scores to labels (Since R2024a)
sortClasses	Sort classes of confusion matrix chart
Custom Training Using Automatic Differentiation
Network Building
addInputLayer	Add input layer to network (Since R2022b)
addLayers	Add layers to neural network
connectLayers	Connect layers in neural network
disconnectLayers	Disconnect layers in neural network
dlnetwork	Deep learning neural network
getL2Factor	Get L2 regularization factor of layer learnable parameter
getLearnRateFactor	Get learn rate factor of layer learnable parameter
imagePretrainedNetwork	Pretrained neural network for images (Since R2024a)
initialize	Initialize learnable and state parameters of neural network
networkDataLayout	Deep learning network data layout for learnable parameter initialization (Since R2022b)
removeLayers	Remove layers from neural network
replaceLayer	Replace layer in neural network
resnet3dNetwork	3-D residual neural network (Since R2024a)
resnetNetwork	2-D residual neural network (Since R2024a)
setL2Factor	Set L2 regularization factor of layer learnable parameter
setLearnRateFactor	Set learn rate factor of layer learnable parameter
Network Information
analyzeNetwork	Analyze deep learning network architecture
checkLayer	Check validity of custom or function layer
isequal	Check equality of neural networks
isequaln	Check equality of neural networks ignoring NaN values
plot	Plot neural network architecture
summary	Print network summary (Since R2022b)
Custom Training Loops
adamupdate	Update parameters using adaptive moment estimation (Adam)
dlupdate	Update parameters using custom function
exportPlotAsImage	Write training progress monitor to image file (Since R2026a)
forward	Compute deep learning network output for training
groupSubPlot	Group metrics in training plot (Since R2022b)
lbfgsState	State of limited-memory BFGS (L-BFGS) solver (Since R2023a)
lbfgsupdate	Update parameters using limited-memory BFGS (L-BFGS) (Since R2023a)
predict	Compute deep learning network output for inference
recordMetrics	Record metric values for custom training loops (Since R2022b)
rmspropupdate	Update parameters using root mean squared propagation (RMSProp)
sgdmupdate	Update parameters using stochastic gradient descent with momentum (SGDM)
trainingProgressMonitor	Monitor and plot training progress for deep learning custom training loops (Since R2022b)
updateInfo	Update information values for custom training loops (Since R2022b)
Data Processing
hasdata	Determine if minibatchqueue can return mini-batch
minibatchqueue	Create mini-batches for deep learning
next	Obtain next mini-batch of data from minibatchqueue
onehotdecode	Decode probability vectors into class labels
onehotencode	Encode data labels into one-hot vectors
padsequences	Pad or truncate sequence data to same length
partition	Partition minibatchqueue
reset	Reset minibatchqueue to start of data
shuffle	Shuffle data in minibatchqueue
Automatic Differentiation
dims	Data format of dlarray object
dlarray	Deep learning array for customization
dldivergence	Divergence of deep learning data (Since R2024b)
dlfeval	Evaluate deep learning model for custom training loops
dlgradient	Compute gradients for custom training loops using automatic differentiation
dljacobian	Jacobian matrix deep learning operation (Since R2024b)
dllaplacian	Laplacian of deep learning data (Since R2024b)
extractdata	Extract data from dlarray object
finddim	Find dimensions with specified label
isdlarray	Check if object is dlarray
stripdims	Remove dlarray data format
Loss Operations
crossentropy	Cross-entropy loss for classification tasks
ctc	Connectionist temporal classification (CTC) loss for unaligned sequence classification
huber	Huber loss for regression tasks
indexcrossentropy	Index cross-entropy loss for classification tasks (Since R2024b)
l1loss	L1 loss for regression tasks (Since R2021b)
l2loss	L2 loss for regression tasks (Since R2021b)
mse	Half mean squared error
Function Acceleration
AcceleratedFunction	Accelerated deep learning function
clearCache	Clear accelerated deep learning function trace cache
dlaccelerate	Accelerate deep learning function
Tuning
trainingOptions	Options for training deep learning neural network
trainingProgressMonitor	Monitor and plot training progress for deep learning custom training loops (Since R2022b)
trainnet	Train deep learning neural network (Since R2023b)
Manage Experiments
experiments.Monitor	Update results table and training plots for custom training experiments
groupSubPlot	Group metrics in experiment training plot
recordMetrics	Record metric values in experiment results table and training plot
updateInfo	Update information columns in experiment results table
yscale	Set training plot y-axis scale (linear or logarithmic) (Since R2024a)
Parallel and Cloud
deep.gpu.deterministicAlgorithms	Set determinism of deep learning operations on the GPU to get reproducible results (Since R2024b)
deep.gpu.fastAttentionAlgorithms	Disable fast attention algorithms used by deep learning operations on the GPU (Since R2026a)
Visualize and Verify Deep Neural Networks
Visualization and Interpretability
Network
analyzeNetwork	Analyze deep learning network architecture
plot	Plot neural network architecture
Training Progress
exportPlotAsImage	Write training progress monitor to image file (Since R2026a)
groupSubPlot	Group metrics in training plot (Since R2022b)
recordMetrics	Record metric values for custom training loops (Since R2022b)
updateInfo	Update information values for custom training loops (Since R2022b)
yscale	Set training plot y-axis scale (linear or logarithmic) (Since R2024a)
Metrics
accuracyMetric	Deep learning accuracy metric (Since R2023b)
aucMetric	Deep learning area under ROC curve (AUC) metric (Since R2023b)
fScoreMetric	Deep learning F-score metric (Since R2023b)
mapeMetric	Deep learning mean absolute percentage error metric (Since R2024b)
precisionMetric	Deep learning precision metric (Since R2023b)
recallMetric	Deep learning recall metric (Since R2023b)
rmseMetric	Deep learning root mean squared error metric (Since R2023b)
rSquaredMetric	Deep learning R2 metric (Since R2025a)
testnet	Test deep learning neural network (Since R2024b)
Prediction
addMetrics	Compute additional classification performance metrics (Since R2022b)
auc	Area under the ROC curve or area under the PR (precision-recall) curve (Since R2024b)
average	Compute performance metrics for average receiver operating characteristic (ROC) curve in multiclass problem (Since R2022b)
confusionchart	Create confusion matrix chart for classification problem
minibatchpredict	Mini-batched neural network prediction (Since R2024a)
modelOperatingPoint	Operating point of rocmetrics object (Since R2024b)
plot	Plot receiver operating characteristic (ROC) curves and other performance curves (Since R2022b)
predict	Compute deep learning network output for inference
rocmetrics	Receiver operating characteristic (ROC) curve and performance metrics for binary and multiclass classifiers (Since R2022b)
scores2label	Convert prediction scores to labels (Since R2024a)
sortClasses	Sort classes of confusion matrix chart
Interpretability
deepDreamImage	Visualize network features using deep dream
drise	Explain object detection network predictions using D-RISE (Since R2024a)
gradCAM	Explain network predictions using Grad-CAM
imageLIME	Explain network predictions using LIME
occlusionSensitivity	Explain network predictions by occluding the inputs
Reproducibility
deep.gpu.deterministicAlgorithms	Set determinism of deep learning operations on the GPU to get reproducible results (Since R2024b)
trainingProgressMonitor	Monitor and plot training progress for deep learning custom training loops (Since R2022b)
AI Verification
Formal Verification of Neural Networks
alphaCROWNOptions	Options for α-CROWN verification (Since R2026a)
estimateNetworkOutputBounds	Compute output bounds of MATLAB, ONNX, and PyTorch networks (Since R2022b)
networkVerificationOptions	Options for network robustness verification for ONNX and PyTorch networks (Since R2026a)
outputBoundsOptions	Options for output bounds computation for ONNX and PyTorch networks (Since R2026a)
verifyNetworkRobustness	Verify adversarial robustness of MATLAB, ONNX, and PyTorch networks (Since R2022b)
Adversarial Examples
adversarialOptions	Options for finding adversarial examples for MATLAB deep neural networks (Since R2026a)
AdversarialOptionsBIM	Options for generating adversarial examples using the basic iterative method (BIM) (Since R2026a)
AdversarialOptionsFGSM	Options for generating adversarial examples using the fast gradient sign method (FGSM) (Since R2026a)
findAdversarialExamples	Find adversarial examples for MATLAB, ONNX, and PyTorch classification networks (Since R2026a)
networkVerificationOptions	Options for network robustness verification for ONNX and PyTorch networks (Since R2026a)
Out-of-Distribution Detection
BaselineDistributionDiscriminator	Baseline distribution discriminator (Since R2023a)
coder.loadNetworkDistributionDiscriminator	Load network distribution discriminator for code generation (Since R2023a)
distributionScores	Distribution confidence scores (Since R2023a)
EnergyDistributionDiscriminator	Energy distribution discriminator (Since R2023a)
HBOSDistributionDiscriminator	HBOS distribution discriminator (Since R2023a)
isInNetworkDistribution	Determine whether data is within the distribution of the network (Since R2023a)
networkDistributionDiscriminator	Deep learning distribution discriminator (Since R2023a)
ODINDistributionDiscriminator	ODIN distribution discriminator (Since R2023a)
Interpretability
drise	Explain object detection network predictions using D-RISE (Since R2024a)
Generate Code and Deploy Deep Neural Networks
Export Deep Neural Networks
exportNetworkToTensorFlow	Export Deep Learning Toolbox network to TensorFlow (Since R2022b)
exportONNXNetwork	Export network to ONNX model format
Pruning, Projection, and Quantization
Pruning
compressNetworkUsingTaylorPruning	Compress neural network using Taylor pruning (Since R2026a)
forward	Compute deep learning network output for training
predict	Compute deep learning network output for inference
taylorPrunableNetwork	Neural network suitable for compression using Taylor pruning (Since R2022a)
updatePrunables	Remove filters from prunable layers based on importance scores (Since R2022a)
updateScore	Compute and accumulate Taylor-based importance scores for pruning (Since R2022a)
Projection
compressNetworkUsingProjection	Compress neural network using projection (Since R2022b)
gruProjectedLayer	Gated recurrent unit (GRU) projected layer for recurrent neural network (RNN) (Since R2023b)
lstmProjectedLayer	Long short-term memory (LSTM) projected layer for recurrent neural network (RNN) (Since R2022b)
neuronPCA	Principal component analysis of neuron activations (Since R2022b)
ProjectedLayer	Compressed neural network layer using projection (Since R2023b)
unpackProjectedLayers	Unpack projected layers of neural network (Since R2023b)
Quantization
calibrate	Simulate and collect ranges of a deep neural network
dlquantizationOptions	Options for quantizing a trained deep neural network
dlquantizer	Quantize a deep neural network to 8-bit scaled integer data types
equalizeLayers	Equalize layer parameters of deep neural network (Since R2022b)
estimateNetworkMetrics	Estimate network metrics for specific layers of a neural network (Since R2022a)
exportNetworkToSimulink	Generate Simulink model that contains deep learning layer blocks and subsystems that correspond to deep learning layer objects (Since R2024b)
prepareNetwork	Prepare deep neural network for quantization (Since R2024b)
quantizationDetails	Display quantization details for a neural network (Since R2022a)
quantize	Quantize deep neural network (Since R2022a)
validate	Quantize and validate a deep neural network
Deep Learning Code Generation from MATLAB Applications
CPU Code Generation from MATLAB Applications
codegen	Generate C or C++ code from MATLAB code
coder.DeepLearningConfig	Create deep learning code generation configuration objects
coder.getDeepLearningLayers	Get the list of layers supported for code generation for a specific deep learning library
coder.loadDeepLearningNetwork	Load deep learning network model
coder.loadNetworkDistributionDiscriminator	Load network distribution discriminator for code generation (Since R2023a)
loadTFLiteModel	Load TensorFlow Lite model (Since R2022a)
predict	Compute deep learning network output for inference by using a TensorFlow Lite model (Since R2022a)
TFLiteModel	TensorFlow Lite model (Since R2022a)
GPU Code Generation from MATLAB Applications
codegen	Generate C or C++ code from MATLAB code
coder.DeepLearningConfig	Create deep learning code generation configuration objects
coder.getDeepLearningLayers	Get the list of layers supported for code generation for a specific deep learning library
coder.loadDeepLearningNetwork	Load deep learning network model
coder.loadNetworkDistributionDiscriminator	Load network distribution discriminator for code generation (Since R2023a)
HDL Code Generation from MATLAB Applications
dlhdl.Target	Configure interface to target board for workflow deployment
dlhdl.Workflow	Configure deployment workflow for deep learning neural network
How useful was this information?
Trust Center
Trademarks
Privacy Policy
Preventing Piracy
Application Status
Contact Us
© 1994-2026 The MathWorks, Inc.