// Пример использования Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
		datasets: [{
			label: 'Количество выполненных задач',
			data: [12, 19, 13, 15, 12, 9, 16],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});

// Пример использования Anychart
anychart.onDocumentLoad(function () {
	// create an instance of a pie chart
	var chart = anychart.pie();
	// set the data
	chart.data([
		["JavaScript", 7],
		["SCSS", 6],
		["HTML", 6],
		["JSON", 2],
		["npm", 1]
	]);
	// set chart title
	chart.title("Top 5 используемых технологий в обучении");
	// set the container element 
	chart.container("container");
	// initiate chart display
	chart.draw();
});


// Пример использования Highcharts
Highcharts.chart('highchartsContainer', {
	chart: {
		type: 'bar'
	},
	title: {
		text: 'Изучение JavaScript'
	},
	xAxis: {
		categories: ['Типы данных', 'Функции и переменные', 'Знакомство с  DOM', 'Строки и объект Math', 'Даты и условия', 'Массивы', 'Циклы', 'Формы', 'Объекты и классы', 'Веб-хранилища и JSON-объект', 'Асинхронность и работа с API', 'Обработка ошибок. Node.js и npm', ]
	},
	yAxis: {
		title: {
			text: ''
		}
	},
	series: [{
		name: 'Кол-во дней затраченных на обучение',
		data: [1, 3, 3, 2, 3, 5, 3, 5, 3, 4, 4, 3]
	}]
});