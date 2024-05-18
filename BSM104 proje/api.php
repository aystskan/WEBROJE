<style>
    table tr td { pad: 5px 10px; border:1px }
    table tr td img {width: 100px}
</style>

<?php 
     $jsonVeri=file_get_contents("https://ezanvakti.herokuapp.com/vakitler/9800");
     $veri=json_decode($jsonVeri);
    //  ($jsonVeri,1)parametre olarak true ya da 1 yazmaya gerek yok index değerleri istediğimiz gibi, nesne yoluyla verilere erişim sağlayacağız


    echo '<br><br><form action="api.html">
                <input type="submit" value="Sayfaya Dön">
              </form>';
 ?>    

<table cellspacing="19">
    <tr>
        <td>Miladi Tarih</td>
        <td>Hicri Tarih</td>
        <td>İmsak</td>
        <td>Güneş</td>
        <td>Öğle</td>
        <td>İkindi</td>
        <td>Akşam</td>
        <td>Yatsı</td>
        <td>Ay Evre</td>
    </tr>
<?php
    foreach($veri as $vakit)
    { 
?>
        <tr>
            <td><?=$vakit->MiladiTarihUzun ?></td>
            <td><?=$vakit->HicriTarihUzun ?></td>
            <td><?=$vakit->Imsak ?></td>
            <td><?=$vakit->Gunes ?></td>
            <td><?=$vakit->Ogle ?></td>
            <td><?=$vakit->Ikindi ?></td>
            <td><?=$vakit->Aksam ?></td>
            <td><?=$vakit->Yatsi ?></td>
            <td>
                <img src="<?=$vakit->AyinSekliURL?>" />
                <!-- <img src="https://havatahmin.com.tr/css/css_images/moon_bg.png" /> -->
            </td>
        </tr>
<?php  
    }
?>
</table>