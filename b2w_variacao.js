class b2w_variacao {

    constructor(){
        this.variacoes = [];
    }


    addVariacao(sku, quantidade, ean, imagesArray, specifications){
        this.variacoes.push({
            "sku": sku,
            "qty": quantidade,
            "ean": ean,
            "images": imagesArray,
            "specifications": specifications
        });
    }

    retornaVariacoes(){
        return this.variacoes;
    }


}

module.exports = b2w_variacao;