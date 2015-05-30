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

$(document).ajaxSend(function(e, xhr, options) {
  var token = $("meta[name='csrf-token']").attr("content");
  xhr.setRequestHeader("X-CSRF-Token", token);
  console.log(token)
});

