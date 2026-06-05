# Map Toolbox Reference

| Implemented | Function | Description |
| :---: | :--- | :--- |
|   | `georasterinfo` | Information about geospatial raster data file |
|   | `geotiffinfo` | Information about GeoTIFF file |
|   | `geotiffwrite` | Write GeoTIFF file |
|   | `getworldfilename` | Derive world file name from image file name |
|   | `imread` | Read image from graphics file |
|   | `imwrite` | Write image to graphics file |
|   | `mbtileswrite` | Write georeferenced image or data grid to MBTiles file(Since R2024b) |
|   | `readgeoraster` | Read geospatial raster data file |
|   | `worldfileread` | Read world file and return reference object |
|   | `worldfilewrite` | Write world file from raster reference object |
|   | `gpxread` | Read GPX file |
|   | `kmlwrite` | Write geographic data to KML file |
|   | `kmlwriteline` | Write geographic line data to KML file |
|   | `kmlwritepoint` | Write geographic point data to KML file |
|   | `kmlwritepolygon` | Write geographic polygon to KML file |
|   | `makeattribspec` | Create attribute specification |
|   | `makedbfspec` | Create DBF specification |
|   | `readgeotable` | Read geospatial table from vector data file(Since R2021b) |
|   | `shapeinfo` | Information about shapefile |
| ✅ | `shaperead` | Read vector features and attributes from shapefile |
|   | `shapewrite` | Write geographic vector data structure to shapefile |
|   | `RasterInfo` | Information about geospatial raster data file |
|   | `RPCCoefficientTag` | Rational Polynomial Coefficients Tag |
|   | `avhrrgoode` | Read AVHRR data product stored in Goode Projection |
|   | `avhrrlambert` | Read AVHRR data product stored ineqaazimprojection |
|   | `dteds` | DTED file names for latitude-longitude quadrangle |
|   | `globedems` | GLOBE data file names for latitude-longitude quadrangle |
|   | `gshhs` | Read Global Self-Consistent Hierarchical High-Resolution Geography (GSHHG)
      data |
|   | `gtopo30s` | GTOPO30 data file names for latitude-longitude quadrangle |
|   | `updategeostruct` | Convert line or patch display structure to geostruct |
|   | `usgsdems` | USGS 1-degree (3-arc-sec) DEM file names for latitude-longitude quadrangle |
|   | `vmap0data` | Read selected data from Vector Map Level 0 |
|   | `vmap0read` | Read Vector Map Level 0 file |
|   | `vmap0rhead` | Read Vector Map Level 0 file headers |
|   | `WebMapServer` | Web map server |
|   | `WMSCapabilities` | Web Map Service capabilities document |
|   | `wmsfind` | Search local database for Web map servers and layers |
|   | `wmsinfo` | Read capabilities document from WMS server |
|   | `WMSLayer` | Web Map Service layer |
|   | `WMSMapRequest` | Web Map Service map request |
|   | `wmsread` | Retrieve WMS map from server |
|   | `wmsupdate` | SynchronizeWMSLayerobject with server |
|   | `bubblechart` | Bubble chart |
|   | `cla` | Clear axes |
|   | `gca` | Current axes or chart |
|   | `geodensityplot` | Density plot in geographic coordinates |
|   | `geoiconchart` | Icon chart in geographic coordinates(Since R2024b) |
|   | `geoimage` | Display RGB or grayscale image(Since R2026a) |
|   | `geopcolor` | Display raster using scaled colors(Since R2026a) |
|   | `geoplot` | Plot points, lines, and polygons on map(Since R2022a) |
|   | `geoscatter` | Scatter chart in geographic coordinates |
|   | `hold` | Retain current plot when adding new plots |
|   | `mapaxes` | Create map axes(Since R2023a) |
|   | `newmap` | Set up new map(Since R2023a) |
|   | `clim` | Set colormap limits (Renamed fromcaxisin R2022a) |
|   | `colorbar` | Colorbar showing color scale |
|   | `colormap` | View and set current colormap |
|   | `fontsize` | Change font size for objects in a figure(Since R2022a) |
|   | `geolimits` | Set or query geographic limits |
|   | `geotickformat` | Set or query geographic tick label format |
|   | `lcolorbar` | Color bar with text labels |
|   | `legend` | Add legend to axes |
|   | `subtitle` | Add subtitle to plot |
|   | `text` | Add text descriptions to data points |
|   | `title` | Add title |
|   | `addCustomBasemap` | Add custom basemap |
|   | `geobasemap` | Set or query basemap |
|   | `readBasemapImage` | Read image from geographic basemap(Since R2022a) |
|   | `removeCustomBasemap` | Remove custom basemap |
|   | `addToolbarMapButton` | Add map button to toolbar(Since R2021b) |
|   | `datatip` | Create data tip |
|   | `dataTipTextRow` | Add row to data tips |
|   | `ginput` | Identify axes coordinates |
|   | `gtext` | Add text to figure using mouse |
|   | `removeToolbarMapButton` | Remove map button from toolbar(Since R2021b) |
|   | `axesm` | Createaxesm-based map |
|   | `axesmui` | Defineaxesm-based map and modify projection and display
            properties |
|   | `clma` | Clear currentaxesm-based map |
|   | `clmo` | Clear graphics objects fromaxesm-based map |
|   | `gcm` | Query projection structure of currentaxesm-based
      map |
|   | `getm` | Query properties ofaxesm-based map |
|   | `handlem` | Handles of objects onaxesm-based map |
|   | `handlem-ui` | GUI for selecting objects onaxesm-based map |
|   | `hidem` | Hide objects onaxesm-based map |
|   | `ismap` | Determine if axes isaxesm-based map |
|   | `ismapped` | Determine if object is projected onaxesm-based map |
|   | `namem` | Names of objects onaxesm-based map |
|   | `setm` | Set properties ofaxesm-based map and graphics
      objects |
|   | `showaxes` | Toggle display of coordinate axes onaxesm-based map |
|   | `showm` | Show objects onaxesm-based map |
|   | `tagm` | SetTagproperty of objects onaxesm-based
      map |
|   | `usamap` | Createaxesm-based map for United States of America |
|   | `worldmap` | Createaxesm-based map for world region |
|   | `cart2grn` | Transform projected coordinates onaxesm-based map to Greenwich
            system |
|   | `clabelm` | Label map contour plot |
|   | `clegendm` | Add legend labels to map contour display |
|   | `contour3m` | Project 3-D contour plot of map data |
|   | `contourcbar` | Color bar for filled contour map display |
|   | `contourcmap` | Contour colormap and color bar |
|   | `contourfm` | Project filled 2-D contour plot of map data |
|   | `contourm` | Project 2-D contour plot of map data |
|   | `displaym` | Display geographic data from display structure onaxesm-based map |
|   | `eqa2grn` | Convert from equal area to Greenwich coordinates |
|   | `fill3m` | Project filled 3-D patches onaxesm-based map |
|   | `fillm` | Project filled 2-D patches onaxesm-based map |
|   | `geoshow` | Display map latitude and longitude data |
|   | `grid2image` | Display regular data grid as image |
|   | `grn2eqa` | Convert from Greenwich to equal area coordinates |
|   | `linem` | Project line onaxesm-based map |
|   | `makesymbolspec` | Create vector layer symbol specification |
|   | `mapshow` | Display map data without projection |
|   | `meshm` | Project regular data grid onaxesm-based map |
|   | `patchesm` | Project patches as individual objects onaxesm-based map |
|   | `patchm` | Project patches onaxesm-based map |
|   | `pcolorm` | Project geolocated data grid onaxesm-based map using height
      values of 0 |
|   | `plot3m` | Project 3-D lines and points onaxesm-based map |
|   | `plotm` | Project 2-D lines and points onaxesm-based map |
|   | `quiver3m` | Project 3-D quiver plot onaxesm-based map |
|   | `quiverm` | Project 2-D quiver plot onaxesm-based map |
|   | `scatterm` | Project scatter plot onaxesm-based map |
|   | `stem3m` | Project stem plot onaxesm-based map |
|   | `surfm` | Project geolocated data grid onaxesm-based map |
|   | `axesscale` | Resize axes for equivalent scale |
|   | `framem` | Control frame ofaxesm-based map |
|   | `gridm` | Control graticule lines onaxesm-based map |
|   | `ind2rgb8` | Convert indexed image to RGB image of typeuint8 |
|   | `mlabel` | Control meridian labels onaxesm-based map |
|   | `mlabelzero22pi` | Display meridian labels onaxesm-based map using range of 0 to 360 degrees |
|   | `northarrow` | Add north arrow toaxesm-based map |
|   | `paperscale` | Set figure properties for printingaxesm-based map at map scale |
|   | `plabel` | Control parallel labels onaxesm-based map |
|   | `polcmap` | Create colormap appropriate to political regions |
|   | `previewmap` | View figure at printed size |
|   | `rotatetext` | Rotate text to projected graticule onaxesm-based map |
|   | `scaleruler` | Add or modify graphic scale onaxesm-based map |
|   | `textm` | Project text ontoaxesm-based map |
|   | `tightmap` | Remove white space aroundaxesm-based map |
|   | `gcpmap` | Interactively identify current point onaxesm-based
      map |
|   | `gtextm` | Interactively add text toaxesm-based map |
|   | `inputm` | Interactively identify latitudes and longitudes onaxesm-based
                        map |
|   | `geoglobe` | Create geographic globe |
|   | `GeographicGlobe` | Control geographic globe appearance and behavior |
|   | `geoplot3` | Geographic globe plot |
|   | `camheading` | Set or query heading angle of camera for geographic globe |
|   | `camheight` | Set or query height of camera for geographic globe |
|   | `campitch` | Set or query pitch angle of camera for geographic globe |
|   | `campos` | Set or query position of camera for geographic globe |
|   | `camroll` | Set or query roll angle of camera for geographic globe |
|   | `addCustomBuildings` | Add custom buildings(Since R2026a) |
|   | `addCustomTerrain` | Add custom terrain data |
|   | `removeCustomBuildings` | Remove custom buildings(Since R2026a) |
|   | `removeCustomTerrain` | Remove custom terrain data |
|   | `camposm` | Set camera position foraxesm-based map using geographic coordinates |
|   | `camtargm` | Set camera target foraxesm-based map using geographic coordinates |
|   | `camupm` | Set camera up vector foraxesm-based map using geographic coordinates |
|   | `view` | Camera line of sight |
|   | `daspectm` | Control vertical exaggeration ofaxesm-based map |
|   | `demcmap` | Colormaps appropriate to terrain elevation data |
|   | `lightm` | Project light objects onaxesm-based map |
|   | `meshlsrm` | 3-D lighted shaded relief of regular data grid onaxesm-based map |
|   | `shaderel` | Constructcdataand colormap for shaded
relief |
|   | `surfacem` | Project and add geolocated data grid toaxesm-based map |
|   | `surflm` | 3-D shaded surface with lighting onaxesm-based map |
|   | `surflsrm` | 3-D lighted shaded relief of geolocated data grid onaxesm-based map |
|   | `zdatam` | Adjustz-plane of map object onaxesm-based map |
|   | `webmap` | (To be removed) Open web map |
|   | `wmline` | (To be removed) Display geographic line on web map |
|   | `wmmarker` | (To be removed) Display geographic marker on web map |
|   | `wmpolygon` | (To be removed) Display geographic polygon on web map |
|   | `closePolygonParts` | Close all rings in multipart polygon |
|   | `geotable2table` | Convert geospatial table to table(Since R2021b) |
|   | `poly2ccw` | Convert polygon vertices to counterclockwise order |
|   | `poly2cw` | Convert polygon vertices to clockwise order |
|   | `poly2fv` | Convert polygon coordinates to patch faces and vertices |
|   | `polyjoin` | Convert line or polygon parts from cell arrays to vector
form |
|   | `polymerge` | Merge line segments with matching endpoints |
|   | `polysplit` | Convert line or polygon parts from vector form to cell
arrays |
|   | `removeExtraNanSeparators` | Clean upNaNseparators in polygons
and lines |
|   | `struct2geotable` | Convert structure array to geospatial table(Since R2021b) |
|   | `table2geotable` | Convert table to geospatial table(Since R2021b) |
|   | `area` | Area of polygon shape in geographic or planar coordinates(Since R2024a) |
|   | `bounds` | Bounds of shape in geographic or planar coordinates(Since R2024b) |
|   | `extractfield` | Field values from structure array |
|   | `isgeotable` | Determine if input is geospatial table(Since R2021b) |
|   | `isinterior` | Query geographic or planar points in polygon(Since R2022a) |
|   | `ismultipoint` | Determine which array elements are multipoint shapes(Since R2022b) |
|   | `ispolycw` | Determine if polygon vertices are in clockwise order |
|   | `isShapeMultipart` | Determine if line or polygon has multiple parts |
|   | `linelength` | Length of line shape in geographic or planar coordinates(Since R2024a) |
|   | `perimeter` | Perimeter of polygon shape in geographic or planar coordinates(Since R2024a) |
|   | `buffer` | Buffer shape in geographic or planar coordinates(Since R2024b) |
|   | `bufferm` | Buffer zones for latitude-longitude polygons |
|   | `flatearthpoly` | Clip polygon to world limits |
|   | `geoclip` | Clip geographic shape to latitude-longitude limits or polygon(Since R2022a) |
|   | `interpm` | Densify connected vertices in latitude-longitude coordinates |
|   | `intrplat` | Interpolate latitude at specified longitude |
|   | `intrplon` | Interpolate longitude at specified latitude |
|   | `mapclip` | Clip planar shape toxy-limits or polygon(Since R2022a) |
|   | `maptriml` | Trim lines to latitude-longitude quadrangle |
|   | `maptrimp` | Trim polygons to latitude-longitude quadrangle |
|   | `nanclip` | Clip vector data with NaNs at specified pen-down locations |
|   | `reducem` | Reduce density of points in vector data |
|   | `intersect` | Intersection of shapes in geographic or planar coordinates(Since R2025a) |
|   | `subtract` | Difference of shapes in geographic or planar coordinates(Since R2025a) |
|   | `union` | Union of shapes in geographic or planar coordinates(Since R2025a) |
|   | `xor` | Exclusive OR of shapes in geographic or planar coordinates(Since R2025a) |
|   | `circcirc` | Find intersection of circles in Cartesian coordinates |
|   | `linecirc` | Find intersection of line and circle in Cartesian coordinates |
|   | `polyxpoly` | Intersection points for lines or polygon edges |
|   | `geolineshape` | Line shape in geographic coordinates(Since R2021b) |
|   | `geopointshape` | Point shape in geographic coordinates(Since R2021b) |
|   | `geopolyshape` | Polygon in geographic coordinates(Since R2021b) |
|   | `maplineshape` | Line shape in planar coordinates(Since R2021b) |
|   | `mappointshape` | Point shape in planar coordinates(Since R2021b) |
|   | `mappolyshape` | Polygon in planar coordinates(Since R2021b) |
|   | `geopoint` | Geographic point vector |
|   | `geoshape` | Geographic shape vector |
|   | `mappoint` | Planar point vector |
|   | `mapshape` | Planar shape vector |
|   | `geoloc2grid` | Convert geolocated data array to regular data grid |
|   | `georefcells` | Reference raster cells to geographic coordinates |
|   | `georefpostings` | Reference raster postings to geographic coordinates |
|   | `refmatToGeoRasterReference` | Convert referencing matrix to geographic raster reference object |
|   | `refvecToGeoRasterReference` | Convert referencing vector to geographic raster reference object |
|   | `changem` | Replace values in array |
|   | `contains` | Determine if geographic or map raster contains points |
|   | `encodem` | Fill in regular data grid from seed values and locations |
|   | `filterm` | Filter latitudes and longitudes based on underlying data
grid |
|   | `findm` | Latitudes and longitudes of nonzero data grid elements |
|   | `geocrop` | Crop geographic raster |
|   | `geointerp` | Interpolation for geographic raster |
|   | `geopeaks` | Generate synthetic data set on sphere |
|   | `georesample` | Resample geographic raster(Since R2025a) |
|   | `georesize` | Resize geographic raster |
|   | `imbedm` | Encode data points into regular data grid |
|   | `mergetiles` | Merge adjacent raster tiles(Since R2024a) |
|   | `mapcrop` | Crop planar map raster |
|   | `mapinterp` | Interpolation for planar map raster |
|   | `mapoutline` | Outline of georeferenced image or data grid |
|   | `maprefcells` | Reference raster cells to map coordinates |
|   | `maprefpostings` | Reference raster postings to map coordinates |
|   | `mapresample` | Resample planar map raster(Since R2025a) |
|   | `mapresize` | Resize planar map raster |
|   | `refmatToMapRasterReference` | Convert referencing matrix to map raster reference object |
|   | `georasterref` | (Not recommended) Create geographic raster reference object |
|   | `maprasterref` | (Not recommended) Create map raster reference object |
|   | `refmatToWorldFileMatrix` | Convert referencing matrix to world file matrix |
|   | `GeographicCellsReference` | Reference raster cells to geographic coordinates |
|   | `GeographicPostingsReference` | Reference raster postings to geographic coordinates |
|   | `MapCellsReference` | Reference raster cells to map coordinates |
|   | `MapPostingsReference` | Reference raster postings to map coordinates |
|   | `aoicircle` | Define circular area of interest(Since R2024b) |
|   | `aoiquad` | Define quadrangular or rectangular area of interest(Since R2024b) |
|   | `geocode` | Get shape object from geocoded placename(Since R2024b) |
|   | `placenames` | Installed list of placenames forgeocodefunction(Since R2024b) |
|   | `geocontourxy` | Contour grid in local system with latitude-longitude results |
|   | `mapprofile` | Interpolate between waypoints on terrain |
|   | `vec2mtx` | Convert latitudes and longitudes to raster data grid |
|   | `gradientm` | Gradient, slope, and aspect of data grid |
|   | `los2` | Line-of-sight visibility between two points on or above terrain |
|   | `viewshed` | Visible area from point on or above terrain |
| ✅ | `earthRadius` | Mean radius of planet Earth |
|   | `egm96geoid` | Geoid height from Earth Gravitational Model 1996 (EGM96) |
|   | `geocrs` | Geographic coordinate reference system object |
| ✅ | `wgs84Ellipsoid` | Reference ellipsoid for World Geodetic System of 1984 |
| ✅ | `geocentricLatitude` | Convert geodetic to geocentric latitude |
|   | `geodeticLatitudeFromGeocentric` | Convert geocentric to geodetic latitude |
|   | `geodeticLatitudeFromParametric` | Convert parametric to geodetic latitude |
| ✅ | `parametricLatitude` | Convert geodetic to parametric latitude |
|   | `rcurve` | Ellipsoidal radii of curvature |
|   | `rsphere` | Radii of auxiliary spheres |
|   | `axes2ecc` | Eccentricity of ellipse from axes lengths |
| ✅ | `ecc2flat` | Flattening of ellipse from eccentricity |
| ✅ | `ecc2n` | Third flattening of ellipse from eccentricity |
| ✅ | `flat2ecc` | Eccentricity of ellipse from flattening |
| ✅ | `majaxis` | Semimajor axis of ellipse |
| ✅ | `minaxis` | Semiminor axis of ellipse |
| ✅ | `n2ecc` | Eccentricity of ellipse from third flattening |
|   | `oblateSpheroid` | Oblate ellipsoid of revolution |
|   | `referenceEllipsoid` | Reference ellipsoid |
|   | `referenceSphere` | Reference sphere |
|   | `AuthalicLatitudeConverter` | Convert between geodetic and authalic latitudes |
|   | `ConformalLatitudeConverter` | Convert between geodetic and conformal latitudes |
|   | `IsometricLatitudeConverter` | Convert between geodetic and isometric latitudes |
|   | `RectifyingLatitudeConverter` | Convert between geodetic and rectifying latitudes |
| ✅ | `aer2ecef` | Transform local spherical coordinates to geocentric Earth-centered
            Earth-fixed |
|   | `ecefOffset` | Cartesian ECEF offset between geodetic coordinates |
| ✅ | `enu2ecef` | Transform local east-north-up coordinates to geocentric Earth-centered
            Earth-fixed |
| ✅ | `geodetic2ecef` | Transform geodetic coordinates to geocentric Earth-centered Earth-fixed |
| ✅ | `ned2ecef` | Transform local north-east-down coordinates to geocentric Earth-centered
                        Earth-fixed |
| ✅ | `aer2geodetic` | Transform local spherical coordinates to geodetic |
| ✅ | `ecef2geodetic` | Transform geocentric Earth-centered Earth-fixed coordinates to geodetic |
| ✅ | `enu2geodetic` | Transform local east-north-up coordinates to geodetic |
|   | `lookAtSpheroid` | Line of sight intersection with oblate spheroid |
| ✅ | `ned2geodetic` | Transform local north-east-down coordinates to geodetic |
| ✅ | `aer2enu` | Transform local spherical coordinates to local east-north-up |
| ✅ | `ecef2enu` | Transform geocentric Earth-centered Earth-fixed coordinates to local
            east-north-up |
| ✅ | `geodetic2enu` | Transform geodetic coordinates to local east-north-up |
| ✅ | `aer2ned` | Transform local spherical coordinates to local north-east-down |
| ✅ | `ecef2ned` | Transform geocentric Earth-centered Earth-fixed coordinates to local
            north-east-down |
| ✅ | `geodetic2ned` | Transform geodetic coordinates to local north-east-down |
| ✅ | `ecef2aer` | Transform geocentric Earth-centered Earth-fixed coordinates to local
            spherical |
| ✅ | `enu2aer` | Transform local east-north-up coordinates to local spherical |
| ✅ | `geodetic2aer` | Transform geodetic coordinates to local spherical |
| ✅ | `ned2aer` | Transform local north-east-down coordinates to local spherical |
|   | `ecef2enuv` | Rotate geocentric Earth-centered Earth-fixed vector to local east-north-up |
|   | `ecef2nedv` | Rotate geocentric Earth-centered Earth-fixed vector to local
            north-east-down |
|   | `enu2ecefv` | Rotate local east-north-up vector to geocentric Earth-centered Earth-fixed |
|   | `ned2ecefv` | Rotate local north-east-down vector to geocentric Earth-centered
                        Earth-fixed |
|   | `deg2rad` | Convert angle from degrees to radians |
|   | `degrees2dm` | Convert degrees to degrees-minutes |
|   | `degrees2dms` | Convert degrees to degrees-minutes-seconds |
|   | `dm2degrees` | Convert degrees-minutes to degrees |
|   | `dms2degrees` | Convert degrees-minutes-seconds to degrees |
|   | `fromDegrees` | Convert angles from degrees |
|   | `fromRadians` | Convert angles from radians |
|   | `rad2deg` | Convert angle from radians to degrees |
|   | `toDegrees` | Convert angles to degrees |
|   | `toRadians` | Convert angles to radians |
|   | `unwrapMultipart` | Unwrap angles with parts separated byNaNvalues |
|   | `wrapTo180` | Wrap angle in degrees to [–180, 180] |
|   | `wrapTo2Pi` | Wrap angle in radians to [0, 2*pi] |
|   | `wrapTo360` | Wrap angle in degrees to [0, 360] |
|   | `wrapToPi` | Wrap angle in radians to [−pi, pi] |
|   | `km2nm` | Convert kilometers to nautical miles |
|   | `km2sm` | Convert kilometers to statute miles |
|   | `nm2km` | Convert nautical miles to kilometers |
|   | `nm2sm` | Convert nautical to statute miles |
|   | `sm2km` | Convert statute miles to kilometers |
|   | `sm2nm` | Convert statute to nautical miles |
|   | `deg2km` | Convert spherical distance from degrees to kilometers |
|   | `deg2nm` | Convert spherical distance from degrees to nautical miles |
|   | `deg2sm` | Convert spherical distance from degrees to statute miles |
|   | `km2deg` | Convert spherical distance from kilometers to degrees |
|   | `km2rad` | Convert spherical distance from kilometers to radians |
|   | `nm2deg` | Convert spherical distance from nautical miles to degrees |
|   | `nm2rad` | Convert spherical distance from nautical miles to radians |
|   | `rad2km` | Convert spherical distance from radians to kilometers |
|   | `rad2nm` | Convert spherical distance from radians to nautical miles |
|   | `rad2sm` | Convert spherical distance from radians to statute miles |
|   | `sm2deg` | Convert spherical distance from statute miles to degrees |
|   | `sm2rad` | Convert spherical distance from statute miles to radians |
|   | `angl2str` | Convert angles to character array |
|   | `map.geodesy.isDegree` | True if input matches'degree'and false if'radian' |
|   | `str2angle` | Convert strings to angles in degrees |
|   | `unitsratio` | Conversion factor between units |
|   | `validateLengthUnit` | Validate and standardize length unit |
| ✅ | `azimuth` | Azimuth between points on sphere or ellipsoid |
|   | `departure` | Departure of longitudes at specified latitudes |
| ✅ | `distance` | Distance between points on sphere or ellipsoid |
| ✅ | `meridianarc` | Ellipsoidal distance along meridian |
|   | `antipode` | Point on opposite side of globe |
|   | `meridianfwd` | Reckon position along meridian |
|   | `reckon` | Point at specified azimuth and range on sphere or ellipsoid |
|   | `track` | Geographic track points from waypoints |
|   | `track1` | Geographic track points from starting point, azimuth, and range |
|   | `track2` | Geographic track points from starting and ending points |
|   | `trackg` | Display great circle or rhumb line onaxesm-based map using
            mouse |
|   | `gcxgc` | Intersection points for pairs of great circles |
|   | `gcxsc` | Intersection points for great and small circle pairs |
|   | `rhxrh` | Intersection points for pairs of rhumb lines |
|   | `ellipse1` | Geographic ellipse from center, semimajor axis, eccentricity, and
      azimuth |
|   | `gc2sc` | Center and radius of great circle |
|   | `scircle1` | Small circle from center and radius |
|   | `scircle2` | Small circle from center and point on perimeter |
|   | `scircleg` | Add small circle toaxesm-based map using mouse |
|   | `scxsc` | Intersection points for pairs of small circles |
|   | `areaint` | Surface area of polygon on sphere or ellipsoid |
|   | `areamat` | Surface area covered by nonzero values in binary data
grid |
|   | `areaquad` | Surface area of latitude-longitude quadrangle |
|   | `bufgeoquad` | Expand limits of geographic quadrangle |
|   | `geoquadline` | Geographic quadrangle bounding multi-part line |
|   | `geoquadpt` | Geographic quadrangle bounding scattered points |
|   | `ingeoquad` | True for points inside or on lat-lon quadrangle |
|   | `intersectgeoquad` | Intersection of two latitude-longitude quadrangles |
|   | `outlinegeoquad` | Polygon outlining geographic quadrangle |
|   | `defaultm` | Create or reset map projection structure |
|   | `geotiff2mstruct` | Convert GeoTIFF information structure to map projection structure |
|   | `maplist` | Map projection support foraxesm-based maps and map projection
            structures |
|   | `maps` | List map projections foraxesm-based maps and map projection
                        structures |
|   | `projcrs` | Projected coordinate reference system object |
|   | `projlist` | GeoTIFF info structure support forprojfwdandprojinv |
|   | `utmgeoid` | Select ellipsoids for given UTM zone |
|   | `utmzone` | UTM zone from latitude and longitude |
|   | `utmzoneui` | Identify UTM zone by clicking map |
|   | `wktstring` | Well-known text string |
|   | `projfwd` | Project latitude-longitude coordinates tox-ymap coordinates |
|   | `projinv` | Unprojectx-ymap coordinates to
   latitude-longitude coordinates |
|   | `vfwdtran` | Transform azimuth on ellipsoid to direction on map |
|   | `vinvtran` | Transform direction on map to azimuth on ellipsoid |
|   | `distortcalc` | Distortion parameters for map projections |
|   | `mdistort` | Display contours of constant map distortion onaxesm-based
                        map |
|   | `tissot` | Project Tissot indicatrices onaxesm-based map |
|   | `newpole` | Origin vector to place specific point at pole |
|   | `org2pol` | Location of north pole in rotated map |
|   | `putpole` | Origin vector to place north pole at specified point |
|   | `rotatem` | Transform vector map data to new origin and orientation |

## ✅ Custom TypeScript Implementations

| Implemented | Function | Description |
| :---: | :--- | :--- |
| ✅ | `geocshow` | Custom TypeScript port |
| ✅ | `geotiffread` | Custom TypeScript port |
