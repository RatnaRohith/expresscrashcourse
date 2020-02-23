const express = require('express');
const path = require('path');
const members = require('./Members')
const logger = require('./middleware/logger');

const app = express();



// app.use(logger); 

app.get('/api/members', (req,res) => {
    res.json(members);
});
//get all members
app.get('/api/members',(req,res) => res.json(members));

//Get  single member
app.get('/api/members/:id',(req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
    // res.send(req.params.id);
});

//Set static folder
app.use(express.static(path.join(__dirname,'public')));
// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname, 'public','index.html'));
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
