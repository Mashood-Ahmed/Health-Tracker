var vals = [96, 12, 110, 36.6, 10, 89];

const print = (eid, msg) => {
    document.getElementById(eid).innerHTML = msg;
}

const getAnalytics = () => {
    document.getElementById("check").style.display = "none";
    document.getElementById("at-container").style.display = 'block';

    if(vals[0] >= 95){
        print("os", "Normal");
    }else if (vals[0] == 93 || vals[0] == 94) {
        print("os", "Consult a Physician");
    } else {
        print("os", "Need urgent/intensive care");
    }
    
    if(vals[1] >= 45 && vals[1] <= 76){
        print("hr", "Normal");
    }else if (vals[1] >= 75 && vals[1] <= 84) {
        print("hr", "Consult a Physician");
    } else {
        print("hr", "Need urgent/intensive care");
    }
    
    if(vals[2] >= 90 && vals[2] <= 120){
        print("sbp", "Normal");
    }else if (vals[2] >= 70 && vals[2] <= 90) {
        print("sbp", "Consult a Physician");
    } else {
        print("sbp", "Need urgent/intensive care");
    }
    
    if(vals[3] >= 36 && vals[3] <= 37.5){
        print("bt", "Normal");
    }else if (vals[3] >= 37.5 && vals[3] <= 40) {
        print("bt", "Consult a Physician");
    } else {
        print("bt", "Need urgent/intensive care");
    }
    
    if(vals[4] >= 12 && vals[4] <= 19){
        print("rr", "Normal");
    }else if (vals[4] >= 0 && vals[4] <= 11) {
        print("rr", "Consult a Physician");
    } else {
        print("rr", "Need urgent/intensive care");
    }
    
    if(vals[5] >= 55 && vals[5] <= 75){
        print("w8", "Normal");
    }else if (vals[5] >= 54 && vals[5] <= 90) {
        print("w8", "Consult a Physician");
    } else {
        print("w8", "Need urgent/intensive care");
    }
}



