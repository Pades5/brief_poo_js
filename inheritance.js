class Vehicule {
  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }
  mma() {
    return ` marque : ${this.marque} modele : ${this.modele} annee :${this.annee} `;
  }
}
class Voiture extends Vehicule {
  constructor(marque, modele, annee, couleur) {
    super(marque, modele, annee);
    this.couleur = couleur;
  }
  afficherDetails() {
    console.log(`${super.mma()} couleur : ${this.couleur}`);
  }
}

const voiture1 = new Voiture("bmw", "serie 1", 2010, "noir.");
const voiture2 = new Voiture("tesla", "modele Y", 2024, "blanc");
voiture1.afficherDetails();
voiture2.afficherDetails();
