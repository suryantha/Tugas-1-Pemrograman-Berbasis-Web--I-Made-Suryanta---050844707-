function login() {
    var email = document.forms[0]["email"].value;
    var password = document.forms[0]["password"].value;

    var loginSukses = false;

    for (var i = 0; i < dataPengguna.length; i++) {
        if (email == dataPengguna[i].email && password == dataPengguna[i].password) {
            alert("Login Berhasil!  Selamat Datang, " + dataPengguna[i].nama);

            localStorage.setItem("loginUser", dataPengguna[i].nama);
            window.location.href = "dashboard.html";

            loginSukses = true;
            break;
        }

    }
    if (!loginSukses) {
        alert("Email atau Password salah");
    }

}

function logout() {
    localStorage.removeItem("loginUser");

    alert("Anda telah berhasil Logout");
    window.location.href = "index.html";

}

function lacak() {
    var nomorDO = document.getElementById("nodo").value;

    var trackingData = dataTracking[nomorDO];
    var perjalananText = "";

    for (i=0; i < trackingData.perjalanan.length; i++) {
        perjalananText += ` 
            <div class="container left">
                <div class="content">
                    <h2>${trackingData.perjalanan[i].waktu}</h2>
                    <p>${trackingData.perjalanan[i].keterangan}</p>
                </div>
            </div>
            `;
    }

    if (trackingData) {
        var trackingText = "";
        trackingText = `
            <p class="w-50">${trackingData.nama}</p>
            <p class="w-50">${trackingData.nomorDO}</p>
            <p class="w-50">${trackingData.status}</p>
            <p class="w-50">${trackingData.paket}</p>
            <p class="w-50">${trackingData.ekspedisi}</p>
            <p class="w-50">${trackingData.tanggalKirim}</p>
            <p class="w-50">${trackingData.total}</p>
        </div >
        <div id="bawah"></div>
        <div class="timeline">
           ${perjalananText}
        </div> `;
        document.getElementById("trackingResult").innerHTML = trackingText;
    } else {
        document.getElementById("trackingResult").innerHTML = "Data Tidak Ditemukan";
    }

}

function tampilBahanAjar(){
    for (i = 0; i < dataBahanAjar.length; i++){
        var bahanAjarText = `
         <div class="card">
        <img src="${dataBahanAjar[i].cover}" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>${dataBahanAjar[i].namaBarang}</b></h4>
            <p>${dataBahanAjar[i].kodeBarang} - ${dataBahanAjar[i].jenisBarang}</p>
            <p>${dataBahanAjar[i].kodeLokasi} - ${dataBahanAjar[i].stok} - ${dataBahanAjar[i].edisi}</p>
        </div>
        `;
        document.getElementById("bahanAjarResult").innerHTML += bahanAjarText;
    }
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function tambahBahanAjar(){
    const bahanAjar = {}
    bahanAjar.kodeLokasi = document.forms[0]["kodeLokasi"].value;
    bahanAjar.kodeBarang = document.forms[0]["kodeBarang"].value;
    bahanAjar.namaBarang = document.forms[0]["namaBarang"].value;
    bahanAjar.jenisBarang = document.forms[0]["jenisBarang"].value;
    bahanAjar.edisi = document.forms[0]["edisi"].value;
    bahanAjar.stok = document.forms[0]["stok"].value;
    bahanAjar.cover = document.forms[0]["cover"].value;

    dataBahanAjar.push(bahanAjar);
    tampilBahanAjar();
    document.forms[0].reset();
    modal.style.display = "none";

}