$(function () {
  // Affiche ou cache ma description
  $('.show_legend').mouseover(function() {
    var father = $(this).parent();
    father.children('a').children('p').show();
  });
  $('.hide_legend').mouseout(function() {
    $(this).hide();
  });
  // Affiche et cache mes categories
  $('#nav_reflexCam').click(function() {
    $('#reflex_cam').show();
    $('#micro_cam').hide();
    $('#camescope_num').hide();
    $('#cam_tool').hide();
  });
  $('#nav_camNum').click(function() {
    $('#reflex_cam').hide();
    $('#micro_cam').hide();
    $('#camescope_num').show();
    $('#cam_tool').hide();
  });
  $('#nav_microCam').click(function() {
    $('#reflex_cam').hide();
    $('#micro_cam').show();
    $('#camescope_num').hide();
    $('#cam_tool').hide();
  });
  $('#nav_camTool').click(function() {
    $('#reflex_cam').hide();
    $('#micro_cam').hide();
    $('#camescope_num').hide();
    $('#cam_tool').show();
  });
  // Début du script pour formulaire inscription et connexion
  var passe_regex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
  var naissance_regex = /^((0[1-9])|([12][0-9])|(3[01]))[ \/\.\-]((0[1-9])|(1[012]))[ \/\.\-](((19)\d{2})|((200[0-1])))/;
  var mail_regex = /^[\w\-\.]+[a-z0-9]@[\w\-\.]+[a-z0-9]\.[a-z]+/i;
  var phone_regex = /^0[1-9]([ \.\-\/,]?\d{2}){4}/;
  var name_regex = /^\D+[-]?\D+/i;
  // Fonction qui ajoute une box-shadow rouge si les données entrées sont un nombre
  $('#username').focusout(function(){
    var nom = $('#username').val();
    if(nom.match(name_regex)){
      $('#username').css('box-shadow', 'none'); // Si on supprime la box-shadow au cas où elle a été affichée si erreur
    } else{
      $('#username').css('box-shadow', '0px 0px 1px 1px red'); // Sinon c'est un nombre on ajoute une box-shadow rouge
    }
  });
  $('#prenom').focusout(function(){
    var prenom = $('#prenom').val();
    if(prenom.match(name_regex)){
      $('#prenom').css('box-shadow', 'none'); // Si on supprime la box-shadow au cas où elle a été affichée si erreur
    } else{
      $('#prenom').css('box-shadow', '0px 0px 1px 1px red'); // Sinon c'est un nombre on ajoute une box-shadow rouge
    }
  });
  $('#password').focusout(function(){
    var passe = $('#password').val();
    if(passe.match(passe_regex)){
      $('#password').css('box-shadow', 'none'); // Si on supprime la box-shadow au cas où elle a été affichée si erreur
    } else{
      $('#password').css('box-shadow', '0px 0px 1px 1px red'); // Sinon c'est un nombre on ajoute une box-shadow rouge
    }
  });
  $('#naissance').focusout(function(){
    var naissance = $('#naissance').val();
    if(naissance.match(naissance_regex)){
      // On supprime la box-shadow si on a le résultat attendu
      $('#naissance').css('box-shadow', 'none');
      isCorrect = true;
    } else{
      // Sinon c'est un nombre on ajoute une box-shadow rouge
      $('#naissance').css('box-shadow', '0px 0px 2px 1px red');
      isCorrect = false;
    }
  });
});// ~ Fonction Ready
