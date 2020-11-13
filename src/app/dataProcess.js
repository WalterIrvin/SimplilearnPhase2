function submitTest(){
    let correct = 0;
    let key = ["c", "b", "d", "a", "b", "a", "c", "a", "d", "b"];
    var q1 = getRadioValue("q1"); // C
    var q2 = getRadioValue("q2"); // B
    var q3 = getRadioValue("q3"); // D
    var q4 = getRadioValue("q4"); // A
    var q5 = getRadioValue("q5"); // B
    var q6 = getRadioValue("q6"); // A
    var q7 = getRadioValue("q7"); // C
    var q8 = getRadioValue("q8"); // A
    var q9 = getRadioValue("q9"); // D
    var q10 = getRadioValue("q10"); // B
    let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    for (let i = 0; i <key.length; i++){
        if (key[i] === questions[i]){
            correct += 1;
        }
    }
    alert("Correct:" + correct);
    if (correct >= 8){
        alert("Congrats, you have passed the exam, you now win your prize!");
    }
}

function getRadioValue(name){
    var data = document.getElementsByName(name);
    var value = "";
    for (let i=0; i<data.length; ++i){
        if (data[i].checked){
            value = data[i].value;
        }
    }
    return value;
}