# Virtual Reddit
A way to browse Reddit in VR using [React360](https://facebook.github.io/react-360/)

Live version available at [reddit360.com](https://reddit360.com)
***
## Getting started
1. Register a developer app with reddit [more details here](https://github.com/reddit-archive/reddit/wiki/oauth2)
2. Then copy the contents of configTemplate folder to a folder called config and replace the values in the `apiKeys.js` file
3. Then install node and npm (if you don't have it)
4. Open this directory in a terminal and then run...
    * npm install
    * npm start
5. Then you can see the project running on localhost:8081/index.html

***
## Troubleshooting
### Image not loading 
* You're not seeing an image because it can be tricky to download certain
images within React-360. Unfortunately, since reddit hosted images do not
have Access-Control-Allow-Origin headers, I will have to run them through a
proxy to get them properly [and safely](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
available on Virtual Reddit. I don't want to do that quite yet, because I'll
have to pay for the network traffic of sending the images through my
potential proxy server.
* Until I set up a proxy, you will only be able to view
externally hosted images like those from imgur. Sorry about that!
* However, If you install the Chrome extension "Allow-Control-Allow-Origin,"
you can get around this issue, but make sure you turn off the extension after
using it here. [CORS protections are there for a reason!](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
### Api Key issue
- Make sure your files in your config folder (from step 2 of Getting Started) match the correct format in configTemplate