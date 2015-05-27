require "httparty"

options = {
  :headers => {
    "ACCEPT" => "application/json",
    "CONTENT-TYPE" => "application/json",
    "x-api-key" => "78861666c8ba"
    # :body => {
    #   chef_login: { 
    #     login: "sunsheeppoplar",
    #     password: "chipotleswrath"
    #   }
    } # This is what you’re missing
}
# response = HTTParty.post("http://www.weeatt.com/api/v1/chefs/sign_in", options)

# puts response

response = HTTParty.get("http://www.weeatt.com/api/v1/recipes?qs=lemon&auth_token=leh0XQY71OGO0iFY_6aJ", options)

puts response["results"][0]

api_id = 
ingredients =
instructions =
pic =
recipe_name = 