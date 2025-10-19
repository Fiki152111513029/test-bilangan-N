<?php

function random(){
 return rand(1,10);
}
function randomopration(){
    $opration=['+','-','*'];
    return $opration[array_rand($opration)];
}

function FormulaPerhitungan($target){
    $targetperhitungan= 1;
    $soal= 0 ;

    while($soal < $targetperhitungan){
    $randops1 = randomopration();
    $randops2 = randomopration();
    $randops3 = randomopration();
  

    $bil_1= random();
    $bil_2= random();
    $bil_3= random();
    $bil_4= random();
    
 
    $hasil_target= "$bil_1 $randops1 $bil_2 $randops2 $bil_3 $randops3 $bil_4";
    
    eval("\$hasil = $hasil_target;");

    if ($hasil == $target){
        $soal++;
        echo " target = $target"."\n";
        echo " $hasil_target = $hasil";
        
    }
    }
}
$target= 10;
FormulaPerhitungan($target);
?>