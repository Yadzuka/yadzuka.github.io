onExampleClick();

function onExampleClick() {
    let choosed = false;
    var x = document.getElementsByClassName('example');
    let number = [];

    for(i = 0; i < x.length; i++) {
        number[i] = i;
        console.log(number);
        x[i].addEventListener('click', function(e) {
            this.style.borderStyle = 'inset';
            resetExamples(this, x);
        });
    }
}

function resetExamples(exclude, elements) {
    for(i = 0; i < elements.length; i++) {
        if(elements[i] != exclude) {
            elements[i].style.borderStyle = 'outset';
        }
    }
}