function getImage(id) {
  let image1 = document.getElementById("image" + id).style.backgroundImage;
  console.log(image1);
  let image2 = document.getElementById("image" + 2).style.backgroundImage;
  document.getElementById("image" + 2).style.backgroundImage = image1;
  document.getElementById("image" + id).style.backgroundImage = image2;
}
