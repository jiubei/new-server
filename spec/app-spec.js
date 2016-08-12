var app = require('../app');

var request = require("request");
var base_url = "http://localhost:7000/";
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

describe("Express Server", function() {
  describe("GET /", function() {
    it("return status code 200", function() {
      request.get( base_url,
        function(err, response, body) {
          expect( response.statusCode ).toBe(200);
          expect(body).toBe("Hello world with MVC Structure");
          done();
        });
      });
    });

    describe("GET /about", function() {
      it("return status code 200", function() {
        request.get( base_url,
          function(err, response, body) {
            expect( response.statusCode ).toBe(200);
            done();
          });
        });
      });

      describe("GET /contact", function() {
        it("return status code 200", function() {
          request.get( base_url,
            function(err, response, body) {
              expect( response.statusCode ).toBe(200);
              done();
            });
          });
        });

  });
