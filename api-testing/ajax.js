// note - apiToken is hidden in inner folder
$.ajax({
    url: "http://www.weeatt.com/api/v1/recipes?qs=chicken&auth_token="+apiToken,
    headers: {
    	"ACCEPT": "application/json",
    	"CONTENT-TYPE": "application/json"
    	"x-api-key": "78861666c8ba"
    }
});