var CharacterBody = CharacterPart.extend({
	classId: 'CharacterBody',

	init: function (container) {
		var self = this;
		self._part = 'bd';
		self._depthTemp = 0;
		self._style = container.data('style');
		self._container = container;

		//Make a copy of our texture and assign it
		self._ourTexture = ige.gameTexture.body[self._style];

		CharacterPart.prototype.init.call(this);
	},
});