import css from "./css/styles.css";
import normalize from "./css/modern-normalize.css";
import refs from "./js/refs.js";
import arr from './db/countries.json';
// console.log(refs.searchForm);
console.log(arr);

const { searchForm, searchResults, countriesList, modal, modalContent } = refs;

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(e.target.elements.search.value);
    let search = e.target.elements.search.value;
});







