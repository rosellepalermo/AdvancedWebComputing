$(document).ready(function(){
	$('#send').click(function(){

		var moviesearch = $('#movie').val();
		if(moviesearch == ""){
			alert("Please input the required field!");
			
		}
		
			$(function(){
			$('#firstresult').html("");
			$('#firstresult').append('<p class="text-info">Search Result for: ' +moviesearch+ '</p>');
			
			
			var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
			$.ajax({
				url: url,
				data: {
					q: moviesearch,
					apiKey: '62t87dhsk4syxjw52796uc2d'},
					dataType: 'jsonp',
					success: show_movies
			});
			function show_movies(response){
				$('.Movie_Container').html("");
				for(i=0;i<response.movies.length;i++){
					var movie = response.movies[i];
					var synop = movie.synopsis;
					if(synop == ""){
						synop = '<h3 style="text-align: center;">No Available Synopsis</h3>';
						$('.Movie_Container').append('<div class="Movie_Holder">'+'<div class="thumb">'+'<img src="'+movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="Movie_Title">'+movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: '+movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');	
					}else{	
					$('.Movie_Container').append('<div class="Movie_Holder">'+'<div class="thumb">'+'<img src="'+movie.posters.thumbnail+'"/>'+'</div>'+'<div class="title">'+'<p class="Movie_Title">'+movie.title+ '</p>'+'<div class="synopsis">'+'<p>'+synop+'</p>'+'</div>'+'</div>'+'<div class="year">'+'<p>Year: '+movie.year+ '</p>'+'</div>'+'</div>'+'<div class="clear">'+'</div>');
					
					}
				}
					var LengthOfMovie = response.movies.length;
					$('#secondresult').html("");
					$('#secondresult').append('<p class="text-info">Total result found: '+LengthOfMovie+'</p>');}		
			});
				$( '#formmovie' ).each(function(){
					this.reset();
				});
		});
});

