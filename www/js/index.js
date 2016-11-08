$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert(text);
	storeValue("whateverisentered", text);
}

function storeValue(key, value) {
	window.localStorage.setItem(key, value);
	//add some code to store the key-value pair in persistant storage 
}