// {
//     let maiorLucro = 1,lucro = 0
//     const custos = 1000

//     for(let i = 0; maiorLucro > lucro; i++){
//         lucro = ((1800 + 50 * i) * (150 - 10 * i)) - 1000
        
//         if(lucro > maiorLucro){
//             maiorLucro = lucro
//         }
//         console.log(`Maior lucro : ${maiorLucro}\nValor do ingresso: ${150 - 10*i}`)
//     }
// }

{
    let maiorLucro = 1,lucro = 0
    const custos = 1000

    let i = 0

    while(maiorLucro > lucro){
        lucro = ((1800 + 50 * i) * (150 - 10 * i)) - 1000
        
        if(lucro > maiorLucro){
            maiorLucro = lucro
        }
        console.log(`Maior lucro : ${maiorLucro}\nValor do ingresso: ${150 - 10*i}`)
        i++
    }
}