// ── COMPTE À REBOURS ──
// Date du mariage : Samedi 04 Décembre 2027 à 20h45
const weddingDate = new Date('2027-12-04T20:45:00');

function updateCountdown() {

  const now  = new Date();
  const diff = weddingDate - now;

  // Le grand jour est arrivé
  if (diff <= 0) {
    document.getElementById('days').textContent    = '00';
    document.getElementById('hours').textContent   = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(timer);
    return;
  }

  // Calculs
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Affichage — toujours 2 chiffres (08, 04, etc.)
  const pad = n => String(n).padStart(2, '0');

  document.getElementById('days').textContent    = pad(days);
  document.getElementById('hours').textContent   = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
}
const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // pour afficher immédiatement, sans attendre 1 seconde

formulaire.addEventListener("submit", function(e) {
    e.preventDefault();

    let nom = document.getElementById("name").value;

    // Enregistrement
    let invites = JSON.parse(localStorage.getItem("invites")) || [];
    invites.push({ nom: nom, reponse: "confirmé" });
    localStorage.setItem("invites", JSON.stringify(invites));

    // Affichage
    message.innerHTML = `
    <div class="confirmation">
      ❁❁ Merci ${nom} ❁❁ <br>
       Votre présence a été confirmée.<br>
       Nous avons hâte de vous retrouver pour célébrer ce moment.
    </div>
    `;

    formulaire.style.display = "none";
});

decliner.addEventListener("click", function() {
    let nom = document.getElementById("name").value || "cher invité";

    // Enregistrement
    let invites = JSON.parse(localStorage.getItem("invites")) || [];
    invites.push({ nom: nom, reponse: "décliné" });
    localStorage.setItem("invites", JSON.stringify(invites));

    message.innerHTML = `
    <div class="decline">
       ❁❁ Merci ${nom} pour votre réponse ❁❁<br>
       Nous comprenons et vous remercions pour votre attention.
    </div>
    `;

    formulaire.style.display = "none";
});