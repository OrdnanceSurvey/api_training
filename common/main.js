

var config = {
/** Edit this as appropriate, adding your own keys for the services.**/
	"keys": {
		"datahub": "",
		"places": ""
	},
	"urls" : {
		"wmts" : "https://api.os.uk/maps/raster/v1/wmts",
    "zxy" : "https://api.os.uk/maps/raster/v1/zxy",
		"wfs" : "https://api.os.uk/features/v1/wfs",
		"vts" : "https://api.os.uk/maps/vector/v1/vts/",
    "linked": "https://api.os.uk/search/links/v1/",
		"names" : "https://api.os.uk/search/names/v1/",
		"places" : "https://api.ordnancesurvey.co.uk/places/v1/addresses/"
	},
/** End of Key and URL configuration **/
/** DO NOT EDIT THIS SECTION UNLESS YOU ARE 100% SURE OF WHAT YOU'RE DOING! **/
	"projections" : {
		"EPSG:27700" : {
			"proj4js" : "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.999601 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894 +datum=OSGB36 +units=m +no_defs",
			"extent" : [-238375.0,0,700000,1376256],
			"origin" : [-238375,1376256]
		}
	}
/** DO NOT EDIT ABOVE THIS LINE UNLESS YOU ARE 100% SURE OF WHAT YOU'RE DOING! **/
}

/** DO NOT EDIT THIS SECTION UNLESS YOU ARE 100% SURE OF WHAT YOU'RE DOING! **/

proj4.defs("EPSG:27700", config.projections["EPSG:27700"].proj4js);
ol.proj.proj4.register(proj4);
//ol.proj.setProj4(proj4);
var bng = new ol.proj.get('EPSG:27700');
bng.setExtent(config.projections["EPSG:27700"].extent);


/** DO NOT EDIT ABOVE THIS LINE UNLESS YOU ARE 100% SURE OF WHAT YOU'RE DOING! **/