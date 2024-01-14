function hitung(){
            var squareSide = document.getElementById('squareSide').value;
            var Luas = squareSide * squareSide;

			document.getElementById("Luas").innerHTML =  Luas;
}
function riset() {
    document.getElementById('squareSide').value = "";
    document.getElementById('Luas').value = "";
}
function hitungkeliling(){
    var inputkeliling = document.getElementById('inputkeliling').value;
    var Keliling = 4 * inputkeliling;

    document.getElementById("Keliling").innerHTML =  Keliling;
}
function risetkeliling() {
    document.getElementById('inputkeliling').value = "";
    document.getElementById('Keliling').value = "";
}