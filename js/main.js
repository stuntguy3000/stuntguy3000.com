var contentVisible = 0;

$(document).ready(function() {
    $('#content').hide();
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

    var text = "<div class='title' id='telstra'>An open letter to my ISP, Telstra Corporation Limited (20th October 2015)</div>I am writing to you after having a range of horrible experiences over many years with your internet service. The service you provide as Australia’s largest internet service provider (ISP) have built a very poor reputation for our country, and we the literal laughing stock of the world in telecommunications. The biggest issue, by far, is the disgraceful internet network you overprice and refuse to maintain. The 21st century is home to amazing technological advancements, where the internet is revolutionizing the world like never before. Australia has not caught up, and is still stuck with 80’s technologies. It is time to change that.<br><br>Australia’s average internet speed is, by far, one of the lowest speeds in the world. Content delivery network company Akamai released a comparison of the internet speeds its users obtained files from around the world. In 2014, which is their most recent report, Australia’s average download speed was 6.9 Megabytes per second (Mbps) . Other companies, including the paid online media streaming service Netflix have released their own reports, which clock in at roughly 3 Mpbs, which is a more realistic measurement when compared to Akamai because the content is different, and Netflix serves more people more regularly – resulting in more data being collected. One of the biggest issue as to why Australia has such pathetic internet speeds, is the ancient copper network running to every home and every business. The Telstra owned copper network, built a number decades ago, is still struggling to supply high quality internet to millions of Australian residents and businesses. Copper naturally degrades, and over time becomes more unstable leading to internet stability and connection issues. These issues are also one reason why internet speeds are very low, and not sustained. In recent years, mainstream media has picked up issues with Telstra’s street cable-pit access panels, and how damaged they are. For example, Ben Grubb from The Sydney Morning Herald published a story titled “Telstra's copper is 'nearly beyond repair' and 'an absolute disgrace': union” in which featured a set of damaged cables, and a poor electrical tape fix which connected the tables (but was not suitable, as the tape as damaged and is not a permanent solution) . The degrading copper network has another factor which is not helping Australian internet users either.<br><br>Network congestion is becoming more and more of an issue, as more devices and homes are connected, and more and more bandwidth is required as services move online. Network congestion is a piece to the puzzle as to why internet services in Australia are as poor as they are. It is up to yourselves to provide solutions to these issues, by constantly upgrading the infrastructure to suit the 21st Century needs of everyday Australians. These issues do not only affect residents, but on a global scale the impact is much larger. Businesses around the world, from multi-level corporations to a small home business are utilizing online resources in ways which nobody has ever seen before.<br><br>From selling products, to interacting with customers, some businesses rely on the internet to stay afloat. This is why having a reliable and fast internet service is very important. Aside from regular businesses, electronic sports is entering the Australian atmosphere and it is an unstoppable force all around the world. From popular games such as ‘Counter-Strike: Global Offensive’ or ‘League of Legends’, around the world thousands of professional players, on high salaries, compete in areas for massive prize pools. The world of internet gaming is becoming a very important atmosphere to many people around the world, and Australia is no exception. It is important that fast internet speeds, especially upload rates are available and stable for players in Australia to compete in electronic sports (‘eSports’), as they are proclaimed. Having fast internet speed would be fantastic, but only if the Telstra infrastructure can handle it.<br><br>My biggest issue with Telstra, is the customer support, and how it is useless at resolving issues of a technical nature. There are two main ways to get support with a Telstra service. Either call them, or use the online live chat service. These issues apply to both these services, which only resolve the very most basic of problems, and as someone who has a technical understanding, understands bigger more complex issues which I cannot get resolved. When speaking with a Telstra support staff, the routine is pretty standard, involving router/computer restarts and isolation/line tests. For the basic issues, no problems here. However, for more complex issues, such as packet loss or line stability issues, this serves little to no help and purpose. I believe it would be a massive benefit for Telstra’s customers, if there was a way to speak to a Telstra network engineer, who can provide more technical information which can help to resolve issues faster.<br><br>Australia is home to one of the world’s worst internet infrastructure, and it is nothing to be proud of. The copper network deep in our land is rotting away, and it is needing to be replaced. The Government’s National Broadband Network is a good start to help replace and upgrade Australia’s internet network to be the fastest in the world, but that is taking a lot of time and money, with uncertainty as to if it will ever be completed. I appreciate you taking the time to read this letter, and I hope changes will come soon to help improve the internet of Australian residents and businesses for years to come.<br><br>Yours Sincerely,<br>Luke Anderson";

    if (contentVisible == 1) {
        $('#content').html(text);
        if (anchor != null) {
            $("#content").animate({
                scrollTop: $("#" + anchor).position().top
            }, 800, 'swing');
        }
    } else {
        $('#content').fadeOut(function() {
            $('#content').html(text);
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