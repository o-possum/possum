$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "possum/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "possum"
  s.version     = Possum::VERSION
  s.authors     = ["Zane Wolfgang Pickett"]
  s.email       = ["Zane.Wolfgang.Pickett@Gmail.com"]
  s.homepage    = "github.com/sirwolfgang/possum"
  s.summary     = "TODO: Summary of Possum."
  s.description = "TODO: Description of Possum."
  s.license     = "MIT"

  s.files = Dir["{app,lib}/**/*", "MIT-LICENSE", "Rakefile"]
  s.add_dependency "rails", "~> 4.2.0"

end
