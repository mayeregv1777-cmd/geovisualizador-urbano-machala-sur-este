ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([610582.892782, 9634797.640587, 624447.778964, 9643341.093061]);
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
var format_Nudos_Vialesnudos_viales_1 = new ol.format.GeoJSON();
var features_Nudos_Vialesnudos_viales_1 = format_Nudos_Vialesnudos_viales_1.readFeatures(json_Nudos_Vialesnudos_viales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Nudos_Vialesnudos_viales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nudos_Vialesnudos_viales_1.addFeatures(features_Nudos_Vialesnudos_viales_1);
var lyr_Nudos_Vialesnudos_viales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nudos_Vialesnudos_viales_1, 
                style: style_Nudos_Vialesnudos_viales_1,
                popuplayertitle: 'Nudos_Viales — nudos_viales',
                interactive: false,
                title: '<img src="styles/legend/Nudos_Vialesnudos_viales_1.png" /> Nudos_Viales — nudos_viales'
            });
var format_REDVIAL_2 = new ol.format.GeoJSON();
var features_REDVIAL_2 = format_REDVIAL_2.readFeatures(json_REDVIAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_REDVIAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDVIAL_2.addFeatures(features_REDVIAL_2);
var lyr_REDVIAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDVIAL_2, 
                style: style_REDVIAL_2,
                popuplayertitle: 'RED VIAL',
                interactive: false,
                title: '<img src="styles/legend/REDVIAL_2.png" /> RED VIAL'
            });
var format_AREASVERDES_3 = new ol.format.GeoJSON();
var features_AREASVERDES_3 = format_AREASVERDES_3.readFeatures(json_AREASVERDES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_AREASVERDES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASVERDES_3.addFeatures(features_AREASVERDES_3);
var lyr_AREASVERDES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASVERDES_3, 
                style: style_AREASVERDES_3,
                popuplayertitle: 'AREAS VERDES',
                interactive: false,
                title: '<img src="styles/legend/AREASVERDES_3.png" /> AREAS VERDES'
            });
var format_CLINICAS_4 = new ol.format.GeoJSON();
var features_CLINICAS_4 = format_CLINICAS_4.readFeatures(json_CLINICAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_CLINICAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLINICAS_4.addFeatures(features_CLINICAS_4);
cluster_CLINICAS_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CLINICAS_4
});
var lyr_CLINICAS_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CLINICAS_4, 
                style: style_CLINICAS_4,
                popuplayertitle: 'CLINICAS',
                interactive: false,
                title: '<img src="styles/legend/CLINICAS_4.png" /> CLINICAS'
            });
var format_BUFFER_SALUD_5 = new ol.format.GeoJSON();
var features_BUFFER_SALUD_5 = format_BUFFER_SALUD_5.readFeatures(json_BUFFER_SALUD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_BUFFER_SALUD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER_SALUD_5.addFeatures(features_BUFFER_SALUD_5);
var lyr_BUFFER_SALUD_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER_SALUD_5, 
                style: style_BUFFER_SALUD_5,
                popuplayertitle: 'BUFFER_SALUD',
                interactive: false,
                title: '<img src="styles/legend/BUFFER_SALUD_5.png" /> BUFFER_SALUD'
            });
var format_HOSPITAL_6 = new ol.format.GeoJSON();
var features_HOSPITAL_6 = format_HOSPITAL_6.readFeatures(json_HOSPITAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_HOSPITAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITAL_6.addFeatures(features_HOSPITAL_6);
var lyr_HOSPITAL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOSPITAL_6, 
                style: style_HOSPITAL_6,
                popuplayertitle: 'HOSPITAL',
                interactive: false,
                title: '<img src="styles/legend/HOSPITAL_6.png" /> HOSPITAL'
            });
var format_HOSPITALESALEDAOS_7 = new ol.format.GeoJSON();
var features_HOSPITALESALEDAOS_7 = format_HOSPITALESALEDAOS_7.readFeatures(json_HOSPITALESALEDAOS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_HOSPITALESALEDAOS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITALESALEDAOS_7.addFeatures(features_HOSPITALESALEDAOS_7);
cluster_HOSPITALESALEDAOS_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_HOSPITALESALEDAOS_7
});
var lyr_HOSPITALESALEDAOS_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_HOSPITALESALEDAOS_7, 
                style: style_HOSPITALESALEDAOS_7,
                popuplayertitle: 'HOSPITALES ALEDAÑOS',
                interactive: false,
                title: '<img src="styles/legend/HOSPITALESALEDAOS_7.png" /> HOSPITALES ALEDAÑOS'
            });
var format_BUFFER24DESEPTIEMBRE_8 = new ol.format.GeoJSON();
var features_BUFFER24DESEPTIEMBRE_8 = format_BUFFER24DESEPTIEMBRE_8.readFeatures(json_BUFFER24DESEPTIEMBRE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
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
var format_24DESEPTIEMBRE_13 = new ol.format.GeoJSON();
var features_24DESEPTIEMBRE_13 = format_24DESEPTIEMBRE_13.readFeatures(json_24DESEPTIEMBRE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_24DESEPTIEMBRE_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24DESEPTIEMBRE_13.addFeatures(features_24DESEPTIEMBRE_13);
var lyr_24DESEPTIEMBRE_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24DESEPTIEMBRE_13, 
                style: style_24DESEPTIEMBRE_13,
                popuplayertitle: '24 DE SEPTIEMBRE',
                interactive: false,
                title: '<img src="styles/legend/24DESEPTIEMBRE_13.png" /> 24 DE SEPTIEMBRE'
            });
var format_LOSVERGELES_14 = new ol.format.GeoJSON();
var features_LOSVERGELES_14 = format_LOSVERGELES_14.readFeatures(json_LOSVERGELES_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_LOSVERGELES_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOSVERGELES_14.addFeatures(features_LOSVERGELES_14);
var lyr_LOSVERGELES_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOSVERGELES_14, 
                style: style_LOSVERGELES_14,
                popuplayertitle: 'LOS VERGELES',
                interactive: false,
                title: '<img src="styles/legend/LOSVERGELES_14.png" /> LOS VERGELES'
            });
var format_LASBRISAS_15 = new ol.format.GeoJSON();
var features_LASBRISAS_15 = format_LASBRISAS_15.readFeatures(json_LASBRISAS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
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
                                layers: [],
                                fold: 'open',
                                title: 'EQUIPAMIENTO EDUCACIÓN'});
var group_EQUIPAMIENTOSALUD = new ol.layer.Group({
                                layers: [lyr_CLINICAS_4,lyr_BUFFER_SALUD_5,lyr_HOSPITAL_6,lyr_HOSPITALESALEDAOS_7,],
                                fold: 'open',
                                title: 'EQUIPAMIENTO SALUD'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Nudos_Vialesnudos_viales_1.setVisible(true);lyr_REDVIAL_2.setVisible(true);lyr_AREASVERDES_3.setVisible(true);lyr_CLINICAS_4.setVisible(true);lyr_BUFFER_SALUD_5.setVisible(true);lyr_HOSPITAL_6.setVisible(true);lyr_HOSPITALESALEDAOS_7.setVisible(true);lyr_BUFFER24DESEPTIEMBRE_8.setVisible(true);lyr_BUFFERLASBRISAS_9.setVisible(true);lyr_BUFFERLOSVERGELES_10.setVisible(true);lyr_BUFFER_RAYMUNDOPALACIOS_11.setVisible(true);lyr_BUFER_ISMAELPEREZPAZMIO_12.setVisible(true);lyr_24DESEPTIEMBRE_13.setVisible(true);lyr_LOSVERGELES_14.setVisible(true);lyr_LASBRISAS_15.setVisible(true);lyr_RAYMUNDOPALACIOS_16.setVisible(true);lyr_ISMAELPEREZPAZMIO_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Nudos_Vialesnudos_viales_1,lyr_REDVIAL_2,lyr_AREASVERDES_3,group_EQUIPAMIENTOSALUD,group_GRUPOBUFFERSSECTORES,lyr_24DESEPTIEMBRE_13,lyr_LOSVERGELES_14,lyr_LASBRISAS_15,lyr_RAYMUNDOPALACIOS_16,lyr_ISMAELPEREZPAZMIO_17];
lyr_Nudos_Vialesnudos_viales_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lanes': 'lanes', 'turning_circle': 'turning_circle', 'shelter': 'shelter', 'lit': 'lit', 'bin': 'bin', 'bench': 'bench', 'bollard': 'bollard', 'motor_vehicle': 'motor_vehicle', 'maxspeed': 'maxspeed', 'addr:city': 'addr:city', 'traffic_signals:direction': 'traffic_signals:direction', 'internet_access': 'internet_access', 'entrance': 'entrance', 'public_transport': 'public_transport', 'bus': 'bus', 'check_date': 'check_date', 'place': 'place', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'access': 'access', 'traffic_signals:vibration': 'traffic_signals:vibration', 'traffic_signals:sound': 'traffic_signals:sound', 'crossing:island': 'crossing:island', 'button_operated': 'button_operated', 'kerb': 'kerb', 'crossing:signals': 'crossing:signals', 'compressed_air': 'compressed_air', 'amenity': 'amenity', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'shop': 'shop', 'phone': 'phone', 'opening_hours': 'opening_hours', 'name': 'name', 'email': 'email', 'check_date:opening_hours': 'check_date:opening_hours', 'addr:street': 'addr:street', 'traffic_signals': 'traffic_signals', 'junction': 'junction', });
lyr_REDVIAL_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'informal': 'informal', 'covered': 'covered', 'check_date:surface': 'check_date:surface', 'turn:lanes:forward': 'turn:lanes:forward', 'turn:lanes:backward': 'turn:lanes:backward', 'maxspeed:backward': 'maxspeed:backward', 'maxspeed:forward': 'maxspeed:forward', 'addr:street': 'addr:street', 'is_in:city': 'is_in:city', 'embankment': 'embankment', 'name_1': 'name_1', 'city': 'city', 'segregated': 'segregated', 'sidewalk': 'sidewalk', 'turn:lanes': 'turn:lanes', 'maxweight:signed': 'maxweight:signed', 'footway': 'footway', 'crossing': 'crossing', 'bicycle': 'bicycle', 'destination:ref': 'destination:ref', 'horse': 'horse', 'maxheight': 'maxheight', 'parking:both': 'parking:both', 'maxweight': 'maxweight', 'tracktype': 'tracktype', 'service': 'service', 'step_count': 'step_count', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'access': 'access', 'oneway:bicycle': 'oneway:bicycle', 'cycleway:left:oneway': 'cycleway:left:oneway', 'cycleway:both:segregated': 'cycleway:both:segregated', 'cycleway:both': 'cycleway:both', 'noname': 'noname', 'official_name': 'official_name', 'maxheight:signed': 'maxheight:signed', 'junction': 'junction', 'foot': 'foot', 'layer': 'layer', 'bridge': 'bridge', 'lit': 'lit', 'old_name': 'old_name', 'busway:right': 'busway:right', 'bus:lanes': 'bus:lanes', 'access:lanes': 'access:lanes', 'sidewalk:right': 'sidewalk:right', 'sidewalk:left': 'sidewalk:left', 'sidewalk:both': 'sidewalk:both', 'lane_markings': 'lane_markings', 'shoulder': 'shoulder', 'addr:city': 'addr:city', 'ref': 'ref', 'destination': 'destination', 'cycleway:lane': 'cycleway:lane', 'cycleway': 'cycleway', 'maxspeed': 'maxspeed', 'surface': 'surface', 'alt_name': 'alt_name', 'oneway': 'oneway', 'name': 'name', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'lanes': 'lanes', });
lyr_AREASVERDES_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'operator_t': 'operator_t', 'operator': 'operator', 'addr_stree': 'addr_stree', 'opening_ho': 'opening_ho', 'addr_city': 'addr_city', 'name_es': 'name_es', 'name': 'name', });
lyr_CLINICAS_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'healthcare': 'healthcare', 'phone': 'phone', 'name_en': 'name_en', 'internet_a': 'internet_a', 'name_es': 'name_es', 'check_date': 'check_date', 'opening_ho': 'opening_ho', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', });
lyr_BUFFER_SALUD_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:height': 'roof:height', 'building:colour': 'building:colour', 'residential': 'residential', 'description': 'description', 'location': 'location', 'layer': 'layer', 'ec:tipo': 'ec:tipo', 'ec:import': 'ec:import', 'ec:date': 'ec:date', 'contact:phone': 'contact:phone', 'target': 'target', 'name:en': 'name:en', 'diplomatic': 'diplomatic', 'country': 'country', 'consulate': 'consulate', 'addr:neighbourhood': 'addr:neighbourhood', 'addr:full': 'addr:full', 'addr:block': 'addr:block', 'house': 'house', 'height': 'height', 'smoking': 'smoking', 'payment:cash': 'payment:cash', 'roof:colour': 'roof:colour', 'public_transport': 'public_transport', 'internet_access': 'internet_access', 'bus': 'bus', 'healthcare:speciality': 'healthcare:speciality', 'disused:tourism': 'disused:tourism', 'disused:religion': 'disused:religion', 'disused:amenity': 'disused:amenity', 'wpt_description': 'wpt_description', 'ele': 'ele', 'diet:seafood': 'diet:seafood', 'cuisine': 'cuisine', 'healthcare': 'healthcare', 'name:es': 'name:es', 'historic': 'historic', 'sport': 'sport', 'landuse': 'landuse', 'alt_name': 'alt_name', 'office': 'office', 'brand': 'brand', 'atm': 'atm', 'opening_hours:drive_through': 'opening_hours:drive_through', 'drive_through': 'drive_through', 'addr:postcode': 'addr:postcode', 'opening_hours': 'opening_hours', 'leisure': 'leisure', 'designation': 'designation', 'shop': 'shop', 'addr:housenumber': 'addr:housenumber', 'check_date': 'check_date', 'website': 'website', 'religion': 'religion', 'phone': 'phone', 'email': 'email', 'denomination': 'denomination', 'contact:youtube': 'contact:youtube', 'contact:facebook': 'contact:facebook', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'building:levels': 'building:levels', 'operator': 'operator', 'amenity': 'amenity', 'addr:city': 'addr:city', 'type': 'type', 'tourism': 'tourism', 'name': 'name', 'addr:street': 'addr:street', });
lyr_HOSPITAL_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'healthca_1': 'healthca_1', 'emergency': 'emergency', 'operator_w': 'operator_w', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'name': 'name', 'amenity': 'amenity', });
lyr_HOSPITALESALEDAOS_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'website': 'website', 'phone': 'phone', 'operator_t': 'operator_t', 'operator': 'operator', 'name': 'name', 'healthca_1': 'healthca_1', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', });
lyr_BUFFER24DESEPTIEMBRE_8.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perimetr_m': 'Perimetr_m', });
lyr_BUFFERLASBRISAS_9.set('fieldAliases', {'id': 'id', 'Área_KM2': 'Área_KM2', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', });
lyr_BUFFERLOSVERGELES_10.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', 'Area_m2': 'Area_m2', });
lyr_BUFFER_RAYMUNDOPALACIOS_11.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', });
lyr_BUFER_ISMAELPEREZPAZMIO_12.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perimetr_m': 'Perimetr_m', });
lyr_24DESEPTIEMBRE_13.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perimetr_m': 'Perimetr_m', });
lyr_LOSVERGELES_14.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', 'Area_m2': 'Area_m2', });
lyr_LASBRISAS_15.set('fieldAliases', {'id': 'id', 'Área_KM2': 'Área_KM2', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', });
lyr_RAYMUNDOPALACIOS_16.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perímetr_': 'Perímetr_', });
lyr_ISMAELPEREZPAZMIO_17.set('fieldAliases', {'id': 'id', 'Área_m2': 'Área_m2', 'Perimetr_m': 'Perimetr_m', });
lyr_Nudos_Vialesnudos_viales_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'lanes': '', 'turning_circle': '', 'shelter': '', 'lit': '', 'bin': '', 'bench': '', 'bollard': '', 'motor_vehicle': '', 'maxspeed': '', 'addr:city': '', 'traffic_signals:direction': '', 'internet_access': '', 'entrance': '', 'public_transport': '', 'bus': '', 'check_date': '', 'place': '', 'foot': '', 'bicycle': '', 'barrier': '', 'access': '', 'traffic_signals:vibration': '', 'traffic_signals:sound': '', 'crossing:island': '', 'button_operated': '', 'kerb': '', 'crossing:signals': '', 'compressed_air': '', 'amenity': '', 'crossing:markings': '', 'crossing': '', 'shop': '', 'phone': '', 'opening_hours': '', 'name': '', 'email': '', 'check_date:opening_hours': '', 'addr:street': '', 'traffic_signals': '', 'junction': '', });
lyr_REDVIAL_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'informal': 'TextEdit', 'covered': 'TextEdit', 'check_date:surface': 'TextEdit', 'turn:lanes:forward': 'TextEdit', 'turn:lanes:backward': 'TextEdit', 'maxspeed:backward': 'TextEdit', 'maxspeed:forward': 'TextEdit', 'addr:street': 'TextEdit', 'is_in:city': 'TextEdit', 'embankment': 'TextEdit', 'name_1': 'TextEdit', 'city': 'TextEdit', 'segregated': 'TextEdit', 'sidewalk': 'TextEdit', 'turn:lanes': 'TextEdit', 'maxweight:signed': 'TextEdit', 'footway': 'TextEdit', 'crossing': 'TextEdit', 'bicycle': 'TextEdit', 'destination:ref': 'TextEdit', 'horse': 'TextEdit', 'maxheight': 'TextEdit', 'parking:both': 'TextEdit', 'maxweight': 'TextEdit', 'tracktype': 'TextEdit', 'service': 'TextEdit', 'step_count': 'TextEdit', 'ramp': 'TextEdit', 'incline': 'TextEdit', 'handrail': 'TextEdit', 'access': 'TextEdit', 'oneway:bicycle': 'TextEdit', 'cycleway:left:oneway': 'TextEdit', 'cycleway:both:segregated': 'TextEdit', 'cycleway:both': 'TextEdit', 'noname': 'TextEdit', 'official_name': 'TextEdit', 'maxheight:signed': 'TextEdit', 'junction': 'TextEdit', 'foot': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'lit': 'TextEdit', 'old_name': 'TextEdit', 'busway:right': 'TextEdit', 'bus:lanes': 'TextEdit', 'access:lanes': 'TextEdit', 'sidewalk:right': 'TextEdit', 'sidewalk:left': 'TextEdit', 'sidewalk:both': 'TextEdit', 'lane_markings': 'TextEdit', 'shoulder': 'TextEdit', 'addr:city': 'TextEdit', 'ref': 'TextEdit', 'destination': 'TextEdit', 'cycleway:lane': 'TextEdit', 'cycleway': 'TextEdit', 'maxspeed': 'TextEdit', 'surface': 'TextEdit', 'alt_name': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lanes:forward': 'TextEdit', 'lanes:backward': 'TextEdit', 'lanes': 'TextEdit', });
lyr_AREASVERDES_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'operator_t': 'TextEdit', 'operator': 'TextEdit', 'addr_stree': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_city': 'TextEdit', 'name_es': 'TextEdit', 'name': 'TextEdit', });
lyr_CLINICAS_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'healthcare': 'TextEdit', 'phone': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'name_es': 'TextEdit', 'check_date': 'TextEdit', 'opening_ho': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_BUFFER_SALUD_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'roof:height': 'TextEdit', 'building:colour': 'TextEdit', 'residential': 'TextEdit', 'description': 'TextEdit', 'location': 'TextEdit', 'layer': 'TextEdit', 'ec:tipo': 'TextEdit', 'ec:import': 'TextEdit', 'ec:date': 'TextEdit', 'contact:phone': 'TextEdit', 'target': 'TextEdit', 'name:en': 'TextEdit', 'diplomatic': 'TextEdit', 'country': 'TextEdit', 'consulate': 'TextEdit', 'addr:neighbourhood': 'TextEdit', 'addr:full': 'TextEdit', 'addr:block': 'TextEdit', 'house': 'TextEdit', 'height': 'TextEdit', 'smoking': 'TextEdit', 'payment:cash': 'TextEdit', 'roof:colour': 'TextEdit', 'public_transport': 'TextEdit', 'internet_access': 'TextEdit', 'bus': 'TextEdit', 'healthcare:speciality': 'TextEdit', 'disused:tourism': 'TextEdit', 'disused:religion': 'TextEdit', 'disused:amenity': 'TextEdit', 'wpt_description': 'TextEdit', 'ele': 'TextEdit', 'diet:seafood': 'TextEdit', 'cuisine': 'TextEdit', 'healthcare': 'TextEdit', 'name:es': 'TextEdit', 'historic': 'TextEdit', 'sport': 'TextEdit', 'landuse': 'TextEdit', 'alt_name': 'TextEdit', 'office': 'TextEdit', 'brand': 'TextEdit', 'atm': 'TextEdit', 'opening_hours:drive_through': 'TextEdit', 'drive_through': 'TextEdit', 'addr:postcode': 'TextEdit', 'opening_hours': 'TextEdit', 'leisure': 'TextEdit', 'designation': 'TextEdit', 'shop': 'TextEdit', 'addr:housenumber': 'TextEdit', 'check_date': 'TextEdit', 'website': 'TextEdit', 'religion': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'denomination': 'TextEdit', 'contact:youtube': 'TextEdit', 'contact:facebook': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'building:levels': 'TextEdit', 'operator': 'TextEdit', 'amenity': 'TextEdit', 'addr:city': 'TextEdit', 'type': 'TextEdit', 'tourism': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', });
lyr_HOSPITAL_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'healthcare': 'TextEdit', 'healthca_1': 'TextEdit', 'emergency': 'TextEdit', 'operator_w': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', });
lyr_HOSPITALESALEDAOS_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'healthcare': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'operator_t': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'healthca_1': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_BUFFER24DESEPTIEMBRE_8.set('fieldImages', {'id': 'Range', 'Área_m2': 'TextEdit', 'Perimetr_m': 'TextEdit', });
lyr_BUFFERLASBRISAS_9.set('fieldImages', {'id': 'Range', 'Área_KM2': 'TextEdit', 'Área_m2': 'TextEdit', 'Perímetr_': 'TextEdit', });
lyr_BUFFERLOSVERGELES_10.set('fieldImages', {'id': 'TextEdit', 'Área_m2': 'TextEdit', 'Perímetr_': 'TextEdit', 'Area_m2': 'TextEdit', });
lyr_BUFFER_RAYMUNDOPALACIOS_11.set('fieldImages', {'id': 'Range', 'Área_m2': 'TextEdit', 'Perímetr_': 'TextEdit', });
lyr_BUFER_ISMAELPEREZPAZMIO_12.set('fieldImages', {'id': 'Range', 'Área_m2': 'TextEdit', 'Perimetr_m': 'TextEdit', });
lyr_24DESEPTIEMBRE_13.set('fieldImages', {'id': '', 'Área_m2': '', 'Perimetr_m': '', });
lyr_LOSVERGELES_14.set('fieldImages', {'id': '', 'Área_m2': '', 'Perímetr_': '', 'Area_m2': '', });
lyr_LASBRISAS_15.set('fieldImages', {'id': '', 'Área_KM2': '', 'Área_m2': '', 'Perímetr_': '', });
lyr_RAYMUNDOPALACIOS_16.set('fieldImages', {'id': '', 'Área_m2': '', 'Perímetr_': '', });
lyr_ISMAELPEREZPAZMIO_17.set('fieldImages', {'id': '', 'Área_m2': '', 'Perimetr_m': '', });
lyr_Nudos_Vialesnudos_viales_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'lanes': 'no label', 'turning_circle': 'no label', 'shelter': 'no label', 'lit': 'no label', 'bin': 'no label', 'bench': 'no label', 'bollard': 'no label', 'motor_vehicle': 'no label', 'maxspeed': 'no label', 'addr:city': 'no label', 'traffic_signals:direction': 'no label', 'internet_access': 'no label', 'entrance': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'check_date': 'no label', 'place': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'access': 'no label', 'traffic_signals:vibration': 'no label', 'traffic_signals:sound': 'no label', 'crossing:island': 'no label', 'button_operated': 'no label', 'kerb': 'no label', 'crossing:signals': 'no label', 'compressed_air': 'no label', 'amenity': 'no label', 'crossing:markings': 'no label', 'crossing': 'no label', 'shop': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'email': 'no label', 'check_date:opening_hours': 'no label', 'addr:street': 'no label', 'traffic_signals': 'no label', 'junction': 'no label', });
lyr_REDVIAL_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'informal': 'no label', 'covered': 'no label', 'check_date:surface': 'no label', 'turn:lanes:forward': 'no label', 'turn:lanes:backward': 'no label', 'maxspeed:backward': 'no label', 'maxspeed:forward': 'no label', 'addr:street': 'no label', 'is_in:city': 'no label', 'embankment': 'no label', 'name_1': 'no label', 'city': 'no label', 'segregated': 'no label', 'sidewalk': 'no label', 'turn:lanes': 'no label', 'maxweight:signed': 'no label', 'footway': 'no label', 'crossing': 'no label', 'bicycle': 'no label', 'destination:ref': 'no label', 'horse': 'no label', 'maxheight': 'no label', 'parking:both': 'no label', 'maxweight': 'no label', 'tracktype': 'no label', 'service': 'no label', 'step_count': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'access': 'no label', 'oneway:bicycle': 'no label', 'cycleway:left:oneway': 'no label', 'cycleway:both:segregated': 'no label', 'cycleway:both': 'no label', 'noname': 'no label', 'official_name': 'no label', 'maxheight:signed': 'no label', 'junction': 'no label', 'foot': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lit': 'no label', 'old_name': 'no label', 'busway:right': 'no label', 'bus:lanes': 'no label', 'access:lanes': 'no label', 'sidewalk:right': 'no label', 'sidewalk:left': 'no label', 'sidewalk:both': 'no label', 'lane_markings': 'no label', 'shoulder': 'no label', 'addr:city': 'no label', 'ref': 'no label', 'destination': 'no label', 'cycleway:lane': 'no label', 'cycleway': 'no label', 'maxspeed': 'no label', 'surface': 'no label', 'alt_name': 'no label', 'oneway': 'no label', 'name': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'lanes': 'no label', });
lyr_AREASVERDES_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'addr_stree': 'no label', 'opening_ho': 'no label', 'addr_city': 'no label', 'name_es': 'no label', 'name': 'no label', });
lyr_CLINICAS_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'healthcare': 'no label', 'phone': 'no label', 'name_en': 'no label', 'internet_a': 'no label', 'name_es': 'no label', 'check_date': 'no label', 'opening_ho': 'no label', 'name': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', });
lyr_BUFFER_SALUD_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:height': 'no label', 'building:colour': 'no label', 'residential': 'no label', 'description': 'no label', 'location': 'no label', 'layer': 'no label', 'ec:tipo': 'no label', 'ec:import': 'no label', 'ec:date': 'no label', 'contact:phone': 'no label', 'target': 'no label', 'name:en': 'no label', 'diplomatic': 'no label', 'country': 'no label', 'consulate': 'no label', 'addr:neighbourhood': 'no label', 'addr:full': 'no label', 'addr:block': 'no label', 'house': 'no label', 'height': 'no label', 'smoking': 'no label', 'payment:cash': 'no label', 'roof:colour': 'no label', 'public_transport': 'no label', 'internet_access': 'no label', 'bus': 'no label', 'healthcare:speciality': 'no label', 'disused:tourism': 'no label', 'disused:religion': 'no label', 'disused:amenity': 'no label', 'wpt_description': 'no label', 'ele': 'no label', 'diet:seafood': 'no label', 'cuisine': 'no label', 'healthcare': 'no label', 'name:es': 'no label', 'historic': 'no label', 'sport': 'no label', 'landuse': 'no label', 'alt_name': 'no label', 'office': 'no label', 'brand': 'no label', 'atm': 'no label', 'opening_hours:drive_through': 'no label', 'drive_through': 'no label', 'addr:postcode': 'no label', 'opening_hours': 'no label', 'leisure': 'no label', 'designation': 'no label', 'shop': 'no label', 'addr:housenumber': 'no label', 'check_date': 'no label', 'website': 'no label', 'religion': 'no label', 'phone': 'no label', 'email': 'no label', 'denomination': 'no label', 'contact:youtube': 'no label', 'contact:facebook': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'building:levels': 'no label', 'operator': 'no label', 'amenity': 'no label', 'addr:city': 'no label', 'type': 'no label', 'tourism': 'no label', 'name': 'no label', 'addr:street': 'no label', });
lyr_HOSPITAL_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'healthca_1': 'no label', 'emergency': 'no label', 'operator_w': 'no label', 'operator_t': 'no label', 'operator_s': 'no label', 'operator': 'no label', 'name': 'no label', 'amenity': 'no label', });
lyr_HOSPITALESALEDAOS_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'website': 'no label', 'phone': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'name': 'no label', 'healthca_1': 'no label', 'amenity': 'no label', 'addr_stree': 'header label - visible with data', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', });
lyr_BUFFER24DESEPTIEMBRE_8.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perimetr_m': 'no label', });
lyr_BUFFERLASBRISAS_9.set('fieldLabels', {'id': 'no label', 'Área_KM2': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', });
lyr_BUFFERLOSVERGELES_10.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', 'Area_m2': 'no label', });
lyr_BUFFER_RAYMUNDOPALACIOS_11.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', });
lyr_BUFER_ISMAELPEREZPAZMIO_12.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perimetr_m': 'no label', });
lyr_24DESEPTIEMBRE_13.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perimetr_m': 'no label', });
lyr_LOSVERGELES_14.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', 'Area_m2': 'no label', });
lyr_LASBRISAS_15.set('fieldLabels', {'id': 'no label', 'Área_KM2': 'no label', 'Área_m2': 'no label', 'Perímetr_': 'no label', });
lyr_RAYMUNDOPALACIOS_16.set('fieldLabels', {'id': 'header label - always visible', 'Área_m2': 'no label', 'Perímetr_': 'no label', });
lyr_ISMAELPEREZPAZMIO_17.set('fieldLabels', {'id': 'no label', 'Área_m2': 'no label', 'Perimetr_m': 'no label', });
lyr_ISMAELPEREZPAZMIO_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});