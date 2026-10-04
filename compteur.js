// Mesure des visites (GoatCounter, sans cookie), commune a l'accueil et aux exemples, FR et DE.
// GC_CODE vide = aucune mesure, aucun appel. Meme methode que lebattoir.ch.
// Les liens marques par canal s'ecrivent ?ref=mail, ?ref=linkedin, ?ref=qr
(function(){
  var GC_CODE='';
  if(!GC_CODE || !/(^|\.)collega\.ch$/.test(location.hostname)) return;
  var g=document.createElement('script'); g.async=true; g.src='https://gc.zgo.at/count.js';
  g.setAttribute('data-goatcounter','https://'+GC_CODE+'.goatcounter.com/count'); document.head.appendChild(g);
  // La mention ne s'affiche que si la mesure est active.
  var de=document.documentElement.lang==='de';
  var mention=de?'Wir zählen die Besuche mit GoatCounter, einem externen Dienst, der keine Cookies setzt und dessen Server in Finnland und Deutschland stehen. Ihr Browser verbindet sich dabei mit diesem Dienst, der dadurch Ihre IP-Adresse erhält.'
                :"Nous comptons les visites avec GoatCounter, un service externe qui ne dépose aucun cookie et dont les serveurs sont en Finlande et en Allemagne. Votre navigateur s'y connecte, et ce service reçoit de ce fait votre adresse IP.";
  var s=document.getElementById('dsans');
  if(s){ s.textContent=(de?'Diese Website verwendet weder Cookies noch Formulare. ':"Ce site n'utilise ni cookie ni formulaire. ")+mention; return; }
  var f=document.querySelector('footer .w');
  if(f) f.appendChild(document.createTextNode(' '+mention));
})();
