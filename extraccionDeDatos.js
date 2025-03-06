function extraerInformacion(ejemplo) {
    // Expresiones regulares para extraer cada parte de la información
    const regexFechaHora = /(\d{1,2}\/\d{1,2}\/\d{4}) (\d{1,2}:\d{2}:\d{2} [AP]M)/;
    const regexTituloFalla = /;&;[^;]+;&;([^;]+);&;/;
    const regexSucursal = /;&;[^;]+;&;[^;]+;&;([^;]+);&;(\d+);&;/;
    const regexNodoPuerto = /;&;(\d{4});&;/;

    // Extraer fecha y hora
    const fechaHora = ejemplo.match(regexFechaHora);
    const fechaCreacion = fechaHora ? fechaHora[1] : null;
    let horaCreacion = fechaHora ? fechaHora[2] : null;
    // Cambiar formato de la hora a "A.M." o "P.M."
    if (horaCreacion) {
        horaCreacion = horaCreacion.replace("AM", "A.M.").replace("PM", "P.M.");
    }

    // Extraer título de la falla
    const tituloFallaMatch = ejemplo.match(regexTituloFalla);
    const tituloFalla = tituloFallaMatch ? tituloFallaMatch[1].trim() : null;

    // Extraer sucursal y número de sucursal
    const sucursalInfo = ejemplo.match(regexSucursal);
    const sucursal = sucursalInfo ? sucursalInfo[1].trim() : null;
    const numeroSucursal = sucursalInfo ? sucursalInfo[2] : null;

    // Extraer nodo/puerto
    const nodoPuertoMatch = ejemplo.match(regexNodoPuerto);
    const nodoPuerto = nodoPuertoMatch ? nodoPuertoMatch[1] : null;

    // Guardar la información en un objeto
    const resultado = {
        fechaCreacion,
        horaCreacion,
        sucursal,
        numeroSucursal,
        tituloFalla,
        nodoPuerto
    };

    // Rellenar el formulario con los datos extraídos
    document.getElementById('fechaCreacion').value = resultado.fechaCreacion;
    document.getElementById('horaCreacion').value = resultado.horaCreacion;
    document.getElementById('sucursal').value = resultado.sucursal;
    document.getElementById('numeroSucursal').value = resultado.numeroSucursal;
    document.getElementById('tituloFalla').value = resultado.tituloFalla;
    document.getElementById('nodoPuerto').value = resultado.nodoPuerto;

    return resultado;
}

// Ejemplo de uso
const ejemplo3 = `3/6/2025 8:49:52 AM;&;TOL_C100G_08_HUB09, Revisar Puerto 10.0.196.72, H09,1240,264,1,1,0,250CP,32DS,Esq_5,RT03,04,01 - Logical Upstream Channel 9/6.0/0, TOTAL CM: (35) CM OFFLINE(35), DM Alarm: (38721804)6c55.e8d4.f1ad,7440.bbfb.1e30,ec5c.68ef.5bdf,f44c.70ac.fa17,10a7.9327.3728,1411.5d03.5656,5c7d.7d02.3c35,603d.2624.fd2a,f44c.70a4.6e2c,10a7.9327.7bf0,989d.5d65.944f,c0b5.d7fb.ba3c,c0b5.d7fc.2e2e,d89c.67de.58c5,d89c.67f5.0c9c,f44b.2ae3.ffd2,f44c.70a5.7dd7,9032.4bc6.a138,dc36.0c91.5840,ec5c.68ef.b0e7,f44c.70a9.eef7,1062.d085.b9c7,1062.d0a9.5ccd,1494.484d.5658,38fa.ca38.3f7d,48bd.ce43.af44,6c55.e8d3.5938,9cc8.fc73.10ec,a811.fc1d.e4b3,f44c.709f.ce88,f44c.70a2.c1ae,10a7.9326.79d0,1494.488d.8910,38fa.ca39.1976,48bd.ce03.aea0,7003.7e8a.835e,7003.7e96.8606,748a.0dea.f870,749b.e864.b058,989d.5d67.cb70,ac4c.a575.d2e4,b85e.71b1.041b,b85e.71b4.0ceb,f44c.70aa.b940,105b.adf3.8a37,1062.d095.8d74,1494.4842.a2e4,4023.43e9.cff7,481d.70a8.a8a8,48bd.ce03.acd0,48bd.ce3f.2dac,5095.519c.41e9,54a6.5c62.1d98,603d.26d5.7750,6c55.e8d5.a99a,ac4c.a574.c7ac,b85e.71b4.4dc3,c83f.b42c.1c52,d46a.6af3.7c58,f44c.70ad.024d,f88b.3732.f747,001d.d43f.5c92,1056.112a.9866,1494.4884.6044,1494.4888.0b3c,38fa.ca38.c972,3c04.61cc.e43b,441c.1221.9e90,7003.7e89.06be,7003.7e96.5e3e,9852.4a5c.1501,9852.4a5c.a412,ac4c.a573.2e84,b85e.71b0.fdfb,b85e.71b3.ec1b,d89c.67de.eb08,dceb.6972.85c0,f44c.709f.a964,f8ed.a5b8.e0e2,1062.d095.5935,1093.97da.eab6,10a7.9326.4a08,1494.484d.5cb8,1494.4884.5e64,1494.4884.6100,1494.4885.3874,18b8.1fb3.a147,283a.4d9a.eb2d,2c95.69ea.36e3,384c.90b2.0f32,441c.1222.1d68,485f.99f5.ec02,48bd.ce03.c900,48bd.cef6.96d3,7440.bbfd.4aa2,80d0.4a15.b1d4,889e.68ca.2d9e,9cc8.fc73.b2f9,ac4c.a576.1a0c,b85e.71b4.0df3,b85e.71b4.428b,bcd1.653d.9254,c0a0.0d0e.cf41,dceb.6972.a1d0,ec5c.68fb.ed47,f44c.70a7.2c83,0c96.e6f2.a935,1062.d093.b161,10a7.9327.45e8,10a7.9327.74c8,1494.4884.f190,1494.4885.3568,1494.4888.47c4,1494.4888.490c,1494.488d.8eb8,3468.95f3.0f7b,34bd.faea.6a00,384c.90ba.4e32,3cb7.4b5d.f6f4,485f.99f1.83ea,6814.01ab.af19,7003.7e8a.903e,80d0.4a0c.0bec,80d0.4aa5.f58c,986b.3d93.c192,989d.5d2f.7930,989d.5d68.2be7,9cc8.fc73.02d7,9cc8.fc73.0c91,acec.80c4.fb02,b42a.0ea6.3319,b85e.71b1.540b,b85e.71b4.469b,b85e.71b4.66ab,c0a0.0dc4.6894,c0b5.d7fc.1bf8,d89c.67f7.2692,f44c.70a3.fe22,f44c.70a5.385e,f44c.70a6.9c7d,f44c.70a9.da4b,105b.adf9.7f81,7440.bbfd.1469,ac4c.a573.483c,c83f.b4e0.7fa2,;&;MEG,Centro,Tiangistenco, Planta Externa, ,Distribucion, H09,1240, 1240, SALIDA TOTAL CONCURRENTE, 10.0.196.72 - H09,1240,264 - 9/6.0/0 - CM TOTAL(150) - CM OFFLINE: (150) ;&;1240;&;Tiangistenco;&;264;&;;&;;&;NA;&;NA;&;NA;&;NA;&;`;

// Llamar a la función para rellenar el formulario al cargar la página
window.onload = function () {
    extraerInformacion(ejemplo3);
};

/*
12/26/2024 10:28:25 PM;&;QRO_OLT5800T_GPON_02_HUB07, Revisar FSP 172.31.164.79, 0/7/4 - 054,H07,02,RT31,02,03,T00, TOTAL CM: (29) CM OFFLINE(25), DM Alarm: (41920232)Serie:48575443B4BBBBA5|
Serie:485754433F1A01A2|
Serie:4857544354D8839F|
Serie:4857544354D6809F|
Serie:48575443CB41DC9E|
Serie:485754436E278C9F|
Serie:4857544354D89E9F|
Serie:48575443196FC6B1|
Serie:48575443DF1929AD|
Serie:48575443CAD0189E|
Serie:485754431B36CCA2|
Serie:485754433EF18BA2|
Serie:48575443AE5551A3|
Serie:48575443244290A1|
Serie:48575443B1A95CA3|
Serie:485754439AF6D0A3|
Serie:48575443CB43599E|
Serie:48575443DB874DAB|
Serie:48575443B0CD8D9F|;&;MEG,Bajio,Queretaro, Planta Externa, ,Distribucion, H07,02,RT31, 0000, GPON SALIDA PARCIAL CONCURRENTE, 172.31.164.79 - 0/7/4 - 054,H07,02,RT31,02,03,T00 - CM OFFLINE: (25) - CM TOTAL(29);&;0000;&;Queretaro;&;54;&;Cerrado por RESUELTO ;&;  | OTTime: 2024-12-26 22:59:45;&;NA;&;NA;&;NA;&;NA;&;




2/26/2025 10:28:36 AM;&;TOL_CBR8_07_HUB07, Revisar Puerto 10.0.196.7, H07,1692,112,1,1,3,250CP,32DS,Esq_5,RT03,10,07-Lejano - cable1/0/5.4, TOTAL CM: (220) CM OFFLINE(120), DM Alarm: (38008563)1062.d083.7365,1062.d091.33af,3cb7.4b97.5e20,6c55.e8d5.ba20,989d.5d67.d890,989d.5d68.24a8,989d.5d68.552c,989d.5d68.e767,b42a.0ea9.bfc0,f44c.70a3.6f4a,f44c.70a7.14d9,f44c.70a9.a871,f44c.70aa.2e22,0c96.e6ef.29f2,1056.111c.d500,1056.1125.9505,105b.ade1.bd55,105b.ade2.c6ff,1062.d01b.dcd0,10a7.9325.8348,1494.4881.d118,1494.4884.6224,1494.4884.d474,1494.4884.d47c,1494.4884.d584,1494.4884.d7ac,1494.4884.de84,1494.4884.f354,1494.4885.492c,1494.4885.4960,1494.4888.0808,1494.4888.0f28,1494.488d.9614,283a.4d9b.02aa,283a.4d9e.d95f,2856.5ab2.7df1,2856.5ab6.a92b,2c95.69e5.4025,2c95.69ea.4890,30f7.728e.feb2,34bd.fab8.b850,383f.b360.7cfc,4023.43eb.68e7,441c.1220.96d8,441c.1221.55b8,441c.1221.c0f8,441c.1226.d008,485f.99ea.4558,485f.99f0.a71c,485f.99f3.6e22,485f.99f3.ad22,485f.99f5.ed52,48bd.ce03.7f18,5c76.958e.67fc,5ce3.0ee8.07ab,5cea.1dd2.cf07,603d.2610.290c,7003.7e85.b0d6,7003.7e88.4996,7003.7e8a.3ede,7003.7e90.c026,7003.7e93.2c86,7003.7e93.2ef6,7003.7e96.84d6,749b.e869.cb40,80d0.4a0b.5abc,80d0.4a0b.833c,80d0.4a0b.97ec,80d0.4a10.259c,840b.7c58.a060,840b.7cfe.9b50,840b.7cfe.d000,8c09.f46b.8e12,900d.cbbe.3852,909d.7dc6.3b85,989d.5d30.79c8,989d.5d30.7ae8,9cc8.fc65.04d4,a811.fc1d.2f8c,a811.fc1e.64c4,a8a7.95f1.c6c2,ac4c.a573.0d8c,ac4c.a575.c804,b0da.f95e.87df,b85e.71b1.013b,b85e.71b3.88e3,b85e.71b4.6c53,b85e.71b4.d17b,bc2e.48c5.fc9a,bcd1.6515.ff54,bcd1.6544.0a54,bcd1.65ce.32f8,bcd1.65ce.3610,bcd1.65ce.8dc4,c0a0.0d08.0373,c0a0.0dc4.7343,c0b5.d7f7.eb12,c0b5.d7fc.2708,cc0d.ecce.c368,d4b9.2fdb.84b5,d80f.99a0.441a,dceb.6972.8c98,dceb.6972.dd10,dceb.6976.d050,e86f.38f8.872c,e86f.38f9.8188,e89e.b45f.7bb5,ec5c.68f2.5c3f,ec5c.68f2.6977,ec5c.68f2.720b,ec5c.68fa.5061,f44b.2ad9.9562,f4c1.14ff.4f0f,f88b.37aa.5700,;&;MEG,Centro,Ixtapan de la Sal, Planta Externa, ,Distribucion, H07,1692, 1692, SALIDA PARCIAL CONCURRENTE, 10.0.196.7 - H07,1692,112 - 1/0/5.4 - CM TOTAL(220) - CM OFFLINE: (120) ;&;1692;&;Ixtapan de la Sal;&;302;&;;&;En espera de acciones
no match de etiqueta  | OTTime: 2025-02-26 10:55:44 | OTTime: 2025-02-26 11:00:18;&;NA;&;NA;&;NA;&;NA;&;




2/26/2025 5:00:28 PM;&;Carrier reporta sin servicio;&;MCA,Norte,Monterrey, , ,, MCA,MTY,MCM,AAA,324-55013, FOO MCM-LEGO,DOWN;&;0000;&;Monterrey;&;324;&;;&;sin datos  | OTTime: 2025-02-26 21:37:51 | OTTime: 2025-02-28 01:16:17 | OTTime: 2025-02-28 23:57:28 ;&;NA;&;NA;&;NA;&;NA;&;





12/26/2024 10:28:25 PM;&;QRO_OLT5800T_GPON_02_HUB07, Revisar FSP 172.31.164.79, 0/7/4 - 054,H07,02,RT31,02,03,T00, TOTAL CM: (29) CM OFFLINE(25), DM Alarm: (41920232)Serie:48575443B4BBBBA5|
Serie:485754433F1A01A2|
Serie:4857544354D8839F|
Serie:4857544354D6809F|
Serie:48575443CB41DC9E|
Serie:485754436E278C9F|
Serie:4857544354D89E9F|
Serie:48575443196FC6B1|
Serie:48575443DF1929AD|
Serie:48575443CAD0189E|
Serie:485754431B36CCA2|
Serie:485754433EF18BA2|
Serie:48575443AE5551A3|
Serie:48575443244290A1|
Serie:48575443B1A95CA3|
Serie:485754439AF6D0A3|
Serie:48575443CB43599E|
Serie:48575443DB874DAB|
Serie:48575443B0CD8D9F|;&;MEG,Bajio,Queretaro, Planta Externa, ,Distribucion, H07,02,RT31, 0000, GPON SALIDA PARCIAL CONCURRENTE, 172.31.164.79 - 0/7/4 - 054,H07,02,RT31,02,03,T00 - CM OFFLINE: (25) - CM TOTAL(29);&;0000;&;Queretaro;&;54;&;Cerrado por RESUELTO ;&;  | OTTime: 2024-12-26 22:59:45;&;NA;&;NA;&;NA;&;NA;&;




3/6/2025 8:56:01 AM;&;Cliente se comunica y reporta servicio DOWN, se observa alarma en DM

Element name Polling IP Parameter description Value Time Root time Severity Severity duration Service impact Services RCA level Alarm type Owner
 
CDMX_ISCOM2924_AN05_AZC_AT 10.4.168.47 Oper Status SMCA1-A-HUB_AZC-MCA-323-2522-2-Almacenes_y_Frigorficos_Ameriben - port5 Down Today 04:02:54 a. m. Yesterday 10:12:37 a. m. Critical 22h 47m 22s 0 None.None.None Comment added System;&;MCA,Centro,Azcapotzalco, , ,, MCA, CDMX, MCA, AA, 323-2522, ALMACENES Y FRIGORIFICOS AMERIBEN, DOWN;&;0000;&;Azcapotzalco;&;400;&;;&;;&;NA;&;NA;&;NA;&;NA;&;
 */
