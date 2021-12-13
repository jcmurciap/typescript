(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string):string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Camilo',
        age: 25,
        address: {
            id: 100,
            zip: 'ABC 123',
            city: 'Mosquera',
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Juan',
        age: 28,
        address: {
            id: 200,
            zip: 'DEF 456',
            city: 'Mosquera',
        },
        getFullAddress(id: string) {
            return this.address.zip;
        }

    }









})()