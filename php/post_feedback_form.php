<?php
    $code = 2;

    $stars = $_POST['stars'];
    $name = $_POST['name'];
    $comment = $_POST['comment'];

    $stars = htmlspecialchars($stars);
    $name = htmlspecialchars($name);
    $comment = htmlspecialchars($comment);

    $stars = urldecode($stars);
    $name = urldecode($name);
    $comment = urldecode($comment);

    $stars = trim($stars);
    $name = trim($name);
    $comment = trim($comment);

    $message = "Name: ".$name."\nAmount of stars: ".$stars."\nComment: ".$comment;

    $success = mail("sales@doclawn.com", "Comment from Doclawn", $message, "From: sales@doclawn.com");
    if ($success) {
        $code = 1;
    } else {
        $code = 2;
    }

    header ('Location: /php/get_feedback_form.php?code='.$code);
?>