<?php
$name = $_POST['Name'];
$number = $_POST['Telephone'];

$name = htmlspecialchars($name);
$number = htmlspecialchars($number);

$name = urldecode($name);
$number = urldecode($number);

$name = trim($name);
$number = trim($number);

if (mail("blanchard@mail.ru", "Заявка с сайта", "ФИО:".$name.". Телефон: ".$number ,"From: example@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>