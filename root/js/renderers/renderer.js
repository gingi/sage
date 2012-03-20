// renderer.js

if (!Iris) { var Iris = {}; }
Iris.Renderer = (function () {
    function createRenderer(spec, my) {
        var renderer = {};
        
        var divId;
        var div;

        if (spec.render != null && typeof spec.render == 'function') {
            renderer.render = spec.render;
        }
        renderer.div = function (aDivId) {
            divId = aDivId;
            div = document.getElementById(divId);
            return renderer;
        };
        
        renderer.divElement = function () {
            return div;
        }
        return renderer;
    }
    
    /* TODO: Singleton pattern also used by Iris.Widget. Extract pattern 
     * into iris.js? 
     */
    var RendererSingleton = {};
    RendererSingleton.create = function (spec) {
        if (!spec || !spec.about) {
            throw "'about' parameter is missing";
        }
        var setting;
        if (typeof spec.about == 'function') {
            setting = function (key) {
                return spec.about()[key];
            };
        } else if (typeof spec.about == 'object') {
            setting = function (key) {
                return spec.about[key];
            };
        } else {
            throw "about: Must be either a function or an associative array";
        }
        var rendererName = setting("name");
        if (!rendererName) {
            throw "Renderer name ('name') is a " +
                "required return parameter of 'about'";
        }
        var newRenderer = createRenderer(spec, {});

        if (RendererSingleton[spec.name]) {
            console.log(
                "Warning: Overwriting existing renderer [" +
                rendererName + "]!");
        }
        RendererSingleton[rendererName] = newRenderer;
        return newRenderer;
    };
    return RendererSingleton;
})();

Iris.Renderer.create(function () {
    function option (value, text, selected) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        if (selected) {
            opt.selected = true;
        }
        return opt;
    }
    return {
        about: { name: "DropDown" },
        render: function (list) {
            var select = document.createElement('select');
            var seen = {};
            for (var key in list) {
                var value = list[key];
                if (seen[key.name]) {
                    continue;
                }
                select.add(option(value.uri, value.name), null);
                seen[value.name] = 1;
            }
            select.add(option("custom", ""), null);
            this.divElement().appendChild(select);
        }
    }
}());