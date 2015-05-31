var Appetite = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

var userRouter;

_.templateSettings = {
		 evaluate    : /\{\{([\s\S]+?)\}\}/g,
		 interpolate : /\{\{=([\s\S]+?)\}\}/g,
		 escape      : /\{\{-([\s\S]+?)\}\}/g
	};

Appetite.initialize = function() {
	userRouter = userRouter || new Appetite.Routers.UserRouter();
	Backbone.history.start({root: "/user/"});
};

$(document).ready(function(){
	Appetite.initialize();
});


