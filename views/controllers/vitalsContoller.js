const get_Date = () => {
    
}

const setVitals = () => {
    var os = document.getElementById("o2s").value;
    var hr = document.getElementById("hrate").value;
    var sbp = document.getElementById("sbp").value;
    var bt = document.getElementById("btemp").value;
    var rr = document.getElementById("rrate").value;
    var wt = document.getElementById("w8").value;
    
    const vitals = {
        os: parseFloat(os),
        hr: parseFloat(hr),
        sbp: parseFloat(sbp),
        bt: parseFloat(bt),
        rr: parseFloat(rr),
        wt: parseFloat(wt)
    }
    
    const errs = 0;
    
    Object.values(vitals).every(
        (x) => x <= 0 && 
        alert("One or more invalid inputs. Try Again!")
    );
    
    if(errs == 0){
        document.getElementById("vform").submit();
    }
}

