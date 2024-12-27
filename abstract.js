/* adapté depuis internet sous forme de tableau et avec forEach pour parcourir
class Animal {
  faireDuBruit() {}
}
class Chien extends Animal {
  faireDuBruit() {
    console.log("le chien aboie");
  }
}

class Chat extends Animal {
  faireDuBruit() {
    console.log("le chat miaule");
  }
}

const affichage = [new Chien(), new Chat()];

affichage.forEach((Animal) => Animal.faireDuBruit());
*/
class Animal {
  Constructor() {
    if (this.constructor === Animal) {
      throw new Error("Animal n'est pas une class instanciable");
    }
  }
  faireDuBruit() {
    throw new Error("cette méthode n'est pas utilisable");
  }
}
class Chien extends Animal {
  faireDuBruit() {
    console.log("le chien aboie");
  }
}

class Chat extends Animal {
  faireDuBruit() {
    console.log("le chat miaule");
  }
}
const chien1 = new Chien();
chien1.faireDuBruit();
const chat2 = new Chat();
chat2.faireDuBruit();
const animals = new Animal();
animals.faireDuBruit();
