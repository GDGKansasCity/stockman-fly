Project Stockman-Fly
============
A simple Google Chrome extension that adds the GDG Boomerang logo to the omnibox next to the bookmark star when a user navigates to a page where we have hidden a Google Domain Easter Egg for a beta invitation!

### To manually install the Google Chrome extension:
* Download and Unzip the contents to a new folder
* Open Chrome, in a new tab type: `chrome://extensions`
* Check the `Developer mode` checkbox
* Click the `Load unpacked extension...` button
* Navigate to the new folder you created & select it (the folder only)
* Click "Open"/"Ok"

![stockman fly](https://lh3.googleusercontent.com/-pdHLwHY4Bpo/U_dyDhBWH6I/AAAAAAAAAho/zHqdevBuyNE/w440-h280-no/promo_small.png)

### This makes use of the following Chrome Extension APIs:
* [chrome.declarativeContent]
* [chrome.pageAction]
* [chrome.tabs]
* [chrome.runtime]

#### The power of the RegEx:
Using the [chrome.declarativeContent] API, we were able to easily hide the GDG Boomerang on multiple sites conected to GDG Kansas City. The property used was `urlMatches` which follows the [RE2 syntax].

#### Project name origin:
Also in keeping with our TMNT project themes, here is where we got the [Stockman-Fly] project name.


![easter eggs](https://lh3.googleusercontent.com/-NMSf9XeAclE/VA3xzD3GPqI/AAAAAAAAAkU/0mFfJUPgi3E/w400-h283-no/gdg_easter_eggs.png)

#### These are the pages where we hid the Easter Eggs (GDG Boomerang logo):
* [GDGKC Website]
* [GDGKC Google+]
* [GDGKC Google Developer Group listing]
* [GDGKC GitHub]
* [GDGKC Twitter]
* [GDGKC Facebook]
* [GDGKC YouTube]
* [GDGKC Meetup]

#### Extra pages found by Easter Egg finders:
* [GDGKC LinkedIn]
* [GDGKC Eventbrite]

[chrome.declarativeContent]: https://developer.chrome.com/extensions/declarativeContent
[chrome.pageAction]: https://developer.chrome.com/extensions/pageAction
[chrome.tabs]: https://developer.chrome.com/extensions/tabs
[chrome.runtime]: https://developer.chrome.com/extensions/runtime
[RE2 syntax]: http://code.google.com/p/re2/wiki/Syntax
[Stockman-Fly]: http://en.wikipedia.org/wiki/Baxter_Stockman
[GDGKC Website]: http://gdgkc.org
[GDGKC Google+]: https://plus.google.com/116015988631052616691
[GDGKC Google Developer Group listing]: https://developers.google.com/groups/chapter/116015988631052616691/
[GDGKC GitHub]: https://github.com/GDGKansasCity
[GDGKC Twitter]: https://twitter.com/GDGKansasCity
[GDGKC Facebook]: https://www.facebook.com/GDGKansasCity
[GDGKC YouTube]: http://www.youtube.com/user/GDGKansasCity
[GDGKC Meetup]: http://www.meetup.com/GDG-Kansas-City/
[GDGKC LinkedIn]: http://www.linkedin.com/groups/GDG-Kansas-City-6543088
[GDGKC Eventbrite]: http://www.eventbrite.com/o/gdg-kansas-city-4534282341
