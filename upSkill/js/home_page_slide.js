function slideShow(){
	var each = $(".home").find(".slideWrap").find(".each");
	$(each).each(function() { $(this).hide(); });
	
	var slideCount = $(each).length;
	// show the first slide as a default
	$(each[0]).show();
	
	var count = 0;
	var slideDelay = 4000;
	setInterval(function(){
		// if we've gotten to the last slide, start again
		if(count==slideCount-1){
			count = 0;
			change(count);
		// else keep going
		} else { count++; change(count); }
		
	// the below value is the slide
	}, slideDelay);
}

function change(arg){
	var each = $(".home").find(".slideWrap").find(".each");
	var currentSlide = each[arg];
	$(each).not(currentSlide).hide()
	$(currentSlide).fadeIn();
	
	// update the indicator accordingly
	var indicators = $(".home").find(".slideWrap").find(".slide_select").find("span");
	$(indicators).addClass("active");
	$(indicators).not(indicators[arg]).removeClass("active");
}

function indicators(){
	var indicators = $(".home").find(".slideWrap").find(".slide_select").find("span");
	var index = 0;
	$(indicators).each(function() { this.setAttribute("id", index); index++; });
	$(indicators).click(function() {
        var indicator = this;
		var hasIndex = parseInt($(indicator).attr("id"));
		
		change(hasIndex);
    });
}