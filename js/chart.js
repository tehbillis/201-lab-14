'use strict';

let canvasElem = document.getElementById('chart');

let state = new AppState();
state.loadItems();

/* TODO:
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
  const resultsData = {
    labels: state.allProducts.map(obj => obj.name),
    datasets: [{
      label: 'Votes',
      data: state.allProducts.map(obj => obj.timesClicked),
      backgroundColor: 'rgba(255, 99, 132)',
      borderColor: 'transparent',
      borderWidth: 4
    }, {
      label: 'Views',
      data: state.allProducts.map(obj => obj.timesShown),
      backgroundColor: 'rgba(54, 162, 235)',
      borderColor: 'transparent',
      borderWidth: 4
    }]
  }
  const options = {
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
}

renderChart();
