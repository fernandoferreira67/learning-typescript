/**
 * Tipos basicos
 */
let id: number = 10;
const course: string = "Curso TS";
const isPublished: boolean = true;

//Usado para qualquer tipos, aceita int, boolean
let many: any;

//Arrays (Listas)

//Só aceita uma lista com numeros
const numbers: number[] = [1, 2, 3];

//only strings
const strings: string[] = ["Joao", "Angel"];

//only boolean
const booleans: boolean[] = [true, false];

//qualquer coisa
const manyList: any[] = [1, "teste", true];

//Tuples (Tuplas)
/*
 *No TypeScript, uma tupla é um tipo especial de array onde:
 *a ordem importa
 *o tamanho é fixo
 *cada posição tem um tipo específico
 */
let usuario: [string, number];

usuario = ["Fernando", 28]; // ✅ ok
//usuario = [28, "Fernando"]; // ❌ erro (ordem errada)

//varios usuários
let usuarios: [string, number][] = [
  ["Fernando", 28],
  ["Fabio", 28],
];
