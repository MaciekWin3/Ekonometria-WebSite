<script>


    //dodac bin values
    import {inv} from 'mathjs';
    import Button from '../shared/Button.svelte';
    import { createEventDispatcher } from 'svelte';
    import Results from '../stores/stores.js';

    let dispatch = createEventDispatcher();
    

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

	//transpozycja
	//let xt = x[0].map((_, colIndex) => x.map(row => row[colIndex]));

	//let xtx = inv(multiplyMatrices(xt, x));
	//console.log(xtx);

	//let xty = multiplyMatrices(xt, y);
	//console.log(xty);
	//let result;

		
	//$: result = multiplyMatrices(xtx, xty);
    //console.log(result);

    var ytxt;
    var xtxt;
    
    
    
    const useKmnk = () => {
        var y = [];
        var x = [];
        let arrayY = ytxt;
        let arrayX = xtxt;
        arrayY = arrayY.split(' ');
        arrayX = arrayX.split(' ');

        for(let i = 0; i < arrayY.length ; i++){
            y.push([parseInt(arrayY[i])]);
        }

        for(let i = 0; i < arrayX.length ; i++){
            x.push([1, parseInt(arrayX[i])]);
        }

        
        //transpozycja
        let xt = x[0].map((_, colIndex) => x.map(row => row[colIndex]));

        let xtx = inv(multiplyMatrices(xt, x));

        let xty = multiplyMatrices(xt, y);
        
        let result = multiplyMatrices(xtx, xty);

        //console.log(result);

        dispatch('done', result);
        //console.log(Results.x);
        //reset();
        let newData;
        Results.update(newData =>{
            return {y: result[0], x: result[1]}
        })
        
    }

    // function reset() {
	// 	Results.y.set(result[0]);
	// }

	let interpretation = '';
</script>


<form on:submit|preventDefault={useKmnk}>
    <div class="form-field">
    <label for="Zmienna Y: ">Zmienna objaśniana:</label>
    <input type="text" id="y" bind:value={ytxt}>   
  </div>
  <div class="form-field">
    <label for="question">Pierwsza zmienna objaśniająca:</label>
    <input type="text" id="y" bind:value={xtxt}>    
  </div>
  <Button text={"Results"}></Button>	
</form>

<style>
  form{
    width: 400px;
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
</style>