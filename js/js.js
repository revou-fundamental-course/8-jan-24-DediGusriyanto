function hitung(){
    var squareSide = document.getElementById("squareSide").value;
    var Luas = squareSide * squareSide;

    if (isNaN(squareSide)) {
        alert("masukan harus dengan angka");
        return;
    }

    document.getElementById("Luas").innerHTML =  Luas;
}

function riset() {
    document.getElementById('squareSide').value = "";

    document.getElementById('Luas').innerHTML= "";
}

function hitungkeliling(){
    var inputkeliling = document.getElementById('inputkeliling').value;
    var Keliling = 4 * inputkeliling;

    if (inputkeliling == "" || isNaN(inputkeliling)){
        alert("masukan dengan berupa angka.");

        return;
    }
    
    document.getElementById("Keliling").innerHTML =  Keliling;
}

function risetkeliling() {
    document.getElementById('inputkeliling').value = "";

    document.getElementById('Keliling').innerHTML= "";
}