var player1_name= localStorage.getItem("player1_name");
var player2_name= localStorage.getItem("player2_name");
var player1_score= 0;
var player2_score= 0;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML =  player1_score;
document.getElementById("player2_score").innerHTML =  player2_score;

document.getElementById("question_turn").innerHTML= "Question turn - " + player1_name;
document.getElementById("answer_turn").innerHTML= "Answer_turn - " + player2_name;
function send(){
          get_word=document.getElementById("word").value ;
          word= get_word.toLowerCase();
           c1= word.charAt(1);
          length_half= Math.floor(word.length/2);
          c2= word.charAt(length_half);
          length_last=word.length-1;
          c3=word.charAt(length_last);

          rc1= word.replace(c1, "_");
          console.log(rc1);
          rc2= rc1.replace(c2, "_");
          console.log(rc2);
          rc3=rc2.replace(c3, "_");
          console.log(rc3);

          question_word="<h3 id='word_display'>Q." + rc3 + "</h3>";
          input_box="<br><br> Answer: <input id='answer'>";
          check_btn="<br><br> <button onclick='check()'style='background-color: aqua, color=white, padding= 10px;'>Check</button>";
          row=question_word + input_box + check_btn;
          document.getElementById("output").innerHTML=row;
          document.getElementById("word").value="";
}
question_turn="player_1";
answer_turn="player_2";
function check(){
          get_answer= document.getElementById("answer").value;
          answer= get_answer.toLowerCase();
          if( answer == word){
                    if(answer_turn == "player_1"){
                              player1_score= player1_score +1;
                              document.getElementById("player1_score").innerHTML=player1_score;
                    }
                    else{
                              player2_score= player2_score +1;
                              document.getElementById("player2_score").innerHTML=player2_score;
                    }
          }
          if(question_turn == "player_1"){
                    question_turn = "player_2";
                    document.getElementById("question_turn").innerHTML=  "Question turn - " + player2_name;
          }
          else{
                    question_turn = "player_1";
                    document.getElementById("question_turn").innerHTML=  "Question turn - " + player1_name;
          }
          if(answer_turn == "player_1"){
                    answer_turn = "player_2";
                    document.getElementById("answer_turn").innerHTML=  "Answer turn - " + player2_name;
          }
          else{
                    answer_turn = "player_1";
                    document.getElementById("answer_turn").innerHTML=  "Answer turn - " + player1_name;
          }
          document.getElementById("output").innerHTML="";
}