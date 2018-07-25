function imagenGrande(img){
    document.body.innerHTML += "<div id='frameGalery' class= 'galery' onclick='removeGalery()'></div>\
    <img id = 'img-sh-gal' src='"+img+"' class='galery-img' style='width:1000px; height:500px;'/>\
    ";

}

function removeGalery(){
  document.getElementById('frameGalery').remove();
  document.getElementById('img-sh-gal').remove();
}
