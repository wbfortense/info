// function mypasscheck() {
//     if(document.getElementById('mypass1').value != password) {
//         alert('Password salah, tanyakan kepada panitia !');
//         return false;
//     }
//     if(document.getElementById('mypass1').value == password) {
//         alert('Akses diterima, silahkan lanjut !');
//     }
// }

function onmypass1() {
    if (document.getElementById('mypassbutton1').value == 'fortense-v1-240722') {window.mypassbutton2.style.display="block"; }
    else{ 
        alert('Akses ditolak, tanyakan password ke panitia / perwakilan !');
    }
}