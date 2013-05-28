ProductsView = Backbone.View.extend({

	render: function() {
	  var products = this.model.get('products')

      var source = $('#products_template').html();
	  var template = Handlebars.compile(source);
	  this.$el.html(template);

	  this.listenTo(products, 'sync'. this.renderProducts);
	  products.fetch();
	},

	renderProducts: function(){
		this.model.get('products').forEach
	}
});