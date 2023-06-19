const Nota = require("../models/nota");
const resultado = new Nota();

describe("TESTE", () => {
    test('', () => {
        expect(resultado.mediaCA(9.1)).toEqual(`Sua media final foi 9.1 com pontuação SS (Superior)`)
    });
    test("Teste Nota Médio Superior", () => {
        expect(resultado.mediaCA(7.0)).toEqual(`Sua media final foi 7 com pontuação MS (Médio Superior)`);
    });
    test("Teste Nota Médio", () => {
        expect(resultado.mediaCA(5.0)).toEqual(`Sua media final foi 5 com pontuação MM (Médio)`);
    });
    test("Teste Nota Médio Inferior", () => {
        expect(resultado.mediaCA(3.0)).toEqual(`Sua media final foi 3 com pontuação MI (Médio Inferior)`);
    });
    test("Teste Nota Inferior", () => {
        expect(resultado.mediaCA(0.1)).toEqual(`Sua media final foi 0.1 com pontuação II (Inferior)`);
    });
    test("Teste Nota Sem rendimento", () => {
        expect(resultado.mediaCA(0)).toEqual(`Sua media final foi 0 com pontuação SR (Sem rendimento)`);
    });
});