let chai = require('chai');
const expect = require('chai').expect;

//usamos chaihttp para hacer peticiones a la API
chai.use(require('chai-http'));
const url= 'https://contagios-total.vercel.app/api';

var result;
//console.log(chai.request(url).get('?ccaa=Andalucía').end());

describe('Consultar número de contagios, posibles o curados ', () => {

    it('1.1 api?ccaa=Andalucía', (done) => {
        chai.request(url).get('?ccaa=Andalucia').end(function(err,res){

            expect(res.body).to.have.property('ccaa').to.equal("Andalucia");
            expect(res).to.have.status(200);
            done();
        })
        
        console.log(result)
       // .to.have.property('ccaa').to.be.equal("Andalucía");
    });

});
