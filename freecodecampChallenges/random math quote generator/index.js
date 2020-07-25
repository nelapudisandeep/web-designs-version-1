let url = `https://random-math-quote-api.herokuapp.com/`;
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let addNewQuote = document.querySelector(".newQuote");
function getData(){
    fetch(url)
        .then(response=>response.json())
        .then(data=>{console.log(data);
            quote.textContent = data.quote;
            author.textContent = data.author;
        });
}
getData();
addNewQuote.addEventListener('click',e=>{
    e.preventDefault();
    getData();
});