function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game.html";
}

    player1_name = localStorage.getItem("player1_name");
    player2_name = localStorage.getItem("player2_name");

    player1_score = 0;
    player2_score = 0;

    document.getElementById("player1_name").innerHTML = player1_name + ": ";
    document.getElementById("player2_name").innerHTML = player2_name + ": ";

    document.getElementById("player1_score").innerHTML = player1_score ;
    document.getElementById("player2_score").innerHTML = player2_score ;

    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualAnswer = parseInt(number1) * parseInt(number2);

    question_number = "<br><h4>" + number1 + " X " + number2 + "<h4>";
    input_box = "<br><span class = 'answer_text'>Answer:</span> <input type = 'text' id = 'input_check_box'>";
    check_button = "<button class = 'btn btn-info check_button' onclick = 'check()'>Check</button>";
    row = question_number + input_box + "<br> <br>" + check_button;

    document.getElementById("output").innerHTML = row;

    number1 = "";
    number2 = "";

    document.getElementById("output").style.display = "block";

    document.getElementById("number1_div").style.display = "none";
    document.getElementById("number2_div").style.display = "none";
    document.getElementById("send_button").style.display = "none";
}

function check(){
    
}