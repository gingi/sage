var Collection = require("../src/collection");
var Resource   = require("../src/resource");

describe("Collection", function () {
    var collection = new Collection();
    var resource   = new Resource();
    it("should be itself a Resource", function () {
        collection.should.be.instanceof(Resource);
        collection.schema.should.be.a.Function;
    });
    it("should have chainable methods", function () {
        collection.add(new Resource()).should.equal(collection);
    });
    it("should allow adding and counting of elements", function () {
        collection.add(resource);
        collection.add(new Resource());
        collection.size().should.equal(3);
    });
    it("should allow retrieval of resources", function () {
        collection.get(0).should.eql(new Resource());
    });
    it("should allow removal of objects", function () {
        var removed = collection.remove(resource);
        collection.size().should.equal(2);
    });
    it("should act like an Array", function () {
        collection.length.should.equal(2);
        collection[0].should.eql(resource);
    });
    it("should throw when trying to remove non-member", function () {
        (function () { collection.remove(new Resource()); }).should.throw();
    });
    it("should accept a resource as an extend parameter", function () {
        var Beer = Resource.extend({ ounces: { type: "number" }});
        var Beers = Collection.extend({ resource: Beer });
        var beers = new Beers();
        beers.add(new Beer()).should.be.ok;
        beers.length.should.equal(1);
        (function () { beers.add(new Resource()); }).should.throw();
    });
    it("should accept a resource as a constructor argument", function () {
        var Color = Resource.extend({ name: { type: "string" } });
        var collection = new Collection({ resource: Color });
        collection.add(new Color()).should.be.ok;
        collection.length.should.equal(1);
        (function () { collection.add(new Resource()); }).should.throw();
    });
    it("should allow adding plain-old objects as resources", function () {
        var Color = Resource.extend({ name: { type: "string" } });
        var collection = new Collection({ resource: Color });
        collection.add({ name: "blue" }).should.be.ok;
        collection.length.should.equal(1);
    });
    it("should set and get properties", function () {
        collection.property("foo", "bar").should.be.ok;
        collection.property("foo").should.equal("bar");
    });
    it("should return the resource model's schema", function () {
        var Movie = Resource.extend({ title: { type: "string" }});
        var Movies = Collection.extend({ resource: Movie });
        var movies = new Movies();
        Movies.schema().should.eql({ title: { type: "string" } });
        movies.schema().should.eql({ title: { type: "string" } });
    });
    it("should still support collection properties", function () {
        var Movie = Resource.extend({ title: { type: "string" }});
        var Movies = Collection.extend({ resource: Movie });
        var movies = new Movies();
        movies.property("title", 6).should.be.ok;
    });
    describe("#fetch", function () {
        var app  = require("express")();
        var http = require("http");
        app.get("/cats", function (req, res) {
            res.send(200, [
                { id: "cat0001", name: "Felix"    },
                { id: "cat0053", name: "Garfield" },
            ]);
        });
        var server = http.createServer(app).listen(55555);
        var CAT_URL = "http://0.0.0.0:55555/cats";
        it("should fetch a collection by URL", function (done) {
            var Cats = Collection.extend({ url: CAT_URL });
            var cats = new Cats();
            cats.fetch().done(function () {
                this.length.should.equal(2);
                var cat1 = this.get(0);
                var cat2 = this.get(1);
                cat1.property("name").should.equal("Felix");
                cat2.property("name").should.equal("Garfield");
                done();
            })
        });
        it("should fetch on typed Resources", function (done) {
            var Cat = Resource.extend({ hairball: { type: "string" }});
            var Cats = Collection.extend({
                url: CAT_URL
            });
            var cats = new Cats({ resource: Cat });
            cats.fetch().done(function () {
                this.size().should.equal(2);
                done();
            });
        });
        it("should continue parsing when 'parse:' is defined", function (done) {
            var parseOverridden = false;
            var Cats = Collection.extend({
                url: CAT_URL,
                parse: function (data) {
                    parseOverridden = true;
                    data.forEach(function (datum) {
                        datum.name = datum.name + " the Cat";
                    });
                    return data;
                }
            });
            var cats = new Cats();
            cats.fetch().done(function () {
                this.size().should.equal(2);
                this.get(0).property("name").should.equal("Felix the Cat");
                this.get(1).property("name").should.equal("Garfield the Cat");
                parseOverridden.should.be.true;
                done();
            });
        });
        it("should not parse when no data is returned", function (done) {
            var parseOverridden = false;
            var Cats = Collection.extend({
                url: CAT_URL,
                parse: function (data) { parseOverridden = true; return null; }
            });
            var cats = new Cats();
            cats.fetch().done(function () {
                this.size().should.equal(0);
                parseOverridden.should.be.true;
                done();
            }).fail(function (e) {
                console.log(e);
            });
        });
        it("should fail when trying to parse non-array", function (done) {
            var Cats = Collection.extend({
                url: CAT_URL,
                parse: function (data) { return { cats: data } }
            });
            var cats = new Cats();
            cats.fetch().fail(function (err) {
                err.should.be.instanceof(TypeError);
                done();
            });
        });
        after(function (done) {
            server.close();
            done();
        });
    });
});
