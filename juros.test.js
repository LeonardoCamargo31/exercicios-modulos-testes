const juros = require('./juros')


test('jurosSimples', () => {
    expect(juros.jurosSimples(1200, 0.02, 12)).toBe(288.00)
})

test('montanteJurosSimples', () => {
    const jurosSimples = jest.fn()
    jurosSimples.mockReturnValue(288.00)

    const res = juros.pure.montanteJurosSimples({ jurosSimples })(1200, 0.02, 12)
    expect(res).toBe(1488.00)
})

test('montanteJurosCompostos',()=>{
    const res = juros.montanteJurosCompostos(1200, 0.04, 4)
    expect(res).toBe(1403.83)
})

test('jurosCompostos',()=>{
    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockReturnValue(1403.83)

    const res = juros.pure.jurosCompostos({ montanteJurosCompostos })(1200, 0.04, 4)
    expect(res).toBe(203.83)
})