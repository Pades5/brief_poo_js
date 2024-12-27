class Voiture {
  #marque;
  #modele;
  #annee;
  #couleur;

  constructor(marque, modele, annee, couleur) {
    this.#marque = marque;
    this.#modele = modele;
    this.#annee = annee;
    this.#couleur = couleur;
  }

  get marque() {
    return this.#marque;
  }
  get modele() {
    return this.#modele;
  }
  get annee() {
    return this.#annee;
  }

  get couleur() {
    return this.#couleur;
  }

  set marque(newMarque) {
    this.#marque = newMarque;
  }
  set modele(newModele) {
    this.#modele = newModele;
  }
  set annee(newAnnee) {
    this.#annee = newAnnee;
  }
  set couleur(newCouleur) {
    this.#couleur = newCouleur;
  }

  afficherDetails() {
    console.log(
      `marque : ${this.#marque} modèle : ${this.#modele} année : ${
        this.#annee
      } couleur : ${this.#couleur}`
    );
  }
}
const voiture1 = new Voiture("bmw", "serie 1", 2010, "noir.");
voiture1.afficherDetails();
voiture1.couleur = "red";
voiture1.afficherDetails();
