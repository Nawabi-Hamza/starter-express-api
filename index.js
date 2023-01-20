const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Welcome To This Project Email Post Section Added')
})

app.post("/",(req,res)=>{
    // res.send("post methode") 
    // var emailto =" hamza.nawabi119@gmail.com   "
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    var emailto = "h.nawabi007@gmail.com"
    const mail = {
    from:"hamza.nawabi119@gmail.com",
    to:emailto,
    subject:"message Send From The online shop",
    html:`
    User_Name:<b>${name}</b><br/>
    User_Mail:<b>${email}</b><br/>
    Subject:<b>${subject}</b><br/>
    Message:<p>${message}</p><br/>
    `
    }
    contactMail.sendMail(mail,(error)=>{
    if(error){
        res.json(error)
    }else{
        res.json({message:"We Recieved Your Message"})
        // alert("Your Email Send it Successfuly...")
    }
    }); 
    })
app.listen(process.env.PORT || 3000)