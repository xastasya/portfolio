<?php
$botToken = "8068756225:AAGPR4l0w6JT053fChcSci0eh9yfrdAnNto";
$chatId   = "6234826140";   // ваш Chat ID

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

    $options = [
        'http' => [
            'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => $postData,
        ]
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === false) {
        http_response_code(500);
        echo "Ошибка отправки.";
    } else {
        echo "success";
    }
} else {
    http_response_code(405);
    echo "Метод не поддерживается";
}
?>