# Ionic - Exercício 2 - navegação

## Configuração e avaliação

Dependências:

Este repositório foi testado com o Node.js 7.2.1 e o Ionic 4.3.1 (use o comando `npm install -g ionic@4.3.1` para instalar)

Configuração:

- Clone o repositório do projeto
- Abra o terminal no diretório do projeto
- Rode o comando `npm install` para instalar as dependências

Avaliação:

- Rode o comando `ionic serve` para rodar a aplicação
- Rode o comando `npm run e2e` para rodar os testes
- O resultado dos testes aparece no terminal

## Especificação

```
+--------------------+      +--------------------+
|                    |      |                    |
|    Oi, Fulano!     |      |  Usuário: Fulano   |
|                    |      |          +------+  |
| +----------------+ |      |                    |
| | Trocar usuário | +------>  +--------------+  |
| +----------------+ |      |  | Confirmar    |  |
|                    |      |  +--------------+  |
|                    |      |                    |
|                    |      |  +--------------+  |
|                    |      |  | Cancelar     |  |
|                    |      |  +--------------+  |
|                    |      |                    |
+--------------------+      +--------------------+
```

Seu app deve possuir duas páginas: `Page1` (exibida à esquerda no desenho acima), contendo um elemento de texto com o id `textView` e um botão com id `btnTrocar`, e a `Page2`, contendo uma caixa de texto com id `editText` e dois botões, um com id `btnConfirmar` e outro com id `btnCancelar`.

Os botões devem ter o rótulo apresentado no desenho acima. O elemento de texto inicialmente deve apresentar o texto "Oi, Fulano!", e a caixa de texto inicialmente deve vir preenchida com "Fulano".

A lógica básica do app é que a mensagem na primeira tela cumprimenta o usuário atual com o texto `Oi, NOME!`, onde `NOME` é o nome do usuário atual. Ao clicar em "Trocar usuário", digitar um novo nome e então clicar em "Confirmar", muda-se o o usuário atual para aquele cujo nome foi digitado. Se o nome digitado for uma string vazia, isso sinaliza que não há nenhum usuário atual, e a mensagem deve ficar apenas "Oi!".

Ao abrir a `Page2`, a caixa de texto deve mostrar o nome do usuário atual ou, se não houver usuário atual, ela deve estar limpa.
