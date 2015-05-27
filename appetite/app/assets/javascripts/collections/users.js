Appetite.Collections.Users = Backbone.Collection.extend({

  model: Appetite.Models.User,
  url: "/user"

});

mainPage = new Appetite.Collections.Users();