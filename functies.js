
function kop() {
 	// bepalen eigen filenaam en volgende en vorige pagina.
 	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	var nummer = filename.slice(6,8);
	var volgende = parseInt(nummer) + 1;
	if (volgende>40) volgende=40;
	var vorige = parseInt(nummer) - 1;
	if (vorige<1) vorige = 1;
	var volgendePagina = "pagina" + volgende.toString() +  ".html";
	var vorigePagina = "pagina" + vorige.toString() +  ".html";
	
	if (filename=="index.html") {
		volgendePagina = "pagina1.html";
		vorigePagina = "index.html";
	}
 
  var logo = "img/jsmall.png";
  var kopTekst = "<img src=\"" + logo + "\" />"+ " <i>aantekeningen</i>";
  kopTekst += "<br><br><span style=\"text-align: right\" title=\"vorige pagina\"><a href=\"" + vorigePagina + "\">&lt;</a>";
  kopTekst += " <a href=\"index.html\" title=\"pagina 1\">*</a> ";
  kopTekst += "<a href=\""+ volgendePagina + "\" title=\"volgende pagina\">&gt;</a></span>";
  $('header').html(kopTekst);
  console.log(kopTekst);
}

function voet() {
  
    var d = new Date();
    var voetTekst = "<h6> &copy;" + d.getFullYear() + " dsf - <a href=\"index.html\">home<\a>";
    $("footer").html(voetTekst);
}

