// Code designed by Wayne Buchner
// Owned by Vacation Aps
// ©2010 Vacation Aps & Wayne R Buchner
// Project: Swinburne Orientation

var win = Titanium.UI.currentWindow;
var tab = Titanium.UI.currentTab;

Titanium.include('twitterDateFunctions/stringtime.js','twitterDateFunctions/prettyDate.js');
// End includes

// set up a twitter screen name.
var twitter_name = 'swinburne';

win.title = 'tweets @'+twitter_name;


function getTweets(screen_name){

	// create table view data object
	var data = [];
	
	var xhr = Ti.Network.createHTTPClient();
	xhr.timeout = 1000000;	
	xhr.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+screen_name);

	xhr.onload = function()
	{
		try
		{
			var tweets = eval('('+this.responseText+')');
		
			for (var c=0;c<tweets.length;c++){

				var tweet = tweets[c].text;				
				var user = tweets[c].user.screen_name;
				var avatar = tweets[c].user.profile_image_url;
				var created_at = prettyDate(strtotime(tweets[c].created_at));
				var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';
				
				var row = Ti.UI.createTableViewRow({hasChild:false,height:'auto',backgroundColor:bgcolor,touchEnabled:false});

				// Create a vertical layout view to hold all the info labels and images for each tweet
				var post_view = Ti.UI.createView({
					height:'auto',
					layout:'vertical',
					left:5,
					top:5,
					bottom:5,
					right:5
				});
				
				var av = Ti.UI.createImageView({
						image:avatar,
						left:0,
						top:0,
						height:48,
						width:48
					});
				// Add the avatar image to the view
				post_view.add(av);

				var user_label = Ti.UI.createLabel({
					text:user,
					left:54,
					width:120,
					top:-48,
					bottom:2,
					height:16,
					textAlign:'left',
					color:'#444444',
					font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
				});
				// Add the username to the view
				post_view.add(user_label);
				
				var date_label = Ti.UI.createLabel({
					text:created_at,
					right:0,
					top:-18,
					bottom:2,
					height:14,
					textAlign:'right',
					width:110,
					color:'#444444',
					font:{fontFamily:'Trebuchet MS',fontSize:12}
				});
				// Add the date to the view
				post_view.add(date_label);
			
				var tweet_text = Ti.UI.createLabel({
					text:tweet,
					left:54,
					top:0,
					bottom:2,
					height:'auto',
					width:236,
					textAlign:'left',
					font:{fontSize:14}
				});
				// Add the tweet to the view
				post_view.add(tweet_text);
				// Add the vertical layout view to the row
				row.add(post_view);
				row.className = 'item'+c;
				data[c] = row;
			}
			// Create the tableView and add it to the window.
			var tableview = Titanium.UI.createTableView({data:data,minRowHeight:58});
			Ti.UI.currentWindow.add(tableview);
		}
		catch(E){
			alert(E);
		}
	};
	// Get the data
	xhr.send();	
}
 
// Get the tweets for 'twitter_name'
getTweets(twitter_name);