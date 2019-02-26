myApp.filter('paging', function() {
    return function (td, index, pageSize) {
	    if (!td)
	      return [];
	    var offset = (index - 1) * pageSize;
	    return td.slice(offset, offset + pageSize);
    }
});

myApp.filter('size', function() {
	return function (td) {
	    if (!td)
	      return 0;
	    return td.length || 0
	}

});
