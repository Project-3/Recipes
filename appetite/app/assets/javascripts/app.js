// namespacing for backbone; like a local storage
// since backbone isn't complied in order by Rails, we have to do the || so everything compiled will be stored and available for access globally
var Appetite = Appetite || {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// global variable for router
var userRouter;

// put in here as well, just in case; to use mustache template to avoid conflict with EJS
_.templateSettings = {
		 evaluate    : /\{\{([\s\S]+?)\}\}/g,
		 interpolate : /\{\{=([\s\S]+?)\}\}/g,
		 escape      : /\{\{-([\s\S]+?)\}\}/g
	};

// things to initalize to jumpstart backbone
Appetite.initialize = function() {
	userRouter = userRouter || new Appetite.Routers.UserRouter();
	Backbone.history.start({root: "/user/"});
};

// initializes once dom is loaded
$(document).ready(function(){
	Appetite.initialize();
});


