const express = require('express');
const { json } = require('express');
const app = express();
const port = process.env.PORT || 8000;
//IT STUDEN
const itStdents=[
    {id:61,name:'John Maton'},
    {id:62,name:'Abeglag Rober'}
];
//ce STUDEN
const ceStudents=[
    {id:71,name:'Arther Mongan'},
    {id:72,name:'Sean max'}
];
//major
const allMajors={
    'it': itStdents,
    'ce': ceStudents
};
//route
app.get('api/:major',(req,res,next)=>{
    const major=req.params.major.toLowerCase();
    if(major=='it'){
        const jsonString=json.stringify(itStdents);
        req.myobj = jsonString;
        next();
    }else if (major=='ce'){
        const jsonString=JSON.stringify(ceStudents);
        req.myobj=jsonString;
        next();
    }else{
        res.send('Major not found!!!');  
    }
},(req,res)=>{
    req.myobj+= 'End of Data';
    res.send(req.myobj);
});
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});