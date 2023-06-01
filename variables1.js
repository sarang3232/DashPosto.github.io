function actualizarDatos() {
    //***************************************************** */
    
    
    // ******* INDICADORES DEL TABLERO L8 *****************
      // MODIFICA LOS VALORES SEGUN EL DIA
    
      Eficienciadeproduccion = '72%';
      Rendimientojarabe=       '100%'; 
      Desperfectos=            '1.7%';
      CumplimientoLimpieza=    '100%'; 
    
    //******* MEDICCION HORA A HORA *********************
    //           6-7am   7-8am    8-9am   9-10am   10-11am   11-12pm   12-13pm    13-14pm
    Teorica= [  3833,6355,8897,11439,13981,16523,19065,21507];
    
    //           6-7am   7-8am    8-9am   9-10am   10-11am   11-12pm   12-13pm    13-14pm
    Real= [  1250,0,0,0,0,0,0,0];
    
    
    //*********** EFICIENCIA HORA ***********************
    
    //                         Porcentaje hora 6-7am
    Hora67.setAttribute('style', 'width: 33%;'); 
    Hora67l.innerHTML =                  '33%';
    
    //                         Porcentaje hora 7-8am
    Hora78.setAttribute('style', 'width: 0%;'); 
    Hora78l.innerHTML =                  '0%';
    
    //                         Porcentaje hora 8-9am
    Hora89.setAttribute('style', 'width: 0%;'); 
    Hora89l.innerHTML =                  '0%';
    
    //                         Porcentaje hora 9-10am
    Hora910.setAttribute('style', 'width: 0%;'); 
    Hora910l.innerHTML =                  '0%';
    
    //                         Porcentaje hora 10-11am
    Hora1011.setAttribute('style', 'width: 0%;'); 
    Hora1011l.innerHTML =                  '0%';
    
    //                         Porcentaje hora 11-12pm
    Hora1112.setAttribute('style', 'width: 0%;'); 
    Hora1112l.innerHTML =                  '0%';
    
    //                         Porcentaje hora 12-13pm
    Hora1213.setAttribute('style', 'width: 0%;'); 
    Hora1213l.innerHTML =                  '0%';
    
    //                         Porcentaje hora 13-14am
    Hora1314.setAttribute('style', 'width: 0%;'); 
    Hora1314l.innerHTML =                  '0%';
    
    
    
    //***********Tiempo perdido y acumulado************
    
    //             6-7am   7-8am    8-9am   9-10am   10-11am   11-12pm   12-13pm    13-14pm         
    TiempoPerdido=['60'];
    
    
    //             6-7am   7-8am    8-9am   9-10am   10-11am   11-12pm   12-13pm    13-14pm         
    TiempoAcumulado=['60'];
    
    
    
    //*************Pon las observaciones de cada intervalo de hora************ 
    
    //                                   Observacion de 6-7 am
    Observacion67.innerHTML =                'Botella defectuosa perforada, inventario paletizadora'; 
    
    //                                   Observacion de 7-8 am
    Observacion78.innerHTML =                'Nuevo texto'; 
    
    //                                   Observacion de 8-9 am
    Observacion89.innerHTML =                'Nuevo texto'; 
    
    //                                   Observacion de 9-10 am
    Observacion910.innerHTML=                   'Nuevo texto'; 
    
    //                                   Observacion de 10-11 am
    Observacion1011.innerHTML =                'Nuevo texto'; 
    
    //                                   Observacion de 11-12 am
    Observacion1112.innerHTML =                'Nuevo texto'; 
    
    //                                   Observacion de 12-13 pm
    Observacion1213.innerHTML =                'Nuevo texto'; 
    
    //                                   Observacion de 13-14 pm
    Observacion1314.innerHTML =                'Nuevo texto'; 
    
    
    
    //*****************Programa de produccion************* 
    //********************************Pon el sabor a producir 1*/
    programa1.innerHTML =                'Colombiana cero 1000ml';
    
    //********************************Pon el sabor a producir 2 */
    programa2.innerHTML =                'Kola Postobón 1000ml ';
    
    //********************************Pon el sabor a producir 3 */
    programa3.innerHTML =                'Agua gas 600 ml ';
    
    
    //********************************Pon la cantidad de cajas y unidades 1*/
    caja1.innerHTML =                'Cajas 5000 / Unidades 60000 ';
    
    //********************************Pon la cantidad de cajas y unidades 2 */
    caja2.innerHTML =                'Cajas 5000  / Unidades 60000 ';
    
    //********************************Pon la cantidad de cajas y unidades 3 */
    caja3.innerHTML =                'Cajas 16041  / Unidades 385000 ';
    
    //*********************Marca si ya se termino la produccion del sabor********
    //********************Primer sabor**************************************** */
    marcar1.checked = false; // Poner false, si no se ha termino, o true si ya termino
    
    //********************Segundo sabor**************************************** */
    marcar2.checked = false; // Poner false, si no se ha termino, o true si ya termino
    
    //********************Tercer sabor**************************************** */
    marcar3.checked = false; // Poner false, si no se ha termino, o true si ya termino
}

//******************Eficiencia% de produccion por dia**********************
// Dias              1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var Eficienciapro= [0, 0,0,0,0,0,0,0, 0,0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];

//******************Utilizacion de linea 8**********************
// Dias              1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var Utilizacionpro= [0, 0,0,0,0,0,0,0, 0,0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];

//******************Rendimiento de azucar**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var azucar=[99,99.51,100,100,99.57,99.90,99.88,99.78,98.90,96.84,90.42,99.52,94.76,99.77,99.89,99.83,99.92,99.80,99.80,99.94,100,100]


//******************Rendimiento de jarabe**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var jarabe=[99,99.51,100,100,99.57,99.90,99.88,99.78,98.90,96.84,90.42,99.52,94.76,99.77,99.89,99.83,99.92,99.80,99.80,99.94,100,100]