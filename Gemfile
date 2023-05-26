source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '~> 2.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '6.1.7.3'
# Use Postgresql as the database for Active Record
gem 'pg'
# Use Puma as the app server
gem 'puma', github: 'puma/puma'
# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'sprockets-rails'
# Bundle and transpile JavaScript [https://github.com/rails/jsbundling-rails]
gem 'jsbundling-rails'
# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem 'turbo-rails'
# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem 'stimulus-rails'
# Bundle and process CSS [https://github.com/rails/cssbundling-rails]
gem 'cssbundling-rails'
# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '>= 4.0.1'
# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem 'kredis'
# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem 'bcrypt', '~> 3.1.7'
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[ mswin mswin64 mingw x64_mingw jruby ]
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'factory_bot_rails', git: 'https://github.com/thoughtbot/factory_bot_rails'
gem 'faker', git: 'https://github.com/stympy/faker'
gem 'cpf_faker'
gem 'webpacker', '~> 4.3.x'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'guard-rspec'
  gem 'pry-byebug'
  gem 'guard-rspec'
  gem 'reek'
  gem 'rspec-activemodel-mocks'
  gem 'rspec-collection_matchers'
  gem 'rspec-its'
  gem 'rspec-rails'
  gem 'rspec-retry'
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
  gem 'solargraph', require: false
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.1.0'
  # Display performance information such as SQL time and flame graphs for each request in your browser.
  # Can be configured to work on production as well see: https://github.com/MiniProfiler/rack-mini-profiler/blob/master/README.md
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'mock_redis'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers', require: false
  gem 'json_matchers'
  gem 'simplecov', require: false
  gem 'simplecov-json', require: false
  gem 'vcr', require: false
  gem 'webdrivers', require: false
  gem 'webmock'  
  gem 'database_cleaner-active_record'
  gem 'rails-controller-testing'
end

group :assets, :production, :staging do
  gem 'therubyracer'
  # Use SCSS for stylesheets
  gem 'sass-rails', '>= 6'
  gem 'uglifier'
end