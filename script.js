function load() {
    var feed ="https://rss.nytimes.com/services/xml/rss/nyt/US.xml";
    new GFdynamicFeedControl(feed, "feedControl");

}
google.load("feeds", "1");
google.setOnLoadCallback(load);