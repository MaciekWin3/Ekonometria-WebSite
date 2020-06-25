<script>
    export let text;
</script>

<button on:click>
	{text}
</button>

<style>
	button {
		height: 4rem;
		width: 8rem;
		background-color: #ff3e00;
		border-color: #f1c40f;
		color: white;
		font-size: 1.25rem;
		background-image: linear-gradient(45deg, limegreen 50%, transparent 50%);
		background-position: 100%;
		background-size: 400%;
		transition: background 300ms ease-in-out;
	}
	button:hover {
		background-position: 0;
		color: white;
	}
</style>

