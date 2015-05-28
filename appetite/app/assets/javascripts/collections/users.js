Appetite.Collections.Users = Backbone.Collection.extend({

  model: Appetite.Models.User,
  url: "/user"

});

var mainPage = new Appetite.Collections.Users();