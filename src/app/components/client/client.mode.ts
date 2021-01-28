export interface Client {
    name: string
    phone: number | null
    cpf: string
    address: {
        state: string
        city: string
        postalCode: number | null
        street: string
        complement?: string
    }
    itens?: Itens[]
}

interface Itens {
    name: string
    price: number
    code: number
}
