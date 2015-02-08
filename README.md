# Possum

### Usage
Gemfile
```ruby
source 'https://rails-assets.org'
gem 'rails-assets-handlebars', '~> 2.0.0'
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
- add x-tags for browser support
- add examples
  - plain javascript
  - polymer
  - angular