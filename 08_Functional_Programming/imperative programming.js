// Entender os perigos da programação imperativa

// tabs é um array de títulos de cada site aberto na janela
const Window = function(tabs) {
  this.tabs = tabs; // Mantemos um registro do array dentro do objeto
};

// Quando você junta duas janelas em apenas uma
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Quando você abre uma nova aba no final
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Vamos abrir uma nova aba por enquanto
  return this;
};

// Quando você fecha uma aba
Window.prototype.tabClose = function(index) {


  const tabsBeforeIndex = this.tabs.splice(0, index); // Obtém as abas antes da aba
  const tabsAfterIndex = this.tabs.splice(1); // Obtém as abas após a aba

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Juntar

  return this;
 };

// Vamos criar três janelas no navegador
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Sua caixa de correio, unidade e outros locais de trabalho
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sites sociais
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sites de entretenimento

// Agora, realize a abertura e o fechamento da aba, assim como outras operações
const finalTabs = socialWindow
  .tabOpen() // Abra uma nova aba para memes de gato
  .join(videoWindow.tabClose(2)) // Fechar a terceira aba na janela de vídeo e entrar
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);