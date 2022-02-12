//find the type of the search later
const input=prompt("What do you want to watch today ?");
var descrip=document.querySelector(".description");
descrip.innerHTML="you are watching "+input;
//grap data from GIFY connect it with the index 
function getInput(item){
	var query=item.split(' ').join('+');
	var url="https://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h";
// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){
var data=e.target.response;
pushToDOM(data);
});
}
// pushtodom function shows the gifs inside the box
function pushToDOM(input){
	 var response=JSON.parse(input);
	 var container=document.querySelector(".main");
     clear(container);
	 var imagesUrls=response.data;
     imagesUrls.forEach((image)=>{
     setInterval(()=>{
     var src=image.images.fixed_height.url;
     container.innerHTML="<img src="+src+">"},1500);
 });
 }


// clear functions clears the box 
function clear(item){
	item.innerHTML="";
}
//change the content of the box 
getInput(input);