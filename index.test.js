const test = require('./index');

try {
    test;
    console.log("Passou nos testes !");
} catch (error) {
    throw error.message;
}