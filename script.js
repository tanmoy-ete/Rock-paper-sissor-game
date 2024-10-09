function getColour() {
    const randomNumber= Math.floor(Math.random() * 16777215) ;
    const randomCol= "#"+ randomNumber.toString(16);
    document.getElementById("colour").innerText = randomCol;
    document.body.style.backgroundColor = randomCol;
    navigator.clipboard.writeText(randomCol);
}

document.getElementById("btn").addEventListener(
    "click", 
    getColour
);

getColour();