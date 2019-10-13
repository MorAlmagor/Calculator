var opcnt = 0;
var bbb = 0;
function clean() {
    bbb = 0;
    document.getElementById("ans").value = null;
    document.getElementById("mini").innerHTML = null;
};

function del() {
    if (bbb > 0) {
    bbb--;
    let x = document.getElementById("ans").value;
    var res = x.substring(0, x.length - 1);
    document.getElementById("ans").value = res;
    };
};

function ce() {
    document.getElementById("ans").value = null;
    bbb = 0;
};

function numID(y) {
    if (bbb < 1) {
        if (Number(y) || y == 0) {
            bbb++;
            document.getElementById("ans").value = document.getElementById("ans").value + y;
        };
       
    } else if (bbb < 13) { 
        if (Number(y) || y == 0) {
            opcnt = 0
            bbb++;
            document.getElementById("ans").value = document.getElementById("ans").value + y;
        }else{
            if (opcnt == 0) {
                opcnt += 1;
                bbb++;
                document.getElementById("ans").value = document.getElementById("ans").value + y;
            }else {
                alert ("Sorry you cannot put 2 Operator next each other")
            };
        };
    };      
};

function equal() {
    let text = document.getElementById("ans").value;
    if (text == "") {
        alert("please put a number")
    }
    document.getElementById("mini").innerHTML = text;
    myEval(document.getElementById("mini").innerHTML);
};

function myEval(str) {
    var operator = [];
    for (i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case "+":
                operator.push([i, "+"]);
                break;
            case "-":
                operator.push([i, "-"]);
                break;
            case "×":
                operator.push([i, "×"]);
                break;
            case "÷":
                operator.push([i, "÷"]);
                break;
        };
    };
    var mathCalc = [];
    mathCalc = str.split(/[×÷+-]/);

    for (i = 0; i < operator.length; i++) {
        mathCalc.splice(i * 2 + 1, 0, operator[i][1])
    };

    for (i = 0; i < mathCalc.length; i++) {
        if (mathCalc[i] == "×") {
            mathCalc.splice(i - 1, 3, +mathCalc[i - 1] * +mathCalc[i + 1]);
            i--;
        };
        if (mathCalc[i] == "÷") {
            mathCalc.splice(i - 1, 3, +mathCalc[i - 1] / +mathCalc[i + 1]);
            i--;
        };
    };

    for (i = 0; i < mathCalc.length; i++) {
        if (mathCalc[i] == "+") {
            mathCalc.splice(i - 1, 3, +mathCalc[i - 1] + +mathCalc[i + 1]);
            i--;
        };
        if (mathCalc[i] == "-") {
            mathCalc.splice(i - 1, 3, +mathCalc[i - 1] - +mathCalc[i + 1]);
            i--;
        };
    };
    if (mathCalc == Number(mathCalc)) {
        document.getElementById("ans").value = mathCalc;
    }else {
        alert ("cannot calculte - please put only numbers! ");
    };
};
