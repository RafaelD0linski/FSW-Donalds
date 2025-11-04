const path = require("path");

// basename
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__filename, "teste", "teste.html"));
