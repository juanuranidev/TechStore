const products = [
    {"id": 1, "titulo" : "NOTEBOOK HP 240 G8", "precio" : 70000, "stock" : 1, "imagen" : "./img/productos/notebookhp.png"},
    {"id": 2, "titulo" : "producto2", "precio" : 60000, "stock" : 7},
    {"id": 3, "titulo" : "producto3", "precio" : 78000, "stock" : 4},
    {"id": 4, "titulo" : "producto4", "precio" : 32000, "stock" : 12},
    {"id": 5, "titulo" : "producto5", "precio" : 29000, "stock" : 4},
    {"id": 6, "titulo" : "producto6", "precio" : 20000, "stock" : 20} 
]

 // Promesa simulando una api
 export const getFetch = new Promise((resolve, reject) => {
    let condicion = true
    if(condicion) {
        setTimeout(() => resolve(products), 3000)
    } else {
        reject('error')
    }
})