import  express  from 'express';

//require('dotnet').config();
const app=express();

app.use(express.static('dist'))

app.get('/',(req,res)=>{
    res.send('Server is ready')
})


app.get('/api/jokes',(req,res)=>{

    const jokes=[
        {
            id:'ONE ONE',
            title:'NIHIT IS A JOKE',
            content:'This is a joke'
        },
        {
            id:2,
            title:'A 2 joke',
            content:'This is 2nd a joke'
        },
        {
            id:3,
            title:'Another 3 joke',
            content:'This is another 3rd joke'
        },
        {
            id:4,
            title:'Another 4th joke',
            content:'This is another joke'
        },
        {
            id:5,
            title:'Another 5th joke',
            content:'This is another joke'
        }
    ];

    res.send(jokes);
})
const port=process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})