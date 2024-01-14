function hitung(){
            var squareSide = document.getElementById('squareSide').value;
            var Luas = squareSide * squareSide;

			document.getElementById("Luas").innerHTML =  Luas;
}
function riset() {
    document.getElementById('squareSide').value = "";
    document.getElementById('luas').value = "";
}