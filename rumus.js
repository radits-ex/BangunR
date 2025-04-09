let attempts = 0;

function hasilkubus() {
    let sisi = (document.getElementById('skubus').value);
    let messageElement = document.getElementById('hslkubus');
    attempts++;
    let hasill = sisi*sisi*sisi;
    messageElement.textContent = hasill
    messageElement.style.color = 'green';

    // Cek jika input kosong
    if (sisi === '') {
        messageElement.textContent = 'masukkan angka!';
        messageElement.style.color = 'red';
        return;
    }

      // Bersihkan input
      document.getElementById('guess').value = '';
}

function hasilbalok() {
    let p = (document.getElementById('pbalok').value);
    let l = (document.getElementById('lbalok').value);
    let t = (document.getElementById('tbalok').value);
    let messageElement = document.getElementById('hslbalok');
    attempts++;
    let hasil = p*l*t;
    messageElement.textContent = hasil
    messageElement.style.color = 'green';

    // Cek jika input kosong
    if (p === '') {
        messageElement.textContent = 'masukkan angka!';
        messageElement.style.color = 'red';
        return;
    }

    if (l === '') {
        messageElement.textContent = 'masukkan angka!';
        messageElement.style.color = 'red';
        return;
    }

    if (t === '') {
        messageElement.textContent = 'masukkan angka!';
        messageElement.style.color = 'red';
        return;
    }

      // Bersihkan input
      document.getElementById('guess').value = '';
}

function hasiltabung() {
    let r = (document.getElementById('jtabung').value);
    let t = (document.getElementById('ttabung').value);
    let phi = 3.14;
    let messageElement = document.getElementById('hsltabung');
    attempts++;
    let hasil = phi*r*r*t;
    messageElement.textContent = hasil
    messageElement.style.color = 'green';

    // Cek jika input kosong
    if (r === '') {
        messageElement.textContent = 'masukkan angka!';
        messageElement.style.color = 'red';
        return;
    }
    
    if (t === '') {
        messageElement.textContent = 'masukkan angka!';
        messageElement.style.color = 'red';
        return;
    }

      // Bersihkan input
      document.getElementById('guess').value = '';
}
