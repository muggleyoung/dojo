$(document).ready(function(){
    $('#submit').click(function(){
        $('.field-value').each(function(){
            var value = $(this).val();
            createCookie( $(this).attr('id'), value, 3);
        });
        pausecomp(2000);
    });

   $('.result').each(function(){
        $(this).html(readCookie('input-' + $(this).attr('id')));
   });

   $('.date').html($.format.date(new Date(), "dd/MM/yyyy HH:mm"));
})

function pausecomp (millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while ( curDate -date < millis );
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
