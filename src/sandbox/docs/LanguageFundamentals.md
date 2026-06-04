
Language Fundamentals — Functions


Entering Commands
ans	Most recent answer
clc	Clear Command Window
commandhistory	View previously run statements
commandwindow	Enter statements at the command line
diary	Log Command Window text to file
DisplayFormatOptions	Output display format in Command Window
format	Set output display format
home	Send cursor home
iskeyword	Determine if input is MATLAB keyword
more	Control paged output in Command Window
Matrices and Arrays
Create and Combine Arrays
blkdiag	Block diagonal matrix
cat	Concatenate arrays
combinations	Generate all element combinations of arrays (Since R2023a)
diag	Create diagonal matrix or get diagonal elements of matrix
eye	Identity matrix
false	Logical 0 (false)
horzcat	Concatenate arrays horizontally
ones	Create array of all ones
rand	Uniformly distributed random numbers
repelem	Repeat copies of array elements
repmat	Repeat copies of array
true	Logical 1 (true)
vertcat	Concatenate arrays vertically
zeros	Create array of all zeros
Create Grids
freqspace	Frequency spacing for frequency response
linspace	Generate linearly spaced vector
logspace	Generate logarithmically spaced vector
meshgrid	2-D and 3-D grids
ndgrid	Rectangular grid in N-D space
Determine Size, Shape, and Order
iscolumn	Determine if input is column vector
isempty	Determine whether array is empty
ismatrix	Determine whether input is matrix
isrow	Determine if input is row vector
isscalar	Determine whether input is scalar
issorted	Determine if array is sorted
issortedrows	Determine if matrix or table rows are sorted
isuniform	Determine if vector is uniformly spaced (Since R2022b)
isvector	Determine whether input is vector
length	Length of largest array dimension
ndims	Number of array dimensions
numel	Number of array elements
size	Array size
Resize, Reshape, and Rearrange
Resize
head	Get top rows of array or table
paddata	Pad data by adding elements (Since R2023b)
resize	Resize data by adding or removing elements (Since R2023b)
tail	Get bottom rows of array or table
trimdata	Trim data by removing elements (Since R2023b)
Reshape
ipermute	Inverse permute array dimensions
permute	Permute array dimensions
reshape	Reshape array by rearranging existing elements
shiftdim	Shift array dimensions
squeeze	Remove dimensions of length 1
Rearrange
circshift	Shift array circularly
ctranspose	Complex conjugate transpose
flip	Flip order of elements
fliplr	Flip array left to right
flipud	Flip array up to down
rot90	Rotate array 90 degrees
sort	Sort array elements
sortrows	Sort rows of matrix or table
transpose	Transpose vector or matrix
Indexing
colon	Vector creation, array subscripting, and for-loop iteration
end	Terminate block of code or indicate last array index
ind2sub	Convert linear indices to subscripts
sub2ind	Convert subscripts to linear indices
Data Types
Numeric Types
Create Numeric Variables
double	Double-precision arrays
int16	16-bit signed integer arrays
int32	32-bit signed integer arrays
int64	64-bit signed integer arrays
int8	8-bit signed integer arrays
single	Single-precision arrays
uint16	16-bit unsigned integer arrays
uint32	32-bit unsigned integer arrays
uint64	64-bit unsigned integer arrays
uint8	8-bit unsigned integer arrays
Convert Between Numeric Types
cast	Convert variable to different data type
typecast	Convert data type without changing underlying data
Query Type and Value
allfinite	Determine if all array elements are finite (Since R2022a)
anynan	Determine if any array element is NaN (Since R2022a)
isfinite	Determine which array elements are finite
isfloat	Determine if input is floating-point array
isinf	Determine which array elements are infinite
isinteger	Determine whether input is integer array
isnan	Determine which array elements are NaN
isnumeric	Determine whether input is numeric array
isreal	Determine whether array uses complex storage
Numeric Value Limits
eps	Floating-point relative accuracy
flintmax	Largest consecutive integer in floating-point format
Inf	Create array of all Inf values
intmax	Largest value of specific integer type
intmin	Smallest value of specific integer type
NaN	Create array of all NaN values
realmax	Largest positive floating-point number
realmin	Smallest normalized floating-point number
Characters and Strings
Create, Concatenate, and Convert
String Arrays
join	Combine strings
plus	Add numbers, append strings
string	String array
strings	Create string array with no characters
Character Arrays
blanks	Create character array of blanks
cellstr	Convert to cell array of character vectors
char	Character array
newline	Create newline character
Character or String Arrays
append	Combine strings
compose	Format data into multiple strings
sprintf	Format data into string or character vector
strcat	Concatenate strings horizontally
Convert Input Arguments
convertCharsToStrings	Convert character arrays to string arrays, leaving other arrays unaltered
convertContainedStringsToChars	Convert string arrays at any level of cell array or structure
convertStringsToChars	Convert string arrays to character arrays, leaving other arrays unaltered
Convert Between Numeric and Strings
double	Double-precision arrays
num2str	Convert numbers to character array
str2double	Convert strings to double precision values
string	String array
Determine Type and Properties
iscellstr	Determine if input is cell array of character arrays
ischar	Determine if input is character array
isletter	Determine which characters are letters
isspace	Determine which characters are space characters
isstring	Determine if input is string array
isStringScalar	Determine if input is string array with one element
isstrprop	Determine which characters in input strings are of specified category
strlength	Lengths of strings
Find and Replace
contains	Determine if pattern is in strings
count	Count occurrences of pattern in strings
endsWith	Determine if strings end with pattern
matches	Determine if pattern matches strings
replace	Find and replace one or more substrings
replaceBetween	Replace substrings between start and end points
sscanf	Read formatted data from strings
startsWith	Determine if strings start with pattern
strfind	Find strings within other strings
strrep	Find and replace substrings
Match Patterns
Building Patterns
pattern	Patterns to search and match text
Character-Matching Patterns
alphanumericsPattern	Match letter and digit characters
characterListPattern	Match characters from list
digitsPattern	Match digit characters
lettersPattern	Match letter characters
whitespacePattern	Match whitespace characters
wildcardPattern	Match as few characters of any type as possible
Pattern Search Rules
asFewOfPattern	Match pattern as few times as possible
asManyOfPattern	Match pattern as many times as possible
caseInsensitivePattern	Match pattern regardless of case
caseSensitivePattern	Match pattern with case sensitivity
optionalPattern	Make pattern optional to match
possessivePattern	Match pattern without backtracking
Boundary Patterns
alphanumericBoundary	Match boundary between alphanumeric and non-alphanumeric characters
digitBoundary	Match boundary between digit characters and non-digit characters
letterBoundary	Match boundary between letter characters and non-letter characters
lineBoundary	Match start or end of line
lookAheadBoundary	Match boundary before specified pattern
lookBehindBoundary	Match boundary following specified pattern
textBoundary	Match start or end of text
whitespaceBoundary	Match boundary between whitespace characters and non-whitespace characters
Custom Pattern Display
maskedPattern	Pattern with specified display name
namedPattern	Designate named pattern
Regular Expressions
regexp	Match regular expression (case sensitive)
regexpi	Match regular expression (case insensitive)
regexpPattern	Pattern that matches specified regular expression
regexprep	Replace text using regular expression
regexptranslate	Translate text into regular expression
Join and Split
extract	Extract substrings from strings
extractAfter	Extract substrings after specified positions
extractBefore	Extract substrings before specified positions
extractBetween	Extract substrings between start and end points
join	Combine strings
plus	Add numbers, append strings
split	Split strings at delimiters
splitlines	Split strings at newline characters
strjoin	Join strings in array
strsplit	Split string or character vector at specified delimiter
strtok	Selected parts of strings
Edit
deblank	Remove trailing whitespace from ends of strings
erase	Delete substrings within strings
eraseBetween	Delete substrings between start and end points
extract	Extract substrings from strings
extractAfter	Extract substrings after specified positions
extractBefore	Extract substrings before specified positions
extractBetween	Extract substrings between start and end points
insertAfter	Insert strings after specified substrings
insertBefore	Insert strings before specified substrings
lower	Convert strings to lowercase
pad	Add leading or trailing characters to strings
reverse	Reverse order of characters in strings
strip	Remove leading and trailing characters from strings
strjust	Justify strings
strtrim	Remove leading and trailing whitespace from strings
upper	Convert strings to uppercase
Compare
matches	Determine if pattern matches strings
strcmp	Compare strings
strcmpi	Compare strings (case insensitive)
strncmp	Compare first n characters of strings (case sensitive)
strncmpi	Compare first n characters of strings (case insensitive)
Dates and Time
Create Date and Time Arrays
Points in Time
dateshift	Shift date or generate sequence of dates and times
datetime	Arrays that represent points in time
eomday	Last day of month
lweekdate	(Not recommended; use dateshift) Date of last occurrence of weekday in month
NaT	Not-a-Time
nweekdate	(Not recommended; use dateshift) Date of specific occurrence of weekday in month
Durations
days	Duration in days
duration	Lengths of time in fixed-length units
hours	Duration in hours
milliseconds	Duration in milliseconds
minutes	Duration in minutes
seconds	Duration in seconds
years	Duration in years
Calendar Durations
caldays	Calendar duration in days
calendarDuration	Lengths of time in variable-length calendar units
calmonths	Calendar duration in months
calquarters	Calendar duration in quarters
calweeks	Calendar duration in weeks
calyears	Calendar duration in years
Calendar of Month
calendar	Calendar for specified month
Points in Time in Alternate Formats
clock	(Not recommended; use datetime) Current date and time as date vector
date	(Not recommended; use datetime("today")) Current date as character vector
datenum	(Not recommended; use datetime or duration) Convert date and time to serial date number
eomdate	(Not recommended; use dateshift) Last date of month
now	(Not recommended; use datetime) Current date and time as serial date number
today	(Not recommended; use datetime("today")) Current date
Date and Time Components
Extract Components
day	Day number or name of input date and time
hour	Hour component of input date and time
minute	Minute component of input date and time
month	Month number or name of input date and time
quarter	Quarter number of input date and time
second	Seconds component of input date and time
week	Week number of input date and time
weekday	Day of week
weeknum	(Not recommended; use week) Week in year
year	Year number of input date and time
Split into Components
datevec	Convert date and time to vector of components
hms	Hour, minute, and second numbers of datetime or duration
split	Split calendar duration into numeric and duration units
time	Convert time of calendar duration to duration
timeofday	Elapsed time since midnight for datetime arrays
ymd	Year, month, and day numbers of datetime
Calculate Differences or Shift Dates
addtodate	(Not recommended; use duration or calendarDuration) Add time to serial date number
between	Calendar math differences
caldiff	Calendar math successive differences
dateshift	Shift date or generate sequence of dates and times
etime	(Not recommended; use datetime values or between) Time elapsed between date vectors
months	(Not recommended; use between) Number of whole months between dates
tzoffset	Time zone offset from UTC
Query Array Contents
isbetween	Determine which elements are within specified range
iscalendarduration	Determine if input is calendar duration array
isdatetime	Determine if input is datetime array
isdst	Determine daylight saving time elements
isduration	Determine if input is duration array
isnat	Determine NaT (Not-a-Time) elements
isregular	Determine if input times are regular with respect to time or calendar unit
isweekend	Determine weekend elements
Convert to Text
char	Character array
datestr	(Not recommended; use string or char) Convert date and time to string format
string	String array
Excel, POSIX, and Other Date and Time Systems
convertTo	Convert datetime values to numeric representations
exceltime	Convert MATLAB datetime to Excel date number
juliandate	Convert MATLAB datetime to Julian date
leapseconds	List all leap seconds supported by datetime data type
m2xdate	(Not recommended; use exceltime) MATLAB date to Excel serial date number
posixtime	Convert MATLAB datetime to POSIX time
timezones	List all time zones
x2mdate	(Not recommended; use datetime) Excel serial date number to MATLAB serial date number or datetime value
yyyymmdd	Convert MATLAB datetime to YYYYMMDD numeric value
Backward Compatibility
matlab.datetime.compatibility.convertDatenum	Convert inputs to datetime values in a backward-compatible way (Since R2022a)
Categorical Arrays
Create Categorical Arrays
categorical	Array that contains values assigned to categories
discretize	Group data into bins or categories
Determine Categories and Type
categories	List of categories in categorical array
iscategorical	Determine if input is categorical array
iscategory	Determine if inputs are names of categories
isordinal	Determine if input is ordinal categorical array
isprotected	Determine if categories of categorical array are protected
isundefined	Find undefined elements in categorical array
Add, Delete, or Modify Categories
addcats	Add categories to categorical array
combinations	Generate all element combinations of arrays (Since R2023a)
mergecats	Merge categories in categorical array
removecats	Remove categories from categorical array
renamecats	Rename categories in categorical array
reordercats	Reorder categories in categorical array
setcats	Set categories in categorical array
Summary Information
countcats	Count occurrences of categorical array elements by category
summary	Data summary
Tables
Create Tables and Convert Type
array2table	Convert homogeneous array to table
cell2table	Convert cell array to table
convertvars	Convert table or timetable variables to specified data type
struct2table	Convert structure array to table
table	Table array with named variables that can contain different types
table2array	Convert table to homogeneous array
table2cell	Convert table to cell array
table2struct	Convert table to structure array
table2timetable	Convert table to timetable
timetable2table	Convert timetable to table
vartype	Subscript into table or timetable by variable type
Read and Write Files
detectImportOptions	Create import options based on file content
getvaropts	Get variable import options
parquetinfo	Get information about Parquet file
parquetread	Read columnar data from a Parquet file
parquetwrite	Write columnar data to Parquet file
preview	Preview eight rows from file using import options
readtable	Create table from file
setvaropts	Set variable import options
setvartype	Set variable data types
spreadsheetImportOptions	Import options object for Spreadsheets
writetable	Write table to file
Summary Information and Stacked Plot
head	Get top rows of array or table
height	Number of table rows
istable	Determine if input is table
istabular	Determine if input is table or timetable (Since R2021b)
stackedplot	Stacked plot of several variables with common x-axis
summary	Data summary
tail	Get bottom rows of array or table
width	Number of table variables
Sort, Filter, and Rearrange
Sort
issortedrows	Determine if matrix or table rows are sorted
sortrows	Sort rows of matrix or table
topkrows	Top rows in sorted order
unique	Unique values
Filter Rows and Variables
rowfilter	Selectively import rows of interest (Since R2022a)
vartype	Subscript into table or timetable by variable type
Rearrange Variables
addvars	Add variables to table or timetable
convertvars	Convert table or timetable variables to specified data type
mergevars	Combine table or timetable variables into multicolumn variable
movevars	Move variables in table or timetable
removevars	Delete variables from table or timetable
renamevars	Rename variables in table or timetable
splitvars	Split multicolumn variables in table or timetable
Reshape
inner2outer	Invert nested table-in-table hierarchy in tables or timetables
rows2vars	Reorient table or timetable so that rows become variables
stack	Stack data from input table or timetable into one variable of output table or timetable
unstack	Unstack data from input table or timetable into multiple variables of output table or timetable
Customize Properties
addprop	Add custom properties to table or timetable
rmprop	Remove custom properties from table or timetable
Join and Set Operations
innerjoin	Inner join between two tables or timetables
intersect	Intersection of two sets of data
ismember	Find set members of data
join	Combine two tables or timetables by rows using key variables
outerjoin	Outer join between two tables or timetables
setdiff	Difference of two sets of data
setxor	Exclusive OR of two sets of data
union	Union of two sets of data
Missing Values
anymissing	Determine if any array element is missing (Since R2022a)
fillmissing	Fill missing entries
ismissing	Find missing values
rmmissing	Remove missing entries
standardizeMissing	Insert standard missing values
Apply Functions to Table Contents
convertvars	Convert table or timetable variables to specified data type
findgroups	Find groups and return group numbers
groupcounts	Number of group elements
groupfilter	Filter by group
groupsummary	Compute summary statistics by group
grouptransform	Transform by group
pivot	Summarize tabular data in pivoted table (Since R2023a)
rowfun	Apply function to table or timetable rows
splitapply	Split data into groups and apply function
varfun	Apply function to table or timetable variables
vartype	Subscript into table or timetable by variable type
Timetables
Create Timetables and Convert Type
array2timetable	Convert homogeneous array to timetable
istabular	Determine if input is table or timetable (Since R2021b)
istimetable	Determine if input is timetable
summary	Data summary
table2timetable	Convert table to timetable
timeseries2timetable	Convert timeseries objects to timetable
timetable	Tables for time series data, with timestamped rows and variables of different types
timetable2table	Convert timetable to table
Read and Write Files
detectImportOptions	Create import options based on file content
getvaropts	Get variable import options
parquetinfo	Get information about Parquet file
parquetread	Read columnar data from a Parquet file
parquetwrite	Write columnar data to Parquet file
preview	Preview eight rows from file using import options
readtimetable	Create timetable from file
setvaropts	Set variable import options
setvartype	Set variable data types
spreadsheetImportOptions	Import options object for Spreadsheets
writetimetable	Write timetable to file
Subscript by Rows, Time Range, or Variable Type
head	Get top rows of array or table
rowfilter	Selectively import rows of interest (Since R2022a)
tail	Get bottom rows of array or table
timerange	Time range for timetable row subscripting
unique	Unique values
vartype	Subscript into table or timetable by variable type
withtol	Time tolerance for timetable row subscripting
Sort, Shift, and Synchronize
containsrange	Determine if timetable row times contain specified time range
isregular	Determine if input times are regular with respect to time or calendar unit
lag	Time-shift data in timetable
overlapsrange	Determine if timetable row times overlap specified time range
retime	Resample or aggregate data in timetable, and resolve duplicate or irregular times
sortrows	Sort rows of matrix or table
synchronize	Synchronize timetables to common time vector, and resample or aggregate data from input timetables
withinrange	Determine if timetable row times are within specified time range
Find and Label Events
eventfilter	Create event filter for selecting timetable rows (Since R2023a)
eventtable	Event table (Since R2023a)
extractevents	Extract event table from subset of timetable data (Since R2023a)
syncevents	Add and synchronize variables from attached event table to timetable (Since R2023a)
Missing Values
anymissing	Determine if any array element is missing (Since R2022a)
fillmissing	Fill missing entries
ismissing	Find missing values
rmmissing	Remove missing entries
standardizeMissing	Insert standard missing values
Stacked Plot
stackedplot	Stacked plot of several variables with common x-axis
Structures
arrayfun	Apply function to each element of array
cell2struct	Convert cell array to structure array
fieldnames	Field names of structure, or public fields of Java or Microsoft COM object
getfield	Field of structure array
isfield	Determine if input is structure array field
isstruct	Determine if input is structure array
orderfields	Order fields of structure array
rmfield	Remove fields from structure
setfield	Assign value to structure array field
struct	Structure array
struct2cell	Convert structure to cell array
struct2table	Convert structure array to table
structfun	Apply function to each field of scalar structure
table2struct	Convert table to structure array
Cell Arrays
Create Empty Array
cell	Cell array
Convert and Check Type
cell2mat	Convert cell array to ordinary array
cell2struct	Convert cell array to structure array
cell2table	Convert cell array to table
cellstr	Convert to cell array of character vectors
iscell	Determine if input is cell array
iscellstr	Determine if input is cell array of character arrays
mat2cell	Convert array to cell array whose cells contain subarrays
num2cell	Convert array to cell array with consistently sized cells
struct2cell	Convert structure to cell array
table2cell	Convert table to cell array
Process Contents
celldisp	Display cell array contents
cellfun	Apply function to each cell in cell array
cellplot	Graphically display structure of cell array
Function Handles
feval	Evaluate function
func2str	Construct character vector from function handle
function_handle	Handle to function
functions	Information about function handle
localfunctions	Handles to all local functions in current file
str2func	Construct function handle from character vector
Dictionaries
configureDictionary	Create dictionary with specified key and value types (Since R2023b)
dictionary	Dictionary that maps unique keys to values (Since R2022b)
entries	Key-value pairs of dictionary (Since R2022b)
insert	Add entries to a dictionary (Since R2023b)
isConfigured	Determine if dictionary has types assigned to keys and values (Since R2022b)
isKey	Determine if dictionary contains key (Since R2022b)
keyHash	Generate hash code for dictionary key (Since R2022b)
keyMatch	Determine if two dictionary keys are the same (Since R2022b)
keys	Keys of dictionary (Since R2022b)
lookup	Find value in dictionary by key (Since R2023b)
numEntries	Number of key-value pairs in dictionary (Since R2022b)
readdictionary	Create dictionary from file (Since R2024b)
remove	Remove dictionary entries (Since R2023b)
types	Types of dictionary keys and values (Since R2022b)
values	Values of dictionary (Since R2022b)
writedictionary	Write dictionary to file (Since R2024b)
Legacy Map Containers
containers.Map	Object that maps unique keys to values
Time Series
Create, Modify, and Plot
addsample	Add data sample to timeseries object
append	Concatenate timeseries objects in time
delsample	Remove sample from timeseries object
detrend	Subtract mean or best-fit line from timeseries object
filter	Modify frequency content of timeseries objects
idealfilter	timeseries ideal filter
plot	Plot timeseries
resample	Resample time vector in timeseries or tscollection
setabstime	Set timeseries or tscollection times as date character vectors
setinterpmethod	Set default interpolation method for timeseries object
setuniformtime	Modify uniform timeseries time vector
synchronize	Synchronize and resample two timeseries objects using common time vector
timeseries	Create timeseries object
timeseries2timetable	Convert timeseries objects to timetable
Query
getabstime	Convert timeseries or tscollection time vector to cell array
getdatasamples	Access timeseries data samples
getdatasamplesize	timeseries data sample size
getinterpmethod	timeseries interpolation method
getqualitydesc	timeseries data quality
getsamples	Subset of timeseries
getsampleusingtime	Subset of timeseries or tscollection data
Descriptive Statistics
iqr	Interquartile range of timeseries data
max	Maximum of timeseries data
mean	Mean of timeseries data
median	Median of timeseries data
min	Minimum of timeseries data
std	Standard deviation of timeseries data
sum	Sum of timeseries data
var	Variance of timeseries data
Collections
addsampletocollection	Add sample to tscollection
addts	Add timeseries to tscollection
delsamplefromcollection	Delete sample from tscollection
gettimeseriesnames	Names of timeseries in tscollection
removets	Remove timeseries from tscollection
settimeseriesnames	Rename timeseries in tscollection
tscollection	Create tscollection object
Events
addevent	Add event to timeseries
delevent	Remove event from timeseries
findEvent	Query tsdata.event by name
getTimeStr	Query tsdata.event times
gettsafteratevent	Create timeseries at or after event
gettsafterevent	Create timeseries after event
gettsatevent	Create timeseries at event
gettsbeforeatevent	Create timeseries at or before event
gettsbeforeevent	Create timeseries before event
gettsbetweenevents	Create timeseries between events
tsdata.event	Create tsdata.event object
Data Type Identification
Numeric Data Types
isfloat	Determine if input is floating-point array
isinteger	Determine whether input is integer array
islogical	Determine if input is logical array
isnumeric	Determine whether input is numeric array
isreal	Determine whether array uses complex storage
issparse	Determine whether input is sparse
Characters and Strings
iscellstr	Determine if input is cell array of character arrays
ischar	Determine if input is character array
isstring	Determine if input is string array
Dates and Times
iscalendarduration	Determine if input is calendar duration array
isdatetime	Determine if input is datetime array
isduration	Determine if input is duration array
Cells, Structures, and Tables
iscell	Determine if input is cell array
isstruct	Determine if input is structure array
istable	Determine if input is table
istabular	Determine if input is table or timetable (Since R2021b)
istimetable	Determine if input is timetable
Other Types
isa	Determine if input is instance of specified class
iscategorical	Determine if input is categorical array
isenum	Determine if variable is enumeration
isgraphics	True for valid graphics object handles
isjava	Determine if input is Java object
isobject	Determine if input is MATLAB object
Information About Variables
class	Class of object
isUnderlyingType	Determine whether input has specified underlying data type
underlyingType	Type of underlying data determining array behavior
validateattributes	Check validity of array
whos	List variables in workspace, with sizes and types
Data Type Conversion
Numbers and Text
cellstr	Convert to cell array of character vectors
char	Character array
int2str	Convert integers to characters
mat2str	Convert matrix to characters
native2unicode	Convert numeric bytes to Unicode characters
num2str	Convert numbers to character array
str2double	Convert strings to double precision values
str2num	Convert character array or string to numeric array
string	String array
unicode2native	Convert Unicode characters to numeric bytes
Hexadecimal and Binary Numbers
base2dec	Convert text representation of base-n integer to double value
bin2dec	Convert text representation of binary integer to double value
dec2base	Convert decimal integer to its base-n representation
dec2bin	Convert decimal integer to its binary representation
dec2hex	Convert decimal integer to its hexadecimal representation
hex2dec	Convert text representation of hexadecimal integer to double value
hex2num	Convert IEEE hexadecimal format to double-precision number
num2hex	Convert single- and double-precision numbers to IEEE hexadecimal format
Dates and Times
cellstr	Convert to cell array of character vectors
char	Character array
datetime	Arrays that represent points in time
duration	Lengths of time in fixed-length units
matlab.datetime.compatibility.convertDatenum	Convert inputs to datetime values in a backward-compatible way (Since R2022a)
string	String array
Categorical Arrays, Tables, and Timetables
array2table	Convert homogeneous array to table
array2timetable	Convert homogeneous array to timetable
categorical	Array that contains values assigned to categories
cell2table	Convert cell array to table
struct2table	Convert structure array to table
table2array	Convert table to homogeneous array
table2cell	Convert table to cell array
table2struct	Convert table to structure array
table2timetable	Convert table to timetable
timetable2table	Convert timetable to table
Cell Arrays and Structures
cell2mat	Convert cell array to ordinary array
cell2struct	Convert cell array to structure array
mat2cell	Convert array to cell array whose cells contain subarrays
num2cell	Convert array to cell array with consistently sized cells
struct2cell	Convert structure to cell array
Operators and Elementary Operations
Arithmetic Operations
Basic Arithmetic
Addition
+	Add numbers, append strings
cumsum	Cumulative sum
movsum	Moving sum
sum	Sum of array elements
Subtraction
-	Subtraction
diff	Differences and approximate derivatives
Multiplication
*	Matrix multiplication
.*	Multiplication
cumprod	Cumulative product
pagemtimes	Page-wise matrix multiplication
prod	Product of array elements
tensorprod	Tensor products between two tensors (Since R2022a)
Division
./	Right array division
.\	Left array division
/	Solve systems of linear equations xA = B for x
\	Solve systems of linear equations Ax = B for x
pagemldivide	Page-wise left matrix divide (Since R2022a)
pagemrdivide	Page-wise right matrix divide (Since R2022a)
Powers
.^	Element-wise power
^	Matrix power
Transpose
'	Complex conjugate transpose
.'	Transpose vector or matrix
pagectranspose	Page-wise complex conjugate transpose
pagetranspose	Page-wise transpose
Array Sign
uminus	Unary minus
uplus	Unary plus
Modulo Division and Rounding
ceil	Round toward positive infinity
fix	Round toward zero
floor	Round toward negative infinity
idivide	Integer division with rounding option
mod	Remainder after division (modulo operation)
rem	Remainder after division
round	Round to nearest decimal or integer
Custom Binary Functions
bsxfun	Apply element-wise operation to two arrays with implicit expansion enabled
Relational Operations
<	Determine less than
<=	Determine less than or equal to
==	Determine equality
>	Determine greater than
>=	Determine greater than or equal to
isapprox	Determine approximate equality (Since R2024b)
isequal	Determine array equality
isequaln	Determine array equality, treating NaN values as equal
~=	Determine inequality
Logical (Boolean) Operations
&	Find logical AND
all	Determine if all array elements are nonzero or true
any	Determine if any array elements are nonzero
false	Logical 0 (false)
find	Find indices and values of nonzero elements
islogical	Determine if input is logical array
logical	Convert numeric values to logicals
Short-Circuit &&	Logical AND with short-circuiting
Short-Circuit ||	Logical OR with short-circuiting
true	Logical 1 (true)
xor	Find logical exclusive-OR
|	Find logical OR
~	Find logical NOT
Set Operations
allunique	Determine if all values are unique (Since R2025a)
innerjoin	Inner join between two tables or timetables
intersect	Intersection of two sets of data
ismember	Find set members of data
ismembertol	Find set members of data within tolerance
join	Combine two tables or timetables by rows using key variables
numunique	Number of unique values (Since R2025a)
outerjoin	Outer join between two tables or timetables
setdiff	Difference of two sets of data
setxor	Exclusive OR of two sets of data
union	Union of two sets of data
unique	Unique values
uniquetol	Unique values within tolerance
Bit-Wise Operations
bitand	Bit-wise AND
bitcmp	Bit-wise complement
bitget	Get bit at specified position
bitor	Bit-wise OR
bitset	Set bit at specific location
bitshift	Shift bits specified number of places
bitxor	Bit-wise XOR
swapbytes	Swap byte ordering
Special Characters
!	Operating system command
%	Code comments, conversion specifier
%{ %}	Block comments
( )	Command grouping, indexing
,	Command separator
.	Decimal point, element-wise operations, indexing
...	Line continuation
:	Vector creation, array subscripting, and for-loop iteration
;	Command and array separator
=	Variable creation and indexed assignment
?	Obtain matlab.metadata.Class object
@	Create anonymous functions and function handles, call superclass methods
[ ]	Array creation and concatenation, element deletion, argument assignment
{ }	Cell array creation, indexing
Loops and Conditional Statements
break	Terminate execution of for or while loop
continue	Pass control to next iteration of for or while loop
end	Terminate block of code or indicate last array index
for	for loop to repeat specified number of times
if, elseif, else	Execute statements if condition is true
parfor	Parallel for-loop
pause	Stop MATLAB execution temporarily
return	Return control to invoking script or function
switch, case, otherwise	Execute one of several groups of statements
try, catch	Execute statements and catch resulting errors
while	while loop to repeat when condition is true
 