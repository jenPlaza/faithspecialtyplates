let imageArray = [
    { ImageSrc: "crsPlate.png", ImageCaption: "A Catholic Foundation"},
    { ImageSrc: "obiPlate.png", ImageCaption: "A Christian Foundation"},
    { ImageSrc: "mazonPlate.png", ImageCaption: "A Jewish Foundation"},
    { ImageSrc: "mercyUSAPlate.png", ImageCaption: "An Islamic Foundation"},
	{ ImageSrc: "tzuPlate.png", ImageCaption: "A Buddhist Foundation"},
	{ ImageSrc: "sewaPlate.png", ImageCaption: "A Hindu Foundation"},
    { ImageSrc: "fspPlate.png", ImageCaption: "Faith Specialty Plates"}
];

let imageIndex = 0;

let text = "<h2><font color=brown size=4>Featured Specialty Plates</font></h2>";

text += '<figure>';
text += '<a href="/"><img id="mainImage" src="images/crsPlate.png" alt="Faith Specialty Plate" width="414" height="275"/></a>';
text += '<figcaption>A Catholic Foundation</figcaption>';
text += '</figure>';

//Previous button
var leftArrow = document.querySelector('#prev')[0];
document.body.appendChild(leftArrow);
leftArrow.addEventListener("click", prev);

function prev() {
    imageIndex--;
    document.getElementById("mainImage").src = imageArray[imageIndex].ImageSrc;
    document.getElementsByTagName("figcaption")[0].innerHTML = imageArray[imageIndex].ImageCaption;
}

//Next button
var rightArrow = document.querySelector('#next')[0];
document.body.appendChild(rightArrow);
rightArrow.addEventListener("click", next);

function next() {
    imageIndex++;
    document.getElementById("mainImage").src = imageArray[imageIndex].ImageSrc;
    document.getElementsByTagName("H3")[0].innerHTML = imageArray[imageIndex].ImageCaption;
}

document.getElementById("fsp").innerHTML = text;