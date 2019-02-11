const chai = require('chai');
const chaiHttp = require('chai-http');
const Should = chai.should();

const server = require('../app');

chai.use(chaiHttp);

let token;

describe('/api/movies test', () => {
    before((done) => {
        chai.request(server)
            .post('/authenticate')
            .send({ username: 'merterdoogan', password: 'mert5454*' })
            .end((err, res) => {
                token = res.body.token;
                done();
            })
    });
    describe('/GET Movies', () => {
        it('it should get all the movies', (done) => {
            chai.request(server)
                .get('/api/movies')
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        })
    })
});