<?php

$naam = $_POST['naam'];
$ww = $_POST['password'];
$leeftijd = $_POST['leeftijd'];
$email = $_POST['emailadres'];

$bericht = "Ingevoerd is: $naam (naam), $ww (wachtwoord), $leeftijd (leeftijd) en $email (email).";
print $bericht;

print "<a href=\"pagina20.html\">Terug naar de js pagina</a>";
?>
