import { writable } from 'svelte/store';

const Results = writable({
    isResult: false,
    y: 0,
    x: 0,
    x2: 0,
    x3: 0,
    n:0,
    lss: 0,
    
});

export default Results;