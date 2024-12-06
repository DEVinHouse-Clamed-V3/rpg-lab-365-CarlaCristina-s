export default class Arma {
  private readonly nome: string = ''
  private dano: number = 0
  private readonly descricao: string = ''

  constructor(nome: string, descricao: string, dano: number = 0) {
      this.nome = nome
      this.descricao = descricao
      this.dano = dano
  }

  getNome() {return this.nome}
  getDano() {return this.dano}
  getDescricao() {return this.descricao}

  setDano(dano: number){
      if(dano < 0) {
          console.log('Dano não pode ser negativo')
      } else {
          this.dano = dano
      }
  }
}