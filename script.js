class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const mago = new Hero('Gerwald', 150, 'mago');
  const guerreiro = new Hero('Renatus', 35, 'guerreiro');
  const monge = new Hero('O Desafiante', 32, 'monge');
  const ninja = new Hero('Jiraya', 28, 'ninja');
  
  mago.atacar();       
  guerreiro.atacar();  
  monge.atacar();      
  ninja.atacar();     
  