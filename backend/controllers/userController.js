const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/Token');

const login = async (req, res) => {
    console.log("check")
    try{
        const userName = req.body.userName;
        const password = req.body.password;

        if(!userName || !password){
            return res.status(500).json({error:true,message:"invalid credentials"})
        }
        
        const user = await userModel.findOne({userName:userName})
        if(!user){
            return  res.status(500).json({error:true,message:"User Not Found"})
        }
        
        const passwordMatch =  await bcrypt.compare(passWord,user.password);
        if(passwordMatch){
            const authToken = await generateToken(userName,"user");
            if(authToken === ""){
            return res.status(400).json({error:true, message:"auth token not generated"});
            }
            res.cookie("token", authToken);
            return res.status(200).json({error:false,message:{token:authToken,userType: "user"}})
        }
        else{
            return res.status(500).json({error:true,message:"Password not Matching"})
        }
    }
    catch(e){
        return res.status(404).json({error:true,message:e.message})
    }
}


module.exports = {login}