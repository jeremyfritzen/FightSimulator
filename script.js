class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo = pseudo
        this.classe = classe
        this.sante = sante
        this.attaque = attaque
        this.niveau = 1
    }

    evoluer() {
        this.niveau ++
        console.log(`${this.pseudo} passe au niveau ${this.niveau} !`)
    }

    verifierSante() {
        if (this.sante <= 0) {
            this.sante = 0
            console.log(`${this.pseudo} n'a plus de points de vie ! ${this.pseudo} a perdu.`)
        }
    }

    get informations() {
        return `${this.pseudo} (${this.classe}) est au niveau ${this.niveau} et il lui reste ${this.sante} points de vie.`
    }
}

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, 'Magicien', 170, 90)
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque
        console.log(`${this.pseudo} attaque ${personnage.pseudo} et lui lance un sort ! ${this.attaque} points de dégâts !`)
        this.evoluer()
        personnage.verifierSante()
    }

    coupSpecial(personnage) {
        personnage.sante -= (this.attaque * 5)
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son Coup Spécial "Puissance des Arcanes" ! Cela lui inflige ${this.attaque * 5} points de dégâts !`)
        this.evoluer()
        personnage.verifierSante()
    }
}

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, 'guerrier', 350, 50)
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son épée et lui inflige ${this.attaque} points de dégâts !`)
        this.evoluer()
        personnage.verifierSante()
    }

    coupSpecial(personnage) {
        personnage.sante -= (this.attaque * 5)
        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son Coup Spécial "Haches de Guerre" et lui inflige ${this.attaque * 5} points de dégâts !`)
        this.evoluer()
        personnage.verifierSante()
    }

}

let pickles = new Guerrier('Pickles')
let jeremy = new Magicien('Jeremy')
console.log(pickles.informations)
console.log(jeremy.informations)

// jeremy.coupSpecial(pickles)
// pickles.informations

pickles.coupSpecial(jeremy)
jeremy.informations