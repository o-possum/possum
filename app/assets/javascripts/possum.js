//= require handlebars
//= require webcomponentsjs
//= require_tree .

(function(){
  var opossumProto = Object.create(HTMLElement.prototype);

  opossumProto.createdCallback = function() {
    var $this = $(this);

    $this.on('possum:ready', function(event){
      event.stopPropagation();
    });

    if(this.hasAttribute('include')){
      var context  = $.getJSON(this.attributes.include.value + '.json').pipe( function( tasks, status, jqXHR ) { return tasks; } );
      var template = $.get(this.attributes.include.value + '.html').pipe( function( tasks, status, jqXHR ) { return tasks; } );
      
      $.when( context, template ).done( function( context, template ) {
        $this.html(Handlebars.compile(template)(context));
        $this.trigger('possum:ready');
      });
    }
  };

  var opossum = document.registerElement('o-possum', { prototype: opossumProto });

}());