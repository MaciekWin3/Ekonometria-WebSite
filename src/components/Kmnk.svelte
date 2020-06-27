<script>

    
    //dodac bin values
    import Chart from 'svelte-frappe-charts';
    import {inv} from 'mathjs';
    import Button from '../shared/Button.svelte';
    import { createEventDispatcher } from 'svelte';
    import Results from '../stores/stores.js';
    import ChartData from '../stores/stores.js';

    var data;
    var ytxt;
    var xtxt;
    var xtxt2 = ' ';
    var xtxt3 = ' ';
    let dispatch = createEventDispatcher();
    let model = '';
    var howMany;
    let zmienne = '1';
    

	//mnożenie
    function multiplyMatrices(m1, m2) {
      var result = [];
      for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
          var sum = 0;
          for (var k = 0; k < m1[0].length; k++) {
            sum += m1[i][k] * m2[k][j];
          }
          result[i][j] = sum;
        }
      }
      return result;
    }

    const useKmnk = () => {
        var y = [];
        var x = [];
        let arrayY = ytxt;
        let arrayX = xtxt;
        
        arrayY = arrayY.split(' ');
        arrayX = arrayX.split(' ');
        howMany = arrayY.length;

        if (zmienne == 2){
          var arrayX2 = xtxt2;
          arrayX2 = arrayX2.split(' ');
        }
        else if(zmienne = 3){
          var arrayX2 = xtxt2;
          var arrayX3 = xtxt3;

          arrayX2 = arrayX2.split(' ');
          arrayX3 = arrayX3.split(' ');
          console.log(arrayX3);
        }

        console.log(arrayX);
        for(let i = 0; i < arrayY.length ; i++){
            arrayY[i] = parseInt(arrayY[i]);
            if(model == 'Potegowy' || model == 'Wykladniczy'){              
              arrayY[i] = Math.log([arrayY[i]]);
              console.log(arrayY[i]);
            }
            y.push([arrayY[i]]);
        }

        for(let i = 0; i < arrayX.length ; i++){
          arrayX[i] = parseInt(arrayX[i]);
            if (model == 'Potegowy'){
              arrayY[i] = Math.log(arrayY[i]);
              console.log('działa');
            }
            x.push([1, arrayX[i]]);  
        }

        
        //transpozycja
        let xt = x[0].map((_, colIndex) => x.map(row => row[colIndex]));

        let xtx = inv(multiplyMatrices(xt, x));

        let xty = multiplyMatrices(xt, y);
        
        let result = multiplyMatrices(xtx, xty);

        dispatch('done', result);
        
        let newData;
        let newChartData;

        Results.update(newData =>{
            return {y: result[0], x: result[1]};
            console.log(result[0]);
        })
          //setting chart data
        let arrayNumbers = []
        for(let i = 0;i < howMany; i++){
          arrayNumbers[i] = i;
        }

        // ChartData.update(newChartData =>{
        //     return {
        //       labels: arrayY,
        //       datasets: [
        //       {
        //         values: arrayX,
        //       }
        //      ]
        //     }
        // })
      //   let chartData = writable({
      //   labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      //   datasets: [
      //     {
      //       values: [10, 12, 3, 9, 8, 15, 9]
      //     }
      //   ]
      // });
        
    }

        function setChartData(){
          
          for(let i = 0;i < howMany; i++){
            labels.data[i] = i;
          }
          
        }
        

  let interpretation = '';
  
</script>


<form on:submit|preventDefault={useKmnk}>
  <div class="small-form-field">
    <label for="question">Rodzaj Modelu:</label>
    <select bind:value = {model} class='small'>
      <option value="Liniowy">Liniowy</option>
      <option value="Potegowy">Potęgowy</option>
      <option value="Wykladniczy">Wykładniczy</option>
    </select>   
  </div>
  <div class="small"></div>
  <div class="small-form-field" >
    <label for="question">Ilość zmiennych objaśnianych:</label>
    <select bind:value = {zmienne} class='small-right'>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>   
  </div>
  <div style="clear:both"></div>
  <div class="form-field">
    <label for="ZmiennaY">Zmienna objaśniana:</label>
    <input type="text" id="y" bind:value={ytxt}>   
  </div>
  <div class="form-field">
    <label for="ZmiennaX1">Pierwsza zmienna objaśniająca:</label>
    <input type="text" id="y" bind:value={xtxt}>    
  </div>
  {#if zmienne == 2}
    <div class="form-field">
      <label for="ZmiennaX2">Druga zmienna objaśniająca:</label>
      <input type="text" bind:value={xtxt2}>    
    </div>
  {/if}
  {#if zmienne == 3}
    <div class="form-field">
      <label for="ZmiennaX2">Druga zmienna objaśniająca:</label>
      <input type="text" bind:value={xtxt2}>    
    </div>
    <div class="form-field">
      <label for="ZmiennaX3">Trzecia zmienna objaśniająca:</label>
      <input type="text" bind:value={xtxt3}>    
    </div>
  {/if}
  <Button text={"Results"}></Button>	


</form>

<style>
  .small{
    width: 217px;   
    border-radius: 6px;
    margin-right: 6px;
  }
  .small-right{
    width: 217px;   
    border-radius: 6px;
    
  }
  select{
    width: 420px;
  }
  form{
    width: 440px;
    margin: 0 auto;
    text-align: center;

  }
  .form-field{
    margin: 18px auto;
  }
  input{
    width: 100%;
    border-radius: 6px;
  }
  label{
    margin: 10px auto;
    text-align: left;
  }
  .error{
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
  .small-form-field{
    float: left;
  }
</style>