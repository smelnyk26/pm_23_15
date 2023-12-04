 document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('myChart').getContext('2d');
            const data = {
                labels: ['12', '13', '14', '15', '16', '17', '18', '19', '20','21','22'], // Відмічені години
                datasets: [{
                    data: [20, 25, 15, 4, 16, 40, 50, 36, 24, 29, 47], // Значення на відповідних годинах
                    borderColor: 'green',
                    backgroundColor: 'transparent',
                    pointBackgroundColor: 'green',
                    pointBorderColor: 'transparent',
                    pointRadius: 5,
                    pointHoverRadius: 8
                }]
            };
            const options = {
                scales: {
                    x: {
                        display: true,
                        ticks: {
                            display: true,
                            min: '12',
                            max: '22',
                            stepSize: 1
                        }
                    },
                    y: {
                        display: false // Вимкнення вертикальної вісі
                    }
                }
            };
            const myChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: options
            });
        });