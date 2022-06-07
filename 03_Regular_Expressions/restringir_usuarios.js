/*
Restringir nomes de usuário possíveis.

1. Nomes de usuário só podem conter caracteres alfanuméricos.
2. Os números, se algum, precisam estar no fim da string. Pode haver zero ou mais números. Usernames não podem começar com números.
3. As letras podem ser maiúsculas ou minúsculas.
4. O tamanho de nomes de usuários precisa ser pelo menos dois. Um username de dois caracteres só pode conter letras.
 */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);

/*

1. ^ - padrão de inicio
2. [a-z] - o primeiro caractere é uma letra
3. [a-z]+ - próximos caracteres são letras
4. \d*$ - termina com 0 ou mais dígitos
5. | - ou
6. ^[a-z] - o primeiro caractere é uma letra
7. \d\d+ - os próximo caracteres são 2 ou mais dígitos
8. $ - padrão do final

 */