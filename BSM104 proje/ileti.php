<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Bilgileri</title>
    <!-- Bootstrap CSS dahil et (isteğe bağlı) -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2>Gönderilen Form Bilgileri</h2>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Adınız</h5>
                <p class="card-text"><?php echo htmlspecialchars($_POST['name']); ?></p>
                <h5 class="card-title">Soyadınız</h5>
                <p class="card-text"><?php echo htmlspecialchars($_POST['surname']); ?></p>
                <h5 class="card-title">E-posta Adresiniz</h5>
                <p class="card-text"><?php echo htmlspecialchars($_POST['email']); ?></p>
                <h5 class="card-title">Telefon Numaranız</h5>
                <p class="card-text"><?php echo htmlspecialchars($_POST['phone']); ?></p>
                <h5 class="card-title">Konu</h5>
                <p class="card-text"><?php echo htmlspecialchars($_POST['konu']); ?></p>
                <h5 class="card-title">Mesajınız</h5>
                <p class="card-text"><?php echo nl2br(htmlspecialchars($_POST['message'])); ?></p>
            </div>
        </div>
    </div>
    <!-- Bootstrap JS dahil et (isteğe bağlı) -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>

<?php
// Form verilerini dosyaya kaydet
$file = 'form_verileri.csv';
$data = array(
    "Ad" => $_POST['name'],
    "Soyad" => $_POST['surname'],
    "E-posta" => $_POST['email'],
    "Telefon" => $_POST['phone'],
    "Konu" => $_POST['konu'],
    "Mesaj" => $_POST['message'],
    
);

// Verileri CSV formatına dönüştür
$csv_data = '';
foreach ($data as $key => $value) {
    $csv_data .= "__________________________________________________________". "\n". $key . ": " . $value . "\n";
    "\n";
}

// Dosyaya yazma işlemi
$csv_data .= "\n". "\n"; // Bir satır boşluk ekle
if (file_put_contents($file, $csv_data, FILE_APPEND | LOCK_EX) !== false) {
    echo " Form verileri başarıyla dosyaya kaydedildi. ";
} else {
    echo "Form verileri dosyaya kaydedilemedi.";
}


echo '<br><br><form action="iletişim.html">
                <input type="submit" value="Sayfaya Dön">
              </form>';
?>

