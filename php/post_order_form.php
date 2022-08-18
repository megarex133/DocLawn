<?php
    $code = 3;
    $errorMessage = "";
    
    $recaptcha = $_POST['g-recaptcha-response'];
    if(!empty($recaptcha)) {
        $recaptcha = $_REQUEST['g-recaptcha-response'];
        $secret = '6LcN1L8eAAAAAJ7AVuLz6UGtgCAJ4p4mELM-cJLN';
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret ."&response=".$recaptcha."&remoteip=".$_SERVER['REMOTE_ADDR'];
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);
        curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; rv:8.0) Gecko/20100101 Firefox/8.0");
        $curlData = curl_exec($curl);
        curl_close($curl);
        $curlData = json_decode($curlData, true);

        if ($curlData['success']) {
            $orderName = $_POST['orderName'];
            $orderEmail = $_POST['orderEmail'];
            $orderPrice = $_POST['orderPrice'];
            $orderType = $_POST['orderType'];

            $defaultPrice = 999;
            if ($orderType == 'Cartridge') {
                $defaultPrice = 899;
            }
            $orderAmount = intval($orderPrice) / $defaultPrice;

            $orderName = htmlspecialchars($orderName);
            $orderEmail = htmlspecialchars($orderEmail);
            $orderPrice = htmlspecialchars($orderPrice);
            $orderType = htmlspecialchars($orderType);
            $orderAmount = htmlspecialchars($orderAmount);

            $orderName = urldecode($orderName);
            $orderEmail = urldecode($orderEmail);
            $orderPrice = urldecode($orderPrice);
            $orderType = urldecode($orderType);
            $orderAmount = urldecode($orderAmount);

            $orderName = trim($orderName);
            $orderEmail = trim($orderEmail);
            $orderPrice = trim($orderPrice);
            $orderType = trim($orderType);
            $orderAmount = trim($orderAmount);

            $message = "Name: ".$orderName."\nEmail: ".$orderEmail."\nType: ".$orderType;
            //."\nPrice: ".$orderPrice."$\nAmount: ".$orderAmount;

            $success = mail("sales@doclawn.com", "Product application from Doclawn", $message, "From: sales@doclawn.com");
            if ($success) {
                $code = 1;
            } else {
                $code = 2;
            }
        }
        else {
            $code = 3;
        }
    }
    header ('Location: /php/get_order_form.php?code='.$code.'&error='.$errorMessage);
?>