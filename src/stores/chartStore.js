import { writable } from 'svelte/store';

let ChartData = writable({
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        values: [10, 12, 3, 9, 8, 15, 9]
      }
    ]
  });

  export default ChartData;