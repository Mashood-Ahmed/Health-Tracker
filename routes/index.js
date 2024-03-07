const express = require("express");
const router = express.Router();

var User = require("../model/Users");
var Vitals = require("../model/Vitals");

router.get("/", (req, res) => {
    if(req.session.user){
        res.render("home", {user: req.session.username});
    }else{
        res.redirect("/signin");
    }
});

router.get("/home", (req, res) => {
    if(req.session.user){
        //res.status(200).json({user: req.session.user});
        res.render("home", {user: req.session.username});
    }else{
        res.redirect("/signin");
    }
});

router.get("/signin", (req, res) => {
    if(req.session.user){
        res.render("/home", {user: req.session.username});
    }else{
        res.render("Login");
    }
});

router.get("/signup", (req, res) => {
    res.render("Registeration");
});

router.post('/signin', async (req, res, next) => {
    const {email, password} = req.body;
    if(email && password){
        let user = await User.findOne({email});
        if(user){
            if(user.password == password){
                req.session.user = user.id;
                res.redirect('/home');
            }else{
                console.log("Incorrect Password");
                res.redirect("/signin");
            }
        }else{
            console.log("No account with such email");
            res.redirect("/signin");
        }
    }

});

router.post("/signup", async (req, res, next) => {
    
    const {name, email, dob, password} = req.body;

    console.log(name, email, password)

    let user = await User.findOne({email});
    if(user){
        console.log("Email taken");
    }else{
        user = new User({
            name: name,
            email: email,
            dob: dob,
            password: password
        });
        await user.save();
        req.session.user = user.id;
        res.redirect('/home');
        console.log("Account created successfully");
    }
        

})

router.get("/logout", (req, res) => {
    req.session.destroy();
    console.log("Session ended");
    res.redirect("/");
})


//---------API------------//

router.get("/test", (req, res) => {
    if(req.session.user){
        res.render("vitals");
    }
    else{
        res.redirect("/signin");
    }
});
router.get("/analytics", (req, res) => {
    if(req.session.user){
        if(req.session.vitals){
            res.render("analytics", {data: req.session.vitals});
        }
        res.render("analytics");
    }
    else{
        res.redirect("/signin");
    }
});
router.get("/records", (req, res) => {
    if(req.session.user){
        res.render("records");
    }
    else{
        res.redirect("/signin");
    }
});
router.get("/recoms", (req, res) => {
    if(req.session.user){
        res.render("recoms");
    }
    else{
        res.redirect("/signin");
    }
});
router.get("/contact", (req, res) => {
    if(req.session.user){
        res.render("contact");
    }
    else{
        res.redirect("/signin");
    }
});

router.post("/vitals", async (req, res) => {
    const curr = req.session.user;
    const {o2s, hrate, sbp, btemp, rrate, w8} = req.body;

    const user = await Vitals.findOne({curr});
    if(user){
        const newRec = await Vitals.updateOne(
            { user: curr },
            { $push: { 
                os: o2s,
                hr: hrate,
                sbp: sbp,
                bt: btemp,
                rr: rrate,
                w8: w8
            }}
         );
         if(newRec){
            req.session.vitals = {os: o2s, hr: hrate, sbp: sbp, bt: btemp, rr: rrate, w8: w8};
            res.render("analytics", {vitals: req.session.vitals});
         }
    }else{
        const newRec = new Vitals({
            user: curr,    
            os: o2s,
            hr: hrate,
            sbp: sbp,
            bt: btemp,
            rr: rrate,
            w8: w8
        });
        newRec.save();
        req.session.vitals = {os: o2s, hr: hrate, sbp: sbp, bt: btemp, rr: rrate, w8: w8};
        res.render("analytics", {vitals: req.session.vitals});
    }

})

module.exports = router;