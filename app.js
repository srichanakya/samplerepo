var bodyParser = require('body-parser');
var app = require('express')();

app.use(bodyParser.urlencoded({extended:true}));


var engines = require('consolidate');
const cons = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('ejs', engines.mustache);
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.redirect('/home');
});

app.get('/home',(req,res)=>{
    res.render('main');
})

app.get('/collectSub',(req,res)=>{

    res.render('success')

})

app.post('/collectSub', (req,res)=>{
var data = {
    FirstName: req.body.FirstName,
    LastName : req.body.LastName,
    Email : req.body.Email
}

    console.log(data);

    res.redirect('/collectSub');
})
app.listen(3000, (req,res)=>{
    console.log("Server started on PORT:3000");
})
