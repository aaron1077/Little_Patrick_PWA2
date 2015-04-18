/*  
	VaporSphere
	Author: Patrick Little
*/

(function($){


/**********************************************MasterTooltip***********************************************************/
    $('.masterTooltip').hover(function() {
       //hover over code
        var title=$(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="toolTip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function(){
        //hover over code
        $(this).attr('title', $(this).data('tipText'));
        $('.toolTip').remove();

    }).mousemove(function(e) {
        var mousex= e.pageX+20; //get x coordinates
        var mousey= e.pageY+10; //get y coordinates
        $('.toolTip')
        .css({ top: mousey, left: mousex })
    });

/**********************************************Tabbed accordian********************************************************/
	$('#tabs p').hide().eq(0).show();
    $('#tabs p:not(:first)').hide();

    $('#tabs-nav li').click(function(e) {
        e.preventDefault();
        $('#tabs p').hide();

        $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');

        $('#tabs ' + clicked).fadeIn('fast');
    }).eq(0).addClass('current');

/**********************************************Add Modal***************************************************************/
    $('.modalClick').on('click', function(event) {
        event.preventDefault();
        $('#overlay')
            .fadeIn()
            .find('#modal')
            .fadeIn();
    });

    $('.close').on('click', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#modal')
            .fadeOut();
    });

/**********************************************Fading Status Option****************************************************/
    $('.mystatus').mouseover(function(){
        $(this).fadeTo(100,.3);
    });

    $('.mystatus').mouseout(function() {
        $(this).fadeTo(100, 1);
    });




	
})(jQuery); // end private scope
























