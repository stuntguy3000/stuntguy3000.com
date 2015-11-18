var contentVisible = 0;
var blogPostsIndex = ["TELSTRA"];
var blogPostsAmount = blogPostsIndex.length;
var blogPostsHTML = "";

$(document).ready(function() {
    $('#content').hide();
	
	for (var i = 0; i < blogPostsAmount; i++) {
		var blogPostID = blogPostsIndex[i];
		$.get('blog/BLOG_' + blogPostID + ".html", function (data) {
			blogPostsHTML = blogPostsHTML.concat(data);
		});
	}
});

function loadHome() {
    $('#content').fadeOut(function() {
        $('#content').text("");
        contentVisible = 0;
    });

    $('.caption').fadeIn();
    $('.copyright').fadeIn();
	$('#controls').fadeIn();
}

function hideImageContent() {
    $('.caption').fadeOut();
    $('.copyright').fadeOut();
	$('#controls').fadeOut();
}

function loadAbout() {
    hideImageContent();

    var text = "<div class='title'>G'day!</div>My name is Luke Anderson, a 17 year old student, freelance programmer and casual gamer. I work with Java, PHP and VB.Net. I like to build and create things, so you could consider me into hobbyist electronics. I also am into photography, and this website will showcase some of my work, <a href='http://www.flickr.com/photos/stuntguy3000'>all available on my Flickr profile.</a><br><br>Welcome to my website! I built this website specifically to post my <a onclick='loadBlog(\"telstra\");'>open letter to my ISP, Telstra</a> which was for an English assignment.<br>I can be contacted in many ways, but I prefer Email (stuntguy3000@gmail.com) or Skype (stuntguy3000).<br><br>Thanks for stopping by, and remember, leaf a like.";

    if (contentVisible == 1) {
        $('#content').html(text);
    } else {
        $('#content').fadeOut(function() {
            $('#content').html(text);
            $('#content').fadeIn();
            contentVisible = 1;
        });
    }
}

function loadBlog(anchor) {
    hideImageContent();

    if (contentVisible == 1) {
		$('#content').html(blogPostsHTML);
		
        if (anchor != null) {
            $("#content").animate({
                scrollTop: $("#" + anchor).position().top
            }, 800, 'swing');
        }
    } else {
        $('#content').fadeOut(function() {
            $('#content').html(blogPostsHTML);
			
            $('#content').fadeIn(function() {
                if (anchor != null) {
                    $("#content").animate({
                        scrollTop: $("#" + anchor).position().top
                    }, 800, 'swing');
                }
            });
            contentVisible = 1;
        });
    }
}