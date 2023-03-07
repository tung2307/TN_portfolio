<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$host = config.HOST;
$port = config.PORT;
$username = config.USERNAME;
$password = config.PASSWORD;
//$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = $host;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = $port;

$mail->Username = $username;
$mail->Password = $password;

$mail->setFrom($email, $name);
$mail->addAddress("tung.nguyen23797@gmail.com", "Tung");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

header("Location: sent.html");