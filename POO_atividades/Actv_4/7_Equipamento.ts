class Equipamento{
    ligado:boolean;
    constructor(ligado:boolean = false){
        this.ligado = ligado;
    }

    liga():void{
         this.ligado = true;
    }

    desliga():void{
         this.ligado = false;
    }
    inverte():void{
        this.ligado = !this.ligado;
    }

    equip_Ligado():boolean{
        return this.ligado;
    }
}


function equipamento(){
    let a: Equipamento = new Equipamento();
    console.log(a.equip_Ligado());
    a.liga()
    console.log(a.equip_Ligado());
    a.desliga()
    console.log(a.equip_Ligado());
    a.inverte()
    console.log(a.equip_Ligado());
}equipamento()
