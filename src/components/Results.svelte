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
        //console.log(chart);
    });
    
</script>
{#if answers.isResult == true}
    {#if !!answers.y}
        <p>Y = {answers.y}</p>
    {/if}
    {#if !!answers.y}
        X = {answers.x}
    {/if}
    {#if !!answers.x2}
        <p>X2 = {answers.x2}</p>
    {/if}
    {#if !!answers.x3}
        <p>X3 = {answers.x3}</p>
    {/if}
    {#if !!answers.n}
        <p>Liczba obserwacji  = {answers.n}</p>
    {/if}
    {#if !!answers.n}
        <p>Liczba stopni swobody  = {answers.lss}</p>
    {/if}
{:else}
    <h2>W celu uzyskania wyników podaj dane modelu w zakładce KMNK!</h2>
{/if}

<!-- <Chart data={chart} type="line" /> -->


<style>

</style>