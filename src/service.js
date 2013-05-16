/**
 * @ module service
 *
 * The base service, providing all service functionality
 * Includes the Service API
 */

var util    = require('util');
var restify = require('restify');
var Q       = require('q');

function Service() {
    this.restify = restify.createServer();
    this.restify.get('/',  function (req, res, next) {
        res.end();
    });
    this.restify.head('/', function (req, res, next) {
        res.end();
    });
}

Service.extend = function (args) {
    var Extended = function () {
        for (var prop in args) {
            this[prop] = args[prop];
        }
    };
    util.inherits(Extended, Service);
    return Extended;
};

Service.prototype.start = function (params) {
    params = params || {};
    if (params.port === undefined) {
        throw new Error("port is a required parameter");
    }
    if (this.restify.address() !== null) {
        throw new Error("service already running at " + this.restify.address());
    }
    var deferred = Q.defer();
    this.restify.listen(params.port, function () {
        deferred.resolve(true);
    });
    this.startedPromise = deferred.promise;
    return this;
};

Service.prototype.stop = function () {
    var self = this;
    if (this.startedPromise === null) {
        throw new Error("service has not started");
    }
    this.startedPromise.done(function () {
        self.restify.close();
        this.started = undefined;
    });
    return this;
};

Service.prototype.server = function () {
    return this.restify;
};

Service.prototype.get = function () {
    this.restify.get.apply(this.restify, arguments);
    return this;
};

Service.prototype.head = function () {
    this.restify.head.apply(this.restify, arguments);
    return this;
};

Service.prototype.post = function () {
    this.restify.post.apply(this.restify, arguments);
    return this;
};

Service.prototype.put = function () {
    this.restify.put.apply(this.restify, arguments);
    return this;
};

module.exports = Service;