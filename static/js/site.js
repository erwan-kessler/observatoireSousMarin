

document.addEventListener('DOMContentLoaded', function() {
    changeExternalLinks()
}, false);

function changeExternalLinks(){
    var links = document.getElementsByTagName("a");
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        }
    }
}
