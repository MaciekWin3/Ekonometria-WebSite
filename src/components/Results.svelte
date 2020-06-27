<script>
    import Kmnk from './Kmnk.svelte';
    import Results from '../stores/stores.js';
    import ChartData from '../stores/chartStore.js';
    import Chart from 'svelte-frappe-charts';
    
    let answers = [];
    let chart = {};

    Results.subscribe((data) => {
        answers = data;
        //console.log(answers);
    });

    Results.subscribe((data) => {
        chart = data;
        console.log(chart);
    });
    
</script>

<p>Y = {answers.y}</p>
<p>X = {answers.x}</p>
<!-- <Chart data={chart} type="line" /> -->


<style>

</style>