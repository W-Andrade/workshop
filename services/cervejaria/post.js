/*var Cervejaria = function(api) {
    this.api = apiManager.getApi('workshop');
};

Cervejaria.prototype.add = function(cervejaria) {
    var cer_add = this.api.dataAccess('cervejaria.add');
    var cer_nome = cervejaria.get('cer_nome');
    if (!cer_nome) {
        throw 'Campo cer_nome é obrigatório!';
    }
    cer_add.putAll(cervejaria);
    this.api.call(cer_add);
};

var cer = new Cervejaria();
cer.add(message);*/

var daoCer = mapperFactory.createMapper('workshop','cervejaria');
//var map = mapperFactory.createMap();
var map = new java.util.HashMap();
//var cer_nome = message.get('cer_nome');
//map.put('cer_nome',cer_nome);
var cer_id = daoCer.insert('add',map);
daoCer.close();
