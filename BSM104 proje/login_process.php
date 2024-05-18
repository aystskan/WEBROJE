<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri alalım
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adındaki @ öncesi domainsiz kısmı şifre olarak kontrol edelim
    $expectedPassword = explode('@', $username)[0];

    // Şifre kontrolü yapalım
    if ($password === $expectedPassword) {
        echo "Hoş geldiniz, " . htmlspecialchars(explode('@', $username)[0]) . "!";
        echo '<br><br><form action="login.html">
                <input type="submit" value="Giriş Sayfasına Dön">
              </form>';
    } else {
        // Şifre yanlışsa tekrar login sayfasına yönlendirelim
        header("Location: login.html"); // login formunuzun olduğu sayfaya yönlendirin
        exit();
    }
} else {
    // Eğer POST metodu ile gelmemişse login sayfasına yönlendirelim
    header("Location: login.html"); // login formunuzun olduğu sayfaya yönlendirin
    exit();
}
?>
