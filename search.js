---
---
var docs = 
[ 
{% for post in site.posts %}
  {% include post.json %},
{% endfor %}
];

indexed_docs = [];
for (var i in docs) {
	var id = docs[i]['id'];
	indexed_docs[id] = docs[i];
}

// init lunr
var idx = lunr(function () {
    this.field('title', { boost: 10 })
    this.field('content')
})

// add each document to be index
for(var index in docs) {
  idx.add(docs[index]);
}

$(document).ready(function() { 
  $("input").on('input', function(e) {
  	  $(".result").remove();
      e.preventDefault();
      search();

  });
  
  $("body").on('mouseenter', '.result_item', function(e) {
  	  $(".result_item").removeClass("selected_result");
  	  $(this).addClass("selected_result");
  });
  
  $("input").keydown(function(e) {
  	  // Key behaviors -- currently just prevents defaults.
  	  switch(e.which) {
  	  	  
  	      case 13:
  	      e.preventDefault();
  	      var selected_item = $(".selected_result");
  	      var url = selected_item.attr('href');

  	      if (typeof url !== typeof undefined && url !== false) {
  	          window.location.replace(url);
  	      }
  	      
  	      break;
  	      
  	  	  case 38:
  	  	  e.preventDefault();
  	      var selected_item = $(".selected_result");
  	      var next_result = selected_item.prev();
  	      
  	      if(next_result.length) {
  	         $('.selected_result').removeClass('selected_result');
  	         next_result.addClass('selected_result');
  	      }
  	      break;
  	  	  
  	      case 40:
  	      e.preventDefault();
  	      var selected_item = $(".selected_result");
  	      var next_result = selected_item.next();
  	      
  	      if(next_result.length) {
  	         $('.selected_result').removeClass('selected_result');
  	         next_result.addClass('selected_result');
  	      }
  	      
  	      break;
  	  }
  });
  
  $("input").focusin(function(e) {
  	  search();
  });
  

  
});

function search() {
 
  var result = idx.search($("input").val());
  if(result && result.length > 0) {
  
  	var result_html = '<div class="result">'
  	for(var i in result) {
		reference = result[i].ref
		
  		// Limit to top 10 results
  		if (i >= 10) {
  			break;
  		}
  		
  		if (i == 0) {
  			result_html = result_html + '<a class="result_item selected_result" href="' + reference + '">' + '<div>↳' + indexed_docs[reference]['title'] + '</div></a>'
  		} else {
  			
  			result_html = result_html + '<a class="result_item" href="' + reference + '">' + '<div>↳' + indexed_docs[reference]['title'] + '</div></a>'
  		}
  	}
  	result_html = result_html + '</div>'
  	$(result_html).insertAfter("input");
  	
  	
    // window.location.replace(result[0].ref);
  }
}

