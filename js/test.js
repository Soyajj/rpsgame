var a;
var com;
var comp = 0;
var i = 1;
var score1 = 0;
var score2 = 0;
var res;
var name = 0;
var message = "";

document.getElementById("name1").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
    document.getElementById("sub").click();
    document.getElementById("name1").disabled = true;
    }
});

    function getname(){
        name = document.getElementById("name1").value;
        document.getElementById('score').innerHTML = name + " - 0";
        document.getElementById("name1").disabled = true;
    }
    if (name == "0"){
        name = "Player";
    }


   function rock(){
            a = 0 ;
            document.getElementById('p1').innerHTML = "<tr>Rock</tr>";
            generate();
            answer();
            data();
            check();
            document.getElementById("name1").disabled = true;
    }

    function paper(){
            a = 1;
            document.getElementById('p1').innerHTML = "<tr>Paper</tr>";
            generate();
            answer();
            data();
            check();
            document.getElementById("name1").disabled = true;
    }

    function scissors(){
            document.getElementById("name1").disabled = true;
            document.getElementById('p1').innerHTML = "<tr>Scissors</tr></tr>";
            a = 2;
            generate()
            answer();
            data();
            check();
    }

    function generate(){
        comp = parseInt(Math.random() * 3)
       if (comp == 0){
           com = "Rock";
       }
       else if(comp == 1){
           com = "Paper";
       }
       else {
           com = "Scissors";
       }
       }

    function data(){
        document.getElementById('score').innerHTML = "<tr>" + name + " - " + score1 + "</tr>";
        document.getElementById('p2').innerHTML = "<tr>" + com + "</tr>";
        document.getElementById('scoree').innerHTML = "<tr>Computer - " + score2 + "</tr>";
        var t = document.createTextNode(res);
        document.getElementById('history').appendChild(t);
        i++;
    }

    function check(){
        if (score1 == 3 ){
            message = "<span style = 'color:green'>You have won. Congratulations!</span>";
            over();
        }
        else if(score2 == 3){
            message = "<span style = 'color: red;'>You lost!</span>";
            over();
        }
        else  if(i>=6){
            if (score1 > score2){
                message = "<span style = 'color:green'>You have won. Congratulations!</span>";
          }
            else{
                message = "<span style = 'color: red;'>You lost!</span>";
        }
        over();
       }
    }
    function answer(){
        switch (comp){
            case 0://rock
                if (a == 1 ){
                    document.getElementById('winner').innerHTML = "<span style = 'color:green'>W</span>";
                    score1++;
                    res = " W ";
                }
                else if (a == 2){
                    document.getElementById('winner').innerHTML = "<span style='color:red'>L</span>";
                    score2++;
                    res = " L ";
                }
                else{
                    document.getElementById('winner').innerHTML = "<span style = 'color:#CFC22D'>D</span>";
                    i--;
                    res = " D ";
                    console.log(i);
                }
                break;
            case 1://paper
                if (a == 0){
                    document.getElementById('winner').innerHTML = "<span style='color:red'>L</span>";
                    score2++;
                    res = " L ";
                }
                else if(a == 2){
                    document.getElementById('winner').innerHTML = "<span style = 'color:green'>W</span>";
                    score1++;
                    res = " W ";
                }
                else{
                    document.getElementById('winner').innerHTML = "<span style = 'color:#CFC22D'>D</span>";
                    i--;
                    res = " D ";
                    console.log(i);
                }
                break;
            case 2://scissors
                if (a == 0){
                    document.getElementById('winner').innerHTML = "<span style = 'color:green'>W</span>";
                    score1++;
                    res = " W ";
                }
                else if(a == 1){
                    document.getElementById('winner').innerHTML = "<span style='color:red'>L</span>";
                    score2++;
                    res = " L ";
                }
                else{
                    document.getElementById('winner').innerHTML = "<span style = 'color:#CFC22D'>D</span>";
                    i--;
                    res = " D ";
                    console.log(i);
                }
                break;
            }
            document.getElementById('result').style.display = '';
        }

    function quit(){
        document.getElementById('quit').style.display = '';
    }


    function over(){
        document.getElementById('rock').onclick=null;
        document.getElementById('paper').onclick=null;
        document.getElementById('scissors').onclick=null;
        document.getElementById('again').style.display = '';
        console.log(message);
        document.getElementById('final').innerHTML = message;
    }