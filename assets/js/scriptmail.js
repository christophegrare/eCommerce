var mail_regex = /^[\w\-\.]+[a-z0-9]@[\w\-\.]+[a-z0-9]\.[a-z]+/i;

// Fonction qui ajoute une box-shadow rouge si les données entrées sont un nombre
$('#email').focusout(function(){
var mail = $('#email').val();
if(mail.match(mail_regex)){
$('#email').css('box-shadow', 'none'); // Si on supprime la box-shadow au cas où elle a été affichée si erreur
} else{
$('#email').css('box-shadow', '0px 0px 1px 1px red'); // Sinon c'est un nombre on ajoute une box-shadow rouge
}
});
