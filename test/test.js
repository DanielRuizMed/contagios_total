let chai = require('chai');
const expect = require('chai').expect;

//usamos chaihttp para hacer peticiones a la API
chai.use(require('chai-http'));
const url= 'https://contagios-total.vercel.app/api';

describe('Consultar número de contagios, posibles o curados ', () => {

    it('1.1 api?ccaa=Andalucía', (done) => {
        chai.request(url).get('/?ccaa=Andalucía').to.have.property('ccaa').to.be.equal("Andalucía");
    });

});
