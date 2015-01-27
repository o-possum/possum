require 'possum/version'
require 'possum/helpers'

module Possum  
  module Rails
    class Engine < ::Rails::Engine
      
      initializer 'possum.helpers' do
        ActionView::Base.send :include, Helpers
      end
      
    end
  end
end
