const p =  new Promise((resolve,reject) => {
    setTimeout(()=>{
       // resolve({id:1,"name":"OAK"});
        reject(new Error('Error 404'));
    },2000);
});
console.log('Before Asyns Operation');
p.then((result)=>{
    console.log('This is result:',result);
})
.catch ((err)=>{
    console.log(err.message);
});
console.log('After Asynchronous Opertion');
