function saludar (nombre: string): string {
    return `Hola, ${nombre}! Bienvenido a TypeScript`;
}

console.log(saludar('Dany Cabrera'));

let edad: number = 15;  

if (edad <= 18) {
    console.log('Es menor de edad');
} else {
    console.log('Es mayor de edad');
}