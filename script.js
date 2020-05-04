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
   
   const user = data.results[0];
   const newUser ={
       name: `${user.name.first} ${user.name.last}`,
       money:  Math.floor(Math.random()*1000000)
   };
   
   addData(newUser);
}

// func to doubleMoney
function doubleMon(){
    data= data.map((user)=>{
        return {...user, money: user.money*2}
    })
    UpdateDom()
}
// func to sort users
function sorted (){
   data.sort((a,b)=>b.money - a.money);
   UpdateDom();
}
// func to show only milli
function onlyMill(){
   
    data = data.filter(user=> user.money> 1000000);
   UpdateDom();
}
// func to calc total wealth
function total(){
    const wealth = data.reduce((acc, user)=> acc+=user.money, 0); // acc is accmulator and 0 ie sec parameter is start value 0 is added to result
    
    const wel = document.createElement('div');
    wel.innerHTML = `<h3>Total Wealth: <strong> ${formatMoney(wealth)}</strong></h3>`
    main.appendChild(wel);
} 

//function to add newobj to data array
function addData(obj){
    data.push(obj);

    UpdateDom();
}

function UpdateDom (providedData= data){
    //clear main div
    main.innerHTML=  ` <h2><strong>Person</strong>Wealth</h2>`;
    
    providedData.forEach(item=>{
        const element= document.createElement('div');
        element.classList.add('person');
        element.innerHTML=`<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element);
    
    });
    } 

    //formatting number as currency string
    function formatMoney(num){
        return '$' + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  
    }

  
    
 //add user
 addUser.addEventListener('click', getRandomUser);

 //double money
 doubleMoney.addEventListener('click', doubleMon);
 sort.addEventListener('click', sorted);
 ShowMill.addEventListener('click', onlyMill);
 totalWealth.addEventListener('click', total);



