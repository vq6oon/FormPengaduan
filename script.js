const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nik = form.querySelector('input[name="entry.1493198894"]').value.trim();
    const telp = form.querySelector('input[name="entry.394866246"]').value.trim();
    const jenis = form.querySelector('select[name="entry.1542060675"]').value;

    const nikPattern = /^\d{16}$/;
    if (!nikPattern.test(nik)) {
        alert("NIK harus 16 digit angka!");
        return;
    }

    const telpPattern = /^\d{10,15}$/;
    if (!telpPattern.test(telp)) {
        alert("Nomor Telepon/WA harus 10-15 digit angka!");
        return;
    }

    if (jenis === "") {
        alert("Silakan pilih jenis pengaduan!");
        return;
    }

    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
    .then(() => {
        window.location.href = "terimakasih.html";
    })
    .catch(() => {
        alert("Terjadi kesalahan, coba lagi.");
    });
});
