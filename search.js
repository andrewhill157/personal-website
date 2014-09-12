---
---
var docs = 
[ 
{% for post in site.posts limit:10 %}
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
  
  $("input").keydown(function(e) {
  	  // Key behaviors -- currently just prevents defaults.
  	  switch(e.which) {
  	  	  
  	      case 13:
  	      e.preventDefault();
  	      break;
  	      
  	  	  case 38:
  	  	  e.preventDefault();
  	  	  break;
  	  	  
  	      case 40:
  	      e.preventDefault();
  	      break;
  	      
  	      default: return;
  	  }
      search();

  });
});

function search() {
 
  var result = idx.search($("input").val());
  if(result && result.length > 0) {
  
  	var result_html = '<div class="result">'
  	for(var i in result) {

  		// Limit to top 10 results
  		if (i < 10) {
  			
  			reference = result[i].ref
  			result_html = result_html + '<a href="' + reference + '">' + '<div class="result_item">↳' + indexed_docs[reference]['title'] + '</div></a>'
  		}
  	}
  	result_html = result_html + '</div>'
  	$(result_html).insertAfter("input");
  	
    // window.location.replace(result[0].ref);
  }
}

