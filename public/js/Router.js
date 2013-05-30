Hawkerboard = Backbone.Router.extend({

	initialize: function() {
				this.items = new Items([
			{"title": "brown Shoes", "price": "55", "description": "Churchs premium brown Shoes", "image": "../images/fake2.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "black Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake3.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "blue Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake4.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "yellow Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake5.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "brown Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake6.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "tomboy Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake7.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "black Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake3.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "blue Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake4.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "yellow Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake5.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "brown Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake6.jpg",
								"tags": ["black", "ladies", "brogue"]},
								{"title": "tomboy Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake7.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "black Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake3.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "blue Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake4.jpg",
								"tags": ["black", "ladies", "brogue"]},
								{"title": "yellow Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake5.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "brown Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake6.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "tomboy Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake7.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "black Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake3.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "blue Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake4.jpg",
								"tags": ["black", "ladies", "brogue"]},
								{"title": "yellow Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake5.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "brown Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake6.jpg",
								"tags": ["brown", "mens", "brogue"]},
								{"title": "tomboy Shoes", "description": "Churchs premium brown Shoes", "image": "../images/fake7.jpg",
								"tags": ["brown", "mens", "brogue"]}
									]);

	},

	routes: {
		"": "index",
		"product/:the_cid": "productView",
		"additem": "addItem",
	},

	index: function(){
		var index = new IndexView({el: '#container', collection: this.items});
		index.render();
	},

	productView: function(the_cid){
		var productView = new ProductView({el: '#container'});
		productView.renderItem(this.items.get(the_cid));
	},

	addItem: function(){
		var addItemView = new AddItemView({el: '#container', collection: this.items});
		addItemView.render();
	}

})