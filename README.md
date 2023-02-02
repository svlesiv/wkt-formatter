#  wkt-formatter
Formats WKT string to add a new line and tabs for each WKT property.

## Installation
### npm
`npm install wkt-formatter`

### yarn
`yarn add wkt-formatter`

## Usage
Import `formatWKTString` function to the file where you would like to use it.

```js
import formatWKTString from "wkt-formatter";
```

or 

```js
const formatWKTString = require("wkt-formatter");
```

```js
const inputStr = 'PROJCS["NAD_1927_StatePlane_New_York_East_FIPS_3101",GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",500000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",-74.33333333333333],PARAMETER["Scale_Factor",0.9999666666666667],PARAMETER["Latitude_Of_Origin",40.0],UNIT["Foot_US",0.3048006096012192]]'

const outputString = formatWKTString(inputStr);
```

The output string should be formatted as in the following example:
```
PROJCS["NAD_1927_StatePlane_New_York_East_FIPS_3101", 
	GEOGCS["GCS_North_American_1927", 
		DATUM["D_North_American_1927", 
			SPHEROID["Clarke_1866", 6378206.4, 294.9786982]], 
		PRIMEM["Greenwich", 0.0], 
		UNIT["Degree", 0.0174532925199433]], 
	PROJECTION["Transverse_Mercator"], 
	PARAMETER["False_Easting", 500000.0], 
	PARAMETER["False_Northing", 0.0], 
	PARAMETER["Central_Meridian", -74.33333333333333], 
	PARAMETER["Scale_Factor", 0.9999666666666667], 
	PARAMETER["Latitude_Of_Origin", 40.0], 
	UNIT["Foot_US", 0.3048006096012192]]
```