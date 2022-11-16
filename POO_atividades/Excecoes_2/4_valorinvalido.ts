import {AplicacaoError} from "./1_error"


export class ValorInvalidoError extends AplicacaoError{
    constructor(message:string){
        super(message);
    }
    
}