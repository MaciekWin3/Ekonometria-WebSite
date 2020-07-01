<script>

</script>

<div id="content">

	<aside>
        <h1 class="title">Czym jest ekonometria</h1>
        <img src="/img/chart.png" alt="chart">
        <p class="tresc">Ekonometria to dziedzina nauk społecznych zajmująca się zastosowaniem statystyki matematycznej do modelowania i prognozowania zjawisk i relacji gospodarczych.
            W pierwszym wydaniu magazynu Econometrica, organizacja The Econometric Society wskazała, że:
            jej głównym zainteresowaniem powinno być promowanie badań nakierowanych na unifikację podejść teoretyczno-ilościowego i empiryczno-ilościowego do problemów ekonomicznych, zgłębianych konstruktywnym i rygorystycznym procesem myślowym, podobnym do tego, który dominuje w naukach przyrodniczych.
        </p>
    </aside>
    <main>
        <h1 class="title">O stronie</h1>
        <img src="/img/svelte3.png" alt="svelte">
        <p class="tresc">Strona ta została utworzona w celu prezentacji różnych zagadnień z dziedziny ekonomicznych, ekonometrycznych oraz technicznych. Na dzień dzisiejszy głowną funkcjonalnością strony jest wykorzystanie Klasycznej Metody Njamniejszych Kwadratów w celu weryfikacji modelu ekonometrycznego. Obecnie trwają prace nad rozbudowaniem tej metody, między innymi dodadaniem graficznego przedstawienia modelu w postaci wykresu oraz zakładi z bieżącymi nowinaki przy użyciu FireBase. Cała strona została zbudowana w oparciu o framework Svelte.</p>
    </main>
    <section>
        <h1 class="title">Twórca</h1>
        <img src="/img/me.jpg" alt="svelte">
        <p class="tresc">Strona ta została utworzona w celu prezentacji różnych zagadnień z dziedziny ekonomicznych, ekonometrycznych oraz technicznych. Na dzień dzisiejszy głowną funkcjonalnością strony jest wykorzystanie Klasycznej Metody Njamniejszych Kwadratów w celu weryfikacji modelu ekonometrycznego. Obecnie trwają prace nad rozbudowaniem tej metody, między innymi dodadaniem graficznego przedstawienia modelu w postaci wykresu oraz zakładi z bieżącymi nowinaki przy użyciu FireBase. Cała strona została zbudowana w oparciu o framework Svelte.</p>
    </section>
    
    
    

</div>

<style>
img{
    width: 100px;
    height: 100px;
    float: left;
    padding: 16px;
}

#content{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(10px, auto);
        grid-gap: 10px;
        max-width: 960px;
        margin: 0 auto;
        grid-template-areas:
            "aside aside aside"
            "main main main"
            "section section section";
    }
@media screen and (min-width: 760px){
    #content{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(80px, auto);
        grid-gap: 20px;
        max-width: 2060px;
        margin: 0 auto;
        grid-template-areas:
            "aside main section"
            "aside main section"
            "aside main section" 
            "aside main section";  
        }
    }        
    #content > *{
        border: 1px solid grey;
        padding: 10px;
        border-radius: 5%;
    }
    
    main{
        grid-area: main;        
        padding: 30px;
    }
    aside{
        grid-area: aside;       
        padding: 30px;
    }
    
    section{
        grid-area: section;      
        padding: 30px;
    }

    h1{
        padding-bottom: 5px;
        padding-top: 5px;
    }
    .title{
        font-size: 24px;
        border-bottom: 2px solid lightgrey;
    }
    .tresc{
        text-align: left;
        padding: 10px;
        
    }

    
</style>