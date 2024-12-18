import { Produto } from "./Produto";

export class Cosmetico extends Produto{

    // Atributo específico da classe medicamento
    private _fragrancia: string;

    // Método Construtor
    constructor(id: number, nome: string, tipo: number, preco: number, fragrancia: string) {
        super(id, nome, tipo, preco);
        this._fragrancia = fragrancia;

    }

    // Métodos get e set

    public get fragrancia(): string {
        return this._fragrancia;
    }

    public set fragrancia(value: string) {
        this._fragrancia = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Fragrancia: " + this._fragrancia)
    }

}