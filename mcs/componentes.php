<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://minhacasasolar.dallasolucoes.com.br:888/api/millenium_eco_comp41/Produtos.ListaIdFotos?$format=json",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => "",
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);

curl_close($curl);

	$frase  = $response;
	$saudavel = array("http:\/\/minhacasasolar.dallasolucoes.com.br:888\/api\/millenium!","millenium","MILLENIUM","http:\/\/minhacasasolar.dallasolucoes.com.br:888");
	$saboroso   = array("server/","ERP","ERP","server/");
	
	$novafrase = str_replace($saudavel, $saboroso, $frase);


  echo $novafrase;
