textarea-backup.js (localStorage)
=================================

Textarea-backup.js (localStorage) based on (Textarea Backup)[http://userscripts.org/scripts/show/7671] by *broquaint*.
The main difference between them is data storage.
The script by *broquaint* using (GM_getValue)[http://wiki.greasespot.net/GM_getValue]/(GM_setValue)[http://wiki.greasespot.net/GM_setValue], a proprietary Greasemonkey functions.
As a know, only Firefox Greasemonkey support it.
Mine script using (HTML5 localStorage)[http://dev.w3.org/html5/webstorage/]. Last versions of Firefox, Safari and InternetExplorer support localStorage. Opera support coming be soon, I hope. 

How it works
------------
Open twitter.com and type something in the status box. Close the tab. Open twitter.com again. Your text will be still here.


How to install
--------------

For Firefox Greasemonkey and Safari GreaseKit users: just click on [textarea-backup.user.js](/NV/textarea-backup.js/raw/master/textarea-backup.user.js)

For Opera users: download [textarea-backup.user.js](/NV/textarea-backup.js/raw/master/textarea-backup.user.js) and rename it to textarea-backup.js (without “user”).