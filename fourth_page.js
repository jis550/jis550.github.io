
$(function(){
 rowHeight( $('.column-js') )
})
function rowHeight($container){
	var heightest = 0;
	$container.find('> div').each(function(i){
		var h = $(this).height();
		if( h >= heightest) heightest = h
		})
	$container.height(heightest)
	}