var GameWall = IgeEntity.extend({
	classId: 'GameWall',

	init: function (container, x, y, texture, anchorX, anchorY) {
		var self = this;
		self._container = container;

		if(typeof anchorX == 'undefined') {
			anchorX = 18;
		}

		if(typeof anchorY == 'undefined') {
			anchorY = -66;
		}

		IgeEntity.prototype.init.call(this);

		self.isometric(true)
			.texture(texture)
			.dimensionsFromCell()
			.mount(self._container)
			.anchor(anchorX, anchorY)
			.translateToTile(x, y, 0);
	},

});