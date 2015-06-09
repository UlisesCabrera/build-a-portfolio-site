$(function(){	
    var myPrintImages = [
	'images/print1.jpg',
	'images/print2.jpg', 
	'images/print3.jpg'
	]; // get the location of all my print ads samples
	
	var myBannersImages = [
	'images/banner1.jpg',
	'images/banner2.jpg',
	'images/banner3.jpg',
	'images/banner4.jpg',
	'images/banner5.jpg'
	]; // get the location of all my banner ads samples
	
	var myHTMLEmailsImages = [
	'images/email1.jpg',
	'images/email2.jpg',
	'images/email3.jpg',
	'images/email4.jpg',
	'images/email5.jpg',
	'images/email6.jpg'
	]; // get the location of all my html email samples
    
    

	var counter = 0; // set counter to go thru the image arrays   
    
    
    
	$('#showcase').on('click','a', function(e){ // add event listener to the showcase section
            e.preventDefault();
			var $newDiv = $('<div>'); // create new div tag
			var $img = $('<img>'); // create new img tag
			var $leftSpan = $('<span>'); // create left span where the arrow goes
			var $rightSpan = $('<span>'); // create right span where the arrow goes
            var $removeSpan = $('<span>'); //create remove span
            $removeSpan.addClass('glyphicon glyphicon-remove gallery-remove'); //add classes
			$leftSpan.addClass('glyphicon glyphicon-chevron-left gallery-chevron'); // add the bootstrap classes that has the arrow glyph
			$rightSpan.addClass('glyphicon glyphicon-chevron-right gallery-chevron right'); // add the bootstrap classes that has the arrow glyph			
			$newDiv.addClass('gallery-container');
			$img.addClass('gallery-img');
            
            $newDiv.append($removeSpan); //add remove span to div
			$newDiv.append($img); // add img tag to div
			$leftSpan.insertBefore($img); // add left arrow to the div just before the img tag
			$rightSpan.insertAfter($img); // add right arrow to the div after the img tag
			$('.container').prepend($newDiv); // add div to the DOM, inside the container div

            function nextImg(section){
                if (counter === section.length-1){
                    counter = 0;
                    $img.attr('src', section[counter]);
                } else {
                counter++;
                $img.attr('src', section[counter]);
                };       
            }// setting nextImg function
        
            function prevImg(section) { 
                if (counter === 0){
                    counter = section.length-1;
                    $img.attr('src', section[counter]);
                } else {
                counter--;
                $img.attr('src', section[counter]);
                }            
            } // setting prevImg function
		
             //Delegate showcase event by section
            if (e.target.textContent === "View Print Ads") { // only execute this part if the print section is clicked
                $img.attr('src', myPrintImages[counter]);
                $rightSpan.on('click', function(e){
                    nextImg(myPrintImages);
                });
                
                $leftSpan.on('click', function(e){
                    prevImg(myPrintImages)        
                });
                  
            } else if (e.target.textContent === "View Banners") {  // only execute this part if the banner section is clicked
                $img.attr('src', myBannersImages[counter]);
                $rightSpan.on('click', function(e){
                    nextImg(myBannersImages);
                });
                
                $leftSpan.on('click', function(e){
                    prevImg(myBannersImages);
                });				

            } else if (e.target.textContent === "View Emails") { // only execute this part if the html emails section is clicked
                $img.attr('src', myHTMLEmailsImages[counter]);
                $rightSpan.on('click', function(e){
                    nextImg(myHTMLEmailsImages);
                });
                
                $leftSpan.on('click', function(e){
                    prevImg(myHTMLEmailsImages);
                });              

            };
        
            //Close Function
            $removeSpan.on('click', function(e){
                    $newDiv.remove();//remove div
					counter = 0;// reset counter
            });
            
	}); // end of the opening gallery event
    
}) // end of the ready function