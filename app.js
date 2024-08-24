//initialize the application component on the main .Js file too
//also confirm if the infomation in the pakage.json file is correct note: do not change the dependecy. then after the installation process of express.js and others. you will bring in express

const express = require("express");
const app = express();
const path = require("path");



// setup middleware for handling json request bodies
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}));
app.use(express.json());





//the above is done in oder to inform our html that the css filles needed is located in the public folder

//set up routes and routes
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/home.html"))
})

app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/about.html"))
})

app.get("/experience", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/experience.html"))
})

app.get("/portfolio", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/portfolio.html"))
})

app.get("/what-we-do", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/what-we-do.html"))
})

app.get("/Vission-Mission", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/Vission-Mission.html"))
})

app.get("/Target-Market", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/Target-Market.html"))
})

app.get("/skills", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/skills.html"))
})

app.get("/form", (req, res)=>{
    res.sendFile(path.join(__dirname, "views/form.html"))
})


//app.post("/contact", (req, res)=>{})

//post request
// the form submitted will be saved inside body and in other to get that done you will go back to middle ware to assign body key 

app.post("/form", (req, res)=>{
console.log(req.body)
res.sendFile(path.join(__dirname, "views/form.html"))
})

app.post("/home", (req, res)=>{
    console.log(req.body)
    res.sendFile(path.join(__dirname, "views/home.html"))
    })

//then you create a listner for the server
app.listen(7654,()=>{
    console.log("Server is running on port 7654");
    //after the server is started you can start writing your routes and middleware
});

//intall a package called nodemon and it is use to auto restart the server to install node-nodemon "npm install nodemon ---save-dev

//how to start your server with node-nodemon, go under script and type "dev": "nodemon app.js" then go to terminal and type "mpm run dev"