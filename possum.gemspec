$LOAD_PATH.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'possum/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'possum'
  s.version     = Possum::VERSION
  s.authors     = ['Zane Wolfgang Pickett']
  s.email       = ['Zane.Wolfgang.Pickett@Gmail.com']
  s.homepage    = 'http://www.possum.io'
  s.summary     = 'A light weight javascript middleware that seperates your static content from your dynamic content.'
  s.description = 'A light weight javascript middleware that seperates your static content from your dynamic content.'
  s.license     = 'MIT'

  s.files = Dir['{app,lib}/**/*', 'MIT-LICENSE', 'Rakefile']
  s.add_dependency 'rails', '~> 4.2.0'
  s.add_dependency 'rails-assets-handlebars', '~> 2.0.0'
  s.add_dependency 'rails-assets-webcomponentsjs', '~> 0.5.4'
end
