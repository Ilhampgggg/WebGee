var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Clipped_1 = new ol.format.GeoJSON();
var features_Clipped_1 = format_Clipped_1.readFeatures(json_Clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_1.addFeatures(features_Clipped_1);
var lyr_Clipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_1, 
                style: style_Clipped_1,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_1_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/Clipped_1_1.png" /> Genteng<br />\
    <img src="styles/legend/Clipped_1_2.png" /> Ketabang<br />\
    <img src="styles/legend/Clipped_1_3.png" /> Peneleh<br />'
        });
var format_Servicearealines_2 = new ol.format.GeoJSON();
var features_Servicearealines_2 = format_Servicearealines_2.readFeatures(json_Servicearealines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_2.addFeatures(features_Servicearealines_2);
var lyr_Servicearealines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_2, 
                style: style_Servicearealines_2,
                popuplayertitle: "Service area (lines)",
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_2.png" /> Service area (lines)'
            });
var format_d_Halte_Surabaya_3 = new ol.format.GeoJSON();
var features_d_Halte_Surabaya_3 = format_d_Halte_Surabaya_3.readFeatures(json_d_Halte_Surabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_Halte_Surabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_Halte_Surabaya_3.addFeatures(features_d_Halte_Surabaya_3);
var lyr_d_Halte_Surabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_Halte_Surabaya_3, 
                style: style_d_Halte_Surabaya_3,
                popuplayertitle: "d_Halte_Surabaya",
                interactive: true,
                title: '<img src="styles/legend/d_Halte_Surabaya_3.png" /> d_Halte_Surabaya'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Clipped_1.setVisible(true);lyr_Servicearealines_2.setVisible(true);lyr_d_Halte_Surabaya_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Clipped_1,lyr_Servicearealines_2,lyr_d_Halte_Surabaya_3];
lyr_Clipped_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_Servicearealines_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_d_Halte_Surabaya_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Jangkauan': 'Jangkauan', });
lyr_Clipped_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', });
lyr_Servicearealines_2.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_d_Halte_Surabaya_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'Jangkauan': '', });
lyr_Clipped_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', });
lyr_Servicearealines_2.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_d_Halte_Surabaya_3.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'Jangkauan': 'no label', });
lyr_d_Halte_Surabaya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});