export interface Client {
    id?: number
    name: string
    phone: string
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

export interface Itens {
    name: string
    price: number | null
    code: number
}
