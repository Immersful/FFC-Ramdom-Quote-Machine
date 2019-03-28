function newquote(){
		$.ajax({
			url:"https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en",
			dataType: "jsonp",
			success:function(json){
				$("#text").text(json.quoteText);
				if(json.quoteAuthor === ''){
					$("#author").text(" -- Unknown");
				}else{
					$("#author").text(" -- "+json.quoteAuthor);
				}
			 tweeturl = "https://twitter.com/intent/tweet?text="+json.Text+" by "+json.Author+"&hashtags=famousQuotes";
			 $("#tweet-quote").attr("href", tweeturl);
        
         tumblrurl = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes"+json.Text+" by "+json.Author+"&hashtags=famousQuotes";
			 $("#tumblr-quote").attr("href", tumblrurl);
			},
			error:function(xhr, status, error)
	{
		$('#text').text("I'm sorry but there was an error with the API request");
	}
			});
		
	
}
$(document).ready(function(){
	newquote();
	$("#new-quote").on("click",function(){
		newquote();
	});	
});
