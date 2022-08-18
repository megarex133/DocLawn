<? 
    $code = $_GET['code'];
    $message = '';
    switch ($code) {
        case 1:
            $message = "Your comment was sent succesfully.";
            break;
        default:
            $message = "There were errors while sending your comment.";
            break;
    }
    echo "<body>".$message."</body>";
?>
<script>
    setTimeout(function() {
        window.location.href='https://doclawn.com/';
    }, 3000);
    </script>