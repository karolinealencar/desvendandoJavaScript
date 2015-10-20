// >  String são imutaveis.
// > Podem ser escritas de duas formas, com aspas simples ou duplas


var nomeEmpresa = "JavaScript200"

// A função charAt te retorna o caracter que está naquela determinada posição.
nomeEmpresa.charAt(4); // OUTPUT: S

// A função charCodeAt é a mesma forma da função charAt só que o resultado é dado
// de acordo com a tabela ASCII (http://www.asciitable.com/)
nomeEmpresa.charCodeAt(1); // a - 65

// Concat, concatena duas strings.
nomeEmpresa.concat("1"); // OUTPUT: JavaScript2001
// Se você digitar nomeEmpresa novamente não vai obter resultados, pois strings
// são imutaveis, para poder fazer alterações basta.
var nomeEmpresa = nomeEmpresa.concat("1");
// nomeEmpresa agora vale = "JavaScript2001"

// indexOf te retorna a posição onde foi encontrado o primeiro char que você busca.
nomeEmpresa.indexOf("a"); // OUTPUT: 1

// lastIndexOf te retorna a ultima posição que foi encontrado o char que você busca.
nomeEmpresa.lastIndexOf("a"); // OUTPUT: 3

// length -> tamanho da string.
nomeEmpresa.length // OUTPUT: 12

// Math te retorna uma busca usando regEXP

// Replace substitui uma parte de uma string por outra.
nomeEmpresa.replace("JavaScript", "ECMA");
// OUTPUT: ECMA2001

// Substring extrai parte da string desejada.
var nome = "Adejair"
nome.substring(3) // 0 -> 3 = OUTPUT:jair


//Gera uma string toda em minuscula toLowerCase -> toLowerCase(Junior) -> Junior
// Gera uma string em maiscula toLowerUpper -> toUpperCase(junior) -> JUNIOR
nome.toLowerCase(); // OUTPUT: adejair
nome.toUpperCase(); // OUTPUT: ADEJAIR

// trim remove espaço no inicio e final da string
