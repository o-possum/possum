module Helpers
  def possum(options = nil, &block)
    content_tag('o-possum', capture(&block), options)
  end
end