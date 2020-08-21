const getStudent = (id)=>{
    return new Promise((resolove,reject)=>{
        setTimeout(()=>{
            let name = 'Fenete';
            if (name){
                resolove({stuid:id,Stuname:name});
            }else{
                reject(new Error('Cannot get'));
            }
        },2000);
    });
}
getStudent(15)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
});