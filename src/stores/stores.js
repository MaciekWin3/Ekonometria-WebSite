import { writable } from 'svelte/store';

const Results = writable({
    y: 0,
    x: 0,
    
});

export default Results;