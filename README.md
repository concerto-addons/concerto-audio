# Concerto 2 Audio Plugin
This plugin provides support to add audio content in Concerto 2, such as shoutcast or icecast.

** This plugin is currently not supported by concerto-frontend. **

1.  Add the plugin by selecting it from the 'Concerto Plugins'source.
2.  You may need to restart your webserver.
3.  Create a new Feed for audio content, and set it to only allow Audio content.
4.  Change your template to have a field for audio.  You have to add a field Dynamic to your template (you can leave the positioning as all zeros), and then subscribe it to the feed in step 3. Audio content has a hard-coded duration of 24 hours.
5. Add an audio content item to the feed.  _For example, the url shown as placeholder text in the audio url field was obtained by going to shoutcast.com, starting a stream, and looking in the developer console to see the url for the stream._

Concerto 2 Audio is licensed under the Apache License, Version 2.0.
