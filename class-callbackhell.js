
function fu(a, callback) {
    let text = a;
    let ut = text.toUpperCase();
    callback(ut);
}

function na(ut) {
    let l = ut.length;
    console.log(ut,l);
}

fu("krishna", na);


//callback hell in javascript
