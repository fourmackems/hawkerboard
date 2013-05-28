HB = Backbone.Router.extend({
	initialize: function(){
		this.products = new Products;
	},

	routes: {
		"": "index",
	},

	index: function(){
		var index = new IndexView({el: '.main'});
		index.render()
	}
})