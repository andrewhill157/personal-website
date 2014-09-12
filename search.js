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
});

function search() {
 
  var result = idx.search($("input").val());
  if(result && result.length > 0) {
  	for(var i in result) {

  		// Limit to top 10 results
  		if (i < 10) {
  			reference = result[i].ref
  			$('<div class="result">↳ <a href="' + reference + '">' + indexed_docs[reference]['title'] + '</a></div>').insertAfter("input");
  		}
  	}
  	
    // window.location.replace(result[0].ref);
  }
}

