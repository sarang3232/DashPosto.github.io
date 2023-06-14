function actualizarDatos() {
    //***************************************************** */
    
    

    
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
   
    
    //********************************Pon el sabor a producir 2 */
    programa2.innerHTML =                'Hit ';
    
    //********************************Pon el sabor a producir 3 */
    programa3.innerHTML =                'Hit ';
    
    
    //********************************Pon la cantidad de cajas y unidades 1*/
    
    
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
var Eficienciapro= [93.64, 78.09,79.90,79.34,70.25,93.78,91.43,97.20,53.36,65.61,85.66,90.06];

//******************Utilizacion de linea 8**********************
// Dias              1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var Utilizacionpro= [59.96, 46.36,51.39,58.18,57.12,74.50,68,67.95,68.35,50.62,66.99,64.31];



//******************Rendimiento de azucar**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var azucar=[99.59,101.18,101.14,101.71,100.67,98.92,99.88]


//******************Rendimiento de jarabe**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var jarabe=[99.27,98.81,96.04,97.56,99.63,99.04,99.6,100.41,98.97,96.96,95.82,96.26]

//******************Rendimiento de jarabe**********************
// Dias      1   2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17  18  19   20  21  22  23  24  25  26  27  28  29  30
var Desperfectos1=[0.871,0.734,0.055,1.615,0.789,0.699,0.782,0.619,4.733,1.527,0.519,0.7]


var Cajaspro=[35976,27821,36628,37144,34374,44705,40804,37170,17455,32317,42763,38187]