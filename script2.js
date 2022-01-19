alert('Selamat datang di game tebak angka kamu diminta untuk menebak angka 1 - 3 dan kamu akan bermain dalam 5 ronde. player yang berhasil mengumpulkan tebakan terbanyak akan menang SELAMAT BERMAIN !!!');

var ronde = 5;

while (ronde >= 0) {
  var p1 = parseInt(prompt('Pemain 1 :Masukkan Nilai 1-3!'));
  var p2 = parseInt(prompt('Pemain 2 :Masukkan Nilai 1-3!'));

  var comp = Math.random();

  if (comp < 0.34) {
    comp = 1;
  } else if (comp >= 0.35 && comp <= 0.68) {
    comp = 2;
  } else {
    comp = 3;
  }

  // Menentukan Rule
  var hasil = '';

  if (p1 == p2) {
    hasil = 'tebakan tidak boleh sama';
  } else if (p1 == comp) {
    hasil = 'Pemain 1 Menang';
  } else if (p2 == comp) {
    hasil = 'Pemain 2 Menang';
  } else if (p1 > 3 || p2 > 3) {
    hasil = 'inputan anda salah!';
  } else {
    hasil = 'Tidak ada yang benar,Hasil Seri!';
  }

  //   Tampilkan Hasil
  alert(hasil + ' Sisa Ronde Anda : ' + '' + ronde);
  alert('Nilai yang di cari ' + comp);
  ronde--;
}
