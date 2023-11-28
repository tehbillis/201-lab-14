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
      data: state.allProducts.map(obj => obj.timesClicked)
    }, {
      label: 'Views',
      data: state.allProducts.map(obj => obj.timesShown)
    }]
  }
}

renderChart();
