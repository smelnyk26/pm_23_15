window.onload = function () {

    const filePath = "./json/lineChartData.json";

    async function fetchData() {
        try {
            const response = await fetch(filePath);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();

            console.log(jsonData);

            return jsonData;
        } catch (error) {
            throw new Error('There has been a problem with your fetch operation:', error);
        }
    }

    async function fetchLineChartData() {
        const response = await fetchData();

        console.log(response);

        const ctx = document.getElementById('myChart').getContext('2d');
        const data = {
            labels: response.labels,
            datasets: [{
                data: response.datasets[0].data,
                borderColor: response.datasets[0].borderColor,
                backgroundColor: response.datasets[0].backgroundColor,
                pointBackgroundColor: response.datasets[0].pointBackgroundColor,
                pointBorderColor: response.datasets[0].pointBorderColor,
                pointRadius: response.datasets[0].pointRadius,
                pointHoverRadius: response.datasets[0].pointHoverRadius
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
        console.log(response.labels);
    }

    fetchLineChartData();
};
