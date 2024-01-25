# desafio-Devio-FrontEnd

O desafio consiste na elaboração de um sistema de pedidos para um restaurante de lanches. 

Todo o layout foi desenvolvido pensando em uma aplicação responsiva e que se aplique em um contexto prático. Através da integração com o banco de dados, foram inseridos produtos, os quai são adicionados ao pedido. A tela de pagamento processa o pedido, fornece métodos de pagamento, o troco (cado o cliente escolha dinheiro), o nome do cliente, o código do pedido e um resumo do pedido. A tela da cozinha controla os pedidos que estão sendo feitos e os que já estão prontos. A tela da retirada fornece os nomes dos clientes que fizeram pedidos, separando-os em lanches prontos para a retirada ou não. 

Separei cos componentes partindo do App.js. De lá, cada tela possui uma Home (os dashboars de orders e payments estao em um únio endereço). Da home, parte para o dashboard de cada tela, seguido de seus componentes, renderizados individualmente, o aque torna a aplicação mais legível.

Dediquei todo o meu tempo disponível desde o lançamento do desafio (17/01/2024)

IMPORTANTE: Para habilitar a impressão térmica, descomente a parte que está comentada no componente "PaymentMethod.js"

# Para iniciar a aplicação

- Certifique-se que o lado do servidor está ligado

```bash
npm i
```

```bash
npm start
```