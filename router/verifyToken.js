const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{


       const token = req.cookies.jsonwebtoken;
      // console.log( "token" , token);
  if(token) {
      //decode token och user info
    const user = jwt.verify(token, "secretkey")
    
    req.body = user;
    next();
  }
  else{
     res.send("You are not authorised")
  }
}
//req.cookies.jsonwebtoken
  // kollar om användare har cookies 
  // jwt verifiering metod  för att kolla om det är en valid cookies
  // validerings data till server 
  // next()