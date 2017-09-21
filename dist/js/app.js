var amazon = {
    init: function() {
        amazon.share();
    },
    share: function() {
        $(".icon-twitter-squared").on("click", function() {
            var tweet = "See how Baltimore fits in with Amazon's vision of its future headquarters.";
            var url = "http://data.baltimoresun.com/news/amazon-bids/";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".icon-facebook-squared").on("click", function() {
            var picture = "http://data.baltimoresun.com/news/amazon-bids/images/thumb.png";
            var title = "Does Baltimore meet Amazon’s criteria for a new headquarters?";
            var description = "See how Baltimore fits in with Amazon's vision of its future headquarters.";
            var url = "http://data.baltimoresun.com/news/amazon-bids/";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    }
};

$(document).ready(function() {
    amazon.init();
    console.log("connected");
});