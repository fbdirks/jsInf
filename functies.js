
function kop() {
 
  var logo = "img/jsmall.png";
  var kopTekst = "<img src=\"" + logo + "\" />"+ " <i>aantekeningen</i>";
  $('header').html(kopTekst);
  console.log(kopTekst);
}

function voet() {
  
    var d = new Date();
    var voetTekst = "<h6> &copy;" + d.getFullYear() + " dsf - <a href=\"index.html\">home<\a>";
    $("footer").html(voetTekst);
}
