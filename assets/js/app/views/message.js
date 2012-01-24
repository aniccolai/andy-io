//= require ../models/message

var MessageView = Backbone.View.extend({
	tagName: 'li',

	model: Message,

	initialize: function(){
		_.bindAll(this, 'render', 'unrender');
		this.model.bind('change', this.render);
	},

	render: function(){
		$(this.el).html('<div class="message">'+this.model.escape('text')+'</div>');
		return this;
	},

	unrender: function(){
		$(this.el).remove();
	},
});

