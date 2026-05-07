<?php
/*
==========================================
 CONTACT FORM BACKEND
 Personal Branding Website
 William Tahan Sio Marpaung
==========================================

NOTE:
- File PHP ini TIDAK aktif di GitHub Pages
- GitHub Pages hanya membaca HTML/CSS/JS
- contact.php bisa aktif jika website dipindah ke hosting PHP
  seperti XAMPP / Laragon / InfinityFree / 000webhost
*/

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Ambil data form
    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validasi kosong
    if (empty($name) || empty($email) || empty($message)) {
        die("Semua field wajib diisi.");
    }

    // Validasi email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Format email tidak valid.");
    }

    // Folder penyimpanan pesan
    $folder = "messages";

    // Buat folder jika belum ada
    if (!file_exists($folder)) {
        mkdir($folder, 0777, true);
    }

    // Nama file
    $filename = $folder . "/message_" . date("Ymd_His") . ".txt";

    // Isi file
    $content  = "=====================================\n";
    $content .= "PERSONAL BRANDING CONTACT MESSAGE\n";
    $content .= "=====================================\n";
    $content .= "Nama   : " . $name . "\n";
    $content .= "Email  : " . $email . "\n";
    $content .= "Waktu  : " . date("d-m-Y H:i:s") . "\n";
    $content .= "-------------------------------------\n";
    $content .= "Pesan:\n";
    $content .= $message . "\n";
    $content .= "=====================================\n";

    // Simpan file
    file_put_contents($filename, $content);

    // Redirect sukses
    echo "
    <!DOCTYPE html>
    <html lang='id'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Pesan Terkirim</title>
        <style>
            body{
                margin:0;
                font-family:Arial;
                background:#050816;
                color:white;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                text-align:center;
            }

            .box{
                width:500px;
                max-width:90%;
                padding:40px;
                border-radius:20px;
                background:#0d1328;
                box-shadow:0 0 30px rgba(0,247,255,.25);
                border:1px solid rgba(255,255,255,.08);
            }

            h1{
                color:#00f7ff;
                margin-bottom:15px;
            }

            p{
                color:#ddd;
                line-height:1.7;
            }

            a{
                display:inline-block;
                margin-top:20px;
                padding:12px 28px;
                background:linear-gradient(45deg,#00f7ff,#007bff);
                color:white;
                text-decoration:none;
                border-radius:50px;
                font-weight:bold;
            }
        </style>
    </head>
    <body>

        <div class='box'>
            <h1>Pesan Berhasil Dikirim</h1>
            <p>
                Terima kasih sudah menghubungi
                <strong>William Tahan Sio Marpaung</strong>.
            </p>

            <p>
                Pesan Anda berhasil tersimpan.
            </p>

            <a href='index.html'>Kembali ke Website</a>
        </div>

    </body>
    </html>
    ";
}
else{
    header("Location: index.html");
    exit();
}
?>
