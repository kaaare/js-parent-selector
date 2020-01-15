HTMLElement.prototype.parentSelector = function(selector) {
	let parent = this.parentNode;
	while (parent) {
		let nodeFound = parent.querySelector(selector);
		if (nodeFound) {
			return nodeFound;
		}
		parent = parent.parentNode;
	}
}
