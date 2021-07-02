const config = require('./b2w_config');
const request = require('request');
class b2w_pedidos {
    constructor() {

    }

    criarPedidoTeste() {
        request({
            url: 'https://api.skyhub.com.br/orders',
            method: 'POST',
            headers: config.preparaHeaders(),
            json: true,
            body: {
                "order": {
                    "channel": "Marketplace",
                    "items": [
                        {
                            "id": "10200487",
                            "qty": 1,
                            "original_price": 8.45,
                            "special_price": 8.45
                        }
                    ],
                    "customer": {
                        "name": "Nome do comprador",
                        "email": "comprador@exemplo.com.br",
                        "date_of_birth": "1995-01-01",
                        "gender": "male",
                        "vat_number": "12312312309",
                        "phones": [
                            "8899999999"
                        ]
                    },
                    "billing_address": {
                        "street": "Rua de teste",
                        "number": 1234,
                        "detail": "Ponto de referência teste",
                        "neighborhood": "Bairro teste",
                        "city": "Cidade de teste",
                        "region": "UF",
                        "country": "BR",
                        "postcode": "90000000"
                    },
                    "shipping_address": {
                        "street": "Rua de teste",
                        "number": 1234,
                        "detail": "Ponto de referência teste",
                        "neighborhood": "Bairro teste",
                        "city": "Cidade de teste",
                        "region": "UF",
                        "country": "BR",
                        "postcode": "90000000"
                    },
                    "shipping_method": "Transportadora",
                    "estimated_delivery": "2015-01-10",
                    "shipping_calculation_type": "Método do Cálculo",
                    "shipping_cost": 5,
                    "interest": 0,
                    "discount": 0
                }
            }
        }, function (error, response, body) {
            if (response.statusCode == 201 || response.statusCode == 200 || response.statusCode == 204) {
                console.log(body);
            } else {
                console.log('Error => ' + JSON.stringify(body));
            }
        });
    }


}

module.exports = b2w_pedidos;