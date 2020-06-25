<script>
    import Kmnk from './Kmnk.svelte';
    import Results from '../stores/stores.js';
    
    let answers = [];

    Results.subscribe((data) => {
        answers = data;
        console.log(answers);
    });
    
</script>

<p>Y = {answers.x}</p>
<p>X = {answers.y}</p>

<style>

</style>