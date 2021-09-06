# Desafio D3

## **Proposta e resolução**

A proposta dessa aplicação é prever a quantidade de infectados do COVID-19, variada a uma determinado quantidade de dias dada pelo usuário.

Pensando em uma aplicação de forma geral, o que me fez mais sentido nessa situação, foi expor essas informações por meio de uma API, a qual desenvolvi.

Foi utilizado para previsão, regressão polimonial, usando as variáveis **dias** e **número de casos**.

**OBS**: Todas os dados foram adquiridos atráves do JSON do [Our world in data](https://github.com/owid/covid-19-data/tree/master/public/data).
## **Como a aplicação funciona?**

A aplicação é uma API na qual todos os dados são atualizados ao ser inicializada, e também a cada 24h, caso esteja rodando a partir de um servidor.

Ela possui 2 rotas, elas são:
  - **/data**: Retorna um array de objetos, com o historico do covid, que possui uma representação do eixo x, referente aos dias, e do eixo y, referente a quantidade de infectados.

*Exemplo*

  ```js
  [
    ...
    {
      "x": 2,
      "y": 98
    },
    ...
  ]
  ```

  - **/predict?days=x**: Recebe um como parametro na URL a quantidade de dias que gostaria de prever a infecção, e retorna um array de objetos, sendo "day", o dia, e "infecteds", a quantidade de infectados referente naquele dia.

 *Exemplo de uso*

  ```http
  http://localhost:4000/precict?days=2
  ```
  ```js
  [
    {
      "day": 1,
      "infecteds": 345123
    },
    {
      "day": 2,
      "infecteds": 442123
    },
  ]
  ```

## **Como posso testar a aplicação?**

Existem duas maneiras de rodar a aplicação localmente, com **docker** e com **node**, mas para isso, precisa clonar os arquivos do repositório em sua máquina local.
  - Primeiro, clone o repositório aqui do git, utilizado o link fornecido no botão code;
  - Após clonado, entre na pasta raiz e siga os próximos passos em seu terminal:
## Com Docker
1. Execute o seguinte comando e aguarde finalizar a instalação:
```
$ docker build -t covid-pred-api .
```
2. Após o build ter sido feito, vamos rodar a aplicação com o seguinte comando:
```
$ docker run --name covid-api -p 4000:4000 -d covid-pred-api
```
3. Agora só entrar na URL local e testar, o link é:
```http
http://localhost:4000/data
```
## Com Node
1. Execute o seguinte comando e aguarde finalizar a instalação:
```
$ npm install
```
2. Após a instalação das dependencias, vamos rodar a aplicação com o seguinte comando:
```
$ npm run dev:server
```
3. Agora só entrar na URL local e testar, o link é:
```http
http://localhost:4000/data
```
