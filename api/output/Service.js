Ext.data.JsonP.Service({"meta":{},"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Registry' rel='Registry' class='docClass'>Registry</a></div><h4>Files</h4><div class='dependency'><a href='source/service.html#Service' target='_blank'>service.js</a></div></pre><div class='doc-contents'><p>The base service, providing all service functionality\nIncludes the Service API.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Service-method-constructor' class='name expandable'>Service</a>( <span class='pre'>properties</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>properties</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>A set of properties. These properties will be\n                used to describe the service within the <a href=\"#!/api/Registry\" rel=\"Registry\" class=\"docClass\">Registry</a>.\n                The constructor has some specially-handled properties:</p>\n<ul><li><span class='pre'>initialize</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>A function called when a service is started</p>\n</div></li><li><span class='pre'>registry</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The address of a remote registry</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-address' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-address' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-address' class='name expandable'>address</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets URL address info about the service ...</div><div class='long'><p>Gets URL address info about the service</p>\n</div></div></div><div id='method-client' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-client' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-client' class='name expandable'>client</a>( <span class='pre'>[url]</span> ) : <a href=\"#!/api/Client\" rel=\"Client\" class=\"docClass\">Client</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an HTTP client. ...</div><div class='long'><p>Returns an HTTP client.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The address of the remote service\n    (defaults to <a href=\"#!/api/Service-method-url\" rel=\"Service-method-url\" class=\"docClass\">Service.url</a>()).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Client\" rel=\"Client\" class=\"docClass\">Client</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-emit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [data]</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Emits an event with some data. ...</div><div class='long'><p>Emits an event with some data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event to listen to</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The data to emit</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-get' class='name expandable'>get</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines HTTP GET ...</div><div class='long'><p>Defines HTTP GET</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/ClientRequest\" rel=\"ClientRequest\" class=\"docClass\">ClientRequest</a><div class='sub-desc'><p>The server request</p>\n</div></li><li><span class='pre'>response</span> : <a href=\"#!/api/ServerResponse\" rel=\"ServerResponse\" class=\"docClass\">ServerResponse</a><div class='sub-desc'><p>The server response</p>\n</div></li><li><span class='pre'>next</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The next callback</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-head' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-head' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-head' class='name expandable'>head</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines HTTP HEAD ...</div><div class='long'><p>Defines HTTP HEAD</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/ClientRequest\" rel=\"ClientRequest\" class=\"docClass\">ClientRequest</a><div class='sub-desc'><p>The server request</p>\n</div></li><li><span class='pre'>response</span> : <a href=\"#!/api/ServerResponse\" rel=\"ServerResponse\" class=\"docClass\">ServerResponse</a><div class='sub-desc'><p>The server response</p>\n</div></li><li><span class='pre'>next</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The next callback</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>A virtual method called when the service is started. ...</div><div class='long'><p>A virtual method called when the service is started.</p>\n</div></div></div><div id='method-listen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-listen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-listen' class='name expandable'>listen</a>( <span class='pre'>port, callback</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Listens to a given port. ...</div><div class='long'><p>Listens to a given port. Same effect as <a href=\"#!/api/Service-method-start\" rel=\"Service-method-start\" class=\"docClass\">start</a>, used for\ncompatibility with Connect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>port</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-listening' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-listening' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-listening' class='name expandable'>listening</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the service is currently running. ...</div><div class='long'><p>Whether the service is currently running.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>Is the service running?</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-off' class='name expandable'>off</a>( <span class='pre'>event, callback</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Removes a listener for the specified event. ...</div><div class='long'><p>Removes a listener for the specified event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The event callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-on' class='name expandable'>on</a>( <span class='pre'>event, callback</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Adds a listener for the specified event. ...</div><div class='long'><p>Adds a listener for the specified event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event to listen to</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The event callback</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The data emitted with the event</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-post' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-post' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-post' class='name expandable'>post</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines HTTP POST ...</div><div class='long'><p>Defines HTTP POST</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/ClientRequest\" rel=\"ClientRequest\" class=\"docClass\">ClientRequest</a><div class='sub-desc'><p>The server request</p>\n</div></li><li><span class='pre'>response</span> : <a href=\"#!/api/ServerResponse\" rel=\"ServerResponse\" class=\"docClass\">ServerResponse</a><div class='sub-desc'><p>The server response</p>\n</div></li><li><span class='pre'>next</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The next callback</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-properties' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-properties' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-properties' class='name expandable'>properties</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the set of service properties. ...</div><div class='long'><p>Gets the set of service properties.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The set of properties</p>\n</div></li></ul></div></div></div><div id='method-property' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-property' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-property' class='name expandable'>property</a>( <span class='pre'>name, [value]</span> ) : Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets or sets a property ...</div><div class='long'><p>Gets or sets a property</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the property</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The value of the property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The value of the property</p>\n</div></li></ul></div></div></div><div id='method-put' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-put' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-put' class='name expandable'>put</a>( <span class='pre'>path, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Defines HTTP PUT ...</div><div class='long'><p>Defines HTTP PUT</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/ClientRequest\" rel=\"ClientRequest\" class=\"docClass\">ClientRequest</a><div class='sub-desc'><p>The server request</p>\n</div></li><li><span class='pre'>response</span> : <a href=\"#!/api/ServerResponse\" rel=\"ServerResponse\" class=\"docClass\">ServerResponse</a><div class='sub-desc'><p>The server response</p>\n</div></li><li><span class='pre'>next</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The next callback</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-registryURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-registryURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-registryURL' class='name expandable'>registryURL</a>( <span class='pre'>address</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the address of a remote registry. ...</div><div class='long'><p>Sets the address of a remote registry.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>address</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The remote URL</p>\n</div></li></ul></div></div></div><div id='method-resource' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-resource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-resource' class='name expandable'>resource</a>( <span class='pre'>name, [resource]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets or sets a resource for this service. ...</div><div class='long'><p>Gets or sets a resource for this service.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the resource</p>\n</div></li><li><span class='pre'>resource</span> : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a> (optional)<div class='sub-desc'><p>The resource to set</p>\n</div></li></ul></div></div></div><div id='method-resources' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-resources' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-resources' class='name expandable'>resources</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the set of resources for this service. ...</div><div class='long'><p>Gets the set of resources for this service.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The set of resources</p>\n<ul><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The key of the resource</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/Resource\" rel=\"Resource\" class=\"docClass\">Resource</a><div class='sub-desc'><p>The resource itself</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-start' class='name expandable'>start</a>( <span class='pre'>params</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Starts the service. ...</div><div class='long'><p>Starts the service.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Start parameters</p>\n<ul><li><span class='pre'>port</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The port on which to start the service</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the service. ...</div><div class='long'><p>Stops the service.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-method-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-method-url' class='name expandable'>url</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the URL for the running service. ...</div><div class='long'><p>Gets the URL for the running service.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-ensureDefaultRoutes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-static-method-ensureDefaultRoutes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-static-method-ensureDefaultRoutes' class='name expandable'>ensureDefaultRoutes</a>( <span class='pre'>service</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Implements HTTP routes if they aren't already defined. ...</div><div class='long'><p>Implements HTTP routes if they aren't already defined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>service</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>args</span> ) : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Extends the service. ...</div><div class='long'><p>Extends the service.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Arguments with which to extend</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a></span><div class='sub-desc'><p>An extended service</p>\n</div></li></ul></div></div></div><div id='static-method-fetchCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-static-method-fetchCollection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-static-method-fetchCollection' class='name expandable'>fetchCollection</a>( <span class='pre'>service, key, callback</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Fetch a collection from a remote endpoint. ...</div><div class='long'><p>Fetch a collection from a remote endpoint.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>service</span> : <a href=\"#!/api/Service\" rel=\"Service\" class=\"docClass\">Service</a><div class='sub-desc'><p>The service</p>\n</div></li><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The resource key</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function called when the collection\n                           is fetched</p>\n</div></li></ul></div></div></div><div id='static-method-logLevel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Service'>Service</span><br/><a href='source/service.html#Service-static-method-logLevel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Service-static-method-logLevel' class='name expandable'>logLevel</a>( <span class='pre'>level</span> )<span class=\"signature\"><span class='chainable' >chainable</span><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Sets the service log-level. ...</div><div class='long'><p>Sets the service log-level. Used for logging.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>level</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","component":false,"alternateClassNames":[],"autodetected":{},"aliases":{},"mixedInto":[],"parentMixins":[],"superclasses":[],"members":[{"meta":{},"owner":"Service","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"Service","name":"address","id":"method-address","tagname":"method"},{"meta":{},"owner":"Service","name":"client","id":"method-client","tagname":"method"},{"meta":{"chainable":true},"owner":"Service","name":"emit","id":"method-emit","tagname":"method"},{"meta":{},"owner":"Service","name":"get","id":"method-get","tagname":"method"},{"meta":{},"owner":"Service","name":"head","id":"method-head","tagname":"method"},{"meta":{},"owner":"Service","name":"initialize","id":"method-initialize","tagname":"method"},{"meta":{"chainable":true},"owner":"Service","name":"listen","id":"method-listen","tagname":"method"},{"meta":{},"owner":"Service","name":"listening","id":"method-listening","tagname":"method"},{"meta":{"chainable":true},"owner":"Service","name":"off","id":"method-off","tagname":"method"},{"meta":{"chainable":true},"owner":"Service","name":"on","id":"method-on","tagname":"method"},{"meta":{},"owner":"Service","name":"post","id":"method-post","tagname":"method"},{"meta":{},"owner":"Service","name":"properties","id":"method-properties","tagname":"method"},{"meta":{},"owner":"Service","name":"property","id":"method-property","tagname":"method"},{"meta":{},"owner":"Service","name":"put","id":"method-put","tagname":"method"},{"meta":{},"owner":"Service","name":"registryURL","id":"method-registryURL","tagname":"method"},{"meta":{},"owner":"Service","name":"resource","id":"method-resource","tagname":"method"},{"meta":{},"owner":"Service","name":"resources","id":"method-resources","tagname":"method"},{"meta":{"chainable":true},"owner":"Service","name":"start","id":"method-start","tagname":"method"},{"meta":{},"owner":"Service","name":"stop","id":"method-stop","tagname":"method"},{"meta":{},"owner":"Service","name":"url","id":"method-url","tagname":"method"},{"meta":{"static":true,"private":true},"owner":"Service","name":"ensureDefaultRoutes","id":"static-method-ensureDefaultRoutes","tagname":"method"},{"meta":{"static":true},"owner":"Service","name":"extend","id":"static-method-extend","tagname":"method"},{"meta":{"static":true,"private":true},"owner":"Service","name":"fetchCollection","id":"static-method-fetchCollection","tagname":"method"},{"meta":{"static":true,"private":true,"chainable":true},"owner":"Service","name":"logLevel","id":"static-method-logLevel","tagname":"method"}],"mixins":[],"subclasses":["Registry"],"name":"Service","requires":[],"id":"class-Service","tagname":"class","files":[{"href":"service.html#Service","filename":"service.js"}]});