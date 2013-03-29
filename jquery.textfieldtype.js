/**
 * Simple and stupid JQuery plugin to change text field type.
 * by: Matteo Balocco - matteo@matteobalocco.it
 * Date: 08/03/13
 * MIT license
 * Version: 1.0
 *
 * Usage:   $('#input').textfieldType() // type: 'text' is default;
 *          $('#input').textfieldType({type:'tel'});
 */

;(function($){
	var __loop = function(cfg) {
   	$this = $(this)
   	$this.data( 'textfieldType', cfg );
    var $newInput = $this.clone();
    var attributes = $this.prop("attributes");
    $.each(attributes, function() {
        $newInput.attr(this.name, this.value);
    });
    $newInput.attr("type", cfg.type).insertBefore($this).focus();
    $this.unbind('blur').unbind('keyup').remove();
  };

  $.fn.textfieldType = function() {
 		var cfg = false;
 		if ( !arguments.length || $.isPlainObject(arguments[0]) ) {
  		cfg = $.extend({},{type: 'text'},arguments[0]);
  	}
		if ( cfg !== false ) {
      $(this).each(__loop,[cfg]);
   	}
    return this;
  };
})(jQuery);