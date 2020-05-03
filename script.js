//For manipulating color
/*
    Function Name : randomRGB()
    Function arguments : NONE
    Return value : random integer between 0-255
*/
function randomRGB()
{
    return Math.floor(Math.random()*(255-0)+0);
}

//For manipulating audio
audioList=["b6","c6","d6","e6","f6","g6"];      //Contains id of audio sources

/*
    Function Name : returnRandomAudioId()
    Functionality : returns pseudo-random ID from audioList
    Function arguments : NONE
    Return value : pseudo-random audio ID from audioList 
*/
function returnRandomAudioId()
{
    return audioList[Math.floor(Math.random()*audioList.length)];
}

/*
    Function Name : playRandomAudio()
    Functionality : Plays random audio based on id of <audio> returned from returnRandomAudioId()
    Function arguments : NONE
    Return value : NONE
*/
function playRandomAudio()
{
    var audio = document.getElementById(returnRandomAudioId());
    audio.play();
}


$(document).ready(function(){
    /*Changes the background color of circle
      upon which the text is hovering to some random color*/
    $(".change-state-1,.change-state-2,.change-state-3,.change-state-4,.change-state-5,.change-state-6,.change-state-7,.change-state-8,.change-state-9,.change-state-10,.change-state-11,.change-state-12,.change-state-13,.change-state-14,.change-state-15,.change-state-16").hover(
    function(){
        $(this).css("background-color","rgba("+randomRGB()+","+randomRGB()+","+randomRGB()+","+Math.random()+")");
    },
    function(){
        $(this).css("background-color","white");
    });
});