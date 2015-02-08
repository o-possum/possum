# Possum
Sometimes its important to know how to play dead. Possum does just that! Its a light weight javascript middleware that seperates your static content from your dynamic content.

### Installation
Gemfile
```ruby
source 'https://rails-assets.org'
gem 'rails-assets-handlebars', '~> 2.0.0'
gem 'rails-assets-webcomponentsjs', '~> 0.5.4'
gem 'possum', '~> 0.1'
```

application.js
```javascript
//= require possum
```
### Usage

##### application.html.erb
```erb
<%= possum include: fragments_form_path do %>
  <noscript>Must Enable Javascript to Proceed!</noscript>
<% end %>
```

##### fragments/form.html.erb
```erb
<%= form_for @form, authenticity_token: '{{form.authenticity_token}}' do |f| %>
  <%= f.text_field :name, value: '{{form.name}}' %>
  <%= f.submit 'Submit', 'data-disable' => 'enabled' %>
<% end %>
```

##### fragments/json.jbuilder
```ruby
json.form do
  json.authenticity_token form_authenticity_token
  json.name current_user.name
end
```

##### fragments_controller.rb
```ruby
class FragmentsController < ApplicationController
  layout false

  def form
    @form = Form.new
    
    respond_to do |format|
      format.html
      format.json
    end
  end
end
```

##### application.js
```javascript
(function(){

  var ready = function(){
    $("o-possum[include='/fragments/form']").on('possum:ready', function () {...};
  }
  
  $(document).on('ready', ready);
  $(document).on('page:load', ready);
}());
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