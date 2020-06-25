<script>

	import {inv} from 'mathjs';
	let y = [[39], [32], [26],[24],[21],[20]];
	let x = [[1,13], [1,18], [1,22], [1,25], [1,26], [1,28]];

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
let xt = x[0].map((_, colIndex) => x.map(row => row[colIndex]));

let xtx = inv(multiplyMatrices(xt, x));
//console.log(xtx);

let xty = multiplyMatrices(xt, y);
//console.log(xty);

let result = multiplyMatrices(xtx, xty);
console.log(result);

let interpretation = '';
	
</script>

<main>
	<h1>Hello!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

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