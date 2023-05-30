var xhr = new XMLHttpRequest();
var url = "https://api.thingspeak.com/channels/CHANNEL_ID/feeds.json?api_key=29WX0BEQIRNKLELU";
xhr.open("GET", url, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        // process the response data here
    }
};
xhr.send();
