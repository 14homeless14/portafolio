/*RESULTADO{ FechayHora: '12/24/2024 2:36:14 AM',
  'Descripción': 'TXP_CBR8_3_HUB03, Revisar Puerto 10.0.20.3, R01,0021,089,2,1,3-Lejano - cable3/0/5.1, TOTAL CM: (271) CM OFFLINE(141), DM Alarm: (15551065),b0da.f909.dfef,bc9b.68ff.2d82,bcca.b522.e3c2,bcd1.65bf.92e0,bcd1.65c2.1ea0,c0b5.d7f6.4826,c0b5.d7fa.2128,c0b5.d7fa.3b68,c0b5.d7fb.763e,c852.6181.c02f,c852.6182.3820,c863.fc27.af55,cc0d.eceb.9c1e,d405.98d7.1942,d46a.6af2.ae4f,d80f.99b5.1f96,dc36.0c6b.fe08,dca2.6685.df36,dceb.6975.0ef8,e86f.38f9.91a2,ec5c.68fa.37b3,f44b.2ae0.f930,f8da.0c8c.58dc,f8da.0c91.0657,f8da.0cfa.6586,',
  'Título': 'MEG,Golfo,Tlapacoyan, Planta Externa, ,Distribucion, R01,0021, 0021, SALIDA PARCIAL CONCURRENTE, 10.0.20.3 - R01,0021,89 - 3/0/5.1 - CM TOTAL(271) - CM OFFLINE: (141) ',
  Nodo: '0021',
  Sucursal: 'Tlapacoyan',
  numerodesucursal: '89',
  fechaDeCreacion: '12/24/2024',
  horaDeCreacion: '2:36:14 AM' }*/

// Texto de entrada
const texto = `12/24/2024 2:36:14 AM;&;TXP_CBR8_3_HUB03, Revisar Puerto 10.0.20.3, R01,0021,089,2,1,3-Lejano - cable3/0/5.1, TOTAL CM: (271) CM OFFLINE(141), DM Alarm: (15551065),b0da.f909.dfef,bc9b.68ff.2d82,bcca.b522.e3c2,bcd1.65bf.92e0,bcd1.65c2.1ea0,c0b5.d7f6.4826,c0b5.d7fa.2128,c0b5.d7fa.3b68,c0b5.d7fb.763e,c852.6181.c02f,c852.6182.3820,c863.fc27.af55,cc0d.eceb.9c1e,d405.98d7.1942,d46a.6af2.ae4f,d80f.99b5.1f96,dc36.0c6b.fe08,dca2.6685.df36,dceb.6975.0ef8,e86f.38f9.91a2,ec5c.68fa.37b3,f44b.2ae0.f930,f8da.0c8c.58dc,f8da.0c91.0657,f8da.0cfa.6586,;&;MEG,Golfo,Tlapacoyan, Planta Externa, ,Distribucion, R01,0021, 0021, SALIDA PARCIAL CONCURRENTE, 10.0.20.3 - R01,0021,89 - 3/0/5.1 - CM TOTAL(271) - CM OFFLINE: (141) ;&;0021;&;Tlapacoyan;&;89;&;;&;VAEE=ACC
rev no match de etiqueta  | OTTime: 2024-12-24 02:53:07;&;NA;&;NA;&;NA;&;NA;&;`;

// Función para extraer y organizar la información
function organizarInformacion(texto) {
    // Dividir el texto por el separador ";&;"
    const partes = texto.split(";&;");

    // Validar que el texto tenga el formato esperado
    if (partes.length < 7) {
        throw new Error("El texto no tiene el formato esperado.");
    }

    // Extraer cada campo con validaciones
    const fechaHora = partes[0];
    const descripcion = partes[1]; 
    const titulos = partes[2];
    const nodo = partes[3];
    const zucursal = partes[4];
    const numeroDeSucursal = partes[5];



    // Crear un objeto con la información organizada
    const informacionOrganizada = {
        "FechayHora": fechaHora,
        "Descripción": descripcion,
        "Título": titulos,
        "Nodo": nodo,
        "Sucursal": zucursal,
        "numerodesucursal": numeroDeSucursal,
    };

    fecha = informacionOrganizada.FechayHora.split(" ");
    informacionOrganizada.fechaDeCreacion = fecha[0];
    informacionOrganizada.horaDeCreacion = fecha[1] + " " + fecha[2];;
    return informacionOrganizada;
}


const resultado = organizarInformacion(texto);
    console.log(resultado);

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
