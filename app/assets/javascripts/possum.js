(function(){

  var opossumProto = Object.create(HTMLElement.prototype);
  
  opossumProto.createdCallback = function() {
    if(this.hasAttribute('include')){
      var element  = $(this);
      var context  = $.getJSON( this.attributes.include.value + '.json' ).pipe( function( tasks, status, jqXHR ) { return tasks; } );
      var template = $.get(this.attributes.include.value + '.html').pipe( function( tasks, status, jqXHR ) { return tasks; } );

      $.when( context, template ).done( function( context, template ) {
        element.html(Handlebars.compile(template)(context));
      });

    }
  };
  
  var opossum = document.registerElement('o-possum', { prototype: opossumProto });

}());