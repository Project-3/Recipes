require "httparty"

options = {
 :headers => {
   "ACCEPT" => "application/json",
   "CONTENT-TYPE" => "application/json",
   "x-api-key" => "78861666c8ba"
   # :body => {
   #   chef_login: { 
   #     login: "",
   #     password: ""
   #   }
   } 
}
# note - apiToken is hidden in inner folder
response = HTTParty.get("http://www.weeatt.com/api/v1/recipes?qs=okra&auth_token="+apiToken, options)

response["results"].each do |key, value| 
	puts 
end

# api_id = response["results"][0]["id"]
# ingredients = response["results"][0]["ingredients"]
# instructions = response["results"][0]["instructions"]
# recipe_name = esponse["results"][0]["name"]
# image = response["results"][0]["image"]["large_image_path"]


