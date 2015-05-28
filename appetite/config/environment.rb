# Load the Rails application.
require File.expand_path('../application', __FILE__)
ActiveRecord::Base.include_root_in_json = false
# Initialize the Rails application.
Rails.application.initialize!
