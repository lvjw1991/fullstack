# example_app
<https://fullstackopen.com/en/part0/fundamentals_of_web_apps>
## draw picture tool
https://www.websequencediagrams.com/

## js page
~~~
note left of browser: init page
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note

note left of browser: form.onsubmit
browser->server: http post url:https://studies.cs.helsinki.fi/exampleapp/new_note
server-->browser: refresh page, repeat init page
~~~


## Single page app
~~~
title single_page_app

browser->server: http get url:https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: html
browser->server: http get url:https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: http get url:https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js
note over browser: 
init data
end note

browser->server: http get url:https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: json string
note over browser: 
form.onsubmit(do not refresh page)
1.js method redrawNotes()
2.js method sendToServer(note)
end note
browser->server: http post url:https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->browser: json string
~~~
