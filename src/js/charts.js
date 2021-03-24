import Chart from 'chart.js';

var websieVisits = document.getElementById('website-visits').getContext('2d');
export const websiteVisitsChart = new Chart(websieVisits, {
  type: 'line',
	pointLabelFontSize: 20,
  data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
          data: [54, 63, 60, 65, 60, 68, 60],
          borderWidth: 1,
          fill: false,
          borderColor: '#1a73e8',
        	backgroundColor: '#fff',
					borderWidth: 3,
					pointBorderWidth: 2,
					pointRadius: 6
      }]
  },
	options: {
		responsive: true, // Instruct chart js to respond nicely.
		maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
		scales: {
			xAxes: [{
					gridLines: {
							display:false
					}
			}]
		},
		legend: {
			display: false,
		}
	}
});