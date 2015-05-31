require 'ConnectSdk'

api_key = gdh6hyyfrdjpq454dtz3km2y
api_secret = Nm4WFXFzjhJpPhVSvVrtVx636cQp5WCFdEzMd4WJZxABz

# create instance of the Connect SDK
connectSdk = ConnectSdk.new(api_key, api_secret)
search_results = connectSdk
    .search().images()
    .with_phrase("gorilla")
    .with_page(2)
    .with_page_size(5)
    .execute()

search_results["images"].each do | image |
    puts "Id: #{image["id"]} Title: #{image["title"]}" 
end