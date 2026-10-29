var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_REDVIAL_1 = new ol.format.GeoJSON();
var features_REDVIAL_1 = format_REDVIAL_1.readFeatures(json_REDVIAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDVIAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDVIAL_1.addFeatures(features_REDVIAL_1);
var lyr_REDVIAL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDVIAL_1, 
                style: style_REDVIAL_1,
                popuplayertitle: 'RED VIAL',
                interactive: false,
                title: '<img src="styles/legend/REDVIAL_1.png" /> RED VIAL'
            });
var format_AREASVERDES_2 = new ol.format.GeoJSON();
var features_AREASVERDES_2 = format_AREASVERDES_2.readFeatures(json_AREASVERDES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREASVERDES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASVERDES_2.addFeatures(features_AREASVERDES_2);
var lyr_AREASVERDES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASVERDES_2, 
                style: style_AREASVERDES_2,
                popuplayertitle: 'AREAS VERDES',
                interactive: false,
                title: '<img src="styles/legend/AREASVERDES_2.png" /> AREAS VERDES'
            });

var vectorTileUrl_CLINICAS_3 = 'layers/CLINICAS_3-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_CLINICAS_3 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_CLINICAS_3,
    attributions: ' '
});
var lyr_CLINICAS_3 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_CLINICAS_3,
    sourceType: 'pbf',
    popuplayertitle: 'CLINICAS',
    extent: ol.proj.transformExtent([-8904102.521613868, -364143.04005283845, -8899235.639000999, -361678.095999474], 'EPSG:3857', 'EPSG:3857'),
    interactive: false,
    style: style_CLINICAS_3,
    title: '<img src="styles/legend/CLINICAS_3.png" /> CLINICAS'
});

var format_BUFFER_SALUD_4 = new ol.format.GeoJSON();
var features_BUFFER_SALUD_4 = format_BUFFER_SALUD_4.readFeatures(json_BUFFER_SALUD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER_SALUD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER_SALUD_4.addFeatures(features_BUFFER_SALUD_4);
var lyr_BUFFER_SALUD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER_SALUD_4, 
                style: style_BUFFER_SALUD_4,
                popuplayertitle: 'BUFFER_SALUD',
                interactive: false,
                title: '<img src="styles/legend/BUFFER_SALUD_4.png" /> BUFFER_SALUD'
            });
var format_HOSPITAL_5 = new ol.format.GeoJSON();
var features_HOSPITAL_5 = format_HOSPITAL_5.readFeatures(json_HOSPITAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPITAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITAL_5.addFeatures(features_HOSPITAL_5);
var lyr_HOSPITAL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOSPITAL_5, 
                style: style_HOSPITAL_5,
                popuplayertitle: 'HOSPITAL',
                interactive: false,
                title: '<img src="styles/legend/HOSPITAL_5.png" /> HOSPITAL'
            });
var format_HOSPITALESALEDAOS_6 = new ol.format.GeoJSON();
var features_HOSPITALESALEDAOS_6 = format_HOSPITALESALEDAOS_6.readFeatures(json_HOSPITALESALEDAOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPITALESALEDAOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITALESALEDAOS_6.addFeatures(features_HOSPITALESALEDAOS_6);
cluster_HOSPITALESALEDAOS_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_HOSPITALESALEDAOS_6
});
var lyr_HOSPITALESALEDAOS_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HOSPITALESALEDAOS_6, 
                style: style_HOSPITALESALEDAOS_6,
                popuplayertitle: 'HOSPITALES ALEDAÑOS',
                interactive: false,
                title: '<img src="styles/legend/HOSPITALESALEDAOS_6.png" /> HOSPITALES ALEDAÑOS'
            });
var format_EQUIPAMIENTOEDUCACIN_7 = new ol.format.GeoJSON();
var features_EQUIPAMIENTOEDUCACIN_7 = format_EQUIPAMIENTOEDUCACIN_7.readFeatures(json_EQUIPAMIENTOEDUCACIN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EQUIPAMIENTOEDUCACIN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMIENTOEDUCACIN_7.addFeatures(features_EQUIPAMIENTOEDUCACIN_7);
var lyr_EQUIPAMIENTOEDUCACIN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EQUIPAMIENTOEDUCACIN_7, 
                style: style_EQUIPAMIENTOEDUCACIN_7,
                popuplayertitle: 'EQUIPAMIENTO EDUCACIÓN',
                interactive: true,
                title: '<img src="styles/legend/EQUIPAMIENTOEDUCACIN_7.png" /> EQUIPAMIENTO EDUCACIÓN'
            });
var format_BUFFER24DESEPTIEMBRE_8 = new ol.format.GeoJSON();
var features_BUFFER24DESEPTIEMBRE_8 = format_BUFFER24DESEPTIEMBRE_8.readFeatures(json_BUFFER24DESEPTIEMBRE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER24DESEPTIEMBRE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER24DESEPTIEMBRE_8.addFeatures(features_BUFFER24DESEPTIEMBRE_8);
var lyr_BUFFER24DESEPTIEMBRE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER24DESEPTIEMBRE_8, 
                style: style_BUFFER24DESEPTIEMBRE_8,
                popuplayertitle: 'BUFFER 24 DE SEPTIEMBRE',
                interactive: false,
                title: '<img src="styles/legend/BUFFER24DESEPTIEMBRE_8.png" /> BUFFER 24 DE SEPTIEMBRE'
            });
var format_BUFFERLASBRISAS_9 = new ol.format.GeoJSON();
var features_BUFFERLASBRISAS_9 = format_BUFFERLASBRISAS_9.readFeatures(json_BUFFERLASBRISAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFERLASBRISAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFERLASBRISAS_9.addFeatures(features_BUFFERLASBRISAS_9);
var lyr_BUFFERLASBRISAS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFERLASBRISAS_9, 
                style: style_BUFFERLASBRISAS_9,
                popuplayertitle: 'BUFFER LAS BRISAS',
                interactive: false,
                title: '<img src="styles/legend/BUFFERLASBRISAS_9.png" /> BUFFER LAS BRISAS'
            });
var format_BUFFERLOSVERGELES_10 = new ol.format.GeoJSON();
var features_BUFFERLOSVERGELES_10 = format_BUFFERLOSVERGELES_10.readFeatures(json_BUFFERLOSVERGELES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFERLOSVERGELES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFERLOSVERGELES_10.addFeatures(features_BUFFERLOSVERGELES_10);
var lyr_BUFFERLOSVERGELES_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFERLOSVERGELES_10, 
                style: style_BUFFERLOSVERGELES_10,
                popuplayertitle: 'BUFFER LOS VERGELES',
                interactive: false,
                title: '<img src="styles/legend/BUFFERLOSVERGELES_10.png" /> BUFFER LOS VERGELES'
            });
var format_BUFFER_RAYMUNDOPALACIOS_11 = new ol.format.GeoJSON();
var features_BUFFER_RAYMUNDOPALACIOS_11 = format_BUFFER_RAYMUNDOPALACIOS_11.readFeatures(json_BUFFER_RAYMUNDOPALACIOS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER_RAYMUNDOPALACIOS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER_RAYMUNDOPALACIOS_11.addFeatures(features_BUFFER_RAYMUNDOPALACIOS_11);
var lyr_BUFFER_RAYMUNDOPALACIOS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER_RAYMUNDOPALACIOS_11, 
                style: style_BUFFER_RAYMUNDOPALACIOS_11,
                popuplayertitle: 'BUFFER_RAYMUNDO PALACIOS',
                interactive: false,
                title: '<img src="styles/legend/BUFFER_RAYMUNDOPALACIOS_11.png" /> BUFFER_RAYMUNDO PALACIOS'
            });
var format_BUFER_ISMAELPEREZPAZMIO_12 = new ol.format.GeoJSON();
var features_BUFER_ISMAELPEREZPAZMIO_12 = format_BUFER_ISMAELPEREZPAZMIO_12.readFeatures(json_BUFER_ISMAELPEREZPAZMIO_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFER_ISMAELPEREZPAZMIO_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFER_ISMAELPEREZPAZMIO_12.addFeatures(features_BUFER_ISMAELPEREZPAZMIO_12);
var lyr_BUFER_ISMAELPEREZPAZMIO_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFER_ISMAELPEREZPAZMIO_12, 
                style: style_BUFER_ISMAELPEREZPAZMIO_12,
                popuplayertitle: 'BUFER_ISMAEL PEREZ PAZMIÑO',
                interactive: false,
                title: '<img src="styles/legend/BUFER_ISMAELPEREZPAZMIO_12.png" /> BUFER_ISMAEL PEREZ PAZMIÑO'
            });
var format_24DESEPTIEMBRE2_13 = new ol.format.GeoJSON();
var features_24DESEPTIEMBRE2_13 = format_24DESEPTIEMBRE2_13.readFeatures(json_24DESEPTIEMBRE2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24DESEPTIEMBRE2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24DESEPTIEMBRE2_13.addFeatures(features_24DESEPTIEMBRE2_13);
var lyr_24DESEPTIEMBRE2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24DESEPTIEMBRE2_13, 
                style: style_24DESEPTIEMBRE2_13,
                popuplayertitle: '24 DE SEPTIEMBRE2',
                interactive: false,
                title: '<img src="styles/legend/24DESEPTIEMBRE2_13.png" /> 24 DE SEPTIEMBRE2'
            });
var format_LOSVERGELES2_14 = new ol.format.GeoJSON();
var features_LOSVERGELES2_14 = format_LOSVERGELES2_14.readFeatures(json_LOSVERGELES2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOSVERGELES2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOSVERGELES2_14.addFeatures(features_LOSVERGELES2_14);
var lyr_LOSVERGELES2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOSVERGELES2_14, 
                style: style_LOSVERGELES2_14,
                popuplayertitle: 'LOS VERGELES2',
                interactive: false,
                title: '<img src="styles/legend/LOSVERGELES2_14.png" /> LOS VERGELES2'
            });
var format_LASBRISAS_15 = new ol.format.GeoJSON();
var features_LASBRISAS_15 = format_LASBRISAS_15.readFeatures(json_LASBRISAS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LASBRISAS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LASBRISAS_15.addFeatures(features_LASBRISAS_15);
var lyr_LASBRISAS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LASBRISAS_15, 
                style: style_LASBRISAS_15,
                popuplayertitle: 'LAS BRISAS',
                interactive: false,
                title: '<img src="styles/legend/LASBRISAS_15.png" /> LAS BRISAS'
            });
var format_RAYMUNDOPALACIOS_16 = new ol.format.GeoJSON();
var features_RAYMUNDOPALACIOS_16 = format_RAYMUNDOPALACIOS_16.readFeatures(json_RAYMUNDOPALACIOS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAYMUNDOPALACIOS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAYMUNDOPALACIOS_16.addFeatures(features_RAYMUNDOPALACIOS_16);
var lyr_RAYMUNDOPALACIOS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAYMUNDOPALACIOS_16, 
                style: style_RAYMUNDOPALACIOS_16,
                popuplayertitle: 'RAYMUNDO PALACIOS',
                interactive: false,
                title: '<img src="styles/legend/RAYMUNDOPALACIOS_16.png" /> RAYMUNDO PALACIOS'
            });
var format_ISMAELPEREZPAZMIO_17 = new ol.format.GeoJSON();
var features_ISMAELPEREZPAZMIO_17 = format_ISMAELPEREZPAZMIO_17.readFeatures(json_ISMAELPEREZPAZMIO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISMAELPEREZPAZMIO_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISMAELPEREZPAZMIO_17.addFeatures(features_ISMAELPEREZPAZMIO_17);
var lyr_ISMAELPEREZPAZMIO_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISMAELPEREZPAZMIO_17, 
                style: style_ISMAELPEREZPAZMIO_17,
                popuplayertitle: 'ISMAEL PEREZ PAZMIÑO',
                interactive: false,
                title: '<img src="styles/legend/ISMAELPEREZPAZMIO_17.png" /> ISMAEL PEREZ PAZMIÑO'
            });
var group_GRUPOBUFFERSSECTORES = new ol.layer.Group({
                                layers: [lyr_BUFFER24DESEPTIEMBRE_8,lyr_BUFFERLASBRISAS_9,lyr_BUFFERLOSVERGELES_10,lyr_BUFFER_RAYMUNDOPALACIOS_11,lyr_BUFER_ISMAELPEREZPAZMIO_12,],
                                fold: 'open',
                                title: 'GRUPO BUFFERS SECTORES'});
var group_EQUIPAMIENTOEDUCACIN = new ol.layer.Group({
                                layers: [lyr_EQUIPAMIENTOEDUCACIN_7,],
                                fold: 'open',
                                title: 'EQUIPAMIENTO EDUCACIÓN'});
var group_EQUIPAMIENTOSALUD = new ol.layer.Group({
                                layers: [lyr_CLINICAS_3,lyr_BUFFER_SALUD_4,lyr_HOSPITAL_5,lyr_HOSPITALESALEDAOS_6,],
                                fold: 'open',
                                title: 'EQUIPAMIENTO SALUD'});

lyr_GoogleSatellite_0.setVisible(true);lyr_REDVIAL_1.setVisible(true);lyr_AREASVERDES_2.setVisible(true);lyr_CLINICAS_3.setVisible(true);lyr_BUFFER_SALUD_4.setVisible(true);lyr_HOSPITAL_5.setVisible(true);lyr_HOSPITALESALEDAOS_6.setVisible(true);lyr_EQUIPAMIENTOEDUCACIN_7.setVisible(true);lyr_BUFFER24DESEPTIEMBRE_8.setVisible(true);lyr_BUFFERLASBRISAS_9.setVisible(true);lyr_BUFFERLOSVERGELES_10.setVisible(true);lyr_BUFFER_RAYMUNDOPALACIOS_11.setVisible(true);lyr_BUFER_ISMAELPEREZPAZMIO_12.setVisible(true);lyr_24DESEPTIEMBRE2_13.setVisible(true);lyr_LOSVERGELES2_14.setVisible(true);lyr_LASBRISAS_15.setVisible(true);lyr_RAYMUNDOPALACIOS_16.setVisible(true);lyr_ISMAELPEREZPAZMIO_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_REDVIAL_1,lyr_AREASVERDES_2,group_EQUIPAMIENTOSALUD,group_EQUIPAMIENTOEDUCACIN,group_GRUPOBUFFERSSECTORES,lyr_24DESEPTIEMBRE2_13,lyr_LOSVERGELES2_14,lyr_LASBRISAS_15,lyr_RAYMUNDOPALACIOS_16,lyr_ISMAELPEREZPAZMIO_17];
lyr_REDVIAL_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'informal': 'informal', 'covered': 'covered', 'check_date:surface': 'check_date:surface', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', 'maxspeed:backward': 'maxspeed:backward', 'maxspeed:forward': 'maxspeed:forward', 'addr:street': 'addr:street', 'is_in:city': 'is_in:city', 'embankment': 'embankment', 'name_1': 'name_1', 'city': 'city', 'segregated': 'segregated', 'sidewalk': 'sidewalk', 'turn:lanes': 'turn:lanes', 'maxweight:signed': 'maxweight:signed', 'footway': 'footway', 'crossing': 'crossing', 'bicycle': 'bicycle', 'destination:ref': 'destination:ref', 'horse': 'horse', 'maxheight': 'maxheight', 'parking:both': 'parking:both', 'maxweight': 'maxweight', 'tracktype': 'tracktype', 'service': 'service', 'step_count': 'step_count', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'access': 'access', 'oneway:bicycle': 'oneway:bicycle', 'cycleway:left:oneway': 'cycleway:left:oneway', 'cycleway:both:segregated': 'cycleway:both:segregated', 'cycleway:both': 'cycleway:both', 'noname': 'noname', 'official_name': 'official_name', 'maxheight:signed': 'maxheight:signed', 'junction': 'junction', 'foot': 'foot', 'layer': 'layer', 'bridge': 'bridge', 'lit': 'lit', 'old_name': 'old_name', 'busway:right': 'busway:right', 'bus:lanes': 'bus:lanes', 'access:lanes': 'access:lanes', 'sidewalk:right': 'sidewalk:right', 'sidewalk:left': 'sidewalk:left', 'sidewalk:both': 'sidewalk:both', 'lane_markings': 'lane_markings', 'shoulder': 'shoulder', 'addr:city': 'addr:city', 'ref': 'ref', 'destination': 'destination', 'cycleway:lane': 'cycleway:lane', 'cycleway': 'cycleway', 'maxspeed': 'maxspeed', 'surface': 'surface', 'alt_name': 'alt_name', 'oneway': 'oneway', 'name': 'name', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'lanes': 'lanes', });
lyr_AREASVERDES_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'operator_t': 'operator_t', 'operator': 'operator', 'addr_stree': 'addr_stree', 'opening_ho': 'opening_ho', 'addr_city': 'addr_city', 'name_es': 'name_es', 'name': 'name', });
lyr_CLINICAS_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'healthcare': 'healthcare', 'phone': 'phone', 'name_en': 'name_en', 'internet_a': 'internet_a', 'name_es': 'name_es', 'check_date': 'check_date', 'opening_ho': 'opening_ho', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', });
lyr_BUFFER_SALUD_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:height': 'roof:height', 'building:colour': 'building:colour', 'residential': 'residential', 'description': 'description', 'location': 'location', 'layer': 'layer', 'ec:tipo': 'ec:tipo', 'ec:import': 'ec:import', 'ec:date': 'ec:date', 'contact:phone': 'contact:phone', 'target': 'target', 'name:en': 'name:en', 'diplomatic': 'diplomatic', 'country': 'country', 'consulate': 'consulate', 'addr:neighbourhood': 'addr:neighbourhood', 'addr:full': 'addr:full', 'addr:block': 'addr:block', 'house': 'house', 'height': 'height', 'smoking': 'smoking', 'payment:cash': 'payment:cash', 'roof:colour': 'roof:colour', 'public_transport': 'public_transport', 'internet_access': 'internet_access', 'bus': 'bus', 'healthcare:speciality': 'healthcare:speciality', 'disused:tourism': 'disused:tourism', 'disused:religion': 'disused:religion', 'disused:amenity': 'disused:amenity', 'wpt_description': 'wpt_description', 'ele': 'ele', 'diet:seafood': 'diet:seafood', 'cuisine': 'cuisine', 'healthcare': 'healthcare', 'name:es': 'name:es', 'historic': 'historic', 'sport': 'sport', 'landuse': 'landuse', 'alt_name': 'alt_name', 'office': 'office', 'brand': 'brand', 'atm': 'atm', 'opening_hours:drive_through': 'opening_hours:drive_through', 'drive_through': 'drive_through', 'addr:postcode': 'addr:postcode', 'opening_hours': 'opening_hours', 'leisure': 'leisure', 'designation': 'designation', 'shop': 'shop', 'addr:housenumber': 'addr:housenumber', 'check_date': 'check_date', 'website': 'website', 'religion': 'religion', 'phone': 'phone', 'email': 'email', 'denomination': 'denomination', 'contact:youtube': 'contact:youtube', 'contact:facebook': 'contact:facebook', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'building:levels': 'building:levels', 'operator': 'operator', 'amenity': 'amenity', 'addr:city': 'addr:city', 'type': 'type', 'tourism': 'tourism', 'name': 'name', 'addr:street': 'addr:street', });
lyr_HOSPITAL_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'emergency': 'emergency', 'operator_w': 'operator_w', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'name': 'name', 'amenity': 'amenity', });
lyr_HOSPITALESALEDAOS_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'website': 'website', 'phone': 'phone', 'operator_t': 'operator_t', 'operator': 'operator', 'name': 'name', 'healthca_1': 'healthca_1', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', });
lyr_EQUIPAMIENTOEDUCACIN_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'education': 'education', 'isced:level': 'isced:level', 'fee': 'fee', 'public_transport': 'public_transport', 'bus': 'bus', 'internet_access': 'internet_access', 'ec:sede_tipo': 'ec:sede_tipo', 'ec:campus': 'ec:campus', 'contact:website': 'contact:website', 'healthcare:speciality': 'healthcare:speciality', 'diet:seafood': 'diet:seafood', 'cuisine': 'cuisine', 'name:es': 'name:es', 'parking': 'parking', 'access': 'access', 'alt_name': 'alt_name', 'atm': 'atm', 'opening_hours:drive_through': 'opening_hours:drive_through', 'drive_through': 'drive_through', 'emergency': 'emergency', 'building:levels': 'building:levels', 'operator:wikidata': 'operator:wikidata', 'operator:type': 'operator:type', 'operator:short': 'operator:short', 'healthcare': 'healthcare', 'brand': 'brand', 'ec:tipo': 'ec:tipo', 'ec:import': 'ec:import', 'ec:date': 'ec:date', 'contact:phone': 'contact:phone', 'addr:full': 'addr:full', 'landuse': 'landuse', 'tourism': 'tourism', 'check_date': 'check_date', 'religion': 'religion', 'phone': 'phone', 'email': 'email', 'denomination': 'denomination', 'contact:youtube': 'contact:youtube', 'contact:facebook': 'contact:facebook', 'website': 'website', 'opening_hours': 'opening_hours', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'type': 'type', 'operator': 'operator', 'name': 'name', 'building': 'building', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:city': 'addr:city', });
lyr_BUFFER24DESEPTIEMBRE_8.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perimetr_m': 'Perimetr_m', });
lyr_BUFFERLASBRISAS_9.set('fieldAliases', {'id': 'id', 'Área_KM2': 'Área_KM2', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', });
lyr_BUFFERLOSVERGELES_10.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', 'Area_m2': 'Area_m2', });
lyr_BUFFER_RAYMUNDOPALACIOS_11.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', });
lyr_BUFER_ISMAELPEREZPAZMIO_12.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perimetr_m': 'Perimetr_m', });
lyr_24DESEPTIEMBRE2_13.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perimetr_m': 'Perimetr_m', });
lyr_LOSVERGELES2_14.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', 'Area_m2': 'Area_m2', });
lyr_LASBRISAS_15.set('fieldAliases', {'id': 'id', 'Área_KM2': 'Área_KM2', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', });
lyr_RAYMUNDOPALACIOS_16.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', });
lyr_ISMAELPEREZPAZMIO_17.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perimetr_m': 'Perimetr_m', });
lyr_REDVIAL_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'informal': 'TextEdit', 'covered': 'TextEdit', 'check_date:surface': 'TextEdit', 'turn:lanes:forward': 'TextEdit', 'turn:lanes:backward': 'TextEdit', 'maxspeed:backward': 'TextEdit', 'maxspeed:forward': 'TextEdit', 'addr:street': 'TextEdit', 'is_in:city': 'TextEdit', 'embankment': 'TextEdit', 'name_1': 'TextEdit', 'city': 'TextEdit', 'segregated': 'TextEdit', 'sidewalk': 'TextEdit', 'turn:lanes': 'TextEdit', 'maxweight:signed': 'TextEdit', 'footway': 'TextEdit', 'crossing': 'TextEdit', 'bicycle': 'TextEdit', 'destination:ref': 'TextEdit', 'horse': 'TextEdit', 'maxheight': 'TextEdit', 'parking:both': 'TextEdit', 'maxweight': 'TextEdit', 'tracktype': 'TextEdit', 'service': 'TextEdit', 'step_count': 'TextEdit', 'ramp': 'TextEdit', 'incline': 'TextEdit', 'handrail': 'TextEdit', 'access': 'TextEdit', 'oneway:bicycle': 'TextEdit', 'cycleway:left:oneway': 'TextEdit', 'cycleway:both:segregated': 'TextEdit', 'cycleway:both': 'TextEdit', 'noname': 'TextEdit', 'official_name': 'TextEdit', 'maxheight:signed': 'TextEdit', 'junction': 'TextEdit', 'foot': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'lit': 'TextEdit', 'old_name': 'TextEdit', 'busway:right': 'TextEdit', 'bus:lanes': 'TextEdit', 'access:lanes': 'TextEdit', 'sidewalk:right': 'TextEdit', 'sidewalk:left': 'TextEdit', 'sidewalk:both': 'TextEdit', 'lane_markings': 'TextEdit', 'shoulder': 'TextEdit', 'addr:city': 'TextEdit', 'ref': 'TextEdit', 'destination': 'TextEdit', 'cycleway:lane': 'TextEdit', 'cycleway': 'TextEdit', 'maxspeed': 'TextEdit', 'surface': 'TextEdit', 'alt_name': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lanes:forward': 'TextEdit', 'lanes:backward': 'TextEdit', 'lanes': 'TextEdit', });
lyr_AREASVERDES_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'operator_t': 'TextEdit', 'operator': 'TextEdit', 'addr_stree': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_city': 'TextEdit', 'name_es': 'TextEdit', 'name': 'TextEdit', });
lyr_CLINICAS_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'healthcare': 'TextEdit', 'phone': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'name_es': 'TextEdit', 'check_date': 'TextEdit', 'opening_ho': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_BUFFER_SALUD_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'roof:height': 'TextEdit', 'building:colour': 'TextEdit', 'residential': 'TextEdit', 'description': 'TextEdit', 'location': 'TextEdit', 'layer': 'TextEdit', 'ec:tipo': 'TextEdit', 'ec:import': 'TextEdit', 'ec:date': 'TextEdit', 'contact:phone': 'TextEdit', 'target': 'TextEdit', 'name:en': 'TextEdit', 'diplomatic': 'TextEdit', 'country': 'TextEdit', 'consulate': 'TextEdit', 'addr:neighbourhood': 'TextEdit', 'addr:full': 'TextEdit', 'addr:block': 'TextEdit', 'house': 'TextEdit', 'height': 'TextEdit', 'smoking': 'TextEdit', 'payment:cash': 'TextEdit', 'roof:colour': 'TextEdit', 'public_transport': 'TextEdit', 'internet_access': 'TextEdit', 'bus': 'TextEdit', 'healthcare:speciality': 'TextEdit', 'disused:tourism': 'TextEdit', 'disused:religion': 'TextEdit', 'disused:amenity': 'TextEdit', 'wpt_description': 'TextEdit', 'ele': 'TextEdit', 'diet:seafood': 'TextEdit', 'cuisine': 'TextEdit', 'healthcare': 'TextEdit', 'name:es': 'TextEdit', 'historic': 'TextEdit', 'sport': 'TextEdit', 'landuse': 'TextEdit', 'alt_name': 'TextEdit', 'office': 'TextEdit', 'brand': 'TextEdit', 'atm': 'TextEdit', 'opening_hours:drive_through': 'TextEdit', 'drive_through': 'TextEdit', 'addr:postcode': 'TextEdit', 'opening_hours': 'TextEdit', 'leisure': 'TextEdit', 'designation': 'TextEdit', 'shop': 'TextEdit', 'addr:housenumber': 'TextEdit', 'check_date': 'TextEdit', 'website': 'TextEdit', 'religion': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'denomination': 'TextEdit', 'contact:youtube': 'TextEdit', 'contact:facebook': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'building:levels': 'TextEdit', 'operator': 'TextEdit', 'amenity': 'TextEdit', 'addr:city': 'TextEdit', 'type': 'TextEdit', 'tourism': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', });
lyr_HOSPITAL_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'emergency': 'TextEdit', 'operator_w': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', });
lyr_HOSPITALESALEDAOS_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'healthcare': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'operator_t': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'healthca_1': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_EQUIPAMIENTOEDUCACIN_7.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'education': 'TextEdit', 'isced:level': 'TextEdit', 'fee': 'TextEdit', 'public_transport': 'TextEdit', 'bus': 'TextEdit', 'internet_access': 'TextEdit', 'ec:sede_tipo': 'TextEdit', 'ec:campus': 'TextEdit', 'contact:website': 'TextEdit', 'healthcare:speciality': 'TextEdit', 'diet:seafood': 'TextEdit', 'cuisine': 'TextEdit', 'name:es': 'TextEdit', 'parking': 'TextEdit', 'access': 'TextEdit', 'alt_name': 'TextEdit', 'atm': 'TextEdit', 'opening_hours:drive_through': 'TextEdit', 'drive_through': 'TextEdit', 'emergency': 'TextEdit', 'building:levels': 'TextEdit', 'operator:wikidata': 'TextEdit', 'operator:type': 'TextEdit', 'operator:short': 'TextEdit', 'healthcare': 'TextEdit', 'brand': 'TextEdit', 'ec:tipo': 'TextEdit', 'ec:import': 'TextEdit', 'ec:date': 'TextEdit', 'contact:phone': 'TextEdit', 'addr:full': 'TextEdit', 'landuse': 'TextEdit', 'tourism': 'TextEdit', 'check_date': 'TextEdit', 'religion': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'denomination': 'TextEdit', 'contact:youtube': 'TextEdit', 'contact:facebook': 'TextEdit', 'website': 'TextEdit', 'opening_hours': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'type': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr:street': 'TextEdit', 'addr:city': 'TextEdit', });
lyr_BUFFER24DESEPTIEMBRE_8.set('fieldImages', {'id': 'Range', 'Área_m2': 'TextEdit', 'Perimetr_m': 'TextEdit', });
lyr_BUFFERLASBRISAS_9.set('fieldImages', {'id': 'Range', 'Área_KM2': 'TextEdit', 'Área_m2': 'TextEdit', 'Perímetr_': 'TextEdit', });
lyr_BUFFERLOSVERGELES_10.set('fieldImages', {'id': 'TextEdit', 'Área_m2': 'TextEdit', 'Perímetr_': 'TextEdit', 'Area_m2': 'TextEdit', });
lyr_BUFFER_RAYMUNDOPALACIOS_11.set('fieldImages', {'id': 'Range', 'Área_m2': 'TextEdit', 'Perímetr_': 'TextEdit', });
lyr_BUFER_ISMAELPEREZPAZMIO_12.set('fieldImages', {'id': 'Range', 'Área_m2': 'TextEdit', 'Perimetr_m': 'TextEdit', });
lyr_24DESEPTIEMBRE2_13.set('fieldImages', {'id': '', 'Área_m2': '', 'Perimetr_m': '', });
lyr_LOSVERGELES2_14.set('fieldImages', {'id': '', 'Área_m2': '', 'Perímetr_': '', 'Area_m2': '', });
lyr_LASBRISAS_15.set('fieldImages', {'id': '', 'Área_KM2': '', 'Área_m2': '', 'Perímetr_': '', });
lyr_RAYMUNDOPALACIOS_16.set('fieldImages', {'id': '', 'Área_m2': '', 'Perímetr_': '', });
lyr_ISMAELPEREZPAZMIO_17.set('fieldImages', {'id': '', 'Área_m2': '', 'Perimetr_m': '', });
lyr_REDVIAL_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'informal': 'no label', 'covered': 'no label', 'check_date:surface': 'no label', 'turn:lanes:forward': 'no label', 'turn:lanes:backward': 'no label', 'maxspeed:backward': 'no label', 'maxspeed:forward': 'no label', 'addr:street': 'no label', 'is_in:city': 'no label', 'embankment': 'no label', 'name_1': 'no label', 'city': 'no label', 'segregated': 'no label', 'sidewalk': 'no label', 'turn:lanes': 'no label', 'maxweight:signed': 'no label', 'footway': 'no label', 'crossing': 'no label', 'bicycle': 'no label', 'destination:ref': 'no label', 'horse': 'no label', 'maxheight': 'no label', 'parking:both': 'no label', 'maxweight': 'no label', 'tracktype': 'no label', 'service': 'no label', 'step_count': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'access': 'no label', 'oneway:bicycle': 'no label', 'cycleway:left:oneway': 'no label', 'cycleway:both:segregated': 'no label', 'cycleway:both': 'no label', 'noname': 'no label', 'official_name': 'no label', 'maxheight:signed': 'no label', 'junction': 'no label', 'foot': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lit': 'no label', 'old_name': 'no label', 'busway:right': 'no label', 'bus:lanes': 'no label', 'access:lanes': 'no label', 'sidewalk:right': 'no label', 'sidewalk:left': 'no label', 'sidewalk:both': 'no label', 'lane_markings': 'no label', 'shoulder': 'no label', 'addr:city': 'no label', 'ref': 'no label', 'destination': 'no label', 'cycleway:lane': 'no label', 'cycleway': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'alt_name': 'no label', 'oneway': 'no label', 'name': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'lanes': 'no label', });
lyr_AREASVERDES_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'addr_stree': 'no label', 'opening_ho': 'no label', 'addr_city': 'no label', 'name_es': 'no label', 'name': 'no label', });
lyr_CLINICAS_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'healthcare': 'no label', 'phone': 'no label', 'name_en': 'no label', 'internet_a': 'no label', 'name_es': 'no label', 'check_date': 'no label', 'opening_ho': 'no label', 'name': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', });
lyr_BUFFER_SALUD_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:height': 'no label', 'building:colour': 'no label', 'residential': 'no label', 'description': 'no label', 'location': 'no label', 'layer': 'no label', 'ec:tipo': 'no label', 'ec:import': 'no label', 'ec:date': 'no label', 'contact:phone': 'no label', 'target': 'no label', 'name:en': 'no label', 'diplomatic': 'no label', 'country': 'no label', 'consulate': 'no label', 'addr:neighbourhood': 'no label', 'addr:full': 'no label', 'addr:block': 'no label', 'house': 'no label', 'height': 'no label', 'smoking': 'no label', 'payment:cash': 'no label', 'roof:colour': 'no label', 'public_transport': 'no label', 'internet_access': 'no label', 'bus': 'no label', 'healthcare:speciality': 'no label', 'disused:tourism': 'no label', 'disused:religion': 'no label', 'disused:amenity': 'no label', 'wpt_description': 'no label', 'ele': 'no label', 'diet:seafood': 'no label', 'cuisine': 'no label', 'healthcare': 'no label', 'name:es': 'no label', 'historic': 'no label', 'sport': 'no label', 'landuse': 'no label', 'alt_name': 'no label', 'office': 'no label', 'brand': 'no label', 'atm': 'no label', 'opening_hours:drive_through': 'no label', 'drive_through': 'no label', 'addr:postcode': 'no label', 'opening_hours': 'no label', 'leisure': 'no label', 'designation': 'no label', 'shop': 'no label', 'addr:housenumber': 'no label', 'check_date': 'no label', 'website': 'no label', 'religion': 'no label', 'phone': 'no label', 'email': 'no label', 'denomination': 'no label', 'contact:youtube': 'no label', 'contact:facebook': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'building:levels': 'no label', 'operator': 'no label', 'amenity': 'no label', 'addr:city': 'no label', 'type': 'no label', 'tourism': 'no label', 'name': 'no label', 'addr:street': 'no label', });
lyr_HOSPITAL_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'emergency': 'no label', 'operator_w': 'no label', 'operator_t': 'no label', 'operator_s': 'no label', 'operator': 'no label', 'name': 'no label', 'amenity': 'no label', });
lyr_HOSPITALESALEDAOS_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'website': 'no label', 'phone': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'name': 'no label', 'healthca_1': 'no label', 'amenity': 'no label', 'addr_stree': 'header label - visible with data', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', });
lyr_EQUIPAMIENTOEDUCACIN_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'education': 'no label', 'isced:level': 'no label', 'fee': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'internet_access': 'no label', 'ec:sede_tipo': 'no label', 'ec:campus': 'no label', 'contact:website': 'no label', 'healthcare:speciality': 'no label', 'diet:seafood': 'no label', 'cuisine': 'no label', 'name:es': 'no label', 'parking': 'no label', 'access': 'no label', 'alt_name': 'no label', 'atm': 'no label', 'opening_hours:drive_through': 'no label', 'drive_through': 'no label', 'emergency': 'no label', 'building:levels': 'no label', 'operator:wikidata': 'no label', 'operator:type': 'no label', 'operator:short': 'no label', 'healthcare': 'no label', 'brand': 'no label', 'ec:tipo': 'no label', 'ec:import': 'no label', 'ec:date': 'no label', 'contact:phone': 'no label', 'addr:full': 'no label', 'landuse': 'no label', 'tourism': 'no label', 'check_date': 'no label', 'religion': 'no label', 'phone': 'no label', 'email': 'no label', 'denomination': 'no label', 'contact:youtube': 'no label', 'contact:facebook': 'no label', 'website': 'no label', 'opening_hours': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'type': 'no label', 'operator': 'no label', 'name': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', });
lyr_BUFFER24DESEPTIEMBRE_8.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perimetr_m': 'no label', });
lyr_BUFFERLASBRISAS_9.set('fieldLabels', {'id': 'no label', 'Área_KM2': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', });
lyr_BUFFERLOSVERGELES_10.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', 'Area_m2': 'no label', });
lyr_BUFFER_RAYMUNDOPALACIOS_11.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', });
lyr_BUFER_ISMAELPEREZPAZMIO_12.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perimetr_m': 'no label', });
lyr_24DESEPTIEMBRE2_13.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perimetr_m': 'no label', });
lyr_LOSVERGELES2_14.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', 'Area_m2': 'no label', });
lyr_LASBRISAS_15.set('fieldLabels', {'id': 'no label', 'Área_KM2': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', });
lyr_RAYMUNDOPALACIOS_16.set('fieldLabels', {'id': 'header label - always visible', 'Área_m2': 'no label', 'Perímetr_': 'no label', });
lyr_ISMAELPEREZPAZMIO_17.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perimetr_m': 'no label', });
lyr_ISMAELPEREZPAZMIO_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});