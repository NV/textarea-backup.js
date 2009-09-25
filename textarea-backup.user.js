// ==UserScript==
// @name          Textarea backup (localStorage)
// @namespace     http://userscripts.ru/js/textarea-backup/
// @description   Retains text entered into textareas.
// @include       *
// @exclude       http://mail.google.com/*
// @exclude       https://mail.google.com/*
// @author        Nikita Vasilyev
// @version       0.1
// @licence       MIT
// ==/UserScript==


(function(){

  var w = window.wrappedJSObject || window;
  var storage = w.localStorage || w.globalStorage;

  if (typeof storage == 'undefined') return;

  var textareas = document.getElementsByTagName('textarea');

  for (var i=0; i<textareas.length; i++) {
    try {
      var value = storage[location.pathname + '#' + textareas[i].name];
    } catch (e) {
      throw e;
    }
    if (value) textareas[i].value = value;

    textareas[i].addEventListener('keyup', function(event){
      if (!event.target.name) return;
      storage[location.pathname + '#' + event.target.name] = event.target.value;
    }, false);

    textareas[i].form && textareas[i].form.addEventListener('submit', function(event){
      for (var i=0; i<textareas.length; i++) {
        if (textareas[i].form == event.target) {
          storage.removeItem(location.pathname + '#' + textareas[i].name);
        }
      }
    }, false);

  }

})();
