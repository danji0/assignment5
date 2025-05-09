const express= require('express');
const mysql= require('mysql');
const bcrypt= require('bcrypt');
const cors= require('cors');
const app= express();
app.use(express.json());
app.use(cors());
const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"users"

});
db.connect(err=>{
    if (err)console.error("Database connection failes:", err);
    else console.log("Connected to MySQL!");

});
app.post('/register', async(req, res)=>{
    const {username, password}=req.body;
    const hashedPassword=await bcrypt.hash(password, 10);
db.query("INSERT INTO users(username, password)VALUES(?, ?)", [username, hashedPassword], (err)=>{
    if (err) return
    res.status(400).json({message: "User already exists"});
    res.json({message:"Registered successfully!"});
});
});
app.post('/login', (req, res)=> {
    const{username, password}=req.body;
    db.query("SELECT * FROM users WHERE username=?", [username], (err, results)=>{
        if(err||results.length===0) {
            return res.status(400).json({message:"Invalid login!"});
    }
    
  bcrypt.compare(password, results[0].password, (err, match)=>{
    if (!match)return res.status(400).json({message:"Inavlid login!"});

res.json({message:"Login successful!", user:username});
    });
});
});

app.listen(3000, ()=>console.log("Server running on port 3000"));




