// Login to your team through the browser. Open the emoji selector and then run this on the browsers dev tools javascript console
var url, name, emoji = [];

$('#emoji_ul_slack span') // This is the emoji selector's Custom section.
  .each(function () { 
   // Extract the name
    name = $(this)
      .html()
      .replace(/:/g, ''); // without the enclosing colons.
    
    // Extract the url from the background-image property.
    url = $(this)
      .css('background-image')
      .replace(/.*["'](.*)['"].*/, '$1'); // Remove the`url("` and `")` portions.
    
    // Dump to console, then copy and paste the results into a file (eg: emojiURLs.txt).
    console.log(name,url)
  });