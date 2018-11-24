import { action, computed, observable } from 'mobx';

class ProductStore {
    @observable products = [
        {
            id: 0,
            name: 'Jabłko',
            promoted: true
        }, {
            id: 1,
            name: 'Kawa'
        }, {
            id: 2,
            name: 'Jack Daniels'
        }, {
            id: 3,
            name: 'Samsung Galaxy J5',
            promoted: true
        }, {
            id: 4,
            name: 'MacBook Air'
        }
    ]

    @observable order = 'asc'

    @observable phrase = ''

    @action sortByName = () => {
        this.products = this.order === 'asc'
            ? this.products.sort((a, b) => a.name.localeCompare(b.name))
            : this.products.reverse((a, b) => a.name.localeCompare(b.name));

        this.order = this.order === 'asc'
            ? 'desc'
            : 'asc';
    }

    @action buyProduct = (id) => {
        this.products = this.products.map((product) => (product.id === id
            ? {
                ...product,
                isSold: true
            }
            : product
        ));
    }

    @action filterProducts = (event) => {
        this.phrase = event.target.value;
    }

    @computed get promotedProducts() {
        return this.products.filter((product) => product.promoted);
    }

    @computed get matchPhrase() {
        return this.products.filter((product) => product.name.includes(this.phrase));
    }

    @computed get soldProductsAmount() {
        return this.products.filter((product) => product.isSold).length;
    }
}

export default new ProductStore();
