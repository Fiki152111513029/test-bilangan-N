<?php

function hitungbilangankhusus($n){
    $jumlah_pembagi = array(0, $n + 1, 0);

    for ($i = 1; $i <= $n; $i++){
        for ($j = $i; $j <= $n; $j += $i){
            $jumlah_pembagi[$j]++;
        }
    }

    $jumlah_bilangan_khusus = 0;

    for ($i = 1; $i <= $n ; $i++){
        echo "Angka; $i, Jumlah Pembagi: ". $jumlah_pembagi[$i] . "\n";

        if($jumlah_pembagi[$i]% 2 === 0){
            $jumlah_bilangan_khusus++;
        }
    }
    echo "\nJumlah Bilangan Khusus (jumlah pembagi genap): $jumlah_bilangan_khusus\n";
}
$n= 50;
hitungbilangankhusus($n);

?>