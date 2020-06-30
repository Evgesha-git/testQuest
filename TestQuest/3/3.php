<?php
        //Enter your code here, enjoy!
    echo "Введите входную строку\n";

    $line = readline();
    


$array = explode(" ", $line);
              
asort($array);

$array = array_unique($array);

foreach ($array as $key => $val) {
    if(is_numeric($val)){
    echo "$val\n";
    }
    
}

?>