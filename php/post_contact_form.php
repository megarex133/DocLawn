<?php
    $code = 2;

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comment = $_POST['comment'];

    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $phone = htmlspecialchars($phone);
    $comment = htmlspecialchars($comment);

    $name = urldecode($name);
    $email = urldecode($email);
    $phone = urldecode($phone);
    $comment = urldecode($comment);

    $name = trim($name);
    $email = trim($email);
    $phone = trim($phone);
    $comment = trim($comment);

    $message = "Name: ".$name."\nEmail: ".$email."\nPhone: ".$phone."\nMessage: ".$comment;

    $success = mail("sales@doclawn.com", "Comment from Doclawn", $message, "From: sales@doclawn.com");
    if ($success) {     
        $code = 1;
    }

    header ('Location: /php/get_contact_form.php?code='.$code);
?>