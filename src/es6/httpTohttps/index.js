if (window.location.protocol == "http:") {
    var httpsURL = "https://" + window.location.hostname;
    window.location = httpsURL;
}