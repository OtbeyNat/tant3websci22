The first part of the process I had to decide how I wanted to obtain my json data of news articles. I was looking through rss feeds, many of which were poorly formatted and had inconsistent values (some had a date value while others did not). While it was mentioned in chat, I stumbled upon NewsAPI during my search through the internet. I used NewsAPI in a simple python program to generate json data of news articles. Each individual run of the program would output 20 different sources, so I ran it many more times with different search fields to reach at least 200 different articles. With 10 different results, I concatenated them together into one large json file, all with consistent names for values of each source. Notable values that I used from each source was the image URL, the article URL, and the article title. 

To cycle through the articles I had a fade in and fade out function for news elements. When the articles fade out, I had javascript running that would select the next 5 sources in the json file and replace the old ones. I set a timeout function to wait for the sources to change and then the fade in function will show the new results. To keep the articles cycling infinitely, I made this entire function have a set Interval of 7 seconds.

Some of the sources in the json file did not have a link to an image at all; to fix this issue and keep everything consistent I replaced the empty value with a link to a stock photo of a video game controller. Most of the news articles I picked out fall under the gaming category so I stuck with this theme. To add more to the news ticker and give it more functionality, I included a simple bar of buttons at the top of the page that will direct the user to the websites of some of the most popular video games right now. If the user would want to go and see other video game news or other video game companies, they can easily look at the bottom of the page and see clickable logos to their respective webpages. 

In my CSS, I used media queries to make my webpage function properly on a mobile device. Rather than seeing all of the elements side-by-side, they stacked on top of each other to fit the width of the screen. On a desktop or larger screen, if you hover over one of the logos on the bottom of the page for more info, a tooltip will show up displaying the name of the site or company. The tooltip does not show up on a mobile device because the tooltip would be too small and hard to display. 

Most of my challenges came with styling the news ticker. I definitely wanted to keep the front-end simple and clean, but perhaps it was too minimalistic. I was looking at https://tickernews.co/ for some inspiration and I liked it a lot. I couldn't replicate the UI of course, but I like how it was set up. Aligning pictures with one another on a smaller screen took trial and error but I eventually found values that worked out for the page. 


https://www.w3schools.com/css/css_tooltip.asp
https://www.w3schools.com/css/css_rwd_mediaqueries.asp
https://www.w3schools.com/jquery/jquery_fade.asp
https://newsapi.org/docs/client-libraries/python
https://newsapi.org/







