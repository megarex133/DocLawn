<? 
    $code = $_GET['code'];
    $message = '';
    switch ($code) {
        case 1:
            $message = "Message sent successfully";
            break;
        case 2:
            $message = "There were errors while sending the message";
            break;
        case 3:
            $message = "Check the box 'I'm not a robot' to send a message";
            break;
    }
    echo "<body>".$message."</body>";

?>
<script>
    setTimeout(function() {
        window.location.href='https://doclawn.com/';
    }, 3000);
    </script>