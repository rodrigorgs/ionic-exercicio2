import { browser, by, element, protractor } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('page-page1')).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
  }

  getTexto() {
    return element(by.id('textView')).getText();
  }
  getValorDoInput() {
    return element(by.css('#editText .text-input')).getAttribute('value')
  }
  trocar() {
    return element(by.id('btnTrocar')).click();
  }
  digitar(str: string) {
    return browser.sleep(500)
    .then(() => {
      element(by.css('#editText .text-input')).sendKeys(str)
    }).then(() => {
      browser.sleep(200);
    });
  }
  limpar() {
    return browser.sleep(500)
        .then(() => this.getValorDoInput())
        .then((texto) => {
          let array = Array(texto.length + 1).fill(protractor.Key.BACK_SPACE);
          return element(by.css('#editText .text-input')).sendKeys(...array);
        })
        .then(() => browser.sleep(500));
  }
  confirmar() {
    return element(by.id('btnConfirmar')).click();
  }
  cancelar() {
    return element(by.id('btnCancelar')).click();
  }
  sleep(ms: number) {
    return browser.sleep(ms);
  }

}
