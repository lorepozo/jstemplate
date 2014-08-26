/* JSTemplate | Lucas Morales | github.com/lukedmor/jstemplate */
Element.prototype.moustache = function(o){
	return this.innerHTML = new Function('o','var t=[];with(o){t.push("' +
		this.innerHTML
			.replace(/\s+/g,' ')
			.replace(/"/,'\\"')
			.replace(/{{[^\!](.*?)}}/g,'",$1,"')
			.split("{{!").join('");')
			.split("}}").join('t.push("')
			+ '")}return t.join("");')(o||{});
};