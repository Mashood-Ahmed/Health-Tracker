const get_Date = () => {
    var date = new Date().toJSON().slice(0, 10);
    var nDate = date.slice(0, 4) + '-'
            + date.slice(5, 7) + '-'
            + date.slice(8, 10);
    return nDate;
}

const errMsg = (feild, msg) => {
    document.getElementById(feild).innerText = msg;
}


const validateInput = (inputs) => {
    var errors = [];
    if(inputs[0].val.length > 0){
        //ure = new RegExp('^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$');
        ure = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
        if (!ure.test(inputs[0].val)){
            if(inputs[0].val.length > 20){
                errMsg(inputs[0].errFeild, "username too long");
            }else{
                errMsg(inputs[0].errFeild, "Invalid username");
            }
        }else{
            inputs[0].flag = 0;
            errMsg(inputs[0].errFeild, '');
        }
    }

    if(inputs[1].val.length > 0){
        ere = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!ere.test(inputs[1].val)){
            errMsg(inputs[1].errFeild, "Invalid email");
        }else{
            inputs[1].flag = 0;
            errMsg(inputs[1].errFeild, '');
        }
    }

    if(inputs[2].val.length > 0){
        var year = parseInt((inputs[2].val).substring(0,4));
        var today = parseInt(get_Date().substring(0,4));
        var age = today-year;
        if(age <= 0){
            errMsg(inputs[2].errFeild, "Invalid Date of Birth");
        }else{
            inputs[2].flag = 0;
        }
    }

    if(inputs[3].val.length > 0){
        if(inputs[3].val.length < 5){
            errMsg(inputs[3].errFeild, "Passwords too short");
        }else{
            if(inputs[3].val !== inputs[3].val){
                errMsg(inputs[4].errFeild, "Passwords do not match");
            }else{
                inputs[4].flag = 0;
                errMsg(inputs[4].errFeild, '');
            }
            inputs[3].flag = 0;
            errMsg(inputs[3].errFeild, '')
        }
    }

    for (var i = 0; i < inputs.length; i++){
        if(inputs[i].flag == 1){
            errors.push(1);
        }
    }

    if(errors.length <= 0){
        document.getElementById("myForm").submit();
    }
}

const isValid = () => {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("cpassword").value;
    
    var vals = [
        uname = {
            val: username,
            errFeild: "unameError",
            flag: 1
        }, 
        mail = {
            val: email,
            errFeild: "emailError",
            flag: 1
        }, 
        dob = {
            val: dob,
            errFeild: "dobError",
            flag: 1
        }, 
        pass = {
            val: pwd,
            errFeild: "pwdError",
            flag: 1
        }, 
        cpass = {
            val: cpwd,
            errFeild: "cpwdError",
            flag: 1
        }];

    vals.forEach((x, i) => x.val.length <= 0 ? 
        document.getElementById(x.errFeild).innerText = "Feild cannot be empty" : 
        validateInput(vals)
    );

}

const validLogin = () => {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    
    const errs = [0, 0];

    const vals = [
        mail = {
            val: email,
            errFeild: "emailError",
            flag: 1
        }, 
        pass = {
            val: pwd,
            errFeild: "pwdError",
            flag: 1
        },
    ];

    for(var i = 0; i < 2; i++){
        if(vals[i].val.length <= 0){
            document.getElementById(vals[i].errFeild).innerText = "Feild cannot be empty";
            errs[i] = 1;
        }else{
            errs[i] = 0;
        }
    };

    if(!errs.includes(1)){
        document.getElementById("myForm").submit();
    }
}