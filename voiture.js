class Voiture {
  constructor(marque, modele, annee, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.couleur = couleur;
  }

  afficherDetails() {
    console.log(
      `marque : ${this.marque} modèle : ${this.modele} année : ${this.annee} couleur : ${this.couleur}`
    );
  }
}
const voiture1 = new Voiture("bmw", "serie 1", 2010, "noir.");
const voiture2 = new Voiture("tesla", "modele Y", 2024, "blanc");
voiture1.afficherDetails();
voiture2.afficherDetails();
