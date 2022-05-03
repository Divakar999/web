// console.log("hi from flag"); 
//DRY-dont repeat yourself

// const flag = document.createElement("img"); 
// flag.src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png?20111003033442";
// flag.setAttribute("class","flag");
// document.body.append(flag);


// const countryName=document.createElement("h2");
// countryName.innerText="Germany";
// // document.body.append(countryName);
  
// const Population =document.createElement("p");
// Population.innerText="Population:81,770,900";
// // document.body.append(Population);
  
// const Region =document.createElement("p");
// Region.innerText="Region:Europe";
// // document.body.append(Region);
  
// const Capital =document.createElement("p");
// Capital.innerText="Capital:Berlin";
// document.body.append(flag,countryName,Population,Region,Capital);
  
let countriesInfo=[
    {
    name:"India",
    population:"1,394,975,829",
    region:"Asia",
    flag:"https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
    capital:"New delhi"
},

{
    name:"Germany",
    population:"81,770,900",
    region:"Europe",
    flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flagge_Germany.jpg/120px-Flagge_Germany.jpg",
    capital:"Berlin"

},

{
    name:"United states",
    population:"323,947,800",
    region:"Americas",
    flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
    capital:"Washinton D.C."

},
{
    name:"Brazil",
    population:"206,135,893",
    region:"Americas",
    flag:"https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
    capital:"Brasilia"

},

{
    name:"Iceland",
    population:"334,300",
    region:"Europe",
    flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
    capital:"Reykjavik "

}

];
// function createCountry(country){} 1st way
function createCountry({name,flag,population,region,capital}){
    const container= document.createElement("div");
    container.setAttribute("class","container")
    // console.log(country);
    // const population =1000;
    //${}- interpolation-{substitution}
    //const {name,flag,population,capital}= country;  //object destructuring or mention inparameter itself i.e in place of country
    container.innerHTML=`<img class="flag" src=${flag} alt="">
    <div class="info">
        <h2>${name}</h2>
        <p><span>population:</span>${population}</p>
        <p><span>Region:</span> ${region}</p>
        <p><span>capital:</span>${capital}</p>
    </div>`;
      
    document.body.append(container);
    // document.body.appendChild(container);
     
    
      }
    
    // createCountry();
    
    // countriesInfo.forEach((country)=>createCountry(country));
    


    //append vs appendChild
    /*1. append can take multiple arguments
    document.body.append(flag,countryName,Population,Region,Capital);
    2. appendChild can take only one argument
    document.body.appendChild(container);  */
    
    // var x= {a:1,b:4};
    // console.log(object.keys(x)); 

/*function createCountry(){
const container= document.createElement("div");
container.setAttribute("class","container")
console.log(country);
const population =1000;
//${}- interpolation-{substitution}
container.innerHTML=`<img class="flag" src=${country.flag} alt="">
<div class="info">
    <h2>${country.name}</h2>
    <p><span>population:</span>${country.population}</p>
    <p><span>Region:</span>${country.region}</p>
    <p><span>capital:</span>${country.capital}</p>
</div>`;
document.body.append(container);

  }

// createCountry();
  countriesInfo.forEach((country)=>createCountry(country));*/
  
   fetch("https://restcountries.com/v3.1/all") //Promise object
  .then(data=>data.json())  //data- Response object
  .then((countries)=>{
      countries.forEach((country)=>{
        const newCountry={ name:country.name.official,
            flag:country.flags.svg,
            population:country.population,
            region:country.region,
            capital:country.capital,
        };
        createCountry(newCountry)
        });
    });
   

     //fetch ->xhr (request)call finishes ->return Promise object
    // [4,10,15]
    // .map(x=>x*2)  // x element in array, .map returns array
    
    // .map --> Array(Box)
    // .then -->Promise (Box -->data outside the box use .then) 