var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_PolyWatershed_1 = new ol.format.GeoJSON();
var features_PolyWatershed_1 = format_PolyWatershed_1.readFeatures(json_PolyWatershed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolyWatershed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolyWatershed_1.addFeatures(features_PolyWatershed_1);
var lyr_PolyWatershed_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolyWatershed_1, 
                style: style_PolyWatershed_1,
                popuplayertitle: "PolyWatershed",
                interactive: true,
                title: '<img src="styles/legend/PolyWatershed_1.png" /> PolyWatershed'
            });
var format_LineStreams_2 = new ol.format.GeoJSON();
var features_LineStreams_2 = format_LineStreams_2.readFeatures(json_LineStreams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineStreams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineStreams_2.addFeatures(features_LineStreams_2);
var lyr_LineStreams_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineStreams_2, 
                style: style_LineStreams_2,
                popuplayertitle: "LineStreams",
                interactive: true,
                title: '<img src="styles/legend/LineStreams_2.png" /> LineStreams'
            });
var format_PolyRiver_3 = new ol.format.GeoJSON();
var features_PolyRiver_3 = format_PolyRiver_3.readFeatures(json_PolyRiver_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolyRiver_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolyRiver_3.addFeatures(features_PolyRiver_3);
var lyr_PolyRiver_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolyRiver_3, 
                style: style_PolyRiver_3,
                popuplayertitle: "PolyRiver",
                interactive: true,
                title: '<img src="styles/legend/PolyRiver_3.png" /> PolyRiver'
            });
var format_PolyPonds_4 = new ol.format.GeoJSON();
var features_PolyPonds_4 = format_PolyPonds_4.readFeatures(json_PolyPonds_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolyPonds_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolyPonds_4.addFeatures(features_PolyPonds_4);
var lyr_PolyPonds_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolyPonds_4, 
                style: style_PolyPonds_4,
                popuplayertitle: "PolyPonds",
                interactive: true,
                title: '<img src="styles/legend/PolyPonds_4.png" /> PolyPonds'
            });
var format_NewBrunswickRoads_5 = new ol.format.GeoJSON();
var features_NewBrunswickRoads_5 = format_NewBrunswickRoads_5.readFeatures(json_NewBrunswickRoads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewBrunswickRoads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewBrunswickRoads_5.addFeatures(features_NewBrunswickRoads_5);
var lyr_NewBrunswickRoads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewBrunswickRoads_5, 
                style: style_NewBrunswickRoads_5,
                popuplayertitle: "NewBrunswickRoads",
                interactive: true,
                title: '<img src="styles/legend/NewBrunswickRoads_5.png" /> NewBrunswickRoads'
            });
var format_MaineRoads_6 = new ol.format.GeoJSON();
var features_MaineRoads_6 = format_MaineRoads_6.readFeatures(json_MaineRoads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaineRoads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaineRoads_6.addFeatures(features_MaineRoads_6);
var lyr_MaineRoads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaineRoads_6, 
                style: style_MaineRoads_6,
                popuplayertitle: "MaineRoads",
                interactive: true,
                title: '<img src="styles/legend/MaineRoads_6.png" /> MaineRoads'
            });
var format_HistoricLocations_7 = new ol.format.GeoJSON();
var features_HistoricLocations_7 = format_HistoricLocations_7.readFeatures(json_HistoricLocations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricLocations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricLocations_7.addFeatures(features_HistoricLocations_7);
var lyr_HistoricLocations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HistoricLocations_7, 
                style: style_HistoricLocations_7,
                popuplayertitle: "HistoricLocations",
                interactive: true,
                title: '<img src="styles/legend/HistoricLocations_7.png" /> HistoricLocations'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PolyWatershed_1.setVisible(true);lyr_LineStreams_2.setVisible(true);lyr_PolyRiver_3.setVisible(true);lyr_PolyPonds_4.setVisible(true);lyr_NewBrunswickRoads_5.setVisible(true);lyr_MaineRoads_6.setVisible(true);lyr_HistoricLocations_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PolyWatershed_1,lyr_LineStreams_2,lyr_PolyRiver_3,lyr_PolyPonds_4,lyr_NewBrunswickRoads_5,lyr_MaineRoads_6,lyr_HistoricLocations_7];
lyr_PolyWatershed_1.set('fieldAliases', {'tnmid': 'tnmid', 'metasource': 'metasource', 'sourcedata': 'sourcedata', 'sourceorig': 'sourceorig', 'sourcefeat': 'sourcefeat', 'loaddate': 'loaddate', 'referenceg': 'referenceg', 'areaacres': 'areaacres', 'areasqkm': 'areasqkm', 'states': 'states', 'huc8': 'huc8', 'name': 'name', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', 'ObjectID': 'ObjectID', });
lyr_LineStreams_2.set('fieldAliases', {'permanent_': 'permanent_', 'fdate': 'fdate', 'resolution': 'resolution', 'gnis_id': 'gnis_id', 'gnis_name': 'gnis_name', 'lengthkm': 'lengthkm', 'reachcode': 'reachcode', 'flowdir': 'flowdir', 'wbarea_per': 'wbarea_per', 'ftype': 'ftype', 'fcode': 'fcode', 'mainpath': 'mainpath', 'innetwork': 'innetwork', 'visibility': 'visibility', 'SHAPE_Leng': 'SHAPE_Leng', 'Enabled': 'Enabled', 'ObjectID': 'ObjectID', });
lyr_PolyRiver_3.set('fieldAliases', {'permanent_': 'permanent_', 'fdate': 'fdate', 'resolution': 'resolution', 'gnis_id': 'gnis_id', 'gnis_name': 'gnis_name', 'areasqkm': 'areasqkm', 'elevation': 'elevation', 'ftype': 'ftype', 'fcode': 'fcode', 'visibility': 'visibility', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ObjectID': 'ObjectID', });
lyr_PolyPonds_4.set('fieldAliases', {'permanent_': 'permanent_', 'fdate': 'fdate', 'resolution': 'resolution', 'gnis_id': 'gnis_id', 'gnis_name': 'gnis_name', 'areasqkm': 'areasqkm', 'elevation': 'elevation', 'reachcode': 'reachcode', 'ftype': 'ftype', 'fcode': 'fcode', 'visibility': 'visibility', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ObjectID': 'ObjectID', });
lyr_NewBrunswickRoads_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NID': 'NID', 'Road_Segment_ID': 'Road_Segment_ID', 'Number_Of_Lanes': 'Number_Of_Lanes', 'Route_Name_English_1': 'Route_Name_English_1', 'Route_Name_English_2': 'Route_Name_English_2', 'Route_Name_English_3': 'Route_Name_English_3', 'Route_Name_English_4': 'Route_Name_English_4', 'Route_Name_French_1': 'Route_Name_French_1', 'Route_Name_French_2': 'Route_Name_French_2', 'Route_Name_French_3': 'Route_Name_French_3', 'Route_Name_French_4': 'Route_Name_French_4', 'Route_Number_1': 'Route_Number_1', 'Route_Number_2': 'Route_Number_2', 'Route_Number_3': 'Route_Number_3', 'Route_Number_4': 'Route_Number_4', 'Route_Number_5': 'Route_Number_5', 'Struc_Type': 'Struc_Type', 'Structure_NID': 'Structure_NID', 'Structure_Name_English': 'Structure_Name_English', 'Structure_Name_French': 'Structure_Name_French', 'Exit_Number': 'Exit_Number', 'Jurisdiction': 'Jurisdiction', 'Speed_Restrictions_Left': 'Speed_Restrictions_Left', 'Speed_Restrictions_Right': 'Speed_Restrictions_Right', 'Speed_Restrictions_Both': 'Speed_Restrictions_Both', 'Speed_Source': 'Speed_Source', 'Func_Road_Class': 'Func_Road_Class', 'Paved_Status': 'Paved_Status', 'Paved_Road_Surf_Type': 'Paved_Road_Surf_Type', 'Unpaved_Road_Surf_Type': 'Unpaved_Road_Surf_Type', 'Dir_of_Traffic_Flow': 'Dir_of_Traffic_Flow', 'Close_Period': 'Close_Period', 'House_Number_Structure_Left': 'House_Number_Structure_Left', 'House_Number_Structure_Right': 'House_Number_Structure_Right', 'Left_First_Number': 'Left_First_Number', 'Left_Last_Number': 'Left_Last_Number', 'Right_First_Number': 'Right_First_Number', 'Right_Last_Number': 'Right_Last_Number', 'Left_Street_Name': 'Left_Street_Name', 'Left_Dir_Prefix': 'Left_Dir_Prefix', 'Left_Dir_Suffix': 'Left_Dir_Suffix', 'Left_Type_Prefix': 'Left_Type_Prefix', 'Left_Type_Suffix': 'Left_Type_Suffix', 'Left_Place_Name': 'Left_Place_Name', 'Left_County': 'Left_County', 'Left_Dig_Dir': 'Left_Dig_Dir', 'Right_Street_Name': 'Right_Street_Name', 'Right_Dir_Prefix': 'Right_Dir_Prefix', 'Right_Dir_Suffix': 'Right_Dir_Suffix', 'Right_Type_Prefix': 'Right_Type_Prefix', 'Right_Type_Suffix': 'Right_Type_Suffix', 'Right_Place_Name': 'Right_Place_Name', 'Right_County': 'Right_County', 'Right_Dig_Dir': 'Right_Dig_Dir', 'Bell_Suffix': 'Bell_Suffix', 'Travel_Direction': 'Travel_Direction', 'Official_Street_Type': 'Official_Street_Type', 'Formatted_Street_Name': 'Formatted_Street_Name', 'Shape_Length': 'Shape_Length', });
lyr_MaineRoads_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'aadt_type': 'aadt_type', 'priority': 'priority', 'sh_sa_ir': 'sh_sa_ir', 'faadt': 'faadt', 'fedfunccls': 'fedfunccls', 'fed_urbrur': 'fed_urbrur', 'capacity': 'capacity', 'jurisdictn': 'jurisdictn', 'link_id': 'link_id', 'nhs_status': 'nhs_status', 'num_lanes': 'num_lanes', 'offic_mile': 'offic_mile', 'prim_bmp': 'prim_bmp', 'prirtecode': 'prirtecode', 'prim_emp': 'prim_emp', 'prirtename': 'prirtename', 'segment_id': 'segment_id', 'speed_lim': 'speed_lim', 'speedsrc': 'speedsrc', 'st_urbrur': 'st_urbrur', 'strtname': 'strtname', 'townname': 'townname', 'towncode': 'towncode', 'cntyname': 'cntyname', 'cnty_no': 'cnty_no', 'surfc_type': 'surfc_type', 'dot_region': 'dot_region', 'dot_regi_1': 'dot_regi_1', 'Shape_Leng': 'Shape_Leng', });
lyr_HistoricLocations_7.set('fieldAliases', {'Name': 'Name', 'Y': 'Y', 'X': 'X', });
lyr_PolyWatershed_1.set('fieldImages', {'tnmid': 'TextEdit', 'metasource': 'TextEdit', 'sourcedata': 'TextEdit', 'sourceorig': 'TextEdit', 'sourcefeat': 'TextEdit', 'loaddate': 'DateTime', 'referenceg': 'TextEdit', 'areaacres': 'TextEdit', 'areasqkm': 'TextEdit', 'states': 'TextEdit', 'huc8': 'TextEdit', 'name': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', 'ObjectID': 'Range', });
lyr_LineStreams_2.set('fieldImages', {'permanent_': 'TextEdit', 'fdate': 'DateTime', 'resolution': 'Range', 'gnis_id': 'TextEdit', 'gnis_name': 'TextEdit', 'lengthkm': 'TextEdit', 'reachcode': 'TextEdit', 'flowdir': 'Range', 'wbarea_per': 'TextEdit', 'ftype': 'Range', 'fcode': 'Range', 'mainpath': 'Range', 'innetwork': 'Range', 'visibility': 'Range', 'SHAPE_Leng': 'TextEdit', 'Enabled': 'Range', 'ObjectID': 'Range', });
lyr_PolyRiver_3.set('fieldImages', {'permanent_': 'TextEdit', 'fdate': 'DateTime', 'resolution': 'Range', 'gnis_id': 'TextEdit', 'gnis_name': 'TextEdit', 'areasqkm': 'TextEdit', 'elevation': 'TextEdit', 'ftype': 'Range', 'fcode': 'Range', 'visibility': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ObjectID': 'Range', });
lyr_PolyPonds_4.set('fieldImages', {'permanent_': 'TextEdit', 'fdate': 'DateTime', 'resolution': 'Range', 'gnis_id': 'TextEdit', 'gnis_name': 'TextEdit', 'areasqkm': 'TextEdit', 'elevation': 'TextEdit', 'reachcode': 'TextEdit', 'ftype': 'Range', 'fcode': 'Range', 'visibility': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ObjectID': 'Range', });
lyr_NewBrunswickRoads_5.set('fieldImages', {'OBJECTID': '', 'NID': '', 'Road_Segment_ID': '', 'Number_Of_Lanes': '', 'Route_Name_English_1': '', 'Route_Name_English_2': '', 'Route_Name_English_3': '', 'Route_Name_English_4': '', 'Route_Name_French_1': '', 'Route_Name_French_2': '', 'Route_Name_French_3': '', 'Route_Name_French_4': '', 'Route_Number_1': '', 'Route_Number_2': '', 'Route_Number_3': '', 'Route_Number_4': '', 'Route_Number_5': '', 'Struc_Type': '', 'Structure_NID': '', 'Structure_Name_English': '', 'Structure_Name_French': '', 'Exit_Number': '', 'Jurisdiction': '', 'Speed_Restrictions_Left': '', 'Speed_Restrictions_Right': '', 'Speed_Restrictions_Both': '', 'Speed_Source': '', 'Func_Road_Class': '', 'Paved_Status': '', 'Paved_Road_Surf_Type': '', 'Unpaved_Road_Surf_Type': '', 'Dir_of_Traffic_Flow': '', 'Close_Period': '', 'House_Number_Structure_Left': '', 'House_Number_Structure_Right': '', 'Left_First_Number': '', 'Left_Last_Number': '', 'Right_First_Number': '', 'Right_Last_Number': '', 'Left_Street_Name': '', 'Left_Dir_Prefix': '', 'Left_Dir_Suffix': '', 'Left_Type_Prefix': '', 'Left_Type_Suffix': '', 'Left_Place_Name': '', 'Left_County': '', 'Left_Dig_Dir': '', 'Right_Street_Name': '', 'Right_Dir_Prefix': '', 'Right_Dir_Suffix': '', 'Right_Type_Prefix': '', 'Right_Type_Suffix': '', 'Right_Place_Name': '', 'Right_County': '', 'Right_Dig_Dir': '', 'Bell_Suffix': '', 'Travel_Direction': '', 'Official_Street_Type': '', 'Formatted_Street_Name': '', 'Shape_Length': '', });
lyr_MaineRoads_6.set('fieldImages', {'OBJECTID': 'Range', 'aadt_type': 'TextEdit', 'priority': 'Range', 'sh_sa_ir': 'TextEdit', 'faadt': 'Range', 'fedfunccls': 'TextEdit', 'fed_urbrur': 'TextEdit', 'capacity': 'Range', 'jurisdictn': 'TextEdit', 'link_id': 'Range', 'nhs_status': 'TextEdit', 'num_lanes': 'Range', 'offic_mile': 'TextEdit', 'prim_bmp': 'TextEdit', 'prirtecode': 'TextEdit', 'prim_emp': 'TextEdit', 'prirtename': 'TextEdit', 'segment_id': 'Range', 'speed_lim': 'Range', 'speedsrc': 'TextEdit', 'st_urbrur': 'TextEdit', 'strtname': 'TextEdit', 'townname': 'TextEdit', 'towncode': 'TextEdit', 'cntyname': 'TextEdit', 'cnty_no': 'TextEdit', 'surfc_type': 'TextEdit', 'dot_region': 'TextEdit', 'dot_regi_1': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_HistoricLocations_7.set('fieldImages', {'Name': '', 'Y': '', 'X': '', });
lyr_PolyWatershed_1.set('fieldLabels', {'tnmid': 'no label', 'metasource': 'no label', 'sourcedata': 'no label', 'sourceorig': 'no label', 'sourcefeat': 'no label', 'loaddate': 'no label', 'referenceg': 'no label', 'areaacres': 'no label', 'areasqkm': 'no label', 'states': 'no label', 'huc8': 'no label', 'name': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', 'ObjectID': 'no label', });
lyr_LineStreams_2.set('fieldLabels', {'permanent_': 'no label', 'fdate': 'no label', 'resolution': 'no label', 'gnis_id': 'no label', 'gnis_name': 'no label', 'lengthkm': 'no label', 'reachcode': 'no label', 'flowdir': 'no label', 'wbarea_per': 'no label', 'ftype': 'no label', 'fcode': 'no label', 'mainpath': 'no label', 'innetwork': 'no label', 'visibility': 'no label', 'SHAPE_Leng': 'no label', 'Enabled': 'no label', 'ObjectID': 'no label', });
lyr_PolyRiver_3.set('fieldLabels', {'permanent_': 'no label', 'fdate': 'no label', 'resolution': 'no label', 'gnis_id': 'no label', 'gnis_name': 'no label', 'areasqkm': 'no label', 'elevation': 'no label', 'ftype': 'no label', 'fcode': 'no label', 'visibility': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ObjectID': 'no label', });
lyr_PolyPonds_4.set('fieldLabels', {'permanent_': 'no label', 'fdate': 'no label', 'resolution': 'no label', 'gnis_id': 'no label', 'gnis_name': 'no label', 'areasqkm': 'no label', 'elevation': 'no label', 'reachcode': 'no label', 'ftype': 'no label', 'fcode': 'no label', 'visibility': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ObjectID': 'no label', });
lyr_NewBrunswickRoads_5.set('fieldLabels', {'OBJECTID': 'no label', 'NID': 'no label', 'Road_Segment_ID': 'no label', 'Number_Of_Lanes': 'no label', 'Route_Name_English_1': 'no label', 'Route_Name_English_2': 'no label', 'Route_Name_English_3': 'no label', 'Route_Name_English_4': 'no label', 'Route_Name_French_1': 'no label', 'Route_Name_French_2': 'no label', 'Route_Name_French_3': 'no label', 'Route_Name_French_4': 'no label', 'Route_Number_1': 'no label', 'Route_Number_2': 'no label', 'Route_Number_3': 'no label', 'Route_Number_4': 'no label', 'Route_Number_5': 'no label', 'Struc_Type': 'no label', 'Structure_NID': 'no label', 'Structure_Name_English': 'no label', 'Structure_Name_French': 'no label', 'Exit_Number': 'no label', 'Jurisdiction': 'no label', 'Speed_Restrictions_Left': 'no label', 'Speed_Restrictions_Right': 'no label', 'Speed_Restrictions_Both': 'no label', 'Speed_Source': 'no label', 'Func_Road_Class': 'no label', 'Paved_Status': 'no label', 'Paved_Road_Surf_Type': 'no label', 'Unpaved_Road_Surf_Type': 'no label', 'Dir_of_Traffic_Flow': 'no label', 'Close_Period': 'no label', 'House_Number_Structure_Left': 'no label', 'House_Number_Structure_Right': 'no label', 'Left_First_Number': 'no label', 'Left_Last_Number': 'no label', 'Right_First_Number': 'no label', 'Right_Last_Number': 'no label', 'Left_Street_Name': 'no label', 'Left_Dir_Prefix': 'no label', 'Left_Dir_Suffix': 'no label', 'Left_Type_Prefix': 'no label', 'Left_Type_Suffix': 'no label', 'Left_Place_Name': 'no label', 'Left_County': 'no label', 'Left_Dig_Dir': 'no label', 'Right_Street_Name': 'no label', 'Right_Dir_Prefix': 'no label', 'Right_Dir_Suffix': 'no label', 'Right_Type_Prefix': 'no label', 'Right_Type_Suffix': 'no label', 'Right_Place_Name': 'no label', 'Right_County': 'no label', 'Right_Dig_Dir': 'no label', 'Bell_Suffix': 'no label', 'Travel_Direction': 'no label', 'Official_Street_Type': 'no label', 'Formatted_Street_Name': 'no label', 'Shape_Length': 'no label', });
lyr_MaineRoads_6.set('fieldLabels', {'OBJECTID': 'no label', 'aadt_type': 'no label', 'priority': 'no label', 'sh_sa_ir': 'no label', 'faadt': 'no label', 'fedfunccls': 'no label', 'fed_urbrur': 'no label', 'capacity': 'no label', 'jurisdictn': 'no label', 'link_id': 'no label', 'nhs_status': 'no label', 'num_lanes': 'no label', 'offic_mile': 'no label', 'prim_bmp': 'no label', 'prirtecode': 'no label', 'prim_emp': 'no label', 'prirtename': 'no label', 'segment_id': 'no label', 'speed_lim': 'no label', 'speedsrc': 'no label', 'st_urbrur': 'no label', 'strtname': 'no label', 'townname': 'no label', 'towncode': 'no label', 'cntyname': 'no label', 'cnty_no': 'no label', 'surfc_type': 'no label', 'dot_region': 'no label', 'dot_regi_1': 'no label', 'Shape_Leng': 'no label', });
lyr_HistoricLocations_7.set('fieldLabels', {'Name': 'inline label - visible with data', 'Y': 'header label - visible with data', 'X': 'inline label - always visible', });
lyr_HistoricLocations_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});