ItemView = Backbone.View.extend({
	className: '.item',

	render: function() {
		var source = $("#item-template").html();
		var template = Handlebars.compile(source);
		var context = this.model.toJSON();
		context['cid'] = this.model.cid;
		var html = template(context);
		this.$el.append(html);
		this.changeBackground();
	},

	changeBackground: function() {
		var image = this.model.get('image')|| "../images/fake.jpg";
		console.log(image);
		var background = $("#"+this.model.cid).css("background", "url("+image+") center center no-repeat");
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