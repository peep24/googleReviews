<?php 


if(isset($_POST)) {

    $url = "https://maps.googleapis.com/maps/api/place/details/json?place_id={xxxxPLACESIDxxxxx}&fields=name,rating,formatted_phone_number,reviews&key={xxxxxYour Google API KEYxxxxxx}";
    $ch = curl_init();
    curl_setopt ($ch, CURLOPT_URL, $url);
    curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
    $result = curl_exec ($ch);
    // echo print_r($result);
    $res        = json_decode($result,true);
    // echo print_r($res);
     $reviews    = $res['result']['reviews'];
    // echo print_r($reviews);


  echo json_encode($reviews);

}






?>