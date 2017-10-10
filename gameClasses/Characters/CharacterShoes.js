var CharacterShoes = CharacterPart.extend({
	classId: 'CharacterShoes',

	init: function (container) {
		var self = this;
		self._part = 'sh';
		self._depthTemp = 2;
		self._style = container.data('shoe_style');
		self._container = container;

		//Make a copy of our texture and assign it
		self._ourTexture = ige.gameTexture.shoes[self._style];

		CharacterPart.prototype.init.call(this);

		self.setColor('green');
	},
});