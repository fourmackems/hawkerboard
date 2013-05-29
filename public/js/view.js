ItemView = Backbone.View.extend({
	events: {
    'click #viewItem': 'viewItem'
  },

	className: '.item',

	render: function() {
		var source = $("#item-template").html();
		var template = Handlebars.compile(source);
		var context = this.model.toJSON();
		context['cid'] = this.model.cid;
		var html = template(context);
		this.$el.append(html);
		this.changeBackground();
		this.vintageIt();
	},

	changeBackground: function() {
		var image = this.model.get('image')|| "../images/fake.jpg";
		var background = $("#"+this.model.cid).css("background", "url("+image+") center center no-repeat");
	},

	vintageIt: function() {
		 var options = {
     };
     var effect = {
        vignette: 0.4,
        sepia: true
     };
     $('#'+this.model.cid+" header img").vintage(options, effect);
	}
});

ItemCardView = Backbone.View.extend({
	render: function() {
		var source = $("#product-template").html();
		this.$el.append(source);
	}
});



IndexView = Backbone.View.extend({
	render: function() {
		this.collection.forEach(this.renderItem);
	},

	renderItem: function(item) {
		var itemView = new ItemView({el: "#container", model: item});
		itemView.render();
	}
});




ProductView = Backbone.View.extend({
	render: function() {
		this.collection.forEach(this.renderItem);
	},

	renderItem: function(item) {
		var itemCardView = new ItemCardView({el: "#container", model: item});
		itemCardView.render();
	}

	viewItem: function() {

	}

})