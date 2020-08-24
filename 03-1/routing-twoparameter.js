//route 2
app.get('/api/:id/:major',(req,res)=>{
    const id = req.parms.id;
    const major =req.parms.major.toLowerCase();
    if(allMajors[major]){
        if(major=='it'){
            let stuData =itStudents.find(obj=>obj.id===parseInt(id));
            if (typeof stuData==='undefined'){
                res.send('This student is no in major IT');
            }else{
                res.send(stuData);
            }
        }else{
            let stuData = ceStudents.find(obj=>obj.id===parseInt(id));
            if (typeof stuData==='undefined'){
                res.send('This student is no in major CE');
            }else{
                res.send(stuData);
            }
        }
    }else{
        res.send('Major not found !!!');
    }
});