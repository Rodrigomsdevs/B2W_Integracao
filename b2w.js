const request = require('request');

class b2w {

    constructor() {
        this.sku = "";
        this.nome = "";
        this.descricao = "";
        this.qty = 0;
        this.precoTotal = 0;
        this.precoPromo = 0;
        this.custo = 0;
        this.weight = 0;
        this.height = 0;
        this.width = 0;
        this.length = 1;
        this.brand = "";
        this.ean = "";
        this.nbm = "";
        this.categories = [];
        this.images = [""];
        this.setEspecificacoes = [{ "key": "", "value": "" }];
    }

    setName(nome) {
        this.nome = nome;
    }

    setSku(sku) {
        this.sku = sku;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
    }

    setPreco(precoTotal) {
        this.precoTotal = precoTotal;
    }

    setPrecoPromocional(precoPromo) {
        this.precoPromo = precoPromo;
    }

    setCusto(custo) {
        this.custo = custo;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    setHeight(height) {
        this.height = height;
    }

    setLength(length) {
        this.length = length;
    }

    setWidth(width) {
        this.width = width;
    }

    setBrand(brand) {
        this.brand = brand;
    }

    setEan(ean) {
        this.ean = ean;
    }

    setNBM(nbm) {
        this.nbm = nbm;
    }

    setCategoria(categoriaArray) {
        this.categoriaArray = categoriaArray;
    }

    setQuantidade(qty) {
        this.qty = qty;
    }

    setImages(imagesArray) {
        this.images = imagesArray;
    }

    setEspec(especificacoes) {
        this.especificacoes = especificacoes;
    }

    setProdutoComVariacao(variacao) {
        this.variacao = variacao;
    }

    setVariavoes(variacaoJson) {
        this.variacaoJson = variacaoJson;
    }

    preparaArrayProduto() {
        return {
            "product": {
                "sku": this.sku,
                "name": this.nome,
                "description": this.descricao,
                "status": "enabled",
                "qty": this.qty,
                "price": this.precoTotal,
                "promotional_price": this.precoPromo,
                "cost": this.custo,
                "weight": this.weight,
                "height": this.height,
                "width": this.width,
                "length": this.length,
                "brand": "" + this.brand,
                "ean": "" + this.ean,
                "nbm": "" + this.nbm,
                "categories": this.categoriaArray,
                "images": this.images,
                "specifications": this.especificacoes,
                "variations": this.variacaoJson,

            }
        };
    }


    preparaHeaders() {
        return {
            "X-User-Email": "wesley.r.souza@live.com",
            "x-Api-Key": "HAFrjAeXVC38syimGHHq",
            "x-accountmanager-key": "xampsom",
            "Accept": "application/json;charset=UTF-8",
            "Content-Type": "application/json",
        };
    }

    enviarProduto() {
        request({
            url: "https://api.skyhub.com.br/products",
            method: "POST",
            headers: this.preparaHeaders(),
            json: true,
            body: this.preparaArrayProduto()
        }, function (error, response, body) {
            if (response.statusCode == 201 || response.statusCode == 200 || response.statusCode == 204) {
                console.log('Produto adicionado com sucesso!');
            } else {
                console.log('Error => ' + JSON.stringify(body));
            }
        });
    }


}

module.exports = b2w;