// {
//     let cartas = []
//     let qntCartas = 0

//     function sortearNaipe(){
//         let naipe = Math.floor(Math.random() * 3)

//         if(naipe == 0){
//             naipe = "copas"
//         }else if(naipe == 1){
//             naipe = "paus"
//         }else if(naipe == 2){
//             naipe = "ouro"
//         }else if(naipe == 3){
//             naipe = "espada"
//         }

//         return naipe
//     }

//     function sortearNum(){
//         let num = Math.floor(Math.random() * 9 + 1)
//         return num
//     }



//     qntCartas = parseInt(prompt('Digite a quantidade de cartas que deseja virar: '))

//     for(let i = 1; i <= qntCartas; i++){
//         let naipe = sortearNaipe()
//         let numeração = sortearNum()

//         cartas.push({i, naipe, numeração})
//     }

//     console.log(cartas)
// }

{
    let cartas = []
    let qntCartas = 0

    function sortearNaipe(){
        let naipe = Math.floor(Math.random() * 3)

        if(naipe == 0){
            naipe = "copas"
        }else if(naipe == 1){
            naipe = "paus"
        }else if(naipe == 2){
            naipe = "ouro"
        }else if(naipe == 3){
            naipe = "espada"
        }

        return naipe
    }

    function sortearNum(){
        let num = Math.floor(Math.random() * 9 + 1)
        return num
    }



    qntCartas = parseInt(prompt('Digite a quantidade de cartas que deseja virar: '))

    let i = 1

    while(i <= qntCartas){
        let naipe = sortearNaipe()
        let numeração = sortearNum()

        cartas.push({i, naipe, numeração})
        i++
    }

    console.log(cartas)
}