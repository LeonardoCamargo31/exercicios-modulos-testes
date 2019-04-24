/**
 * @param c (capital) 
 * @param i (juros em decimal ex: 3,5% = 0.035)
 * @param t (tempo)
 * @return o juros simples do período (C * i * t )
 */
const jurosSimples = (c, i, t) => {
    const value = c * i * t
    return parseFloat(value.toFixed(2))
}

/**
 * @param c (capital) 
 * @param i (juros em decimal ex: 3,5% = 0.035)
 * @param t (tempo)
 * @return retorne o montante total C + juros simples
 */
const montanteJurosSimples = ({ jurosSimples }) => (c, i, t) => {
    const juros = jurosSimples(c, i, t)
    const value = juros + c
    return parseFloat(value.toFixed(2))
}

/**
 * @param c (capital) 
 * @param i (juros em decimal ex: 3,5% = 0.035)
 * @param t (tempo)
 * @return retorno o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ n​.
 */
const montanteJurosCompostos = (c, i, t) => {
    const value = c * Math.pow((1 + i), t)
    return parseFloat(value.toFixed(2))
}

/**
 * @param c (capital) 
 * @param i (juros em decimal ex: 3,5% = 0.035)
 * @param t (tempo)
 * @return retorne somente os juros.
 */
const jurosCompostos = ({ montanteJurosCompostos }) => (c, i, t) => {
    const montante = montanteJurosCompostos(c, i, t)
    const value = montante - c
    return parseFloat(value.toFixed(2))
}

module.exports = {
    jurosSimples,
    montanteJurosSimples: montanteJurosSimples({ jurosSimples }),//já passo as dependencias
    montanteJurosCompostos,
    jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
    pure: { montanteJurosSimples, jurosCompostos } //passando ele puro, sem as dependencias
}