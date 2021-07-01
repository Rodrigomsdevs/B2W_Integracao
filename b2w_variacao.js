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


    /*[
        {
            "sku": "F21",
            "qty": 10,
            "ean": "9876543210987",
            "images": [
                "http://d26lpennugtm8s.cloudfront.net/stores/154/284/products/camiseta-lisa-verde-bandeira-algodo-p-ao-gg-pronta-entrega-355901-mlb20431777049_092015-o-07fadec89e5ed54705c1b9ab5411dec8-1024-1024.jpg"
            ],
            "specifications": [
                {
                    "key": "Cor",
                    "value": "Verde"
                },
                {
                    "key": "Tamanho",
                    "value": "M"
                },
                {
                    "key": "price",
                    "value": "50.00"
                },
                {
                    "key": "promotional_price",
                    "value": "40.00"
                }
            ]
        }
    ]*/

}

module.exports = b2w_variacao;