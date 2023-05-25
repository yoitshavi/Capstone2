# Capstone2

The home page informs visitors of information about the website.

The Park Search page will allow visitors to search for a park based on location or park type.

The Mountain Search page allows the visitor to look at information about a specific mountain based on the mountains name.

Interesting JAVASCRIPT:

let imgEl = document.querySelector("#imgOutput img");

if (!imgEl) {
imgEl = document.createElement("img");
displayPictureDiv.appendChild(imgEl);
}
let imageDis = `./images/${park.img}`;

imgEl.src = imageDis;
imgEl.alt = park.name;

displayPictureDiv.appendChild(imgEl);

This JAVASCRIPT allowed me tto display the picture of the specified mountain.

-I started be calling the image inside of the imgOutput div.

-Then I did an if statement saying if there isnt an image then create one and then append the image to display the mountains specifications.

-I used the let of imgDis to finish the pathway of each image.

-I then used the the .src and the .alt to change the properties of what is displayed when the mountain selection is changed.
