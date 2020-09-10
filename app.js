function resultGenerate()
{
    //generating random image for dice 1
    let randomNumber1= Math.floor(Math.random()*6)+1;
    let randomImage1="images/"+"dice"+randomNumber1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

    //generating random image for dice 2
    let randomNumber2= Math.floor(Math.random()*6)+1;
    let randomImage2="images/"+"dice"+randomNumber2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

    if(randomNumber1>randomNumber2)
        document.querySelector(".result").textContent="Player 1 wins !!!";
    else if(randomNumber1<randomNumber2)
        document.querySelector(".result").textContent="Player 2 wins !!!";
    else
        document.querySelector(".result").textContent="Match Drawn";

}    
function resetScreen()
{
    location.reload();
}