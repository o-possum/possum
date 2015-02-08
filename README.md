# Possum

### Usage
Gemfile
```ruby
source 'https://rails-assets.org'
gem 'rails-assets-handlebars', '~> 2.0.0'
gem 'rails-assets-webcomponentsjs', '~> 0.5.4'
gem 'possum'
```

application.js
```javascript
//= require possum
```

### TODOs
- tests
- `possum:ready` on document when all elements ready
- remove jQuery dependency
- refactor out js to own library
- add inline varible syntax for non-fragments
- add examples
  - plain javascript
  - polymer
  - angular