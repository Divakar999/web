    //document - access the DOM
    // const Quotes = document.getElementsByTagName("h1");
    // console.log(Quotes);
    // console.log(Quotes[0].innerText);
    // console.log(Quotes[1].innerText);

//     const coolQuotes = document.getElementsByClassName("cool");
//     console.log(coolQuotes);
//     console.log(coolQuotes[0].innerText);
//    console.log(coolQuotes[1].innerText);

    // const funQuote =document.getElementById("fun");
    // console.log(funQuote);
    // console.log(funQuote.innerText);

//New in Js i.e.qureyselector



    // const quotesQuery = document.querySelectorAll("h1");
    // console.log(quotesQuery);
    // console.log(quotesQuery [0].innerText);
    // console.log(quotesQuery[1].innerText);

    // const coolQuotesQuery = document.querySelectorAll(".cool");
    // console.log(coolQuotesQuery);
    // console.log(coolQuotesQuery[0].innerText);
    // console.log(coolQuotesQuery[1].innerText);


    // const funQuoteQuery =document.querySelector("#fun");
    // console.log(funQuoteQuery);
    //  console.log(funQuoteQuery.innerText);

// const todos = document.querySelectorAll(".todo");
// console.log(todos);
// console.log(todos[0].innerText);
// todos[0].innerText = "Life is short,have dessert First"

// const headings= document.querySelectorAll("div > h1");
// console.log(headings);
// console.log(headings[0].innerText);

//first element matching the selector would be selected
// const todos1 = document.querySelector(".todo");
// console.log(todos1);

const todos = document.querySelectorAll(".todo");
//here todo is element todos will be value
for (let todo of todos) {
     console.log(todo,todo.innerText); 
    todo.innerText="Life is short,have dessert First";
    }



// const todos = document.querySelectorAll(".todo");
// todos.forEach(todo => {
//     console.log(todo,todo.innerText); 
//     todo.innerText="Life is short,have dessert First";
    
// }); 


    const userName=document.querySelector(".username ");
    // console.log(userName);
    // userName.setAttribute("placeholder","enter your name");
    
    //palceholder is an attribute of input

    //input background purple color is
    //backgroundColor----here Color "C" camel-case
  userName.style.backgroundColor="purple";
  userName.placeholder="enter your name"

  //innerText vs innerHTML
  const list =document.querySelector(".hobbies");
  console.log(list.innerText);
  console.log(list.innerHTML);

// list.innerText="<li>cool</li>";
// list.innerHTML="<li>cool</li>";

//replace the list
// list.innerHTML="<li>cool</li> <li>super</li> <li>nice</li>"

//ES6--use template litral(bactics-``)
// list.innerHTML=`<li>cool</li>
// <li>super</li>
// <li>super</li>`;

//add to existing list
list.innerHTML +=`<li>cool</li>
<li>super</li>
<li>Nice</li>`;


const item=document.querySelector(".hobbies > li:nth-child(2)");
item.innerText="films"


  //creating element

  const para = document.createElement("p");
  para.innerText="today is a bright sunny day";

//   document.body.append(para);

// element to which to be added .append(element)
  document.querySelector(".special").append(para);









