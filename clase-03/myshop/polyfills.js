// escribir un polyfill del método "find" //

const users = [
    {
        id: 1,
        name: "Alberto",
        edad: 18
    },
    {
        id: 2,
        name: "Hector",
        edad: 21
    },
    {
        id: 3,
        name: "Andrea",
        edad: 35
    },
    {
        id: 4,
        name: "Lizard",
        ead: 19
    }
]
// const result = users.find((el) => el.edad == 35)
// console.log(result)
// se pasa un array a recorrer y una función por parámetro //

// function encontrar(arr, fn) {
//     for (let i = 0; i < users.length; i++) {
//         let el = arr[i]
//         // console.log(arr[i])
//         if (fn(el) == true) {
//             return el
//         }

//     }
// }
// const resultado = encontrar(users, (el) => el.name === "Andrea")
// console.log(resultado)

// misma función pero hecha como un método del objeto Array //
Array.prototype.encontrar = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let el = this[i]
        if (fn(el) == true) {
            return el
        }

    }
}
const resultado = users.encontrar((el) => el.id == 2)
console.log(resultado)