window.onload = function(){
    $(function() {
          $("#se_q").autocomplete({
                source: function(request, response) {
    				console.log(request);
    				$.getJSON("autocomplete", { term: request.term, table: 'multi' }, 
              		response);
  				},
                minLength: 3,
                select: function(event, ui) {
                	//do_search(ui.item.value);
        		}
            });
         });
    }