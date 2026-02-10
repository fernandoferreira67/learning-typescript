"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tipos basicos
 */
var id = 10;
var course = "Curso TS";
var isPublished = true;
//Usado para qualquer tipos, aceita int, boolean
var many;
//Arrays (Listas)
//Só aceita uma lista com numeros
var numbers = [1, 2, 3];
//only strings
var strings = ["Joao", "Angel"];
//only boolean
var booleans = [true, false];
//qualquer coisa
var manyList = [1, "teste", true];
//Tuples (Tuplas)
/*
 *No TypeScript, uma tupla é um tipo especial de array onde:
 *a ordem importa
 *o tamanho é fixo
 *cada posição tem um tipo específico
 */
var usuario;
usuario = ["Fernando", 28]; // ✅ ok
//usuario = [28, "Fernando"]; // ❌ erro (ordem errada)
//varios usuários
var usuarios = [
    ["Fernando", 28],
    ["Fabio", 28],
];
//# sourceMappingURL=types.js.map