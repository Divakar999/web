 const userList=[
    {
        "createdAt": "2022-05-01T03:09:48.127Z",
        "name": "Lora Hauck II",
        "avatar": "https://wallpaperaccess.com/full/2213424.jpg",
        "id": "1"
      },
      {
        "createdAt": "2022-04-30T10:08:06.319Z",
        "name": "Roberto Schuster",
        "avatar": "https://cdn.fakercloud.com/avatars/dmitriychuta_128.jpg",
        "id": "2"
      },
      {
        "createdAt": "2022-05-01T00:52:10.116Z",
        "name": "William Ryan",
        "avatar": "https://cdn.fakercloud.com/avatars/dmitriychuta_128.jpg",
        "id": "3"
      },
]

  function createUser({name,avatar,createdAt,id}){
    const joinDate= new Date(createdAt).toDateString();
    document.querySelector(".user-list").innerHTML += `
<div class="user-container">
        <img 
        class="user-pic"
         src="${avatar}"
         alt="${name}" 
         />
         <div>
         <h3 class="user-name">${name}</h3>
         <p class="user-join-date">${joinDate}</p>
         <button onclick="deleteUser(${id})">❌</button>
         <button onclick="showEditForm(${id})">✏️</button>
         <div class="user-edit-container user-edit-container-${id}">
     <input  value="${name}" class="edit-user-name-${id}" placeholder="Name"/>
     <input value="${avatar}" class="edit-user-pic-${id}"placeholder="Pic"/>
     <button onclick="editUser(${id})">💾</button> 
         </div>
    </div> 
    </div>`;
  }
    

  function showEditForm(id){
    console.log("showEditForm",id);
    document.querySelector(`.user-edit-container-${id}`).style.display="flex";
  }

  async function editUser(id){
    console.log("editUser✏️",id);
    const userName =document.querySelector(`.edit-user-name-${id}`).value;
    const userPic =document.querySelector(`.edit-user-pic-${id}`).value;
    console.log("userName,userPic"); 
    //creating user 
   //1.method:"PUT" & pass ${id};
   //2.body - data & JSON data
   //3.header - JSON data
   const data =await fetch(
    `https://626e085e034ec185d33879a3.mockapi.io/users/${id}`,
  {method:"PUT",
  body:JSON.stringify({name:userName,avatar:userPic}),
  headers:{"Content-Type": "application/json"},
  }
 );
     const result=await data.json();
     console.log(result);
     getUser();//Refresh data
  }
 
//  function getUsers(){
//   fetch("https://626e085e034ec185d33879a3.mockapi.io/users")
//   .then((data) =>data.json())
//   .then((userList)=>{
//     userList.forEach((user)=>createUser(user));
//   });
//  }


 async function getUsers(){
  const data =await fetch("https://626e085e034ec185d33879a3.mockapi.io/users")
  {method:"GET"}
  const userList = await data.json();
  document.querySelector(".user-list").innerHTML="";  //clears the old data
   userList.forEach((user)=>createUser(user));
 }

  

  //Delete user-> Refresh
  async function deleteUser(id){
    console.log("deleting user...",id);
    const data =await fetch(`https://626e085e034ec185d33879a3.mockapi.io/users/${id}`,
   {method:"DELETE"}
   );
   const result = await data.json();
   console.log(result);
  
   getUsers(); //Refresh data
 
  }
 
    getUsers();

  // add user->refresh the page
 async function addUser(){
   console.log("Adding User...");
   const userName=document.querySelector(".add-user-name").value;
   const userPic=document.querySelector(".add-user-pic").value;
   
   console.log(userName,userPic);
   //creating user 
   //1.method:"POST";
   //2.body - data & JSON
   //3.header - JSON data
   const data =await fetch(
     `https://626e085e034ec185d33879a3.mockapi.io/users`,
   {method:"POST",
   body:JSON.stringify({name:userName,avatar:userPic}),
   headers:{"Content-Type": "application/json"},
   }
  );
      const result=await data.json();
      console.log(result);
      getUser();//Refresh data
 }






    function highlyPopulatedCountries(){
            fetch("https://restcountries.com/v3.1/all") //Promise Object
         .then(data=>data.json()) // Data-Response object
        .then((countries)=>
         countries.filter(ctry=>ctry.population>1_00_00_000))
         .then((countries)=>countries.map(ctry=>ctry.name.official))
         .then((result)=>console.log(result));
    }
   
    highlyPopulatedCountries();

    //Latest suntax->async & await to handle promises
    // .then->await
    
//    async function highlyPopulatedCountries(){
//      const data=await fetch("https://restcountries.com/v3.1/all") //Promise Object
//    const countries =await data.json(); 
//      const result=countries 
//      .filter((ctry=>ctry.population>1_00_00_000))
//      .map((ctry=>ctry.name.official))
//       console.log(result);
// }
// highlyPopulatedCountries();

 


async function highlyPopulatedCountries(){
  try{
    const data=await fetch("https://restcountries.com/v3.1/all")
     const countries =await data.json(); 
    const result=countries 
    .filter((ctry=>ctry.population>1_00_00_000))
    .map((ctry=>ctry.name.official));
     console.log(result);

 }catch (err){
    
  console.log("❌",err);
 }
}












