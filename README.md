# Possum
Sometimes its important to know how to play dead. Possum does just that! Its a light weight javascript middleware that seperates your static content from your dynamic content.

### Usage
Gemfile
```ruby
source 'https://rails-assets.org'
gem 'rails-assets-handlebars', '~> 2.0.0'
gem 'rails-assets-webcomponentsjs', '~> 0.5.4'
gem 'possum', '~> 0.1.0'
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