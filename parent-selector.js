HTMLElement.prototype.parentSelector = function(selector) {

	let origo  = this;
	let parent = this.parentNode;
	
	while (parent) {
		let nodeFound = parent.querySelector(selector);
		
		// If node with provided selector is found, and it is not a child of the original node.
		if (nodeFound && !origo.contains(nodeFound)) {
			return nodeFound;
		}
		
		parent = parent.parentNode;
	}

}
