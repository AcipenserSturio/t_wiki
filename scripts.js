
function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function get_random_link() {
  return "https://en.wikipedia.org/wiki/" + links[Math.floor(Math.random() * links.length)];
}

function go() {
  window.location = get_random_link();
}

wiki_tag = "./wiki.yna";
links = Get(wiki_tag).replace("​{choose:https:;}//en.wikipedia.org/wiki/{choose:", "").replace('{!!extend end pre=";" post="" public=true};}', "").split(";");
console.log(links);
