const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// app.get('/',(req,res)=>{
//   res.send("Hii there I'm Aamin");
// })

app.post('/', (req, res) => {
  const user = req.body;
  //console.log(user);
  //res.send({user});
  var ans=0;
  if (!user.operation || !user.values) {
    res.status(400).send({ error: 'Required parameters missing' });
  }

  // check all requirements first

  if(user.operation=="sum"){
    for(var i=0;i<user.values.length;i++)ans+=user.values[i];
    console.log(ans);
    res.status(200).send({ answer : ans });
  }else if(user.operation=="multiply"){
    ans=1;
    for(var i=0;i<user.values.length;i++)ans*=user.values[i];
    console.log(ans);
    res.status(200).send({ answer : ans });
  }else{
    res.status(400).send({ message: 'Bad Request: The request could not be understood or was missing required parameters.' });
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});