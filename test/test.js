let chai = require('chai');
const expect = require('chai').expect;

//usamos chaihttp para hacer peticiones a la API
chai.use(require('chai-http'));
const url= 'https://contagios-total.vercel.app/api';

it('1.1 api?ccaa=Andalucía (provincia que si existe)', (done) => {
    chai.request(url).get('?ccaa=Andalucia').end(function(err,res){

        expect(res.body).to.have.property('ccaa').to.equal("Andalucia");
        expect(res).to.have.status(200);
        done();
    })

});

it('1.1 api?ccaa=Andalucía (provincia que si existe)', (done) => {
    chai.request(url).get('?ccaa=Andalucia').end(function(err,res){

        expect(res.body).to.have.property('ccaa').to.equal("Andalucia");
        expect(res).to.have.status(200);
        done();
    })

});
