const main = document.getElementById('main');
const addUser = document.getElementById('add');
const doubleMoney = document.getElementById('double');
const ShowMill = document.getElementById('show');
const sort = document.getElementById('sort');
const totalWealth = document.getElementById('total');

//calling random users
getRandomUser();
getRandomUser();
getRandomUser();

//Fetch random user using API and add money
let data=[];
async function getRandomUser(){
   const res= await fetch('https://randomuser.me/api');
   const data= await res.json();
   
   const user = data.result[0];
   const newUser ={
       name: `${user.name.first} ${user.name.last}`,
       money:  Math.floor(Math.random()*1000000)
   };
   addData(newUser);
}

//function to add newobj to data array
function addData(obj){
    data.push(obj);
}
 