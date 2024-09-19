let Edad = [17,23,12,43]
Edad[4] = 50;

// Se guardan los mayores de edad (FILTER)
let FilterEdad = Edad.filter(edad =>{
    return edad >= 18
})
console.log(FilterEdad)

//Se le suma 10 a los menores de edad (MAP)
let MapEdad = Edad.map(edad=>{
    if(edad<18)
    {
        return edad
    }else
    {
        return edad+10
    }
})
console.log(MapEdad)

//Se suman todas la edades (FOREACH)
let suma = 0
Edad.forEach(edad => {
    suma+=edad
})
console.log(suma)

//Retorna la edad mas baja (REDUCE)
const Menor = Edad.reduce((menor,edad)=>edad<menor ? edad : menor,Edad[0])
console.log(Menor)

let Nombres = ['David','Carlos','Luisa','Santiago']

//Nombres con más de 5 letras (FILTER)
let NomFilter = Nombres.filter(nombre => nombre.length > 5 )
console.log('Los nombres con mas de 5 letras son: '+NomFilter)

//Se agrega el apellido Ososrio a los nombres (MAP)
let NomMap = Nombres.map(nombre=>{
    return nombre+' Osorio'
})
console.log(NomMap)

//Imprime los nombres y les da la bienvenida (FOREACH)
Nombres.forEach(nombre => console.log(`${nombre}, Bienvenido`))

const Numeros = [10,20,30,40]

//Se multiplican en todos los numeros (REDUCE)
let Multiplicacion = Numeros.reduce((Multi,valorTomado)=>{
    
        return Multi*valorTomado
    })
console.log('La multiplicacion de todos los numeros es: '+Multiplicacion)

//Se toman los numeros mayores a 15 y menores a 35 (FILTER)
let NumFilter = Numeros.filter(num=>{
    if (num>15 && num<35)
    {
        return num
    }
})
console.log(NumFilter)

//Se divide cada numero entre 2
let NumMap = Numeros.map(num=>{
    return num/2
})
console.log(NumMap)

//Dice el numero es par o impar (FOREACH)
Numeros.forEach(num=>{
    if(num%2===0)
    {
        console.log('El numero '+num+' es par')
    }else{
        console.log('El numero '+num+' no es par')
    }
})

const Precios = [200,150,350,500,425]

//Suma de los precios (REDUCE)
const sumaPrecios = Precios.reduce((acumulador, precioActual) => acumulador + precioActual, 0);
console.log('La suma de los precios es:', sumaPrecios);

//Precios mayores a 200 (FILTER)
const PreciosFilter = Precios.filter(precio => precio > 200);
console.log('Precios mayores a 200:', PreciosFilter);

//Se le hace un 20% de descuento a los precios (MAP)
const PreciosMap = Precios.map(precio=>{
    return precio=precio-(precio*0.20)
})

//Imprimir cada precio con un texto adicional
Precios.forEach(precio => console.log('El precio es: '+precio+'$'))

//------------------------------------------------------------------------------

const saludo = () => console.log('Hola bienvenido')

const saludoPersonalizado = Usuario => console.log('Hola '+Usuario+' bienvenido') 
saludoPersonalizado('David')

const ElevarCubo = N => console.log(N+' elevado a la 3 es: '+N*N*N)
ElevarCubo(3)

const Promedio = (N1,N2,N3) => (N1+N2+N3)/3
console.log(Promedio(15,10,20))

const Par = Numero => {
if(Numero % 2 ===0)
{
    console.log(Numero+' Es par')
}else { console.log(Numero+' No es par') }
}
Par(7)
