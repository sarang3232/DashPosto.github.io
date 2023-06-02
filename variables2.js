function actualizarDatos() {
    //***************************************************** */
    // Variables que manejan la linea 10
    
    // ******* INDICADORES DEL TABLERO L8 *****************
      // MODIFICA LOS VALORES SEGUN EL DIA
    
      Eficienciadeproduccion = '72%';
      Rendimientojarabe=       '99.7%'; 
      Desperfectos=            '1.7%';
      CumplimientoLimpieza=    '100%'; 
    
    //******* MEDICCION HORA A HORA *********************
    //           6-7am   7-8am    8-9am   9-10am   10-11am   11-12pm   12-13pm    13-14pm
    Teorica= [  2500,    5000,   7501,   10001,    12501,    15501,     17501,      20002];
    

    //           14-15pm   15-16pm    16-17pm   17-18pm   18-19pm   19-20pm   20-21pm    21-22pm
    Teorica1= [  2500,    5000,   7501,   10001,    12501,    15501,     17501,      20002];


    //           22-23pm   23-24am    24-1am   1-2am   2-3am   3-4m      4-5am        5-6am
    Teorica2= [  2500,    5000,   7501,   10001,    12501,    15501,     17501,      20002];



    //           6-7am   7-8am    8-9am   9-10am   10-11am   11-12pm   12-13pm    13-14pm
    Real= [      2670,   5293,    7920,   7920,    9501,     10690,    12307,     14405];

    //           14-15pm   15-16pm    16-17pm   17-18pm   18-19pm   19-20pm   20-21pm    21-22pm
    Real1= [      2670,   5293,    7920,   7920,    9501,     10690,    12307,     14405];

   //           22-23pm   23-24am    24-1am   1-2am   2-3am   3-4m      4-5am        5-6am
    Real2= [      2670,   5293,    7920,   7920,    9501,     10690,    12307,     14405];
    
    
    //*********** EFICIENCIA HORA ***********************
    
    //                         Porcentaje hora 6-7am
    Hora67.setAttribute('style', 'width: 75%;'); 
    Hora67l.innerHTML =                  '75%';
    
    //                         Porcentaje hora 7-8am
    Hora78.setAttribute('style', 'width: 75%;'); 
    Hora78l.innerHTML =                  '75%';
    
    //                         Porcentaje hora 8-9am
    Hora89.setAttribute('style', 'width: 75%;'); 
    Hora89l.innerHTML =                  '75%';
    
    //                         Porcentaje hora 9-10am
    Hora910.setAttribute('style', 'width: 75%;'); 
    Hora910l.innerHTML =                  '75%';
    
    //                         Porcentaje hora 10-11am
    Hora1011.setAttribute('style', 'width: 75%;'); 
    Hora1011l.innerHTML =                  '75%';
    
    //                         Porcentaje hora 11-12pm
    Hora1112.setAttribute('style', 'width: 75%;'); 
    Hora1112l.innerHTML =                  '75%';
    
    //                         Porcentaje hora 12-13pm
    Hora1213.setAttribute('style', 'width: 75%;'); 
    Hora1213l.innerHTML =                  '75%';
    
    //                         Porcentaje hora 13-14am
    Hora1314.setAttribute('style', 'width: 75%;'); 
    Hora1314l.innerHTML =                  '75%';
    
    
    
    //***********Tiempo perdido y acumulado************
    
    //             6-7am   7-8am    8-9am   9-10am   10-11am   11-12pm   12-13pm    13-14pm         
    TiempoPerdido=['0',      '1',     '1',   '60',    '24',     '33',     '24',      '12'];

     //             14-15pm   15-16pm    16-17pm   17-18pm   18-19pm   19-20pm   20-21pm    21-22pm         
     TiempoPerdido1=['0',      '1',     '1',   '60',    '24',     '33',     '24',      '12'];
    
    
    //             6-7am   7-8am    8-9am   9-10am   10-11am   11-12pm   12-13pm    13-14pm         
    TiempoAcumulado=['0',    '1',     '2',    '62',    '86',     '119',   '143',     '143'];

       //             14-15pm   15-16pm    16-17pm   17-18pm   18-19pm   19-20pm   20-21pm    21-22pm         
    TiempoAcumulado1=['0',    '1',     '2',    '62',    '86',     '119',   '143',     '143'];
    
    
    
    //*************Pon las observaciones de cada intervalo de hora************ 
    
    //                                   Observacion de 6-7 am
    Observacion67.innerHTML =                'Nuevo texto'; 
    
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
    programa1.innerHTML =                'Hit ';
    
    //********************************Pon el sabor a producir 2 */
    programa2.innerHTML =                'Hit ';
    
    //********************************Pon el sabor a producir 3 */
    programa3.innerHTML =                'Hit ';
    
    
    //********************************Pon la cantidad de cajas y unidades 1*/
    caja1.innerHTML =                'Cajas #  / Unidades # ';
    
    //********************************Pon la cantidad de cajas y unidades 2 */
    caja2.innerHTML =                'Cajas #  / Unidades # ';
    
    //********************************Pon la cantidad de cajas y unidades 3 */
    caja3.innerHTML =                'Cajas #  / Unidades # ';
    
    //*********************Marca si ya se termino la produccion del sabor********
    //********************Primer sabor**************************************** */
    marcar1.checked = false; // Poner false, si no se ha termino, o true si ya termino
    
    //********************Segundo sabor**************************************** */
    marcar2.checked = true; // Poner false, si no se ha termino, o true si ya termino
    
    //********************Tercer sabor**************************************** */
    marcar3.checked = false; // Poner false, si no se ha termino, o true si ya termino
}

//******************Eficiencia% de produccion por dia**********************
// Dias              1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var Eficienciapro= [10, 0,0,0,0,0,0,0, 0,0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];

//******************Utilizacion de linea 8**********************
// Dias              1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var Utilizacionpro= [0, 0,0,0,0,0,0,0, 0,0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];

//******************Rendimiento de azucar**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var azucar=[99,99.51,100,100,99.57,99.90,99.88,99.78,98.90,96.84,90.42,99.52,94.76,99.77,99.89,99.83,99.92,99.80,99.80,99.94,100,100]


//******************Rendimiento de jarabe**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var jarabe=[99,99.51,100,100,99.57,99.90,99.88,99.78,98.90,96.84,90.42,99.52,94.76,99.77,99.89,99.83,99.92,99.80,99.80,99.94,100,100]