
function changeImage(width) {
    var image = document.getElementById("bilden");
    var imageSrc = image.getAttribute("src");
    console.log(imageSrc)
    if (imageSrc == "img/aftonbladet-process.png") {
        image.setAttribute("src","img/aftonbladet-prototyp.png")
    }
    else
    {
        image.setAttribute("src", "img/aftonbladet-process.png")
    }
}
