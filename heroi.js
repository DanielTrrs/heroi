const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para classificar o herói
function classificarHeroi(nome, xp) {
  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}\n`);
}

// Função para repetir enquanto quiser
function iniciar() {
  rl.question("Digite o nome do herói (ou 'sair' para encerrar): ", function(nome) {
    if (nome.toLowerCase() === "sair") {
      console.log("Programa encerrado.");
      rl.close();
      return;
    }

    rl.question("Digite a quantidade de XP do herói: ", function(xp) {
      xp = Number(xp); // converte para número
      classificarHeroi(nome, xp);
      iniciar(); // repete o processo
    });
  });
}

iniciar();
