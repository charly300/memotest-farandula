'use strict';

function Player(name) {
	var self = this;

	self.name = name;
	self.points = 0;
	
	console.log('Estoy creando: ' + self.name);
}