<?php 
    if(isset($_GET['id'])){
        $url = 'https://xkcd.com/'.$_GET['id'].'/info.0.json';
    }
    else{
    $url = 'https://xkcd.com/info.0.json';
    }
$contents = file_get_contents($url);
    echo $contents;
?>