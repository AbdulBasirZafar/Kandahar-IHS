// START POINT CODE FOR STUDENT PAGE
document.getElementById('btn-clear').onclick = function () {
    document.getElementById('photo').src = "";
}
var loadFile = function (event) {
    console.log(event.target.files);
    var image = document.getElementById('photo');
    image.src = URL.createObjectURL(event.target.files[0]);
};
// END POINT CODE FOR STUDENT PAGE

