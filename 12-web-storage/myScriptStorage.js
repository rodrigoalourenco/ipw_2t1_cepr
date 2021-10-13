console.log("WEB STORAGE");

/**
 * Armazenando dados
 */
localStorage.setItem('usuario', 'Rodrigo');
sessionStorage.setItem('usuario', 'Rodrigo');

localStorage.senha = '123456';
sessionStorage.senha = '123456';

/**
 * Recuperando dados
 */

var localUsuario = localStorage.getItem('usuario');
var sessionUsuario = sessionStorage.getItem('usuario');
console.log(localUsuario, sessionUsuario);

var localSenha = localStorage.senha;
var sessionSenha = sessionStorage.senha;
console.log(localSenha, sessionSenha);

for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    console.log(key, value);
}

/**
 * Removendo dados
 */
localStorage.removeItem('usuario');
sessionStorage.removeItem('usuario');

localStorage.clear();
sessionStorage.clear();