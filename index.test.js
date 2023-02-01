import formatWKTString from "./index.js";

describe("formatWKTString", () => {
  const tests = [
    {
      input:
        'PROJCS["NAD_1927_StatePlane_New_York_East_FIPS_3101",GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",500000.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",-74.33333333333333],PARAMETER["Scale_Factor",0.9999666666666667],PARAMETER["Latitude_Of_Origin",40.0],UNIT["Foot_US",0.3048006096012192]]',
      output:
        'PROJCS["NAD_1927_StatePlane_New_York_East_FIPS_3101", \n\tGEOGCS["GCS_North_American_1927", \n\t\tDATUM["D_North_American_1927", \n\t\t\tSPHEROID["Clarke_1866", 6378206.4, 294.9786982]], \n\t\tPRIMEM["Greenwich", 0.0], \n\t\tUNIT["Degree", 0.0174532925199433]], \n\tPROJECTION["Transverse_Mercator"], \n\tPARAMETER["False_Easting", 500000.0], \n\tPARAMETER["False_Northing", 0.0], \n\tPARAMETER["Central_Meridian", -74.33333333333333], \n\tPARAMETER["Scale_Factor", 0.9999666666666667], \n\tPARAMETER["Latitude_Of_Origin", 40.0], \n\tUNIT["Foot_US", 0.3048006096012192]]',
    },
    {
      input:
        'PROJCRS["NAD27 / New York East",BASEGEOGCRS["NAD27",DATUM["North American Datum 1927",ELLIPSOID["Clarke 1866",6378206.4,294.978698213901,LENGTHUNIT["metre",1,ID["EPSG",9001]],ID["EPSG",7008]],ID["EPSG",6267]],ID["EPSG",4267]],CONVERSION["New York CS27 East zone",METHOD["Transverse Mercator",ID["EPSG",9807]],PARAMETER["Latitude of natural origin",40,ANGLEUNIT["degree",0.0174532925199433,ID["EPSG",9102]],ID["EPSG",8801]],PARAMETER["Longitude of natural origin",-74.3333333333336,ANGLEUNIT["degree",0.0174532925199433,ID["EPSG",9102]],ID["EPSG",8802]],PARAMETER["Scale factor at natural origin",0.999966667,SCALEUNIT["unity",1,ID["EPSG",9201]],ID["EPSG",8805]],PARAMETER["False easting",500000,LENGTHUNIT["US survey foot",0.304800609601219,ID["EPSG",9003]],ID["EPSG",8806]],PARAMETER["False northing",0,LENGTHUNIT["US survey foot",0.304800609601219,ID["EPSG",9003]],ID["EPSG",8807]],ID["EPSG",13101]],CS[Cartesian,2,ID["EPSG",4497]],AXIS["Easting (X)",east],AXIS["Northing (Y)",north],LENGTHUNIT["US survey foot",0.304800609601219,ID["EPSG",9003]],ID["EPSG",32015]]',
      output:
        'PROJCRS["NAD27 / New York East", \n\tBASEGEOGCRS["NAD27", \n\t\tDATUM["North American Datum 1927", \n\t\t\tELLIPSOID["Clarke 1866", 6378206.4, 294.978698213901, \n\t\t\t\tLENGTHUNIT["metre", 1, \n\t\t\t\t\tID["EPSG", 9001]], \n\t\t\t\tID["EPSG", 7008]], \n\t\t\tID["EPSG", 6267]], \n\t\tID["EPSG", 4267]], \n\tCONVERSION["New York CS27 East zone", \n\t\tMETHOD["Transverse Mercator", \n\t\t\tID["EPSG", 9807]], \n\t\tPARAMETER["Latitude of natural origin", 40, \n\t\t\tANGLEUNIT["degree", 0.0174532925199433, \n\t\t\t\tID["EPSG", 9102]], \n\t\t\tID["EPSG", 8801]], \n\t\tPARAMETER["Longitude of natural origin", -74.3333333333336, \n\t\t\tANGLEUNIT["degree", 0.0174532925199433, \n\t\t\t\tID["EPSG", 9102]], \n\t\t\tID["EPSG", 8802]], \n\t\tPARAMETER["Scale factor at natural origin", 0.999966667, \n\t\t\tSCALEUNIT["unity", 1, \n\t\t\t\tID["EPSG", 9201]], \n\t\t\tID["EPSG", 8805]], \n\t\tPARAMETER["False easting", 500000, \n\t\t\tLENGTHUNIT["US survey foot", 0.304800609601219, \n\t\t\t\tID["EPSG", 9003]], \n\t\t\tID["EPSG", 8806]], \n\t\tPARAMETER["False northing", 0, \n\t\t\tLENGTHUNIT["US survey foot", 0.304800609601219, \n\t\t\t\tID["EPSG", 9003]], \n\t\t\tID["EPSG", 8807]], \n\t\tID["EPSG", 13101]], \n\tCS[Cartesian, 2, \n\t\tID["EPSG", 4497]], \n\tAXIS["Easting (X)", east], \n\tAXIS["Northing (Y)", north], \n\tLENGTHUNIT["US survey foot", 0.304800609601219, \n\t\tID["EPSG", 9003]], \n\tID["EPSG", 32015]]',
    },
    {
      input:
        'PROJCS["Antigua 1943 / British West Indies Grid",\n  GEOGCS["Antigua 1943",\n    DATUM["Antigua 1943",\n      SPHEROID["Clarke 1880 (RGS)", 6378249.145, 293.465],\n      TOWGS84[-255.0, -15.0, 71.0]],\n      PRIMEM["Greenwich", 0.0],\n    UNIT["degree", 0.017453292519943295],\n    AXIS["Geodetic latitude", NORTH],\n    AXIS["Geodetic longitude", EAST]],\n  PROJECTION["Transverse_Mercator", AUTHORITY["EPSG", "9807"]],\n  PARAMETER["latitude_of_origin", 0.0],\n  PARAMETER["central_meridian", -62.0],\n  PARAMETER["scale_factor", 0.9995],\n  PARAMETER["false_easting", 400000.0],\n  PARAMETER["false_northing", 0.0],\n  UNIT["metre", 1],\n  AXIS["Easting", EAST],\n  AXIS["Northing", NORTH],\n  AUTHORITY["EPSG", "2001"]]',
      output:
        'PROJCS["Antigua 1943 / British West Indies Grid", \n\tGEOGCS["Antigua 1943", \n\t\tDATUM["Antigua 1943", \n\t\t\tSPHEROID["Clarke 1880 (RGS)", 6378249.145, 293.465], \n\t\t\tTOWGS84[-255.0, -15.0, 71.0]], \n\t\tPRIMEM["Greenwich", 0.0], \n\t\tUNIT["degree", 0.017453292519943295], \n\t\tAXIS["Geodetic latitude", NORTH], \n\t\tAXIS["Geodetic longitude", EAST]], \n\tPROJECTION["Transverse_Mercator", \n\t\tAUTHORITY["EPSG", "9807"]], \n\tPARAMETER["latitude_of_origin", 0.0], \n\tPARAMETER["central_meridian", -62.0], \n\tPARAMETER["scale_factor", 0.9995], \n\tPARAMETER["false_easting", 400000.0], \n\tPARAMETER["false_northing", 0.0], \n\tUNIT["metre", 1], \n\tAXIS["Easting", EAST], \n\tAXIS["Northing", NORTH], \n\tAUTHORITY["EPSG", "2001"]]',
    },
  ];

  test("should format WKT string", () => {
    tests.forEach(({ input, output }) =>
      expect(formatWKTString(input)).toBe(output)
    );
  });
});
