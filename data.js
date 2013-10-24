var source = $("template").html();
var template = Handlebars.compile(source);
var data = {
	company : "My Projects",
	projects : [
		{ title : "Amaras site", description : "I worked on the styles creation and some section with Javascript"},
		{ title : "My site", description : "I worked on the styles creation and some section with Javascript"}
	]
};

$("#workLists").html(template(data));