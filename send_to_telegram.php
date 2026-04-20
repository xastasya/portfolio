<?php
$botToken = "8068756225:AAGPR4l0w6JT053fChcSci0eh9yfrdAnNto";
$chatId   = "6234826140";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email   = htmlspecialchars(trim($_POST['email'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Заполните все поля.";
        exit;
    }

    $text = "📬 *Новое сообщение с сайта Astasya*\n\n";
    $text .= "👤 *Имя:* $name\n";
    $text .= "📧 *Email:* $email\n";
    $text .= "💬 *Сообщение:*\n$message";

    $url = "https://api.telegram.org/bot$botToken/sendMessage";
    $postData = http_build_query([
        'chat_id' => $chatId,
        'text'    => $text,
        'parse_mode' => 'Markdown'
    ]);

    // Используем cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // если сертификаты не проверяются
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);

    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($result !== false && $httpCode == 200) {
        echo "success";
    } else {
        http_response_code(500);
        echo "Ошибка отправки. HTTP-код: $httpCode. Ошибка cURL: $error";
    }
} else {
    http_response_code(405);
    echo "Метод не поддерживается";
}
?>