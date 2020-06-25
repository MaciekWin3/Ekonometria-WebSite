<script>
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();
    
    export let views;
    export let activeView;
</script>

<header>
	<div class="overlay">
        <h1>Ekonometria</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
	<div class="tabs">
        <ul>
            {#each views as view}
            <li on:click={() => dispatch('tabChange', view)}>
                <div class:active={view === activeView}>{ view }</div>
            </li>
            {/each}
        </ul>
    </div>
	</div>
</header>

<style>
    
    header {
        text-align: center;
        width: 100%;
        height: auto;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        overflow: hidden;
        border-radius: 0 0 85% 85% / 30%;
    }
    header .overlay{
        width: 100%;
        height: 100%;
        padding: 5px;
        color: #FFF;
        text-shadow: 1px 1px 1px #333;
        background-image: linear-gradient( 135deg, green 10%, lime 100%);
        
    }

    h1 {
        font-family: 'Dancing Script', cursive;
        font-size: 40px;
        margin-bottom: 15px;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        margin-bottom: 20px;
    }
    .tabs{
        margin-bottom: 40px;
    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
        margin: 0 16px;
        font-size: 18px;
        color: white;
        cursor: pointer;
    }
    .active{
        color: orangered;
        border-bottom: 2px solid orangered;
        padding-bottom: 8px;
    }
</style>