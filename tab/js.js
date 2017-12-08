function openLang(evt, lang) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent")
    for(i=0;i<tabcontent.length;i++) {
        tabcontent[i].style.display="none"
    }
    tablinks = document.getElementsByClassName("tablinks")
    for (i=0;i<tablinks.length;i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    document.getElementById(lang).style.display="block"
    evt.currentTarget.className += " active"

}

function init() {
    document.getElementsByClassName("tabcontent")[0].style.display = "block";

    document.getElementsByClassName("tablinks")[0].className+= " active";
}
