console.log('before');
setTimeout(()=> console.log('retreive data form database'),2000)
getUser(10)
    .then((user)=>{  
        console.log(user)
        getProduct(user.userId)
    })
    
    .catch((err)=> console.log(err));


console.log('between');
console.log('after');


function getUser(id){
    new Promise((resolve, reject) => {
        
    let status= true;
    setTimeout(() => {
        console.log('retreive data from database');
        if(status){
        return  resolve ({id: id, name:"Jawaher"});
    }else{
        return reject("user not found!")
    }
    }, 2000)
})
}

function getProduct(userId){
     return new Promise((resolve, reject) => {
        
    let status= false;
    setTimeout(() => {
        console.log('retreive Products from database');
        if(status){
        return  resolve (['p1', 'p2', 'p3']);
    }else{
        return reject("user not found!")
    }
    }, 2000)
})
}


// let mode = new Promise((resolve, reject) => {
//     let modeJawaher = false;
//     if (modeJawaher){
//         resolve('na9ra');
//     }else {
//         reject("nor9d");
//     }
// });

// mode.then( (res) => console.log(res)).catch((err) => console.log(err));