
function Get(yourUrl) {
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}


wiki_tag_contents = "./wiki.yna"
console.log(Get(wiki_tag_contents))
