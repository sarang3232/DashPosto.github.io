function actualizarDatos() {
    //***************************************************** */
    
    
    // ******* INDICADORES DEL TABLERO L8 *****************
      // MODIFICA LOS VALORES SEGUN EL DIA
  


    //           22-23pm   23-24am    24-1am   1-2am   2-3am   3-4m      4-5am        5-6am
    Teorica2= [  2500,    5000,   7501,   10001,    12501,    15501,     17501,      20002];



   //           22-23pm   23-24am    24-1am   1-2am   2-3am   3-4m      4-5am        5-6am
    Real2= [      2670,   5293,    7920,   7920,    9501,     10690,    12307,     14405];
    
    
   

     //             14-15pm   15-16pm    16-17pm   17-18pm   18-19pm   19-20pm   20-21pm    21-22pm         
     TiempoPerdido1=['0',      '1',     '1',   '60',    '24',     '33',     '24',      '12'];
    

       //             14-15pm   15-16pm    16-17pm   17-18pm   18-19pm   19-20pm   20-21pm    21-22pm         
    TiempoAcumulado1=['0',    '1',     '2',    '62',    '86',     '119',   '143',     '143'];
    
    
    
  
    
    
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
var Eficienciapro= [12, 89.1,80,32.1,12.1,56,95,94, 90,74, 76, 99, 89, 76, 20,90, 60, 70, 60, 78, 75, 60, 90, 70, 80, 50, 80, 60, 70, 80,90];

//******************Utilizacion de linea 8**********************
// Dias              1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var Utilizacionpro= [12, 89.1,80,32.1,12.1,56,95,94, 90,74, 76, 99, 89, 76, 20,90, 60, 70, 60, 78, 75, 60, 90, 70, 80, 50, 80, 60, 70, 80,90];

//******************Rendimiento de azucar**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var azucar=[99,99.51,100,100,99.57,99.90,99.88,99.78,98.90,96.84,90.42,99.52,94.76,99.77,99.89,99.83,99.92,99.80,99.80,99.94,100,100]


//******************Rendimiento de jarabe**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var jarabe=[99,99.51,100,100,99.57,99.90,99.88,99.78,98.90,96.84,90.42,99.52,94.76,99.77,99.89,99.83,99.92,99.80,99.80,99.94,100,100]
