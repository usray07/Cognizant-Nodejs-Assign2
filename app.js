const express = require("express");
const bodyParser = require("body-parser");

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
	extended:true
}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    rawStr = req.body.rawStr;

    if(rawStr.length!=0){
        processString(rawStr, Currency);
        processString(rawStr, AppleOrange);
        processString(rawStr, Cats);
        processString(rawStr, Numbers);
        processString(rawStr, andOr);
        processString(rawStr, Cols);
        processed = {curr:curr,apor:apor,cats:cats,nums:nums,ao:ao,cls:cls};
        // console.log(processed)
        res.render('index.pug', processed);
    }
    else{
        res.send('How can I process an Empty string?? So Enter atleast something');
    }

});


app.listen(3000, function(){
console.log("server is running on port 3000");
})

function Currency(st){
    var pat = /[$|€] ?[0-9]+\.?[0-9]*/g;
    curr =  st.match(pat);
}
function AppleOrange(st){
    var pat = /(apple|orange)/ig;
    apor =  st.match(pat);
}
function Cats(st){
    var pat = /cats?/ig;
    cats = st.match(pat);
}
function andOr(st){
    var pat = /and/ig;
    ao = st.replace(pat, 'or');
}
function Numbers(st){
    var pat = /[0-9.]+/g;
    nums = st.match(pat);
}
function Cols(st){
    var pat = /[a-zA-Z]+ ?:?/g;
    cls = st.match(pat);
}
function processString(x, myCallback){
    myCallback(x);
}
