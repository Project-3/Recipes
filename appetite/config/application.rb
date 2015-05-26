require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Appetite
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de

    # Do not swallow errors in after_commit/after_rollback callbacks.
    config.active_record.raise_in_transactional_callbacks = true
  end
end


# root GET    /                                    sessions#new
#             session POST   /session(.:format)                   sessions#create
#         new_session GET    /session/new(.:format)               sessions#new
#                     DELETE /session(.:format)                   sessions#destroy
#    user_inventories GET    /user/inventories(.:format)          inventories#index
#                     POST   /user/inventories(.:format)          inventories#create
#  new_user_inventory GET    /user/inventories/new(.:format)      inventories#new
# edit_user_inventory GET    /user/inventories/:id/edit(.:format) inventories#edit
#      user_inventory GET    /user/inventories/:id(.:format)      inventories#show
#                     PATCH  /user/inventories/:id(.:format)      inventories#update
#                     PUT    /user/inventories/:id(.:format)      inventories#update
#                     DELETE /user/inventories/:id(.:format)      inventories#destroy
#        user_recipes GET    /user/recipes(.:format)              recipes#index
#                     POST   /user/recipes(.:format)              recipes#create
#     new_user_recipe GET    /user/recipes/new(.:format)          recipes#new
#    edit_user_recipe GET    /user/recipes/:id/edit(.:format)     recipes#edit
#         user_recipe GET    /user/recipes/:id(.:format)          recipes#show
#                     PATCH  /user/recipes/:id(.:format)          recipes#update
#                     PUT    /user/recipes/:id(.:format)          recipes#update
#                     DELETE /user/recipes/:id(.:format)          recipes#destroy
#                user POST   /user(.:format)                      users#create
#            new_user GET    /user/new(.:format)                  users#new
#           edit_user GET    /user/edit(.:format)                 users#edit
#                     GET    /user(.:format)                      users#show
#                     PATCH  /user(.:format)                      users#update
#                     PUT    /user(.:format)                      users#update
#                     DELETE /user(.:format)    
#                   users#destroy
