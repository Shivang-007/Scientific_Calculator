
var memory = 0;

function add(result, character) {
    if (result.value == null || result.value == "0")
        result.value = character
    else if (result.value.length < 15) {
        result.value += character
    }
}

result = (text) => {
    var ans = eval(text.value);
    document.getElementById('userinput').value = ans;
};
MS = (text) => {
    var ans = text.value;
        memory = eval(ans);
        document.getElementById('userinput').value = memory;
}

MPLUS = (text) => {
    var ans = text.value;
        memory += eval(ans);
        document.getElementById('userinput').value = memory;

}

MMINUS = (text) => {
    var ans = text.value;
        memory -= eval(ans);
        document.getElementById('userinput').value = memory;
}

MR = (text) => {
    var ans = text.value;
    ans = memory;
    document.getElementById('userinput').value = ans;

}

MC = () => {
    memory = "0";
    document.getElementById('userinput').value = memory;

}
ceil = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.ceil(ans);
}
floor = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.floor(ans);
}
round = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.round(ans);
}
deg = (text) => {
    var ans = text.value;
    var deg = (ans * 180) / 3.14159265359;
    document.getElementById('userinput').value = deg;
}
ex= (text) => {
    var ans =Number(text.value);
    document.getElementById('userinput').value = ans.toExponential();
};

allclear = () => {
    document.getElementById('userinput').value = "0";
};
clearchar = (txt) => {
    var ans = txt.value;
    if (ans.length == 1) {
        document.getElementById('userinput').value = "0";
    }
    else {
        document.getElementById('userinput').value = ans.slice(0, -1);
    }
};
square = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = ans * ans;
};
sqrt = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.sqrt(ans);
};
ten = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.pow(10, ans);
};
log = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.log10(ans);
};
sin = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.sin(ans);
}
cos = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.cos(ans);
}
tan = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.tan(ans);
}
ln = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.log(ans);
};
invdiv = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = 1 / ans;
};
fact = (text) => {
    var ans = text.value;
    var factvalue = 1;
    for (var i = 1; i <= ans; i++) {
        factvalue *= i;
    }
    document.getElementById('userinput').value = factvalue;
};
Mod = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.abs(ans);
};
exp = (text) => {
    var ans = text.value;
    document.getElementById('userinput').value = Math.pow(Math.E, ans);
};
pie = () => {
    document.getElementById('userinput').value = Math.PI;
};
e = () => {
    document.getElementById('userinput').value = Math.E;
}
plusmin = (input) => {
    if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
};


