var CharacterPants = CharacterPart.extend({
	classId: 'CharacterPants',

	init: function (container) {
		var self = this;
		self._part = 'lg';
		self._depthTemp = 2;
		self._style = container.data('pant_style');
		self._container = container;

		//Make a copy of our texture and assign it
		self._ourTexture = ige.gameTexture.pants[self._style];

		CharacterPart.prototype.init.call(this);

		self.setColor('#A81313');
	},
});