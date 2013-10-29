var supertest  = require("supertest");
var express    = require("express");
var util       = require("util");
var async      = require("async");

var Service    = require("../src/service").logLevel("fatal");
var Resource   = require("../src/resource");
var Collection = require("../src/collection");

function testMethod(method, done, expectBody) {
    var service = new Service();
    expectBody = expectBody || { result: "yay" };
    var send = function (req, res) {
        res.send(expectBody);
    };
    service[method]('/apath', send);
    supertest(service)[method]('/apath')
        .end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(200);
            res.body.should.eql(expectBody);
            done();
        });
}

describe("Service", function () {
    it("should allow inheritance", function () {
        var SpecificService = Service.extend({
            foo: function () {}
        });
        var service = new SpecificService();
        service.should.be.an.instanceOf(Service);
        service.foo.should.be.a.Function;
    });
    it("should support GET methods", function (done) {
        testMethod('get', done);
    });
    it("should support POST methods", function (done) {
        testMethod('post', done);
    });
    it("should support PUT methods", function (done) {
        testMethod('put', done);
    });
    it("should support HEAD methods", function (done) {
        testMethod('head', done, {});
    });
    it("should allow routes to be overloaded", function (done) {
        var service = new Service();
        service.get("/", function (req, res) {
            res.send("Yay overridden!");
        });
        supertest(service).get("/").end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(200);
            res.body.should.equal("Yay overridden!");
            done();
        });
    });
    describe("#constructor", function () {
        it("should allow user properties", function () {
            var service = new Service({ name: "namedService" });
            service.property("name").should.equal("namedService");
        });
        it("should allow properties to be defined a la carte", function () {
            var service = new Service();
            service.property("prop1", "propValue");
            service.property("prop1").should.equal("propValue");
        });
        it("should return all properties", function () {
            var service = new Service({ p1: "v1", p2: "v2" });
            service.properties().should.eql({ p1: "v1", p2: "v2" });
        });
        it("should accept a special initialize function", function () {
            initialized = false;
            var service = new Service({
                initialize: function () {
                    initialized = true;
                }
            });
            initialized.should.be.false;
            service.start({ port: 12345 });
            initialized.should.be.true;
            [service.property("initialize")].should.be.null;
            service.stop();
        });
    });
    it("should expose REST error classes", function () {
        Service.ResourceNotFoundError.should.be.a.Function;
        Service.RestError.should.be.a.Function;
        Service.BadDigestError.should.be.a.Function;
        Service.InternalError.should.be.a.Function;
    });
    it("should allow setting and retrieval of resources", function () {
        var service = new Service();
        var resource1 = new Resource();
        var resource2 = new Resource();
        service.resource("res1", resource1).should.be.ok;
        service.resource("res2", resource2).should.be.ok;
        service.resource("res1").should.eql(resource1);
        service.resource("res2").should.eql(resource2);
        service.resources().should.eql({
            res1: resource1,
            res2: resource2
        });
    });
});

describe("Service.start()", function () {
    var service = new Service();
    it("should fail with no argument", function () {
        (function () { service.start(); }).should.throw();
        (function () { service.start(7000); }).should.throw();
    });
    it("should 'listen' to a specified port", function (done) {
        var lService = new Service();
        lService.listen = function (port) {
            port.should.equal(7000);
            done();
        };
        lService.start({ port: 7000 }).should.be.ok;
        lService.stop();
    });
    it("should complain on already-started service", function () {
        service.start({ port: 7000 });
        (function () { service.start({ port: 7000 }); }).should.throw();
        service.stop();
    });
    it("should have a listening boolean function", function () {
        var lService = new Service();
        lService.listening.should.be.a.Function;
        lService.listening().should.be.false;
        lService.start({ port: 7003 });
        lService.listening().should.be.true;
        lService.stop();
        lService.listening().should.be.false;
    });
});

describe("Service.stop()", function () {
    var service = new Service();
    it("should fail on unstarted service", function () {
        (function () { service.stop(); }).should.throw();
    });
    it("should work when service started", function () {
        service.start({ port: 7000 });
        service.stop().should.be.ok;
    });
});

describe("Basic HTTP API", function () {
    var service = new Service();
    var request = supertest(service);
    it("should handle GET", function (done) {
        request.get('/').end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(200);
            res.body.should.be.null; // FIXME: Should return something
            done();
        });
    });
    it("should handle HEAD", function (done) {
        request.head('/').end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(200);
            done();
        });
    });
});

describe("Resource API", function () {
    var service = new Service();
    var request = supertest(service);
    service.listen(9876);
    var URL = "http://0.0.0.0:9876";
    var baseballSchema = {
        diameter: { type: "number" }
    };
    var Protein = Resource;
    var Baseball = Resource.extend(baseballSchema);
    it("should describe resources", function (done) {
        service.resource("protein", Protein);
        service.resource("baseball", Baseball);
        request.get("/").end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(200);
            res.body.should.eql({
                resources: {
                    "http://0.0.0.0:9876/protein": {},
                    "http://0.0.0.0:9876/baseball": baseballSchema
                }
            });
            done();
        });
    });
    it("should describe a single resource", function (done) {
        var expectedRoutes = {};
        expectedRoutes[URL + "/protein/list"] = "List all protein resources";
        request.get("/protein").end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(200);
            res.body.should.eql({
                routes: expectedRoutes,
                schema: {}
            });
            done();
        });
    });
    it("should include schema in resource description", function (done) {
        var expectedRoutes = {};
        expectedRoutes[URL + "/baseball/list"] = "List all baseball resources";
        request.get("/baseball").end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(200);
            res.body.should.eql({
                routes: expectedRoutes,
                schema: baseballSchema
            });
            done();
        });
    });
    it("should return 404 when no resource is found", function (done) {
        request.get("/notaresource").end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(404);
            res.body.should.eql({
                code: "ResourceNotFound",
                message: "Resource notaresource not found"
            });
            done();
        });
    });
    it("should return 404 on POST to nonexistent resource", function (done) {
        request.post("/notaresource").send({}).end(function (err, res) {
            res.status.should.equal(404);
            res.body.should.eql({
                code: "ResourceNotFound",
                message: "Cannot create an undefined resource"
            });
            done();
        });
    })
    it("should create resource via POST", function (done) {
        var baseball = { diameter: 2.9 /* inches */};
        request.post("/baseball").send(baseball).end(function (err, res) {
            [err].should.be.null;
            res.status.should.equal(200);
            res.body.id.should.equal(1);
            done();
        });
    });
    it("should show new resource in list", function (done) {
        request.post("/baseball").send({ diameter: 5.8 }).end(function () {
            request.get("/baseball/list").end(function (err, res) {
                [err].should.be.null;
                res.status.should.equal(200);
                res.body.should.eql([
                    { id: 1, url: URL + "/baseball/1" },
                    { id: 2, url: URL + "/baseball/2" }
                ]);
                done();
            });
        });
    });
    var app = express();
    var http = require("http");
    app.get("/cats", function (req, res) {
        res.send(200, [
            { id: "cat0001" },
            { id: "cat0002" },
            { id: "cat0003" },
            { id: "cat0004" },
            { id: "cat0005" }
        ]);
    });
    app.get("/cats/cat0001", function (req, res) {
        res.send(200, {
            name: "Felix",
            breed: "Persian",
            legs: 4
        });
    });
    var server = http.createServer(app).listen(56565);
    var LIST_URL = "http://0.0.0.0:56565";
    it("should fetch a list from a collection", function (done) {
        var Cats = Collection.extend({ url: LIST_URL + "/cats" });
        service.resource("cat", Cats);
        request.get("/cat/list").expect(200).end(function (err, res) {
            [err].should.be.null;
            res.body.should.eql([
                { id: "cat0001", url: URL + "/cat/cat0001" },
                { id: "cat0002", url: URL + "/cat/cat0002" },
                { id: "cat0003", url: URL + "/cat/cat0003" },
                { id: "cat0004", url: URL + "/cat/cat0004" },
                { id: "cat0005", url: URL + "/cat/cat0005" }
            ]);
            done();
        })
    });
    it("should fetch a collection only once", function (done) {
        var getCalled = 0;
        app.get("/delta", function (req, res) {
            getCalled++;
            res.send([]);
        });
        service.resource("rsrc", Collection.extend({
            url: LIST_URL + "/delta"
        }));
        request.get("/rsrc/list").expect(200).end(function () {
            getCalled.should.equal(1);
            request.get("/rsrc/list").expect(200).end(function () {
                getCalled.should.equal(1);
                done();
            });
        });
    });
    it("should fetch a single resource", function (done) {
        request.get("/cat/cat0001").expect(200).end(function (err, res) {
            [err].should.be.null;
            res.body.should.eql({
                id:   "cat0001",
                name: "Felix",
                breed: "Persian",
                legs: 4
            });
            done();
        });
    });
});

describe("Service.get", function () {
    var service = new Service();
    it("should allow a new route with parameters", function (done) {
        service.get("/resource/:id", function (req, res) {
            req.params.id.should.equal("9722");
            res.send("Yes! " + req.params.id);
        });
        supertest(service).get("/resource/9722").end(
            function (err, res) {
                res.body.should.eql("Yes! 9722");
                done();
            }
        );
    });
});