<?php

function hitungbilangankhusus($n){
    $min = min($n);
    $max = max($n);

    $semua_bilangan=range($min,$max);

    $bilangan_yang_hilang = array_diff ($semua_bilangan, $n);
    
    echo "Array asli: " . implode(", ", $n) . "\n";
    echo "Rentang seharusnya: $min sampai $max\n";
    echo "Bilangan yang hilang: " . implode(", ", $bilangan_yang_hilang) . "\n";
    echo "Jumlah bilangan yang hilang: " . count($bilangan_yang_hilang) . "\n";
    
}
$n= array(1,8,7,10,4,2);
hitungbilangankhusus($n);
?>