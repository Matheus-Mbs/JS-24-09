// {
//     let elefante = 0
//     elefante = parseInt(prompt('Quantos elefantes tem no ambiente? '))

//     for(let i = 1; i <= elefante; i++){
//         console.log(`${i} elefante incomoda muita gente, ${i+1} incomoda muito mais...`)
//     }
// }

{
    let elefante = 0
    elefante = parseInt(prompt('Quantos elefantes tem no ambiente? '))
    let i =1
    while(i<=elefante){
        console.log(`${i} elefante incomoda muita gente, ${i+1} incomoda muito mais...`)
        i++
    }
}