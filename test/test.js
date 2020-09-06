'use strict;';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();
describe('Signup API', () => {

    describe('Url Validation', () => {
        // empty url  - failure test case
        it('it should not get successful response without valid url', (done) => {
        const params = {
            url: ''
        };
        chai
            .request(app)
            .post('/get-meta-data')
            .send(params)
            .end((err, res) => {
            res.should.have.status(404); // invalid inputs
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql('failure');
            // console.log("test-msg::", res.body.errorDescription);
            // res.body.should.have.property('errorDescription').eql("name/email/password can't be null");
            done();
            });
        });
    });

    describe('Get Success Response', () => {
        // empty url  - failure test case
        it('it should  get successful response with valid url', (done) => {
        const params = {
            url: 'https://ogp.me'
        };
        chai
            .request(app)
            .post('/get-meta-data')
            .send(params)
            .end((err, res) => {
            res.should.have.status(200); // invalid inputs
            res.body.should.be.a('object');
            //res.body.should.have.property('status').eql('failure');
            // console.log("test-msg::", res.body.errorDescription);
            // res.body.should.have.property('errorDescription').eql("name/email/password can't be null");
            done();
            });
        });
    });
});