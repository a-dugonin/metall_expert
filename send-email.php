<?php
// Настройка заголовков
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Подключение PHPMailer
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// Функция для логирования
function logEvent($message, $data = []) {
    $log = '[' . date('Y-m-d H:i:s') . '] ' . $message . PHP_EOL;
    if (!empty($data)) {
        $log .= 'Данные: ' . json_encode($data, JSON_UNESCAPED_UNICODE) . PHP_EOL;
    }
    $log .= '----------------------------------------' . PHP_EOL;
    file_put_contents(__DIR__ . '/email_logs.log', $log, FILE_APPEND);
}

try {
    // Логирование начала обработки
    logEvent('Получен новый запрос', [
        'method' => $_SERVER['REQUEST_METHOD'],
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ]);

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Метод не поддерживается');
    }

    $data = json_decode(file_get_contents('php://input'), true) ?? [];
    logEvent('Получены данные формы', $data);

    if (empty($data['name']) || empty($data['phone'])) {
        throw new Exception('Не заполнены обязательные поля');
    }

    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    // Конфигурация SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
<<<<<<< HEAD
    $mail->Username = 'mail@mail.ru';
=======
    $mail->Username = 'mail@mail.ru';
>>>>>>> 60a3c44 (Изменил send-mail)
    $mail->Password = 'pass';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';

    // Настройка письма
    $mail->setFrom('mail@mail.ru', 'Металл-Эксперт');
    $mail->addAddress('mail@mail.ru', 'Менеджер');
    if (!empty($data['email'])) {
        $mail->addReplyTo($data['email'], $data['name']);
    }

    $mail->Subject = '✅ Заявка от ' . htmlspecialchars($data['name']);

    // HTML-версия письма
    $mail->isHTML(true);
    $mail->Body = '
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f5f5f5; padding: 15px; text-align: center; }
            .field { margin-bottom: 10px; }
            .field-name { font-weight: bold; color: #0056b3; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Новая заявка с сайта</h2>
            </div>
            <div class="field"><span class="field-name">Имя:</span> ' . htmlspecialchars($data['name']) . '</div>
            <div class="field"><span class="field-name">Телефон:</span> ' . htmlspecialchars($data['phone']) . '</div>
            <div class="field"><span class="field-name">Сообщение:</span> ' . (isset($data['message']) ? htmlspecialchars($data['message']) : 'не указано') . '</div>
            <div class="field"><span class="field-name">Дата:</span> ' . date('d.m.Y H:i') . '</div>
            <div class="field"><span class="field-name">IP:</span> ' . ($_SERVER['REMOTE_ADDR'] ?? 'не определен') . '</div>
        </div>
    </body>
    </html>';

    // Текстовая версия
    $mail->AltBody = sprintf(
        "Новая заявка\n\nИмя: %s\nТелефон: %s\nСообщение: %s\n\nДата: %s\nIP: %s",
        $data['name'],
        $data['phone'],
        $data['message'] ?? 'не указано',
        date('d.m.Y H:i'),
        $_SERVER['REMOTE_ADDR'] ?? 'не определен'
    );

    // Отправка и логирование
    if ($mail->send()) {
        logEvent('Письмо успешно отправлено', [
            'to' => $mail->getToAddresses(),
            'subject' => $mail->Subject
        ]);
        echo json_encode(['success' => true, 'message' => 'Письмо отправлено']);
    } else {
        throw new Exception('Ошибка отправки: ' . $mail->ErrorInfo);
    }

} catch (Exception $e) {
    logEvent('ОШИБКА: ' . $e->getMessage(), [
        'file' => $e->getFile(),
        'line' => $e->getLine()
    ]);
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка сервера',
        'error' => $e->getMessage()
    ]);
}
?>