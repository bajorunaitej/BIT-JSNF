const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const upload = require('../config/multer').upload;
const security = require('../utils/security');
const validate = require('../utils/validation/userValidation');

router.post('/register', upload.single("img") ,async(req, res) => {
    try{    
        // console.log(req.body);
        const {username, password, birthDate, email} = req.body;
        const fileName = require('../config/multer').lastFileName;
        console.log(fileName);
    
    
        if(!username || !email || !password || !birthDate) {
            return res.redirect('/register?error=Not all data was provided!')
        }

        const validationResult = validate(req.body);
        if( validationResult !== 'success') {
            res.redirect('/register?error=' + validationResult)
        }

        //patinkrinti ar vartotojo vardas username bei email yra unikalūs

        //unikalūs email ir username
        //1 būdas
        // let existingUser = await UserModel.findOne({username});
        // if(!existingUser)
        //     return res.redirect('/register?User with such username already exists')
    
        // existingUser = await UserModel.findOne({email});
        // if(!existingUser)
        //     return res.redirect('/register?User with such email already exists')

        //2 būdas
        //$or
        const existingUser = await UserModel.findOne(
            {$or: [{email}, {username}],
        });
        if(existingUser) {
            if(username === existingUser.username) {
                return res.redirect('/register?error=Username already exists')
            }
            if(email === existingUser.email) {
                return res.redirect('/register?error=Email already exists')
            }
        }
    
        const salt = security.generateSalt();
        const hashedPassword = security.hashPassword(password, salt)

        const newUserObj = {
            username,
            email,
            salt,
            password: hashedPassword,
            birthDate,
            profilePicture: `/public/images/${fileName}`,
        }

        const newUser = new UserModel(newUserObj);
        await newUser.save();
        //Nustatoma sesija vartotojui - po registracijos iškart įvykdomas prijungimas prie sistemos
        req.session.user = {
            id: newUser._id,
            loggedIn: true,
        };
        res.redirect('/?message=Registration was successful!');
    } catch(err) {
        res.redirect('/register?error=Unsuuccessful registration beacause provided information was incorrect :(')
    }

});

router.get('/users', async(req,res) => {
    if(!req.session.user.admin) {
        return res.status(403).json({message: "You have no rights to connect!"});
    }
    console.log(req.session.user);
    const users = await UserModel.find({});
    res.status(200).json({users })
})


router.post("/login", async(req,res) => {
    const {loginName, password} = req.body;
    const existingUser = loginName.includes('@') 
        ? await UserModel.findOne({email: loginName})
        : await UserModel.findOne({username: loginName});
    if(!existingUser) return res.redirect('/login');

    if(!security.isValidCredentials(password, existingUser.salt, existingUser.password)) {
        return res.redirect('/login');
    }

    req.session.user = {
        id: existingUser._id,
        loggedIn: true,
        admin: existingUser.admin,

    };
    res.redirect('/');
})

router.get("/logout", async (req, res) => {
    if (!req.session.user.loggedIn){
        res.redirect("/");
    }
    else {
        req.session.destroy((err) => {
            if(err){
                console.log("Klaida ištrinant sesiją");
                return res.redirect("/");
            }else{
                console.log("Sėkmingas atjungimo atvejis");
                res.clearCookie("connect.sid");
                return res.redirect("/login");
            }
        });
    }
});

module.exports = router;