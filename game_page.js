var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn : "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn : "+player2_name;

function send(){


    get_word1= document.getElementById("number1").value;
    get_word2= document.getElementById("number2").value;
    document.getElementById("player_question").innerHTML = get_word1+" X "+get_word2;
    console.log("The numbers are : "+ get_word1 + " , "+ get_word2);

    answer= get_word1 * get_word2;

    question= get_word1+" X "+get_word2;

    document.getElementById("player_answer").innerHTML = "Answer : ";

    


}

function check(){

    answer= get_word1 * get_word2;

    if(document.getElementById("input_ans") == answer){


        player1_score = player1_score + 1;

        document.getElementById("player1_score").innerHTML = player1_score;

    } else{

        player2_score = player2_score + 1; 
        
        document.getElementById("player2_score").innerHTML = player2_score;
        
    }


    get_word1= document.getElementById("number1").value;
    get_word2= document.getElementById("number2").value;
    document.getElementById("player_question").innerHTML = get_word1+" X "+get_word2;
    console.log("The numbers are : "+ get_word1 + " , "+ get_word2);

    answer= get_word1 * get_word2;

    question= get_word1+" X "+get_word2;

    document.getElementById("player_answer").innerHTML = "Answer : ";

    


}