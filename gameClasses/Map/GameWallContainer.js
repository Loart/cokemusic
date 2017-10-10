var GameWallContainer = IgeTileMap2d.extend({
	classId: 'GameWallTexture',

	setColor: function(colorSelection) {
		//Since all the GameWall objects are using the same texture we
		//need to just get the first child and modify it's texture
		//and that change will reflect on all of them.

		var children = this.children();
		if(children.length <= 0) {
			return;
		}

		console.log(children);

		//TODO: check if children[0] is actually set
		children[0]._texture.applyFilter(IgeFilters.multiply, {color: colorSelection});
	}
});