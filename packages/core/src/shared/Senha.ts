export default class Senha {
  static criar(tamanho: number = 15): string {
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const maiusculas = minusculas.toUpperCase();
    const numeros = "0123456789";
    const espaciais = "!@#$%&*";

    const grupos = [minusculas, maiusculas, numeros, espaciais];
    const senha = [];

    for (let i = 0; i < tamanho; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }

    return senha.join("");
  }
}
