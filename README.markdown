Textarea-backup.js (localStorage)
=================================

Textarea-backup.js (localStorage) is based on [Textarea Backup](http://userscripts.org/scripts/show/7671) by *broquaint*. The main difference between them is data storage.

The script by *broquaint* is using [GM_getValue](http://wiki.greasespot.net/GM_getValue)/[GM_setValue](http://wiki.greasespot.net/GM_setValue), proprietary Greasemonkey functions. As far as I know, only Firefox Greasemonkey support it.

Mine script using [HTML5 localStorage](http://dev.w3.org/html5/webstorage/). Last versions of Firefox, Chrome, Safari, Opera, and Internet Explorer support it.

How it works
------------
Open twitter.com and type something in the status box. Close the tab. Open twitter.com again. Your text will be still there.


How to install
--------------

For Firefox Greasemonkey, Google Chrome, and Safari GreaseKit users: just click on [textarea-backup.user.js](/NV/textarea-backup.js/raw/master/textarea-backup.user.js)

For Opera users: download [textarea-backup.user.js](/NV/textarea-backup.js/raw/master/textarea-backup.user.js) and rename it to textarea-backup.js (without “user”).