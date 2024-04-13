// Récupération des différents éléments
const vowelsCount = document.querySelector(".vowels__count");

// Création de la fonction counterVowels qui va permettre de compter les voyelles
const counterVowels = (str) => {
  str = str.toLowerCase();

  // Création des variables
  let counter = 0;
  let vowelsArray = ["a", "e", "i", "o", "u", "y"];

  // Boucle for qui va parcourir la chaîne de caractère (str)
  for (let letter of str) {
    if (vowelsArray.includes(letter)) {
      counter++; // incrémentation du compteur
    }
  }
  vowelsCount.textContent = counter;
};
