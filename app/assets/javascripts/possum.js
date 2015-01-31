//= require handlebars
//= require_tree .

(function(){
  var opossumProto = Object.create(HTMLElement.prototype);

  opossumProto.createdCallback = function() {
    var $this = $(this);

    if(this.hasAttribute('include')){
      var context  = $.getJSON(this.attributes.include.value + '.json').pipe( function( tasks, status, jqXHR ) { return tasks; } );
      var template = $.get(this.attributes.include.value + '.html').pipe( function( tasks, status, jqXHR ) { return tasks; } );

      $.when( context, template ).done( function( context, template ) {
        $this.html(Handlebars.compile(template)(context));
        $(document).trigger('possum:ready'); // only works for single object pages
      });
    }
  };

  // $(document).trigger('possum:ready'); if all elements ready
  
  var opossum = document.registerElement('o-possum', { prototype: opossumProto });

}());