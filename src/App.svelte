<script>

	import Main from './components/Main.svelte';
	import Kmnk from './components/Kmnk.svelte';
	import Results from './components/Results.svelte';
	import Footer from './components/footer.svelte';
	import Header from './components/header.svelte';
	import Button from './shared/Button.svelte';
	
	let isResult = false;
	let views = ['Main', 'KMNK', 'Results'];
	let activeView = 'Main';


	const tabChange = (e) => activeView = e.detail;

	const handleDone = (e) => {
		 
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
		<Main />
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