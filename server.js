const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 5000;
const Admin = require('./Admin_Schema')
const VolleyballTeam = require('./VolleyBallTeam_Schema')
const cors = require('cors')
require('./Connection')
// const User = mongoose.model('User', {
//     username: String,
//     password: String
// });

// app.use(bodyParser.json());
app.use(express.json()) 
app.use(cors())
app.use(express.urlencoded({extended:true}))


app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, 'your-secret-key');

    res.json({ token });
});

app.post('/login',async(req,res)=>{
    const username = req.body.username 
    const password = req.body.password
    const result = await Admin.findOne({username,password}).select('-password')
    if(result)
    res.json(result)
    else
    res.json("No users Found..!!")
})

app.post('/registerVolleyballTeam',async(req,res)=>{
    const team = req.body.team
    const Team = new VolleyballTeam(team)
    const result = await Team.save()
    if(result.team_name)
    {
        res.json(result)
    }
    else
    {
        res.json("Error")
    }
})
app.get('/getVolleyballTeams',async(req,res)=>{
    const teams = await VolleyballTeam.find()
    if(teams)
    {
        res.send(teams)
    }
    else
    {
        res.send("No teams found..!!")
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});