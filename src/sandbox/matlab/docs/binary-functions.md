# Binary (compiled built-in) MATLAB functions — implementation status

Derived by classifying documented MATLAB functions as **.m-sourced** (a readable .m exists under
toolbox/, per the former classification.tsv) vs **binary** (compiled built-in, exist()==5, no .m).
Only the binary built-ins are kept here, each cross-checked against the sandbox interpreter
registry. A checkmark means the function is implemented (callable in the sandbox).

**49 / 196 binary built-ins implemented.**

| Implemented | Function |
| :---: | :--- |
| ✅ | `add_block` |
| ✅ | `add_line` |
|    | `add_param` |
|    | `alphanumericBoundary` |
|    | `alphanumericsPattern` |
| ✅ | `amd` |
| ✅ | `animatedline` |
|    | `asFewOfPattern` |
|    | `asManyOfPattern` |
|    | `backgroundPool` |
| ✅ | `balance` |
|    | `batchStartupOptionUsed` |
|    | `bdroot` |
| ✅ | `beep` |
|    | `break` |
|    | `builtin` |
|    | `calllib` |
|    | `caseInsensitivePattern` |
|    | `caseSensitivePattern` |
|    | `characterListPattern` |
|    | `classdef` |
| ✅ | `clc` |
|    | `clibArray` |
|    | `clibConfiguration` |
|    | `clibConvertArray` |
|    | `clibIsNull` |
|    | `clibIsReadOnly` |
|    | `clibRelease` |
|    | `continue` |
|    | `convertContainedStringsToChars` |
| ✅ | `cputime` |
|    | `createSymbolicLink` |
|    | `dbclear` |
|    | `dbcont` |
|    | `dbdown` |
|    | `dbquit` |
|    | `dbstack` |
|    | `dbstatus` |
|    | `dbstep` |
|    | `dbstop` |
|    | `dbtype` |
|    | `dbup` |
| ✅ | `delaunay` |
|    | `delete_block` |
|    | `delete_line` |
|    | `delete_param` |
|    | `digitBoundary` |
|    | `digitsPattern` |
| ✅ | `dissect` |
| ✅ | `dmperm` |
|    | `dotnetenv` |
| ✅ | `drawnow` |
|    | `echo` |
| ✅ | `etree` |
|    | `evalin` |
|    | `exit` |
|    | `extrude` |
|    | `ferror` |
| ✅ | `figure` |
|    | `fill3` |
|    | `find_system` |
|    | `for` |
| ✅ | `format` |
|    | `frame2im` |
| ✅ | `func2str` |
|    | `function` |
| ✅ | `functions` |
| ✅ | `gca` |
|    | `gcb` |
|    | `gcbh` |
|    | `gcbo` |
| ✅ | `gcf` |
|    | `gco` |
|    | `getSimulinkBlockHandle` |
| ✅ | `get_param` |
|    | `getappdata` |
|    | `getmcruserdata` |
|    | `global` |
|    | `groot` |
|    | `handle` |
|    | `hggroup` |
|    | `hgtransform` |
|    | `home` |
|    | `im2frame` |
| ✅ | `image` |
|    | `inmem` |
|    | `innerNamespaces` |
| ✅ | `inputname` |
|    | `isSimulinkStarted` |
|    | `isSymbolicLink` |
|    | `isappdata` |
| ✅ | `isenum` |
|    | `isfilePathInclusive` |
| ✅ | `isgraphics` |
| ✅ | `isjava` |
| ✅ | `isstruct` |
|    | `isstudent` |
|    | `javaArray` |
|    | `javaMethod` |
|    | `javaMethodEDT` |
|    | `javaObject` |
|    | `javaObjectEDT` |
|    | `jenv` |
| ✅ | `jsondecode` |
|    | `lastwarn` |
|    | `letterBoundary` |
|    | `lettersPattern` |
|    | `libisloaded` |
|    | `light` |
|    | `lineBoundary` |
|    | `listLength` |
|    | `localfunctions` |
|    | `lookAheadBoundary` |
|    | `lookBehindBoundary` |
|    | `matlabdrive` |
|    | `matlabroot` |
|    | `memory` |
|    | `metaclass` |
|    | `metafunction` |
|    | `mex` |
|    | `mexext` |
|    | `mexhost` |
|    | `mfilename` |
|    | `mislocked` |
|    | `mlock` |
|    | `multicuboid` |
|    | `multicylinder` |
|    | `multisphere` |
|    | `munlock` |
|    | `namedargs2cell` |
|    | `namespaceClasses` |
|    | `namespaceFunctions` |
| ✅ | `narginchk` |
| ✅ | `nargoutchk` |
| ✅ | `native2unicode` |
|    | `open_system` |
|    | `openedFiles` |
|    | `optionalPattern` |
| ✅ | `ordqz` |
| ✅ | `ordschur` |
| ✅ | `pageeig` |
|    | `parfor` |
|    | `persistent` |
|    | `pi` |
| ✅ | `polaraxes` |
|    | `possessivePattern` |
|    | `pyenv` |
|    | `pyrun` |
|    | `pyrunfile` |
|    | `pystringarray` |
|    | `quit` |
| ✅ | `qz` |
| ✅ | `rectangle` |
|    | `recycle` |
| ✅ | `regexp` |
|    | `regexpPattern` |
| ✅ | `regexpi` |
| ✅ | `regexptranslate` |
|    | `rehashUnitDBs` |
|    | `restFunctionServices` |
| ✅ | `rethrow` |
|    | `return` |
|    | `rmappdata` |
| ✅ | `set_param` |
|    | `setappdata` |
|    | `setmcruserdata` |
|    | `sldebug` |
|    | `spmd` |
|    | `spmdBarrier` |
|    | `spmdIndex` |
|    | `spmdProbe` |
|    | `spmdReceive` |
|    | `spmdSendReceive` |
|    | `spmdSize` |
|    | `start_simulink` |
| ✅ | `str2func` |
| ✅ | `strings` |
|    | `superclasses` |
| ✅ | `symbfact` |
| ✅ | `symrcm` |
|    | `textBoundary` |
|    | `textscan` |
|    | `uicontextmenu` |
|    | `uicontrol` |
|    | `uimenu` |
| ✅ | `unicode2native` |
|    | `unloadlibrary` |
|    | `waitforbuttonpress` |
|    | `what` |
| ✅ | `which` |
|    | `while` |
|    | `whitespaceBoundary` |
|    | `whitespacePattern` |
| ✅ | `who` |
| ✅ | `whos` |
|    | `wildcardPattern` |

---

## P-code files (exist()==6, opaque bytecode, no readable .m) — 181

Listed for completeness (also source-less). 4 / 181 implemented.

| Implemented | Function |
| :---: | :--- |
|    | `CustomFloat` |
|    | `Instrument` |
|    | `Profiler` |
|    | `Simulation` |
|    | `addTerms` |
|    | `addterms` |
|    | `aeroDataPackage` |
|    | `allanvar` |
|    | `attachConfigSet` |
|    | `attachConfigSetCopy` |
|    | `audioDeviceWriter` |
|    | `batchsim` |
|    | `bdIsDirty` |
|    | `bdIsLibrary` |
|    | `bdIsLoaded` |
|    | `bdIsSubsystem` |
|    | `bdclose` |
|    | `bigimageshow` |
|    | `bubblelim` |
|    | `bubblesize` |
|    | `clonedetection` |
|    | `coder` |
|    | `coderTypeEditor` |
|    | `configureMIDI` |
|    | `convertToSLDataset` |
|    | `convertToSingle` |
|    | `copygraphics` |
|    | `createBusPort` |
|    | `createCustomDBFromExcel` |
|    | `createDeploymentScript` |
|    | `createInputDataset` |
|    | `currentProject` |
|    | `depview` |
|    | `designParamEQ` |
|    | `designShelvingEQ` |
|    | `designVarSlopeFilter` |
|    | `detachConfigSet` |
|    | `dicomConnection` |
|    | `disableimplicitsignalresolution` |
|    | `disconnectMIDI` |
|    | `dlinmod` |
|    | `ecef2eci` |
|    | `eci2ecef` |
|    | `exportNetworkToSimulink` |
|    | `exportapp` |
|    | `exportgraphics` |
|    | `ffsReader` |
|    | `find_mdlrefs` |
|    | `fma` |
| ✅ | `fontsize` |
|    | `frameedit` |
|    | `fxpOptimizationOptions` |
|    | `fxpopt` |
|    | `gcbp` |
|    | `gcs` |
|    | `generateAudioPlugin` |
|    | `generateSimulinkAudioPlugin` |
|    | `getActiveConfigSet` |
|    | `getCallbackAnnotation` |
|    | `getCoderExecutionProfile` |
|    | `getConfigSet` |
|    | `getConfigSets` |
|    | `getCurrentAnnotation` |
|    | `getMIDIConnections` |
|    | `getSimulationJobs` |
|    | `getfullname` |
|    | `gitclone` |
|    | `gitinit` |
|    | `gitrepo` |
|    | `hdladvisor` |
|    | `hdlcleanup` |
|    | `hdlcodeadvisor` |
|    | `hdllib` |
|    | `hdlsetuphlstoolpath` |
|    | `ijk2keplerian` |
|    | `importSecrets` |
|    | `instrumentCode` |
|    | `intelsoc` |
|    | `javaclasspath` |
|    | `keplerian2ijk` |
|    | `ldpcPCM` |
|    | `libinfo` |
|    | `linmod` |
|    | `linmod2` |
|    | `linmodv5` |
|    | `loadAudioPlugin` |
|    | `loadIntoMemory` |
|    | `loadScenarioToWorkspace` |
|    | `loadlibrary` |
|    | `mdltransformer` |
|    | `metricsdashboard` |
|    | `mldatxfile` |
|    | `modelDesignDashboard` |
|    | `modelTestingDashboard` |
|    | `modeladvisor` |
| ✅ | `nexttile` |
|    | `ofdmChannelEstimate` |
|    | `ofdmPilotConfig` |
|    | `ofdmPilotGrid` |
|    | `ommread` |
|    | `orthosliceViewer` |
|    | `parsim` |
|    | `pathsToReferencedModel` |
|    | `patternFromAI` |
|    | `patternFromSlices` |
|    | `poseplot` |
|    | `propagateOrbit` |
|    | `publish` |
|    | `rendererinfo` |
|    | `replace_block` |
|    | `rmi` |
|    | `rmipref` |
|    | `rmitag` |
|    | `rosAddons` |
|    | `satelliteScenario` |
|    | `serialportlist` |
|    | `setActiveConfigSet` |
|    | `setExternalInput` |
|    | `shareMATLABForFMUCoSim` |
|    | `showblockdatatypetable` |
|    | `showunitslist` |
|    | `siderealTime` |
|    | `simplifyInterfacesWithBusPorts` |
|    | `siteviewer` |
|    | `slCharacterEncoding` |
|    | `slConfigUIGetVal` |
|    | `slConfigUISetEnabled` |
|    | `slConfigUISetVal` |
|    | `slConvertCustomContextMenus` |
|    | `slConvertCustomMenus` |
|    | `slCreateToolstripComponent` |
|    | `slCreateToolstripTab` |
|    | `slDestroyToolstripComponent` |
|    | `slEditToolstripAction` |
|    | `slEditToolstripCommand` |
|    | `slEditToolstripIcon` |
|    | `slEditToolstripWidget` |
|    | `slExportFavoriteCommands` |
|    | `slImportFavoriteCommands` |
|    | `slIsFileChangedOnDisk` |
|    | `slLibraryBrowser` |
|    | `slLoadedToolstripComponents` |
|    | `slPersistToolstripComponent` |
|    | `slReloadStudioConfig` |
|    | `slReloadToolstripConfig` |
|    | `slResetFavoriteCommands` |
|    | `slUIDeveloperMode` |
|    | `slUpdateToolstripComponent` |
|    | `sl_refresh_customizations` |
|    | `slbuild` |
|    | `sldiagnostics` |
|    | `slexpr` |
|    | `sliceViewer` |
|    | `slrtAppGenerator` |
|    | `slrtApplicationInspector` |
|    | `slrtPerformanceAnalyzer` |
|    | `sltestiteration` |
|    | `sltrace` |
|    | `slwebview_req` |
|    | `slxcinfo` |
|    | `slxcmerge` |
|    | `slxcunpack` |
|    | `slxpinfo` |
|    | `socExportReferenceDesign` |
|    | `spectrumAnalyzer` |
|    | `sschdladvisor` |
|    | `stringtype` |
| ✅ | `tiledlayout` |
|    | `timescope` |
|    | `tleread` |
|    | `tunablevars2parameterobjects` |
|    | `uisimcontrols` |
|    | `uisimdatabutton` |
|    | `uisimprogress` |
|    | `uisimvartuner` |
|    | `validateAudioPlugin` |
|    | `visdiff` |
|    | `wirelessNetworkViewer` |
|    | `wirelessTrafficViewer` |
|    | `xilinxsoc` |
| ✅ | `yyaxis` |
