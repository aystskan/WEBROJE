<?php
// Kullanıcı adı ve şifre alınıyor
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre boş olmamalı
if (empty($username) || empty($password)) {
    header("Location: login.html");
    exit;
}

// Kullanıcı adı kontrolü, email formatında olmalı
if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
    echo "Kullanıcı adı geçerli bir email adresi değil.";
    exit;
}

// Şifre kontrolü...



if ($user_number === intval($last_four_digits)) {
    echo "Hoşgeldiniz $username";
} else {
    echo "Giriş başarısız. Kullanıcı adı ve şifreyi kontrol edin.";
}
?>
