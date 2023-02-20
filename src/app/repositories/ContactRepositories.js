const { v4 } = require('uuid')

let contacts = [
    {
        id: v4(),
        name: 'Felipe',
        email: 'felipe@mail.com',
        phone: '1223344',
        category_id: v4()
    },
     {
        id: v4(),
        name: 'João',
        email: 'joao@mail.com',
        phone: '1223344',
        category_id: v4()
    }
]


class ContactRepositories {
    findAll () {
        return new Promise((resolve, rejected) => {
            resolve(contacts)
        })
    }

    findById (id) {
        return new Promise((resolve, rejected) => {
            resolve(contacts.find((contact) => contact.id === id))
        })

    }

    delete ( id) {
        return new Promise((resolve, rejected) => {
            contacts = contacts.filter((contact) => contact.id !== id)
            resolve()
        })
    }

    
}

module.exports = new ContactRepositories()