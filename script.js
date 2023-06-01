$(document).ready(function() {
    // Datos de ejemplo
    var data = [
        { date: '2023-05-01', value: Number(Eficienciapro[0]) },
        { date: '2023-05-02', value: Number(Eficienciapro[1])},
        { date: '2023-05-03', value: Number(Eficienciapro[2])},
        { date: '2023-05-04', value: Number(Eficienciapro[3] )},
        { date: '2023-05-05', value: Number(Eficienciapro[4] )},
        { date: '2023-05-06', value: Number(Eficienciapro[5] )},
        { date: '2023-05-07', value: Number(Eficienciapro[6] )},
        { date: '2023-05-08', value: Number(Eficienciapro[7] )},
        { date: '2023-05-09', value: Number(Eficienciapro[8] )},
        { date: '2023-05-10', value: Number(Eficienciapro[9] )},
        { date: '2023-05-11', value: Number(Eficienciapro[10] )},
        { date: '2023-05-12', value: Number(Eficienciapro[11] )},
        { date: '2023-05-13', value: Number(Eficienciapro[12] )},
        { date: '2023-05-14', value: Number(Eficienciapro[13] )},
        { date: '2023-05-15', value: Number(Eficienciapro[14] )},
        { date: '2023-05-16', value: Number(Eficienciapro[15] )},
        { date: '2023-05-17', value: Number(Eficienciapro[16] )},
        { date: '2023-05-18', value: Number(Eficienciapro[17] )},
        { date: '2023-05-19', value: Number(Eficienciapro[18] )},
        { date: '2023-05-20', value: Number(Eficienciapro[19] )},
        { date: '2023-05-21', value: Number(Eficienciapro[20] )},
        { date: '2023-05-22', value: Number(Eficienciapro[21] )},
        { date: '2023-05-23', value: Number(Eficienciapro[22] )},
        { date: '2023-05-24', value: Number(Eficienciapro[23] )},
        { date: '2023-05-25', value: Number(Eficienciapro[24] )},
        { date: '2023-05-26', value: Number(Eficienciapro[25] )},
        { date: '2023-05-27', value: Number(Eficienciapro[26] )},
        { date: '2023-05-28', value: Number(Eficienciapro[27] )},
        { date: '2023-05-29', value: Number(Eficienciapro[28] )},
        { date: '2023-05-30', value: Number(Eficienciapro[29] )},
        { date: '2023-05-31', value: Number(Eficienciapro[30] )}
    ];

    // Mapear los datos a un formato compatible con Morris.js
    var chartData = data.map(function(item) {
        return { date: item.date, value: item.value };
    });

    // Configuración del gráfico
    new Morris.Line({
        element: 'chart',
        data: chartData,
        xkey: 'date',
        ykeys: ['value'],
        labels: ['Eficiencia%'],
        xLabelFormat: function (x) {
            return x.getDate(); // Obtiene solo el día del mes
        },
        ymin: 'auto',  // Ajusta el límite inferior del eje Y automáticamente
        ymax: 'auto',  // Establece el límite superior del eje Y
        yLabelFormat: function (y) {
            return y.toFixed(2); // Muestra solo 2 decimales
        }
    });
});


$(document).ready(function() {
    // Datos de ejemplo
    var data = [
        { date: '2023-05-01', value: Number(Utilizacionpro[0]) },
        { date: '2023-05-02', value: Number(Utilizacionpro[1])},
        { date: '2023-05-03', value: Number(Utilizacionpro[2])},
        { date: '2023-05-04', value: Number(Utilizacionpro[3] )},
        { date: '2023-05-05', value: Number(Utilizacionpro[4] )},
        { date: '2023-05-06', value: Number(Utilizacionpro[5] )},
        { date: '2023-05-07', value: Number(Utilizacionpro[6] )},
        { date: '2023-05-08', value: Number(Utilizacionpro[7] )},
        { date: '2023-05-09', value: Number(Utilizacionpro[8] )},
        { date: '2023-05-10', value: Number(Utilizacionpro[9] )},
        { date: '2023-05-11', value: Number(Utilizacionpro[10] )},
        { date: '2023-05-12', value: Number(Utilizacionpro[11] )},
        { date: '2023-05-13', value: Number(Utilizacionpro[12] )},
        { date: '2023-05-14', value: Number(Utilizacionpro[13] )},
        { date: '2023-05-15', value: Number(Utilizacionpro[14] )},
        { date: '2023-05-16', value: Number(Utilizacionpro[15] )},
        { date: '2023-05-17', value: Number(Utilizacionpro[16] )},
        { date: '2023-05-18', value: Number(Utilizacionpro[17] )},
        { date: '2023-05-19', value: Number(Utilizacionpro[18] )},
        { date: '2023-05-20', value: Number(Utilizacionpro[19] )},
        { date: '2023-05-21', value: Number(Utilizacionpro[20] )},
        { date: '2023-05-22', value: Number(Utilizacionpro[21] )},
        { date: '2023-05-23', value: Number(Utilizacionpro[22] )},
        { date: '2023-05-24', value: Number(Utilizacionpro[23] )},
        { date: '2023-05-25', value: Number(Utilizacionpro[24] )},
        { date: '2023-05-26', value: Number(Utilizacionpro[25] )},
        { date: '2023-05-27', value: Number(Utilizacionpro[26] )},
        { date: '2023-05-28', value: Number(Utilizacionpro[27] )},
        { date: '2023-05-29', value: Number(Utilizacionpro[28] )},
        { date: '2023-05-30', value: Number(Utilizacionpro[29] )},
        { date: '2023-05-31', value: Number(Utilizacionpro[30] )}
    ];

    // Mapear los datos a un formato compatible con Morris.js
    var chartData = data.map(function(item) {
        return { date: item.date, value: item.value };
    });

    // Configuración del gráfico
    new Morris.Line({
        element: 'chart1',
        data: chartData,
        xkey: 'date',
        ykeys: ['value'],
        labels: ['Eficiencia%'],
        lineColors: ['#33ff33'], // Cambiar el color de la línea a rojo
        xLabelFormat: function (x) {
            return x.getDate(); // Obtiene solo el día del mes
        },
        ymin: 'auto',  // Ajusta el límite inferior del eje Y automáticamente
        ymax: 'auto',  // Establece el límite superior del eje Y
        yLabelFormat: function (y) {
            return y.toFixed(2); // Muestra solo 2 decimales
        },
        
    });
});

$(document).ready(function() {
    // Datos de ejemplo
    var data = [
        { date: '2023-05-01', value: 78.7 },
        { date: '2023-05-02', value: 82.2 },
        { date: '2023-05-03', value: 78.74 },
        { date: '2023-05-04', value: 89.38 },
        { date: '2023-05-05', value: 88.36 },
        { date: '2023-05-06', value: 91.08 },
        { date: '2023-05-07', value: 84.86 },
        { date: '2023-05-08', value: 68.27 },
        { date: '2023-05-09', value: 88.12 },
        { date: '2023-05-10', value: 82.3 },
        { date: '2023-05-11', value: 50.03 },
        { date: '2023-05-12', value: 46.84 },
        { date: '2023-05-13', value: 74.14 },
        { date: '2023-05-14', value: 88.37 },
        { date: '2023-05-15', value: 90.87 },
        { date: '2023-05-16', value: 75.62 },
        { date: '2023-05-17', value: 53.94 },
        { date: '2023-05-18', value: 79.32 },
        { date: '2023-05-19', value: 83.37 },
        { date: '2023-05-20', value: 89.29 },
        { date: '2023-05-21', value: 83.48 },
        { date: '2023-05-22', value: 65.99 },
        { date: '2023-05-23', value: 62.87 },
        { date: '2023-05-24', value: 87.46 },
        { date: '2023-05-25', value: 79.27 },
        { date: '2023-05-26', value: 65.9 },
        { date: '2023-05-27', value: 90.8 },
        { date: '2023-05-28', value: 86.2 }
    ];

    // Mapear los datos a un formato compatible con Morris.js
    var chartData = data.map(function(item) {
        return { date: item.date, value: item.value };
    });

    // Configuración del gráfico
    new Morris.Line({
        element: 'chart2',
        data: chartData,
        xkey: 'date',
        ykeys: ['value'],
        labels: ['Eficiencia%'],
        xLabelFormat: function (x) {
            return x.getDate(); // Obtiene solo el día del mes
        },
        ymin: 'auto',  // Ajusta el límite inferior del eje Y automáticamente
        ymax: 'auto',  // Establece el límite superior del eje Y
        yLabelFormat: function (y) {
            return y.toFixed(2); // Muestra solo 2 decimales
        },
        
    });
});

$(document).ready(function() {
    // Datos de ejemplo
    var data = [
        { date: '2023-05-01', value: 64.29 },
        { date: '2023-05-02', value: 62.37 },
        { date: '2023-05-03', value: 53.56 },
        { date: '2023-05-04', value: 76.66 },
        { date: '2023-05-05', value: 50.63 },
        { date: '2023-05-06', value: 72.67 },
        { date: '2023-05-07', value: 66.77 },
        { date: '2023-05-08', value: 83.56 },
        { date: '2023-05-09', value: 76.7 },
        { date: '2023-05-10', value: 70.1 },
        { date: '2023-05-11', value: 50.03 },
        { date: '2023-05-12', value: 22.54 },
        { date: '2023-05-13', value: 52.40 },
        { date: '2023-05-14', value: 71.37 },
        { date: '2023-05-15', value: 78.63 },
        { date: '2023-05-16', value: 60.94 },
        { date: '2023-05-17', value: 38.32 },
        { date: '2023-05-18', value: 60.19 },
        { date: '2023-05-19', value: 48.92 },
        { date: '2023-05-20', value: 72.98 },
        { date: '2023-05-21', value: 63.75 },
        { date: '2023-05-22', value: 53.85 },
        { date: '2023-05-23', value: 54.83 },
        { date: '2023-05-24', value: 54.84 },
        { date: '2023-05-25', value: 69.64 },
        { date: '2023-05-26', value: 37 },
        { date: '2023-05-27', value: 67 },
        { date: '2023-05-28', value: 66 },
        { date: '2023-05-29', value: 88.3 }
    ];

    // Mapear los datos a un formato compatible con Morris.js
    var chartData = data.map(function(item) {
        return { date: item.date, value: item.value };
    });

    // Configuración del gráfico
    new Morris.Line({
        element: 'chart3',
        data: chartData,
        xkey: 'date',
        ykeys: ['value'],
        labels: ['Eficiencia%'],
        lineColors: ['#33ff33'], // Cambiar el color de la línea a rojo
        xLabelFormat: function (x) {
            return x.getDate(); // Obtiene solo el día del mes
        },
        ymin: 'auto',  // Ajusta el límite inferior del eje Y automáticamente
        ymax: 'auto',  // Establece el límite superior del eje Y
        yLabelFormat: function (y) {
            return y.toFixed(2); // Muestra solo 2 decimales
        },
        
    });
});