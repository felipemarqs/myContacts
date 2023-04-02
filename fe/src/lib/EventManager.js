export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  //Criando o método para ser emitido
  on(event, listener) {
    //Recebe o evento e a função que será execurada

    //Se o evento não existir na propriedade listener, settamos ela como um array vazio
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    //Faz um push no array criado acima para armazenar a função que será executada
    this.listeners[event].push(listener);
  }

  //Método para emitir o evento
  emit(event, payload) {
    //Recebe o evento e o payload, as informações que serão utilizadas pela função.

    //Se o evento passado não existir no atributo do objeto, simplesmente retorna o código
    if (!this.listeners[event]) {
      return;
    }

    //Vai no atributo do objeto com o evento passado e faz uma iteração no array passando as informações do payload para cara função que esteja dentro do array.
    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove
    );

    this.listeners[event] = filteredListeners
  }
}

const toastEventManager = new EventManager();

const addToast1 = (payload) => {
   console.log('tost 1 add', payload) 
}

const addToast2 = (payload) => {
    console.log('tost 2 add', payload) 
 }

toastEventManager.on("addtoast", addToast1);
toastEventManager.on("addtoast", addToast2);

console.log("primeiro",toastEventManager.listeners)


toastEventManager.emit("addtoast", { type: "default", text: "default text" });


toastEventManager.removeListener('addtoast', addToast1);

console.log("segundo",toastEventManager)


