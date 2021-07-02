const request = require('request');
const config = require('./b2w_config');

class b2w_produtos {

    constructor() {

    }

    setProduto(Produtos){
        this.Produtos = Produtos;
    }

    getProdutos() {
        var urlApi = `https://api.skyhub.com.br/products${(this.Produtos > 0 ? '/' + this.Produtos : '')}`;
        request({
            url: urlApi,
            method: 'GET',
            headers: config.preparaHeaders(),
            json: true,
        }, function (error, response, body) {
            if (response.statusCode == 201 || response.statusCode == 200 || response.statusCode == 204) {
                console.log(body);
            } else {
                console.log('Error => ' + JSON.stringify(body));
            }
        });

    }

}

module.exports = b2w_produtos;