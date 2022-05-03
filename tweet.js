function count(event){
    const tweet=event.target.value;
    console.log("counting",tweet);
    updateCount(tweet);
} 
 document.getElementById("background").innerHTML= `<div class="result">YOU WIN</div>`  
function updateCount(tweet){
    console.log("counting",tweet);
    const counter=document.querySelector('.counter')
     counter.innerText=`${tweet.length}/20`;
     window.localStorage.setItem("tweet",tweet);
    }
  //window.localStorage.setItem use of this data never expires from application
  //window.localStorage.getItem for retrive data
//event.target- element who started the event
//event.target.value-word that is typed

const storedTweet=window.localStorage.getItem("tweet");
document.querySelector(".tweet").innerText=storedTweet;
console.log(storedTweet);
updateCount(storedTweet);

//for remove tweet in local storage of application
// window.localStorage.removeItem("tweet");