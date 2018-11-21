import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('página inicial', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    // checa valores iniciais da 1a tela
    // checa valores iniciais da 2a tela

    it('deve cumprimentar Fulano', () => {
      page.getTexto().then(texto => {
        expect(texto).toEqual('Oi, Fulano!');
      });
    });

    it('deve trocar nome ao confirmar', () => {
      page.trocar()
          .then(() => page.digitar(' de Tal'))
          .then(() => page.confirmar())
          .then(() => page.sleep(500))
          .then(() => page.getTexto())
          .then((texto) => {
            expect(texto).toEqual('Oi, Fulano de Tal!');
          });
    });

    it('não deve trocar nome ao cancelar', () => {
      page.trocar()
          .then(() => page.digitar(' de Tal'))
          .then(() => page.cancelar())
          .then(() => page.sleep(500))
          .then(() => page.getTexto())
          .then((texto) => {
            expect(texto).toEqual('Oi, Fulano!');
          });
    });

    it('deve dizer apenas "Oi!" quando usuário estiver em branco', () => {
      page.trocar()
          .then(() => page.limpar())
          .then(() => page.confirmar())
          .then(() => page.sleep(500))
          .then(() => page.getTexto())
          .then((texto) => {
            expect(texto).toEqual('Oi!');
          });
    });

    it('deve mostrar o nome atual na caixa de texto', () => {
      page.trocar()
          .then(() => page.digitar(' de Tal'))
          .then(() => page.confirmar())
          .then(() => page.sleep(500))
          .then(() => page.trocar())
          .then(() => page.getValorDoInput())
          .then((texto) => {
            expect(texto).toEqual('Fulano de Tal');
          });
    });
  })
});
