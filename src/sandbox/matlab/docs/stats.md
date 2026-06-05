# Stats Toolbox Reference

| Implemented | Function | Description |
| :---: | :--- | :--- |
|   | `caseread` | Read case names from file |
|   | `casewrite` | Write case names to file |
|   | `tblread` | Read tabular data from file |
|   | `tblwrite` | Write tabular data to file |
|   | `tdfread` | Read tab-delimited file |
|   | `xptread` | Create table from data stored in SAS XPORT format file |
|   | `countPredictorsAfterCategoricalEncoding` | Number of predictors in tabular data after encoding categorical
      variables(Since R2026a) |
|   | `dummyvar` | Create dummy variables |
|   | `gplotmatrix` | Matrix of scatter plots by group |
|   | `grp2idx` | Create index vector from grouping variable |
|   | `gscatter` | Scatter plot by group |
|   | `nominal` | (Not Recommended) Arrays for nominal data |
|   | `onehotdecode` | Decode probability vectors into class labels(Since R2021b) |
|   | `onehotencode` | Encode data labels into one-hot vectors(Since R2021b) |
|   | `ordinal` | (Not Recommended) Arrays for ordinal data |
|   | `cell2dataset` | (Not Recommended) Convert cell array to dataset array |
|   | `dataset2cell` | (Not Recommended) Convert dataset array to cell array |
|   | `dataset2struct` | (Not Recommended) Convert dataset array to structure |
|   | `dataset2table` | Convert dataset array to table |
|   | `export` | (Not Recommended) Write dataset array to file |
|   | `ismissing` | (Not Recommended) Find dataset array elements with missing values |
|   | `join` | (Not Recommended) Merge dataset array observations |
|   | `mat2dataset` | (Not Recommended) Convert matrix to dataset array |
|   | `struct2dataset` | (Not Recommended) Convert structure array to dataset array |
|   | `table2dataset` | (Not Recommended) Convert table to dataset array |
|   | `dataset` | (Not Recommended) Arrays for statistical data |
|   | `geomean` | Geometric mean |
|   | `harmmean` | Harmonic mean |
|   | `kurtosis` | Kurtosis |
| ✅ | `moment` | Central moment |
|   | `skewness` | Skewness |
| ✅ | `trimmean` | Mean, excluding outliers |
|   | `mad` | Mean or median absolute deviation |
| ✅ | `range` | Range of values |
|   | `zscore` | Standardizedz-scores |
|   | `cholcov` | Cholesky-like covariance decomposition |
|   | `corr` | Linear or rank correlation |
|   | `corrcov` | Convert covariance matrix to correlation matrix |
|   | `nearcorr` | Compute nearest correlation matrix by minimizing Frobenius distance |
|   | `partialcorr` | Linear or rank partial correlation coefficients |
|   | `partialcorri` | Partial correlation coefficients adjusted for internal
variables |
|   | `robustcov` | Robust multivariate covariance and mean estimate |
|   | `crosstab` | Cross-tabulation |
|   | `grpstats` | Summary statistics organized by group |
| ✅ | `tabulate` | Frequency table |
|   | `tiedrank` | Rank adjusted for ties |
|   | `andrewsplot` | Andrews plot |
|   | `binScatterPlot` | Scatter plot of bins for tall arrays |
|   | `biplot` | Biplot |
|   | `boxplot` | Visualize summary statistics with box plot |
|   | `glyphplot` | Glyph plot |
|   | `parallelcoords` | Parallel coordinates plot |
|   | `scatterhist` | Scatter plot with marginal histograms |
|   | `gline` | Add line to plot interactively |
|   | `gname` | Add case names to plot |
|   | `lsline` | Add least-squares line to scatter plot |
|   | `refcurve` | Add reference curve to plot |
|   | `refline` | Add reference line to plot |
| ✅ | `cdf` | Cumulative distribution function |
| ✅ | `icdf` | Inverse cumulative distribution function |
|   | `mle` | Maximum likelihood estimates |
| ✅ | `pdf` | Probability density function |
|   | `random` | Random numbers |
|   | `fitdist` | Fit probability distribution object to data |
| ✅ | `makedist` | Create probability distribution object |
|   | `gather` | Gather properties ofStatistics and Machine Learning Toolboxobject from GPU |
|   | `iqr` | Interquartile range of probability distribution |
| ✅ | `mean` | Mean of probability distribution |
|   | `median` | Median of probability distribution |
|   | `negloglik` | Negative loglikelihood of probability distribution |
|   | `paramci` | Confidence intervals for probability distribution parameters |
|   | `plot` | Plot probability distribution object(Since R2022b) |
|   | `proflik` | Profile likelihood function for probability distribution |
|   | `qqplot` | Quantile-quantile plot |
|   | `std` | Standard deviation of probability distribution |
|   | `truncate` | Truncate probability distribution object |
|   | `var` | Variance of probability distribution |
| ✅ | `binocdf` | Binomial cumulative distribution function |
|   | `binofit` | Binomial parameter estimates |
| ✅ | `binoinv` | Binomial inverse cumulative distribution function |
| ✅ | `binopdf` | Binomial probability density function |
|   | `binornd` | Random numbers from binomial distribution |
| ✅ | `binostat` | Binomial mean and variance |
|   | `ecdf` | Empirical cumulative distribution function |
|   | `ecdfhist` | Histogram based on empirical cumulative distribution function |
| ✅ | `geocdf` | Geometric cumulative distribution function |
|   | `geoinv` | Geometric inverse cumulative distribution function |
| ✅ | `geopdf` | Geometric probability density function |
|   | `geornd` | Geometric random numbers |
| ✅ | `geostat` | Geometric mean and variance |
| ✅ | `hygecdf` | Hypergeometric cumulative distribution function |
| ✅ | `hygeinv` | Hypergeometric inverse cumulative distribution function |
| ✅ | `hygepdf` | Hypergeometric probability density function |
|   | `hygernd` | Hypergeometric random numbers |
| ✅ | `hygestat` | Hypergeometric mean and variance |
| ✅ | `nbincdf` | Negative binomial cumulative distribution function |
|   | `nbinfit` | Negative binomial parameter estimates |
| ✅ | `nbininv` | Negative binomial inverse cumulative distribution function |
| ✅ | `nbinpdf` | Negative binomial probability density function |
|   | `nbinrnd` | Negative binomial random numbers |
| ✅ | `nbinstat` | Negative binomial mean and variance |
| ✅ | `poisscdf` | Poisson cumulative distribution function |
|   | `poissfit` | Poisson parameter estimates |
| ✅ | `poissinv` | Poisson inverse cumulative distribution function |
| ✅ | `poisspdf` | Poisson probability density function |
|   | `poissrnd` | Random numbers from Poisson distribution |
| ✅ | `poisstat` | Poisson mean and variance |
|   | `unidcdf` | Discrete uniform cumulative distribution function |
|   | `unidinv` | Discrete uniform inverse cumulative distribution function |
|   | `unidpdf` | Discrete uniform probability density function |
|   | `unidrnd` | Random numbers from discrete uniform distribution |
|   | `unidstat` | Discrete uniform mean and variance |
|   | `BinomialDistribution` | Binomial probability distribution object |
|   | `EmpiricalDistribution` | Empirical probability distribution object(Since R2025a) |
|   | `NegativeBinomialDistribution` | Negative binomial distribution object |
|   | `PoissonDistribution` | Poisson probability distribution object |
|   | `randtool` | Interactive random number generation |
|   | `ExtremeValueDistribution` | Extreme value probability distribution object |
|   | `GeneralizedExtremeValueDistribution` | Generalized extreme value probability distribution object |
|   | `LogisticDistribution` | Logistic probability distribution object |
|   | `LoglogisticDistribution` | Loglogistic probability distribution object |
|   | `HalfNormalDistribution` | Half-normal probability distribution object |
|   | `LognormalDistribution` | Lognormal probability distribution object |
|   | `NormalDistribution` | Normal probability distribution object |
|   | `GeneralizedParetoDistribution` | Generalized Pareto probability distribution object |
|   | `paretotails` | Piecewise distribution with Pareto tails |
|   | `LoguniformDistribution` | Loguniform probability distribution object(Since R2021b) |
|   | `UniformDistribution` | Uniform probability distribution object |
|   | `BetaDistribution` | Beta probability distribution object |
|   | `BirnbaumSaundersDistribution` | Birnbaum-Saunders probability distribution object |
|   | `BurrDistribution` | Burr probability distribution object |
|   | `ExponentialDistribution` | Exponential probability distribution object |
|   | `GammaDistribution` | Gamma probability distribution object |
|   | `InverseGaussianDistribution` | Inverse Gaussian probability distribution object |
|   | `KernelDistribution` | Kernel probability distribution object |
|   | `NakagamiDistribution` | Nakagami probability distribution object |
|   | `PearsonDistribution` | Pearson probability distribution object(Since R2025a) |
|   | `PiecewiseLinearDistribution` | Piecewise linear probability distribution object |
|   | `RayleighDistribution` | Rayleigh probability distribution object |
|   | `RicianDistribution` | Rician probability distribution object |
|   | `StableDistribution` | Stable probability distribution object |
|   | `tLocationScaleDistribution` | tlocation-scale probability distribution object |
|   | `TriangularDistribution` | Triangular probability distribution object |
|   | `WeibullDistribution` | Weibull probability distribution object |
|   | `boundary` | Piecewise distribution boundaries |
|   | `lowerparams` | Lower Pareto tail parameters |
|   | `nsegments` | Number of segments in piecewise distribution |
|   | `segment` | Piecewise distribution segments containing input values |
|   | `upperparams` | Upper Pareto tail parameters |
|   | `histfit` | Histogram with a distribution fit |
|   | `mlecov` | Asymptotic covariance of maximum likelihood estimators |
| ✅ | `betacdf` | Beta cumulative distribution function |
|   | `betafit` | Beta parameter estimates |
| ✅ | `betainv` | Beta inverse cumulative distribution function |
|   | `betalike` | Beta negative loglikelihood |
| ✅ | `betapdf` | Beta probability density function |
|   | `betarnd` | Beta random numbers |
| ✅ | `betastat` | Beta mean and variance |
| ✅ | `chi2cdf` | Chi-square cumulative distribution function |
|   | `chi2gof` | Chi-square goodness-of-fit test |
| ✅ | `chi2inv` | Chi-square inverse cumulative distribution function |
| ✅ | `chi2pdf` | Chi-square probability density function |
|   | `chi2rnd` | Chi-square random numbers |
| ✅ | `chi2stat` | Chi-square mean and variance |
| ✅ | `ncx2cdf` | Noncentral chi-square cumulative distribution function |
| ✅ | `ncx2inv` | Noncentral chi-square inverse cumulative distribution function |
| ✅ | `ncx2pdf` | Noncentral chi-square probability density function |
|   | `ncx2rnd` | Noncentral chi-square random numbers |
| ✅ | `ncx2stat` | Noncentral chi-square mean and variance |
| ✅ | `expcdf` | Exponential cumulative distribution function |
|   | `expfit` | Exponential parameter estimates |
| ✅ | `expinv` | Exponential inverse cumulative distribution function |
|   | `explike` | Exponential negative loglikelihood |
| ✅ | `exppdf` | Exponential probability density function |
|   | `exprnd` | Exponential random numbers |
| ✅ | `expstat` | Exponential mean and variance |
| ✅ | `evcdf` | Extreme value cumulative distribution function |
|   | `evfit` | Extreme value parameter estimates |
| ✅ | `evinv` | Extreme value inverse cumulative distribution function |
|   | `evlike` | Extreme value negative loglikelihood |
| ✅ | `evpdf` | Extreme value probability density function |
|   | `evrnd` | Extreme value random numbers |
| ✅ | `evstat` | Extreme value mean and variance |
| ✅ | `gevcdf` | Generalized extreme value cumulative distribution function |
|   | `gevfit` | Generalized extreme value parameter estimates |
| ✅ | `gevinv` | Generalized extreme value inverse cumulative distribution function |
|   | `gevlike` | Generalized extreme value negative loglikelihood |
| ✅ | `gevpdf` | Generalized extreme value probability density function |
|   | `gevrnd` | Generalized extreme value random numbers |
| ✅ | `gevstat` | Generalized extreme value mean and variance |
| ✅ | `fcdf` | Fcumulative distribution function |
| ✅ | `finv` | Finverse cumulative distribution function |
| ✅ | `fpdf` | Fprobability density function |
|   | `frnd` | Frandom numbers |
| ✅ | `fstat` | Fmean and variance |
| ✅ | `ncfcdf` | NoncentralFcumulative distribution function |
| ✅ | `ncfinv` | NoncentralFinverse cumulative distribution
      function |
| ✅ | `ncfpdf` | NoncentralFprobability density function |
|   | `ncfrnd` | NoncentralFrandom numbers |
| ✅ | `ncfstat` | NoncentralFmean and variance |
| ✅ | `gamcdf` | Gamma cumulative distribution function |
|   | `gamfit` | Gamma parameter estimates |
| ✅ | `gaminv` | Gamma inverse cumulative distribution function |
|   | `gamlike` | Gamma negative loglikelihood |
| ✅ | `gampdf` | Gamma probability density function |
|   | `gamrnd` | Gamma random numbers |
| ✅ | `gamstat` | Gamma mean and variance |
|   | `randg` | Gamma random numbers with unit scale |
|   | `ksdensity` | Kernel smoothing function estimate for univariate and
bivariate data |
|   | `mvksdensity` | Kernel smoothing function estimate for multivariate data |
| ✅ | `normcdf` | Normal cumulative distribution function |
|   | `normfit` | Normal parameter estimates |
| ✅ | `norminv` | Normal inverse cumulative distribution function |
|   | `normlike` | Normal negative loglikelihood |
| ✅ | `normpdf` | Normal probability density function |
|   | `normplot` | Normal probability plot |
|   | `normrnd` | Normal random numbers |
|   | `normspec` | Normal density plot shading between specifications |
| ✅ | `normstat` | Normal mean and variance |
| ✅ | `logncdf` | Lognormal cumulative distribution function |
|   | `lognfit` | Lognormal parameter estimates |
| ✅ | `logninv` | Lognormal inverse cumulative distribution function |
|   | `lognlike` | Lognormal negative loglikelihood |
| ✅ | `lognpdf` | Lognormal probability density function |
|   | `lognrnd` | Lognormal random numbers |
| ✅ | `lognstat` | Lognormal mean and variance |
| ✅ | `gpcdf` | Generalized Pareto cumulative distribution function |
|   | `gpfit` | Generalized Pareto parameter estimates |
| ✅ | `gpinv` | Generalized Pareto inverse cumulative distribution function |
|   | `gplike` | Generalized Pareto negative loglikelihood |
| ✅ | `gppdf` | Generalized Pareto probability density function |
|   | `gprnd` | Generalized Pareto random numbers |
| ✅ | `gpstat` | Generalized Pareto mean and variance |
|   | `pearscdf` | Pearson cumulative distribution function(Since R2023b) |
|   | `pearsinv` | Pearson inverse cumulative distribution function (icdf)(Since R2025a) |
|   | `pearspdf` | Pearson probability density function(Since R2023b) |
|   | `pearsrnd` | Pearson system random numbers |
| ✅ | `raylcdf` | Rayleigh cumulative distribution function |
|   | `raylfit` | Rayleigh parameter estimates |
| ✅ | `raylinv` | Rayleigh inverse cumulative distribution function |
| ✅ | `raylpdf` | Rayleigh probability density function |
|   | `raylrnd` | Rayleigh random numbers |
| ✅ | `raylstat` | Rayleigh mean and variance |
| ✅ | `nctcdf` | Noncentraltcumulative distribution function |
| ✅ | `nctinv` | Noncentraltinverse cumulative distribution
      function |
| ✅ | `nctpdf` | Noncentraltprobability density function |
|   | `nctrnd` | Noncentraltrandom numbers |
| ✅ | `nctstat` | Noncentraltmean and variance |
| ✅ | `tcdf` | Student'stcumulative distribution function |
| ✅ | `tinv` | Student'stinverse cumulative distribution function |
| ✅ | `tpdf` | Student'stprobability density function |
|   | `trnd` | Student'strandom numbers |
| ✅ | `tstat` | Student'stmean and variance |
| ✅ | `ttest` | One-sample and paired-samplet-test |
| ✅ | `ttest2` | Two-samplet-test |
|   | `rand` | Uniformly distributed random numbers |
| ✅ | `unifcdf` | Continuous uniform cumulative distribution function |
| ✅ | `unifinv` | Continuous uniform inverse cumulative distribution function |
|   | `unifit` | Continuous uniform parameter estimates |
| ✅ | `unifpdf` | Continuous uniform probability density function |
|   | `unifrnd` | Continuous uniform random numbers |
| ✅ | `unifstat` | Continuous uniform mean and variance |
| ✅ | `wblcdf` | Weibull cumulative distribution function |
|   | `wblfit` | Weibull parameter estimates |
| ✅ | `wblinv` | Weibull inverse cumulative distribution function |
|   | `wbllike` | Weibull negative loglikelihood |
| ✅ | `wblpdf` | Weibull probability density function |
|   | `wblplot` | Weibull probability plot |
|   | `wblrnd` | Weibull random numbers |
| ✅ | `wblstat` | Weibull mean and variance |
|   | `cluster` | Construct clusters from Gaussian mixture distribution |
|   | `mahal` | Mahalanobis distance to Gaussian mixture component |
|   | `posterior` | Posterior probability of Gaussian mixture component |
|   | `copulacdf` | Copula cumulative distribution function |
|   | `copulafit` | Fit copula to data |
|   | `copulaparam` | Copula parameters as function of rank correlation |
|   | `copulapdf` | Copula probability density function |
|   | `copularnd` | Copula random numbers |
|   | `copulastat` | Copula rank correlation |
|   | `wishrnd` | Wishart random numbers |
|   | `iwishrnd` | Inverse Wishart random numbers |
|   | `mvncdf` | Multivariate normal cumulative distribution function |
|   | `mvnpdf` | Multivariate normal probability density function |
|   | `mvnrnd` | Multivariate normal random numbers |
|   | `mvtcdf` | Multivariatetcumulative distribution function |
|   | `mvtpdf` | Multivariatetprobability density function |
|   | `mvtrnd` | Multivariatetrandom numbers |
|   | `mnpdf` | Multinomial probability density function |
|   | `mnrnd` | Multinomial random numbers |
|   | `gmdistribution` | Create Gaussian mixture model |
|   | `MultinomialDistribution` | Multinomial probability distribution object |
|   | `probplot` | Probability plots |
|   | `cdfplot` | Empirical cumulative distribution function (cdf) plot |
|   | `fsurfht` | Interactive contour plot of function |
|   | `surfht` | Interactive contour plot |
|   | `haltonset` | Halton quasirandom point set |
|   | `HamiltonianSampler` | Hamiltonian Monte Carlo (HMC) sampler |
|   | `hmcSampler` | Hamiltonian Monte Carlo (HMC) sampler |
|   | `johnsrnd` | Johnson system random numbers |
|   | `mhsample` | Generate Markov chain sample using Metropolis–Hastings sampler |
|   | `qrandstream` | Quasirandom number stream |
|   | `slicesample` | Slice sampler |
|   | `sobolset` | Sobol quasirandom point set |
|   | `bootci` | Bootstrap confidence interval |
|   | `bootstrp` | Bootstrap sampling |
|   | `crossval` | Estimate loss using cross-validation |
|   | `datasample` | Randomly sample from data, with or without replacement |
|   | `jackknife` | Jackknife sampling |
|   | `randsample` | Random sample |
|   | `adtest` | Anderson-Darling test |
|   | `dwtest` | Durbin-Watson test with residual inputs |
|   | `fishertest` | Fisher’s exact test |
|   | `jbtest` | Jarque-Bera test |
|   | `knntest` | Two-sample multivariate hypothesis test usingk-nearest neighbors
      (KNN)(Since R2025a) |
|   | `kstest` | One-sample Kolmogorov-Smirnov test |
|   | `kstest2` | Two-sample Kolmogorov-Smirnov test |
|   | `lillietest` | Lilliefors test |
|   | `mmdtest` | Two-sample multivariate hypothesis test using maximum mean discrepancy
      (MMD)(Since R2024b) |
|   | `runstest` | Run test for randomness |
|   | `friedman` | Friedman’s test |
|   | `kruskalwallis` | Kruskal-Wallis test |
|   | `multcompare` | Multiple comparison test |
| ✅ | `ranksum` | Wilcoxon rank sum test |
|   | `sampsizepwr` | Sample size and power of test |
| ✅ | `signrank` | Wilcoxon signed rank test |
|   | `signtest` | Sign test |
|   | `ztest` | z-test |
|   | `ansaribradley` | Ansari-Bradley test |
|   | `barttest` | Bartlett’s test |
|   | `vartest` | Chi-square variance test |
|   | `vartest2` | Two-sampleF-test for equal variances |
|   | `vartestn` | Multiple-sample tests for equal variances |
|   | `gardnerAltmanPlot` | Gardner-Altman plot for two-sample effect size(Since R2022a) |
|   | `meanEffectSize` | One-sample or two-sample effect size computations(Since R2022a) |
|   | `detectdrift` | Detect drifts between baseline and target data using permutation
      testing(Since R2022a) |
|   | `DriftDiagnostics` | Diagnostics information for batch drift detection(Since R2022a) |
|   | `histcounts` | Compute histogram bin counts for specified variables in baseline and target data for
      drift detection(Since R2022a) |
|   | `plotDriftStatus` | Plotp-values and confidence intervals for variables tested for
      data drift(Since R2022a) |
|   | `plotEmpiricalCDF` | Plot empirical cumulative distribution function (ecdf) of a variable specified for
      data drift detection(Since R2022a) |
|   | `plotHistogram` | Plot histogram of a variable specified for data drift detection(Since R2022a) |
|   | `plotPermutationResults` | Plot histogram of permutation results for a variable specified for data drift
      detection(Since R2022a) |
|   | `summary` | Summary table forDriftDiagnosticsobject(Since R2022a) |
|   | `fractionalFactorialDOE` | Fractional factorial design of experiments (DOE)(Since R2026a) |
|   | `fullFactorialDOE` | Full factorial design of experiments (DOE)(Since R2024b) |
|   | `mixtureDOE` | Design of experiments (DOE) for mixture experiments(Since R2024b) |
|   | `optimalDOE` | D-optimal design of experiments (DOE)(Since R2024b) |
|   | `taguchiDOE` | Taguchi design of experiments (DOE)(Since R2025a) |
|   | `fitlm` | Fit linear regression model using design runs(Since R2024b) |
|   | `ff2n` | Two-level full factorial design |
|   | `fullfact` | Full factorial design |
|   | `fracfact` | Fractional factorial design |
|   | `fracfactgen` | Two-level fractional factorial design generators |
|   | `fractionalFactorialTypes` | Fractional factorial design types(Since R2026a) |
|   | `bbdesign` | Box-Behnken design |
|   | `ccdesign` | Central composite design |
|   | `addruns` | Add runs to D-optimal design(Since R2024b) |
|   | `candexch` | D-optimal design from candidate set using row exchanges |
|   | `candgen` | Candidate set generation |
|   | `cordexch` | Coordinate-exchange D-optimal design |
|   | `daugment` | D-optimal augmentation |
|   | `dcovary` | D-optimal design with fixed covariates |
|   | `rowexch` | Row exchange D-optimal design |
|   | `lhsdesign` | Latin hypercube sample |
|   | `lhsnorm` | Latin hypercube sample from multivariate normal distribution |
|   | `plotsnr` | Plot signal-to-noise ratio (SNR) for Taguchi design factors(Since R2025a) |
|   | `snr` | Taguchi DOE signal-to-noise ratio (SNR)(Since R2025a) |
|   | `taguchiTypes` | Valid Taguchi design types(Since R2025a) |
|   | `interactionplot` | Interaction plot for grouped data |
|   | `maineffectsplot` | Main effects plot for grouped data |
|   | `multivarichart` | Multivari chart for grouped data |
|   | `plotSurvival` | Plot survival function of Cox proportional hazards model |
|   | `accelfactor` | Acceleration factors of accelerated life model(Since R2026a) |
|   | `coefci` | Confidence intervals for accelerated life model coefficients(Since R2026a) |
|   | `distfcn` | Distribution functions of accelerated life model(Since R2026a) |
|   | `distplot` | Plot distribution functions of accelerated life model(Since R2026a) |
|   | `fitacclife` | Fit accelerated life model(Since R2026a) |
|   | `meanfailplot` | Plot failure times of accelerated life model(Since R2026a) |
|   | `meanfailtime` | Mean failure times and life distribution coefficients of accelerated life
      model(Since R2026a) |
|   | `coxphfit` | Cox proportional hazards regression |
|   | `discardResiduals` | Remove residuals from Cox model(Since R2022b) |
|   | `fitcox` | Create Cox proportional hazards model |
|   | `hazardratio` | Estimate Cox model hazard relative to baseline |
|   | `linhyptest` | Linear hypothesis tests on Cox model coefficients |
|   | `survival` | Calculate survival of Cox proportional hazards model |
|   | `AcceleratedLifeModel` | Accelerated life model for lifetime analysis(Since R2026a) |
|   | `CoxModel` | Cox proportional hazards model |
|   | `capability` | Process capability indices |
|   | `capaplot` | Process capability plot |
|   | `controlchart` | Control charts |
|   | `controlrules` | Western
            Electricand Nelson control rules |
|   | `gagerr` | Gage repeatability and reproducibility study |
|   | `anova` | Analysis of variance (ANOVA) results(Since R2022b) |
|   | `boxchart` | Box chart (box plot) for analysis of variance (ANOVA)(Since R2022b) |
|   | `groupmeans` | Mean response estimates for analysis of variance (ANOVA)(Since R2022b) |
|   | `plotComparisons` | Interactive plot of multiple comparisons of means for analysis of variance (ANOVA)(Since R2022b) |
|   | `stats` | Analysis of variance (ANOVA) table(Since R2022b) |
|   | `varianceComponent` | Variance component estimates for analysis of variance (ANOVA)(Since R2022b) |
|   | `anova1` | One-way analysis of variance |
|   | `anova2` | Two-way analysis of variance |
|   | `anovan` | N-way analysis of variance |
|   | `canoncorr` | Canonical correlation |
|   | `aoctool` | Interactive analysis of covariance |
|   | `fitrm` | Fit repeated measures model |
|   | `coeftest` | Linear hypothesis test on coefficients of repeated measures
model |
|   | `epsilon` | Epsilon adjustment for repeated measures anova |
|   | `manova` | Multivariate analysis of variance |
|   | `margmean` | Estimate marginal means |
|   | `mauchly` | Mauchly’s test for sphericity |
|   | `plotprofile` | Plot expected marginal means with optional grouping |
|   | `predict` | Compute predicted values given predictor values |
|   | `ranova` | Analysis of variance for within-subject effects in a repeated measures
            model |
|   | `canonvars` | Canonical variables(Since R2023b) |
|   | `manova1` | One-way multivariate analysis of variance (MANOVA) |
|   | `manovacluster` | Dendrogram of group mean clusters following MANOVA |
|   | `RepeatedMeasuresModel` | Repeated measures model object |
|   | `addTerms` | Add terms to linear regression model |
|   | `CensoredLinearModel` | Censored linear regression model(Since R2025a) |
|   | `coefCI` | Confidence intervals of coefficient estimates of linear regression
            model |
|   | `coefTest` | Linear hypothesis test on linear regression model coefficients |
|   | `compact` | Compact linear regression model |
|   | `CompactCensoredLinearModel` | Compact censored linear regression model(Since R2025a) |
|   | `CompactLinearModel` | Compact linear regression model |
|   | `CompactRegressionQuantileLinear` | Compact quantile linear regression model(Since R2025a) |
|   | `feval` | Predict responses of linear regression model using one input for each
            predictor |
|   | `fitlmcens` | Fit censored linear regression model(Since R2025a) |
|   | `fitrlinear` | Fit linear regression model to high-dimensional data |
|   | `fitrqlinear` | Train quantile linear regression model(Since R2024b) |
|   | `invpred` | Inverse prediction |
|   | `kfoldfun` | Cross-validate function for quantile regression(Since R2025a) |
|   | `kfoldLoss` | Regression loss for cross-validated linear regression model |
|   | `kfoldPredict` | Predict responses for observations in cross-validated linear regression
            model |
|   | `lime` | Local interpretable model-agnostic explanations (LIME) |
|   | `LinearModel` | Linear regression model |
|   | `loss` | Regression loss for linear regression models |
|   | `matchResponse` | Predictor values at specified response value for linear regression
      model(Since R2026a) |
|   | `optimizeResponse` | Predictor and response values at response surface maximum or minimum of linear
      regression model(Since R2026a) |
|   | `partialDependence` | Compute partial dependence |
|   | `plotAdded` | Added variable plot of linear regression model |
|   | `plotAdjustedResponse` | Adjusted response plot of linear regression model |
|   | `plotDiagnostics` | Plot observation diagnostics of linear regression model |
|   | `plotEffects` | Plot main effects of predictors in linear regression model |
|   | `plotInteraction` | Plot interaction effects of two predictors in linear regression
            model |
|   | `plotPartialDependence` | Create partial dependence plot (PDP) and individual conditional expectation
            (ICE) plots |
|   | `plotResiduals` | Plot residuals of linear regression model |
|   | `plotSlice` | Plot of slices through fitted linear regression surface |
|   | `plsregress` | Partial least-squares (PLS) regression |
|   | `polyconf` | Polynomial confidence intervals |
|   | `polyfit` | Polynomial curve fitting |
|   | `polytool` | Interactive polynomial fitting |
|   | `regress` | Multiple linear regression |
|   | `RegressionLinear` | Linear regression model for high-dimensional data |
|   | `RegressionPartitionedLinear` | Cross-validated linear regression model for high-dimensional data |
|   | `RegressionPartitionedQuantileModel` | Cross-validated quantile model for regression(Since R2025a) |
|   | `RegressionQuantileLinear` | Quantile linear regression model(Since R2024b) |
|   | `regstats` | Regression diagnostics |
|   | `relieff` | Rank importance of predictors using ReliefF or RReliefF algorithm |
|   | `removeTerms` | Remove terms from linear regression model |
|   | `robustdemo` | Interactive robust regression |
|   | `robustfit` | Fit robust linear regression |
|   | `selectModels` | Select fitted regularized linear regression models |
|   | `shapley` | Shapley values |
|   | `step` | Improve linear regression model by adding or removing terms |
|   | `stepwise` | Interactive stepwise regression |
|   | `stepwisefit` | Fit linear regression model using stepwise regression |
|   | `stepwiselm` | Perform stepwise regression |
|   | `x2fx` | Convert predictor matrix to design matrix |
|   | `mvregress` | Multivariate linear regression |
|   | `mvregresslike` | Negative log-likelihood for multivariate regression |
|   | `lasso` | Lasso or elastic net regularization for linear models |
|   | `lassoPlot` | Trace plot of lasso fit |
|   | `ridge` | Ridge regression |
|   | `compare` | Compare linear mixed-effects models |
|   | `covarianceParameters` | Extract covariance parameters of linear mixed-effects
model |
|   | `designMatrix` | Fixed- and random-effects design matrices |
|   | `fitlme` | Fit linear mixed-effects model |
|   | `fitlmematrix` | Fit linear mixed-effects model |
|   | `fitted` | Fitted responses from a linear mixed-effects model |
|   | `fixedEffects` | Estimates of fixed effects and related statistics |
|   | `LinearMixedModel` | Linear mixed-effects model |
|   | `randomEffects` | Estimates of random effects and related statistics |
|   | `residuals` | Residuals of fitted linear mixed-effects model |
|   | `response` | Response vector of the linear mixed-effects model |
|   | `ClassificationECOC` | Multiclass model for support vector machines (SVMs) and other
      classifiers |
|   | `ClassificationKernel` | Gaussian kernel classification model using random feature expansion |
|   | `ClassificationLinear` | Linear model for binary classification of high-dimensional data |
|   | `ClassificationPartitionedLinear` | Cross-validated linear model for binary classification of high-dimensional
            data |
|   | `ClassificationPartitionedLinearECOC` | Cross-validated linear error-correcting output codes model for multiclass
            classification of high-dimensional data |
|   | `CompactGeneralizedLinearModel` | Compact generalized linear regression model class |
|   | `devianceTest` | Analysis of deviance for generalized linear regression model |
|   | `fitcecoc` | Fit multiclass models for support vector machines or other
classifiers |
|   | `fitckernel` | Fit binary Gaussian kernel classifier using random feature
            expansion |
|   | `fitclinear` | Fit binary linear classifier to high-dimensional data |
|   | `fitglm` | Create generalized linear regression model |
|   | `fitmnr` | Fit multinomial regression model(Since R2023a) |
|   | `GeneralizedLinearModel` | Generalized linear regression model class |
|   | `glmfit` | Fit generalized linear regression model |
|   | `glmval` | Generalized linear model values |
|   | `MultinomialRegression` | Multinomial regression model(Since R2023a) |
|   | `stepwiseglm` | Create generalized linear regression model by stepwise
regression |
|   | `templateLinear` | Linear learner template |
|   | `testDeviance` | Deviance test for multinomial regression model(Since R2023a) |
|   | `lassoglm` | Lasso or elastic net regularization for generalized linear models |
|   | `fitglme` | Fit generalized linear mixed-effects model |
|   | `GeneralizedLinearMixedModel` | Generalized linear mixed-effects model class |
|   | `refit` | Refit generalized linear mixed-effects model |
|   | `fitnlm` | Fit nonlinear regression model |
|   | `plotProfileLikelihood` | Plot profile loglikelihood for nonlinear regression model(Since R2025a) |
|   | `profileLikelihood` | Profile loglikelihood for nonlinear regression model(Since R2025a) |
|   | `nlinfit` | Nonlinear regression |
|   | `nlparci` | Nonlinear regression parameter confidence intervals |
|   | `nlpredci` | Nonlinear regression prediction confidence intervals |
|   | `nlmefit` | Fit nonlinear mixed-effects estimation |
|   | `nlmefitsa` | Fit nonlinear mixed-effects model with stochastic EM algorithm |
|   | `hougen` | Hougen–Watson model |
|   | `statget` | Access field values in statistics options structure |
|   | `statset` | Create statistics options structure |
|   | `NonLinearModel` | Nonlinear regression model |
|   | `fitrsvm` | Fit a support vector machine regression model |
|   | `fitrkernel` | Fit Gaussian kernel regression model using random feature expansion |
|   | `permutationImportance` | Predictor importance by permutation(Since R2024a) |
|   | `fitrchains` | Multiresponse regression with regression chains(Since R2024b) |
|   | `CompactRegressionSVM` | Compact support vector machine regression model |
|   | `RegressionSVM` | Support vector machine regression model |
|   | `RegressionKernel` | Gaussian kernel regression model using random feature expansion |
|   | `RegressionPartitionedKernel` | Cross-validated kernel model for regression |
|   | `CompactRegressionChainEnsemble` | Compact multiresponse regression model(Since R2024b) |
|   | `RegressionChainEnsemble` | Multiresponse regression model(Since R2024b) |
|   | `fitrgp` | Fit a Gaussian process regression (GPR) model |
|   | `templateGP` | Gaussian process template(Since R2023b) |
|   | `postFitStatistics` | Compute post-fit statistics for the exact Gaussian process
regression model |
|   | `resubLoss` | Resubstitution regression loss |
|   | `resubPredict` | Predict responses for training data using trained regression model |
|   | `CompactRegressionGP` | Compact Gaussian process regression model class |
|   | `RegressionGP` | Gaussian process regression model |
|   | `RegressionPartitionedGP` | Cross-validated Gaussian process regression (GPR) model(Since R2022b) |
|   | `fitrtree` | Fit binary decision tree for regression |
|   | `prune` | Produce sequence of regression subtrees by pruning regression tree |
|   | `nodeVariableRange` | Retrieve variable range of decision tree node |
|   | `predictorImportance` | Estimates of predictor importance for regression tree |
|   | `surrogateAssociation` | Mean predictive measure of association for surrogate splits in regression
            tree |
|   | `view` | View regression tree |
|   | `cvloss` | Regression error by cross-validation for regression tree model |
|   | `CompactRegressionTree` | Compact regression tree |
|   | `RegressionPartitionedModel` | Cross-validated regression model |
|   | `RegressionTree` | Regression tree |
|   | `fitensemble` | Fit ensemble of learners for classification and regression |
|   | `fitrensemble` | Fit ensemble of learners for regression |
|   | `regularize` | Find optimal weights for learners in regression ensemble |
|   | `removeLearners` | Remove members of compact regression ensemble |
|   | `resume` | Resume training of regression ensemble model |
|   | `shrink` | Prune regression ensemble |
|   | `cvshrink` | Cross-validate pruning and regularization of regression ensemble |
|   | `oobPredict` | Ensemble predictions for out-of-bag observations |
|   | `oobQuantilePredict` | Quantile predictions for out-of-bag observations from
bag of regression trees |
|   | `quantilePredict` | Predict response quantile using bag of regression trees |
|   | `TreeBagger` | Ensemble of bagged decision trees |
|   | `importModelFromXGBoost` | Import pretrained XGBoost model into MATLAB(Since R2026a) |
|   | `CompactRegressionEnsemble` | Compact regression ensemble |
|   | `RegressionEnsemble` | Ensemble regression |
|   | `RegressionPartitionedEnsemble` | Cross-validated regression ensemble |
|   | `CompactTreeBagger` | Compact ensemble of bagged decision trees |
|   | `RegressionBaggedEnsemble` | Regression ensemble grown by resampling |
|   | `CompactRegressionXGBoost` | Compact regression XGBoost model(Since R2026a) |
|   | `fitrgam` | Fit generalized additive model (GAM) for regression |
|   | `templateGAM` | Generalized additive model (GAM) learner template(Since R2023b) |
|   | `addInteractions` | Add interaction terms to univariate generalized additive model (GAM) |
|   | `plotLocalEffects` | Plot local effects of terms in generalized additive model (GAM) |
|   | `CompactRegressionGAM` | Compact generalized additive model (GAM) for regression |
|   | `RegressionGAM` | Generalized additive model (GAM) for regression |
|   | `RegressionPartitionedGAM` | Cross-validated generalized additive model (GAM) for regression |
|   | `fitrnet` | Train neural network regression model |
|   | `fitrqnet` | Train regression quantile neural network(Since R2024b) |
|   | `CompactRegressionNeuralNetwork` | Compact neural network model for regression |
|   | `CompactRegressionQuantileNeuralNetwork` | Compact quantile neural network model for regression(Since R2025a) |
|   | `RegressionNeuralNetwork` | Neural network model for regression |
|   | `RegressionPartitionedNeuralNetwork` | Cross-validated regression neural network model(Since R2023b) |
|   | `RegressionPartitionedQuantileNeuralNetwork` | Cross-validated quantile neural network for regression(Since R2026a) |
|   | `RegressionQuantileNeuralNetwork` | Quantile neural network model for regression(Since R2024b) |
|   | `fit` | Fit incremental normalizer model to streaming data(Since R2026a) |
|   | `incrementalNormalizer` | Instantiate incremental data normalizer(Since R2026a) |
|   | `reset` | Reset incremental normalizer model(Since R2026a) |
|   | `transform` | Normalize streaming data(Since R2026a) |
|   | `incrementalDriftAwareLearner` | Construct drift-aware model for incremental learning(Since R2022b) |
|   | `perObservationLoss` | Per observation regression or classification error of incremental drift-aware
      learner(Since R2022b) |
|   | `updateMetrics` | Update performance metrics in incremental drift-aware learning model given new
      data(Since R2022b) |
|   | `updateMetricsAndFit` | Update performance metrics in incremental drift-aware learning model given new data
      and train model(Since R2022b) |
|   | `incrementalLearner` | Convert kernel regression model to incremental learner(Since R2022a) |
|   | `incrementalRegressionKernel` | Kernel regression model for incremental learning(Since R2022a) |
|   | `incrementalRegressionLinear` | Linear regression model for incremental learning |
|   | `incrementalConceptDriftDetector` | Instantiate incremental concept drift detector(Since R2022a) |
|   | `ExponentiallyWeightedNormalizer` | Exponentially weighted normalizer(Since R2026a) |
|   | `ZScoreNormalizer` | Simple-weighted normalizer(Since R2026a) |
|   | `DriftDetectionMethod` | Incremental drift detector that utilizes Drift Detection Method (DDM)(Since R2022a) |
|   | `HoeffdingDriftDetectionMethod` | Incremental concept drift detector that utilizes Hoeffding's Bounds Drift Detection
      Method (HDDM)(Since R2022a) |
|   | `CompactDirectForecaster` | Compact direct forecasting model(Since R2023b) |
|   | `cvpredict` | Predict response using cross-validated direct forecasting model(Since R2023b) |
|   | `DirectForecaster` | Fit direct forecasting model(Since R2023b) |
|   | `forecast` | Forecast response at time steps beyond available data(Since R2023b) |
|   | `PartitionedDirectForecaster` | Cross-validated direct forecasting model(Since R2023b) |
|   | `preparedPredictors` | Obtain prepared data used for training or testing in direct forecasting(Since R2023b) |
|   | `tspartition` | Partition time series data for cross-validation(Since R2022b) |
|   | `plotDependence` | Plot dependence of Shapley values on predictor values(Since R2024b) |
|   | `swarmchart` | Visualize Shapley values using swarm scatter charts(Since R2024a) |
|   | `binningTabularSynthesizer` | Binning-based synthesizer for tabular data synthesis(Since R2024b) |
|   | `smoteTabularSynthesizer` | SMOTE-based synthesizer for tabular data synthesis(Since R2026a) |
|   | `synthesizeTabularData` | Synthesize tabular data(Since R2024b) |
|   | `fsrftest` | Univariate feature ranking for regression usingF-tests |
|   | `fsrmrmr` | Rank features for regression using minimum redundancy maximum relevance (MRMR)
      algorithm(Since R2022a) |
|   | `fsrnca` | Feature selection using neighborhood component analysis for regression |
|   | `oobPermutedPredictorImportance` | Out-of-bag predictor importance estimates for random forest of regression trees
            by permutation |
|   | `selectFeatures` | Select important features for NCA classification or regression(Since R2023b) |
|   | `sequentialfs` | Sequential feature selection using custom criterion |
|   | `describe` | Describe generated features |
|   | `genrfeatures` | Perform automated feature engineering for regression(Since R2021b) |
|   | `fitrauto` | Automatically select regression model with optimized hyperparameters |
|   | `bayesopt` | Select optimal machine learning hyperparameters using Bayesian optimization |
|   | `hyperparameters` | Variable descriptions for optimizing a fit function |
|   | `learnersize` | Compact size of trained machine learning model object(Since R2024b) |
|   | `optimizableVariable` | Variable description forbayesoptor other
            optimizers |
|   | `cvpartition` | Partition data for cross-validation |
|   | `repartition` | Repartition data for cross-validation |
|   | `test` | Test indices for cross-validation |
|   | `training` | Training indices for cross-validation |
|   | `report` | Generate slice metrics report(Since R2026a) |
|   | `sliceMetrics` | Metrics on data slices for machine learning model(Since R2026a) |
|   | `FeatureSelectionNCARegression` | Feature selection for regression using neighborhood component analysis
                        (NCA) |
|   | `FeatureTransformer` | Generated feature transformations |
|   | `AggregateBayesianOptimization` | Aggregate Bayesian optimization results(Since R2024b) |
|   | `BayesianOptimization` | Bayesian optimization results |
|   | `HyperparameterOptimizationOptions` | Hyperparameter optimization options(Since R2024b) |
|   | `SupervisedLearningBayesianOptimization` | Results of Bayesian optimization for supervised learning model(Since R2026a) |
|   | `fitctree` | Fit binary decision tree for multiclass classification |
|   | `kfoldEdge` | Classification edge for cross-validated classification model |
|   | `kfoldMargin` | Classification margins for cross-validated classification model |
|   | `compareHoldout` | Compare accuracies of two classification models using new data |
|   | `edge` | Classification edge for classification tree model |
|   | `margin` | Classification margins for classification tree model |
|   | `resubEdge` | Resubstitution classification edge for classification tree model |
|   | `resubMargin` | Resubstitution classification margins for classification tree model |
|   | `testckfold` | Compare accuracies of two classification models by repeated
            cross-validation |
|   | `ClassificationPartitionedModel` | Cross-validated classification model |
|   | `ClassificationTree` | Binary decision tree for multiclass classification |
|   | `CompactClassificationTree` | Compact classification tree |
|   | `fitcdiscr` | Fit discriminant analysis classifier |
|   | `makecdiscr` | Construct discriminant analysis classifier from parameters |
|   | `logp` | Log unconditional probability density for discriminant analysis
      classifier |
|   | `nLinearCoeffs` | Number of nonzero linear coefficients in discriminant analysis
      classifier |
|   | `classify` | Classify observations using discriminant analysis |
|   | `ClassificationDiscriminant` | Discriminant analysis classification |
|   | `CompactClassificationDiscriminant` | Compact discriminant analysis classification |
|   | `fitcnb` | Train multiclass naive Bayes model |
|   | `ClassificationNaiveBayes` | Naive Bayes classification for multiclass classification |
|   | `CompactClassificationNaiveBayes` | Compact naive Bayes classifier for multiclass classification |
|   | `fitcknn` | Fitk-nearest neighbor classifier |
|   | `createns` | Create nearest neighbor searcher object |
|   | `ExhaustiveSearcher` | Create exhaustive nearest neighbor searcher |
|   | `hnswSearcher` | Hierarchical Navigable Small Worlds (HNSW) approximate nearest neighbor
      search(Since R2024a) |
|   | `KDTreeSearcher` | CreateKd-tree nearest neighbor searcher |
| ✅ | `pdist` | Pairwise distance between pairs of observations |
|   | `pdist2` | Pairwise distance between two sets of observations |
|   | `ClassificationKNN` | k-nearest neighbor classification |
|   | `fitcsvm` | Train support vector machine (SVM) classifier for one-class and binary
            classification |
|   | `templateSVM` | Support vector machine template |
|   | `discardSupportVectors` | Discard support vectors for linear support vector machine (SVM)
            classifier |
|   | `fitPosterior` | Fit posterior probabilities for compact support vector machine (SVM)
            classifier |
|   | `fitSVMPosterior` | Fit posterior probabilities |
|   | `templateKernel` | Kernel learner template |
|   | `templateECOC` | Error-correcting output codes learner template |
|   | `ClassificationSVM` | Support vector machine (SVM) for one-class and binary classification |
|   | `CompactClassificationSVM` | Compact support vector machine (SVM) for one-class and binary classification |
|   | `ClassificationPartitionedKernel` | Cross-validated, binary kernel classification model |
|   | `ClassificationPartitionedECOC` | Cross-validated multiclass ECOC model for support vector machines (SVMs) and
            other classifiers |
|   | `ClassificationPartitionedKernelECOC` | Cross-validated kernel error-correcting output codes (ECOC) model for multiclass
      classification |
|   | `CompactClassificationECOC` | Compact multiclass model for support vector machines (SVMs) and other
      classifiers |
|   | `templateDiscriminant` | Discriminant analysis classifier template |
|   | `templateEnsemble` | Ensemble learning template |
|   | `templateKNN` | k-nearest neighbor classifier template |
|   | `templateNaiveBayes` | Naive Bayes classifier template |
|   | `templateTree` | Create decision tree template |
|   | `fitcensemble` | Fit ensemble of learners for classification |
|   | `ClassificationEnsemble` | Ensemble classifier |
|   | `ClassificationPartitionedEnsemble` | Cross-validated classification ensemble |
|   | `CompactClassificationEnsemble` | Compact classification ensemble |
|   | `ClassificationBaggedEnsemble` | Classification ensemble grown by resampling |
|   | `CompactClassificationXGBoost` | Compact classification XGBoost model(Since R2026a) |
|   | `fitcgam` | Fit generalized additive model (GAM) for binary classification |
|   | `ClassificationGAM` | Generalized additive model (GAM) for binary classification |
|   | `ClassificationPartitionedGAM` | Cross-validated generalized additive model (GAM) for classification |
|   | `CompactClassificationGAM` | Compact generalized additive model (GAM) for binary classification |
|   | `fitcnet` | Train neural network classification model |
|   | `ClassificationNeuralNetwork` | Neural network model for classification |
|   | `ClassificationPartitionedNeuralNetwork` | Cross-validated classification neural network(Since R2026a) |
|   | `CompactClassificationNeuralNetwork` | Compact neural network model for classification |
|   | `incrementalClassificationKernel` | Binary classification kernel model for incremental learning(Since R2022a) |
|   | `incrementalClassificationLinear` | Binary classification linear model for incremental learning |
|   | `incrementalClassificationECOC` | Multiclass classification model using binary learners for incremental
      learning(Since R2022a) |
|   | `incrementalClassificationNaiveBayes` | Naive Bayes classification model for incremental learning |
|   | `ClassWeightedNormalizer` | Class-weighted normalizer(Since R2026a) |
|   | `fitsemigraph` | Label data using semi-supervised graph-based method |
|   | `fitsemiself` | Label data using semi-supervised self-training method |
|   | `SemiSupervisedGraphModel` | Semi-supervised graph-based model for classification |
|   | `SemiSupervisedSelfTrainingModel` | Semi-supervised self-trained model for classification |
|   | `disparateImpactRemover` | Remove disparate impact of sensitive attribute(Since R2022b) |
|   | `fairnessMetrics` | Bias and group metrics for a data set or classification model(Since R2022b) |
|   | `fairnessThresholder` | Optimize classification threshold to include fairness(Since R2023a) |
|   | `fairnessWeights` | Reweight observations for fairness in binary classification(Since R2022b) |
|   | `counterfactuals` | Generate counterfactual examples for observation(Since R2026a) |
|   | `fscchi2` | Univariate feature ranking for classification using chi-square
      tests |
|   | `fscmrmr` | Rank features for classification using minimum redundancy maximum relevance
      (MRMR) algorithm |
|   | `fscnca` | Feature selection using neighborhood component analysis for classification |
|   | `gencfeatures` | Perform automated feature engineering for classification |
|   | `fitcauto` | Automatically select classification model with optimized
      hyperparameters |
|   | `addMetrics` | Compute additional classification performance metrics(Since R2022a) |
|   | `auc` | Area under ROC curve or precision-recall curve(Since R2024b) |
|   | `average` | Compute performance metrics for average receiver operating characteristic (ROC)
      curve in multiclass problem(Since R2022a) |
|   | `confusionchart` | Create confusion matrix chart for classification problem |
|   | `confusionmat` | Compute confusion matrix for classification problem |
|   | `modelOperatingPoint` | Operating point ofrocmetricsobject(Since R2024b) |
|   | `perfcurve` | Receiver operating characteristic (ROC) curve or other
performance curve for classifier output |
|   | `rocmetrics` | Receiver operating characteristic (ROC) curve and performance metrics for binary and
      multiclass classifiers(Since R2022a) |
|   | `testcholdout` | Compare predictive accuracies of two classification models |
|   | `FeatureSelectionNCAClassification` | Feature selection for classification using neighborhood component analysis
            (NCA) |
|   | `clusterdata` | Construct agglomerative clusters from data |
|   | `cophenet` | Cophenetic correlation coefficient |
|   | `inconsistent` | Inconsistency coefficient |
| ✅ | `linkage` | Agglomerative hierarchical cluster tree |
| ✅ | `squareform` | Format distance matrix |
| ✅ | `kmeans` | k-means clustering |
|   | `kmedoids` | k-medoids clustering |
|   | `assignClusters` | Assign observations to existing clusters(Since R2025a) |
|   | `incrementalKMeans` | Incrementalk-means clustering(Since R2025a) |
|   | `incrementalDynamicKMeans` | Incremental dynamick-means clustering(Since R2025a) |
|   | `dbscan` | Density-based spatial clustering of applications with noise (DBSCAN) |
|   | `spectralcluster` | Spectral clustering |
|   | `fitgmdist` | Fit Gaussian mixture model to data |
|   | `knnsearch` | Findk-nearest neighbors using searcher object |
|   | `rangesearch` | Find all neighbors within specified distance using searcher object |
|   | `hmmdecode` | Hidden Markov model posterior state probabilities |
|   | `hmmestimate` | Hidden Markov model parameter estimates from emissions
and states |
|   | `hmmgenerate` | Hidden Markov model states and emissions |
|   | `hmmtrain` | Hidden Markov model parameter estimates from emissions |
|   | `hmmviterbi` | Hidden Markov model most probable state path |
|   | `iforest` | Fit isolation forest for anomaly detection(Since R2021b) |
|   | `isanomaly` | Find anomalies in data using isolation forest(Since R2021b) |
|   | `rrcforest` | Fit robust random cut forest model for anomaly detection(Since R2023a) |
|   | `lof` | Create local outlier factor model for anomaly detection(Since R2022b) |
|   | `ocsvm` | Fit one-class support vector machine (SVM) model for anomaly detection(Since R2022b) |
|   | `incrementalRobustRandomCutForest` | Robust random cut forest model for incremental anomaly detection(Since R2023b) |
|   | `incrementalOneClassSVM` | One-class support vector machine (SVM) model for incremental anomaly
      detection(Since R2023b) |
|   | `IsolationForest` | Isolation forest for anomaly detection(Since R2021b) |
|   | `LocalOutlierFactor` | Local outlier factor model for anomaly detection(Since R2022b) |
|   | `OneClassSVM` | One-class support vector machine (SVM) for anomaly detection(Since R2022b) |
|   | `RobustRandomCutForest` | Robust random cut forest model for anomaly detection(Since R2023a) |
|   | `dendrogram` | Dendrogram plot |
|   | `optimalleaforder` | Optimal leaf ordering for hierarchical clustering |
|   | `silhouette` | Silhouette plot |
|   | `addK` | Evaluate additional numbers of clusters |
|   | `evalclusters` | Evaluate clustering solutions |
|   | `increaseB` | Increase reference data sets |
|   | `CalinskiHarabaszEvaluation` | Calinski-Harabasz criterion clustering evaluation object |
|   | `DaviesBouldinEvaluation` | Davies-Bouldin criterion clustering evaluation object |
|   | `GapEvaluation` | Gap criterion clustering evaluation object |
|   | `SilhouetteEvaluation` | Silhouette criterion clustering evaluation object |
|   | `fsulaplacian` | Rank features for unsupervised learning using Laplacian scores |
|   | `rica` | Feature extraction by using reconstruction ICA |
|   | `sparsefilt` | Feature extraction by using sparse filtering |
|   | `tsne` | t-Distributed Stochastic Neighbor Embedding |
|   | `umap` | Uniform Manifold Approximation and Projection (UMAP) for dimension
      reduction(Since R2026a) |
|   | `pca` | Principal component analysis of raw data |
|   | `pcacov` | Principal component analysis on covariance matrix |
|   | `pcares` | Residuals from principal component analysis |
|   | `ppca` | Probabilistic principal component analysis |
|   | `incrementalPCA` | Incremental principal component analysis(Since R2024a) |
|   | `factoran` | Factor analysis |
|   | `rotatefactors` | Rotate factor loadings |
|   | `nnmf` | Nonnegative matrix factorization |
|   | `cmdscale` | Classical multidimensional scaling |
|   | `mdscale` | Nonclassical multidimensional scaling |
|   | `procrustes` | Procrustes analysis |
|   | `ReconstructionICA` | Feature extraction by reconstruction ICA |
|   | `SparseFiltering` | Feature extraction by sparse filtering |
|   | `LearningPipeline` | Machine learning pipeline(Since R2026a) |
|   | `equalWidthBinnerComponent` | Pipeline component for grouping data into equal-width bins(Since R2026a) |
|   | `frequencyEncoderComponent` | Pipeline component for frequency encoding categorical variables(Since R2026a) |
|   | `kmeansEncoderComponent` | Pipeline component for feature extraction usingk-means
      clustering(Since R2026a) |
|   | `normalizerComponent` | Pipeline component for normalizing data(Since R2026a) |
|   | `observationImputerComponent` | Pipeline component for imputing missing values(Since R2026a) |
|   | `observationRemoverComponent` | Pipeline component for removing observations(Since R2026a) |
|   | `oneHotEncoderComponent` | Pipeline component for encoding categorical data into one-hot vectors(Since R2026a) |
|   | `outlierImputerComponent` | Pipeline component for imputing outlier values(Since R2026a) |
|   | `outlierRemoverComponent` | Pipeline component for removing outlier values(Since R2026a) |
|   | `pcaComponent` | Pipeline component for principal component analysis (PCA)(Since R2026a) |
|   | `quantileBinnerComponent` | Pipeline component for binning data based on quantiles(Since R2026a) |
|   | `ricaComponent` | Pipeline component for feature extraction using reconstruction independent component
      analysis (RICA)(Since R2026a) |
|   | `sparseFilterComponent` | Pipeline component for feature extraction using sparse filtering(Since R2026a) |
|   | `featureSelectionClassificationANOVAComponent` | Pipeline component for performing feature selection using ANOVA
      algorithm(Since R2026a) |
|   | `featureSelectionClassificationChi2Component` | Pipeline component for performing feature selection using chi-square
      tests(Since R2026a) |
|   | `featureSelectionClassificationKruskalWallisComponent` | Pipeline component for performing feature selection using Kruskal-Wallis
      test(Since R2026a) |
|   | `featureSelectionClassificationMRMRComponent` | Pipeline component for performing MRMR feature selection in classification
      workflow(Since R2026a) |
|   | `featureSelectionClassificationNCAComponent` | Pipeline component for performing feature selection using neighborhood component
      analysis (NCA) for classification(Since R2026a) |
|   | `featureSelectionClassificationReliefFComponent` | Pipeline component for performing feature selection using ReliefF
      algorithm(Since R2026a) |
|   | `featureSelectionRegressionFTestComponent` | Pipeline component for performing feature selection usingF-tests(Since R2026a) |
|   | `featureSelectionRegressionMRMRComponent` | Pipeline component for performing MRMR feature selection in regression
      workflow(Since R2026a) |
|   | `featureSelectionRegressionNCAComponent` | Pipeline component for performing feature selection using neighborhood component
      analysis (NCA) for regression(Since R2026a) |
|   | `featureSelectionRegressionReliefFComponent` | Pipeline component for performing feature selection using RReliefF
      algorithm(Since R2026a) |
|   | `variableSelectorComponent` | Pipeline component for manual variable selection(Since R2026a) |
|   | `classificationDiscriminantComponent` | Pipeline component for discriminant analysis classification(Since R2026a) |
|   | `classificationECOCComponent` | Pipeline component for multiclass classification using error-correcting output codes
      (ECOC) model(Since R2026a) |
|   | `classificationEnsembleComponent` | Pipeline component for ensemble classification(Since R2026a) |
|   | `classificationGAMComponent` | Pipeline component for binary classification using generalized additive model
      (GAM)(Since R2026a) |
|   | `classificationKernelComponent` | Pipeline component for classification using Gaussian kernel with random feature
      expansion(Since R2026a) |
|   | `classificationKNNComponent` | Pipeline component for classification usingk-nearest neighbor
      model(Since R2026a) |
|   | `classificationLinearComponent` | Pipeline component for binary classification of high-dimensional data using linear
      model(Since R2026a) |
|   | `classificationNaiveBayesComponent` | Pipeline component for multiclass classification using naive Bayes
      model(Since R2026a) |
|   | `classificationNeuralNetworkComponent` | Pipeline component for classification using neural network model(Since R2026a) |
|   | `classificationSVMComponent` | Pipeline component for one-class and binary classification using SVM
      classifier(Since R2026a) |
|   | `classificationTreeComponent` | Pipeline component for multiclass classification using binary decision
      trees(Since R2026a) |
|   | `regressionEnsembleComponent` | Pipeline component for regression using ensemble of learners(Since R2026a) |
|   | `regressionGAMComponent` | Pipeline component for generalized additive model (GAM) for regression(Since R2026a) |
|   | `regressionGPComponent` | Pipeline component for Gaussian process regression (GPR)(Since R2026a) |
|   | `regressionKernelComponent` | Pipeline component for regression using Gaussian kernel model(Since R2026a) |
|   | `regressionLinearComponent` | Pipeline component for regression of high-dimensional data using a linear
      model(Since R2026a) |
|   | `regressionNeuralNetworkComponent` | Pipeline component for regression using neural network model(Since R2026a) |
|   | `regressionSVMComponent` | Pipeline component for regression using a support vector machine (SVM)
      model(Since R2026a) |
|   | `regressionTreeComponent` | Pipeline component for regression using binary decision trees(Since R2026a) |
|   | `functionComponent` | Pipeline component for custom function(Since R2026a) |
|   | `add` | Add new component or pipeline to existing pipeline(Since R2026a) |
|   | `connect` | Create connections between pipeline components(Since R2026a) |
|   | `disconnect` | Remove connections between ports in pipeline(Since R2026a) |
|   | `expand` | Expand subpipelines in pipeline(Since R2026a) |
|   | `insert` | Insert component or pipeline into existing pipeline(Since R2026a) |
|   | `parallel` | Connect components or pipelines in parallel to create pipeline(Since R2026a) |
|   | `remove` | Remove existing components or pipelines from pipeline(Since R2026a) |
|   | `replace` | Replace existing pipeline component with new component(Since R2026a) |
|   | `series` | Connect components in series to create pipeline(Since R2026a) |
|   | `crossvalidate` | Cross-validate pipeline(Since R2026a) |
|   | `learn` | Initialize and evaluate pipeline or component(Since R2026a) |
|   | `run` | Execute pipeline or component for inference after learning(Since R2026a) |
|   | `package` | Create deployable archive or standalone application from pipeline(Since R2026a) |
|   | `generateLearnerDataTypeFcn` | Generate function that defines data types for fixed-point code
      generation |
|   | `loadLearnerForCoder` | Reconstruct model object from saved model for code generation |
|   | `saveLearnerForCoder` | Save model object in file for code generation |
|   | `generateCode` | Generate C/C++ code using coder configurer |
|   | `generateFiles` | GenerateMATLABfiles for code generation using coder configurer |
|   | `learnerCoderConfigurer` | Create coder configurer of machine learning model |
|   | `update` | Update model parameters for code generation |
|   | `validatedUpdateInputs` | Validate and extract machine learning model parameters to update |
|   | `ClassificationECOCCoderConfigurer` | Coder configurer for multiclass model using binary learners |
|   | `ClassificationLinearCoderConfigurer` | Coder configurer for linear binary classification of high-dimensional
      data |
|   | `ClassificationSVMCoderConfigurer` | Coder configurer for support vector machine (SVM) for one-class and binary
      classification |
|   | `ClassificationTreeCoderConfigurer` | Coder configurer of binary decision tree model for multiclass
      classification |
|   | `RegressionLinearCoderConfigurer` | Coder configurer for linear regression model with high-dimensional data |
|   | `RegressionSVMCoderConfigurer` | Coder configurer for support vector machine (SVM) regression model |
|   | `RegressionTreeCoderConfigurer` | Coder configurer of binary decision tree model for regression |

## ✅ Custom TypeScript Implementations

| Implemented | Function | Description |
| :---: | :--- | :--- |
| ✅ | `nanmax` | Custom TypeScript port |
| ✅ | `nanmean` | Custom TypeScript port |
| ✅ | `nanmedian` | Custom TypeScript port |
| ✅ | `nanmin` | Custom TypeScript port |
| ✅ | `nanstd` | Custom TypeScript port |
| ✅ | `nansum` | Custom TypeScript port |
| ✅ | `nanvar` | Custom TypeScript port |
