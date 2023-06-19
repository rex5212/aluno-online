class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA(media = this.mediaFinal()) {
        if (media >= 9 && media <= 10){
            return `Sua media final foi ${media} com pontuação SS (Superior)`
        } else if (media >= 7 && media <= 8.9){
            return `Sua media final foi ${media} com pontuação MS (Médio Superior)`
        } else if (media >= 5 && media <= 6.9){
            return `Sua media final foi ${media} com pontuação MM (Médio)`
        } else if (media >= 3 && media <= 4.9){
            return `Sua media final foi ${media} com pontuação MI (Médio Inferior)`
        } else if (media >= 0.1 && media <= 2.9){
            return `Sua media final foi ${media} com pontuação II (Inferior)`
        } else if (media == 0){
            return `Sua media final foi ${media} com pontuação SR (Sem rendimento)`
        } else {
            throw new Error("nota inválida");
        }
    }
}

module.exports = Nota;