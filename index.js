// // variables
// let btn = document.querySelector('#btn');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

// const quotes = [{quote: `People who say they're 'close' often back out when they find someone 'closer'`, person: `Anonymous`},{quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet officia id itaque mollitia, corporis distinctio quaerat quos? Porro, aut.`, person: `two`},{quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet officia id itaque mollitia, corporis distinctio quaerat quos? Porro, aut.`, person: `three`},{quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet officia id itaque mollitia, corporis distinctio quaerat quos? Porro, aut.`, person: `four`},{quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet officia id itaque mollitia, corporis distinctio quaerat quos? Porro, aut.`, person: `five`},{quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet officia id itaque mollitia, corporis distinctio quaerat quos? Porro, aut.`, person: `six`},{quote: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet officia id itaque mollitia, corporis distinctio quaerat quos? Porro, aut.`, person: `seven`}];

// btn.addEventListener('click',function(){
//     let random = Math.floor(Math.random()*quotes.length);

//     quote.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;
// })

// ----------------------------------

let btn = document.querySelector('#btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const api_url = "https://dummyjson.com/quotes/random";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json(); // Call `json()` as a function

        // Display the quote and author
        quote.innerHTML = data.quote;
        person.innerHTML = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        quote.innerHTML = "Oops, something went wrong.";
        person.innerHTML = "";
    }
}

// Fetch a new quote on button click
btn.addEventListener('click', () => getQuote(api_url));

// Fetch an initial quote on page load
getQuote(api_url);

