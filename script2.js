{
    let soma = 0
    let num = 1
    let result = []

    for(let i = 0; i < 20; i++, num++){
        soma = soma * 2 + 1
        result[i] = soma
    }
    console.log(soma)
    console.log(result)
}