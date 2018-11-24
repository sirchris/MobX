import { action, observable } from 'mobx';

class BasketStore {
  @observable products = []

  @action addProduct = (product) => {
      this.products.push(product);
  }
}

export default new BasketStore();
