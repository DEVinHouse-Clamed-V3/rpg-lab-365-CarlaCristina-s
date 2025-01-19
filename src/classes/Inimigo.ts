import Personagem from "./Personagem";

export default class Inimigo extends Personagem {
    
    atacar(personagem: Personagem){
        const chanceDeAcerto = Math.random(); 
        
        if (chanceDeAcerto < 0.5)  {
            console.log("ataque falhou")
        } else {
            personagem.receberDano(this.causarDano())
        }
    }
}