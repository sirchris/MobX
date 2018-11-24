import { action, observable } from 'mobx';

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
}

export default new ProductStore();
