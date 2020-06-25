<script>

	import Kmnk from './components/Kmnk.svelte';
	import Results from './components/Results.svelte';
	import Footer from './components/footer.svelte';
	import Header from './components/header.svelte';
	import Button from './shared/Button.svelte';
	
	
	let views = ['Main', 'KMNK', 'Results'];
	export let activeView = 'KMNK';


	const tabChange = (e) => activeView = e.detail;

	const handleDone = (e) => {
		let done = 
		activeView = 'Results';
		
		var results = e.detail;
		
  	}
</script>


<Header {activeView} {views} on:tabChange={tabChange}/>
<main>
	{#if activeView === 'Results'}
		<Results />
	{:else if activeView === 'KMNK'}
		<Kmnk on:done={handleDone}/>		
	{:else}
		<h4>Main</h4>
	{/if}
</main>
<Footer/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>