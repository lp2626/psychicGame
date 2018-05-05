var win=0;
var loss=0;
var guessLeft=10;
var guessCount=0;
var compLetter;

function randomLetter() {
    
    var text= "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var random=Math.random();
    var length=possible.length;
    var myNumber=random*length;
    var result=Math.floor(myNumber);
    text = possible.charAt(result);
    console.log(text);
    return text;    
}

function myScript(e)
{
    var userKey = e.key;
    if (compLetter.toUpperCase()===userKey.toUpperCase())

    {
        win++;
        startGame();
    }

    else 
    
    {
        guessLeft--;
        guessCount++;
            if (guessLeft<=0)
            {
                loss++;
                startGame()
            }
            
        
    }
updateUI();
}

function updateUI(){
    $('#win').text(win);
    $('#loss').text(loss);
    $('#guessLeft').text(guessLeft);
    $('#guessCount').text(guessCount);
}

$('body').keyup(myScript);

function startGame() {
    guessLeft=10;
    guessCount=0;
    compLetter=randomLetter();
}

startGame()


