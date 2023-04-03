import APIError from "../../errors/APIError";
//import { delay } from "../../utils/delay";

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL; //Construtor recebe a URL base como argumento e adiciona ao instanciar o objeto usando a classe
  }

  async makeRequest(path, options) { //Método criado para configurar uma requisição, recebe o caminho e as opções no argumento
    const headers = new Headers(); //Instancia um Header em uma constante

    if (options.body) { //Se o objeto enviado nas opções tiver um body, adicionamos o Content Type Application/json no header instanciado
      headers.append("Content-Type", "application/json");
    }

    if (options.headers) {  //Se o objeto enviado nas opções tiver cabeçalhos, adicionamos esses cabeçalhos no header instanciado
      Object.entries(options.headers).forEach(([key, value]) => {  
        headers.append(key, value);
      });
    }

    // Recebemos o resultado da requisição passando a Base URL já criada no momento da instancia do Objeto + o caminho enviado no argumento do "Make Request", e junto 
    //passamos o objeto de configuração enviado nas opções com o metodo, body e headers
    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options?.body),
      headers,
    });

    //Iniciamos a variável para receber o corpo da resposta, caso tenha
    let responseBody = null;

    //Pegamos o tipo do conteúdo da resposta usando o método .get() do cabeçado
    const contentType = response.headers.get("Content-Type");

    //Se o o tipo de conteúdo da resposta for em formato Json, fazemos o parse usando o metodo .json()
    if (contentType.includes("application/json")) {
      responseBody = await response.json();
    }

    //Se a resposta for bem sucedida retornamos o body parseado
    if (response.ok) {
      return responseBody;
    }


    //Se ocorrer algum erro capturamos e enviamos como argumento o corpo da requisição
    throw new APIError(response, responseBody);
  }


  //Método GET recebe o caminho e as options e passa para o método makeRequest
  get(path, options) {
    return this.makeRequest(path, {
      method: "GET",
      headers: options?.headers,
    });
  }

  post(path, options) {
    return this.makeRequest(path, {
      method: "POST",
      body: options?.body,
      headers: options?.headers,
    });
  }
}

export default HttpClient;
