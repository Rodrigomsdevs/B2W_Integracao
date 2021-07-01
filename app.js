const b2w = require('./b2w');
const variacao = require('./b2w_variacao');

var teste = new b2w();
var variacoes = new variacao();

teste.setName('Teste Integracao ' + Date.now());
teste.setSku(Date.now());
teste.setDescricao('Descricao top');
teste.setPreco('46');
teste.setPrecoPromocional('30');
teste.setCusto(30);
teste.setWidth(1);
teste.setWeight(1);
teste.setHeight(3);
teste.setLength(1);
teste.setBrand('Lala');
teste.setEan("");
teste.setNBM("");
teste.setQuantidade(5);
teste.setCategoria([
    {
        "code": "02",
        "name": "Teste NodeJS"
    },
    {
        "code": "03",
        "name": "GUcci Gang"
    }
]);
teste.setImages([
    "http://d26lpennugtm8s.cloudfront.net/stores/154/284/products/camiseta-lisa-verde-bandeira-algodo-p-ao-gg-pronta-entrega-355901-mlb20431777049_092015-o-07fadec89e5ed54705c1b9ab5411dec8-1024-1024.jpg",
    "https://aramismenswear.vtexassets.com/arquivos/ids/452188-500-auto?width=500&height=auto&aspect=true"
]);

teste.setEspec([
    {
        "key": "Tamanho",
        "value": "P"
    },
    {
        "key": "Cor",
        "value": "Branco"
    }
]);

//setar produto com variacao

variacoes.addVariacao("SKUV", 15, "", [
    "http://d26lpennugtm8s.cloudfront.net/stores/154/284/products/camiseta-lisa-verde-bandeira-algodo-p-ao-gg-pronta-entrega-355901-mlb20431777049_092015-o-07fadec89e5ed54705c1b9ab5411dec8-1024-1024.jpg"
], [
    {
        "key": "Tamanho",
        "value": "P"
    },
    {
        "key": "Cor",
        "value": "Azul"
    }
]);

variacoes.addVariacao("SKUP", 10, "", [
    "https://aramismenswear.vtexassets.com/arquivos/ids/452188-500-auto?width=500&height=auto&aspect=true"
], [
    {
        "key": "Tamanho",
        "value": "P"
    },
    {
        "key": "Cor",
        "value": "Rosa"
    }
]);

teste.setProdutoComVariacao(true);
teste.setVariavoes(variacoes.retornaVariacoes());

teste.enviarProduto();