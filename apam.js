var reffLink = "_clTtGQ";
var ProductId= getParameterByName("id");
var ProductQ= _shortQ();
var IsDP= window.location.hostname;
	
	if(ProductId != ''){
		//var uris= "https://s.click.aliexpress.com/deep_link.htm?dl_target_url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F-%2F"+ProductId+".html&aff_short_key="+reffLink+"&dp="+IsDP;
	} else {
		//var uris= "https://www.aliexpress.com/af/-.html?SearchText="+ProductQ+"&sk="+reffLink+"="+IsDP;
	}
	
window.open(uris, "_self");
	
function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function _shortQ() {
	var str= getParameterByName("q");
		if(str == ""){
			return "";
		}
	str = str.replace(/[^a-z0-9\s]+/gi, " ");
	str = str.trim();
	str = str.split(" ").splice(0,5).join(" ");
	return str.toLowerCase();
}


function _getSubName(){
	var subdomain= window.location.host;
	var parts= subdomain.split(".");
	return parts[0];
}




