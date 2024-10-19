function changeSelected(elem) {
    if (elem.classList.contains('selected')) {
        return;
    }

    var section = document.getElementsByClassName(elem.classList[0]);
    for (i=0; i<section.length; i++) {
        section[i].classList.remove('selected');
    }
    elem.classList.add('selected');
    
}