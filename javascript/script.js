setLoadSmallScreen();
onExampleClick();
scrollExamples();


function onExampleClick() {
    var example = document.getElementsByClassName('example');
    var textfield = document.getElementsByClassName('code_area')[0];

    for(i = 0; i < example.length; i++) {
        example[i].addEventListener('click', function(e) {
            this.style.borderStyle = 'inset';
            resetExamples(this, example);

            textfield.innerText = this.innerText;
        });

        example[i].addEventListener('mousedown', function(e) {
            this.style.cursor = 'grabbing';
        });
    }
}

function resetExamples(exclude, elements) {
    for(i = 0; i < elements.length; i++) {
        if(elements[i] != exclude) {
            elements[i].style.borderStyle = 'outset';
        }
        elements[i].style.cursor = 'grab';
    }
}

function scrollExamples() {
    var slider = document.getElementById('examples_slider');
    let hold = false;


    slider.addEventListener('mousedown', e => {
        hold = true;
    });

    slider.addEventListener('mousedown', e => {
        if(hold) {
        }
    });
}

function setLoadSmallScreen() {
    let textfield = document.getElementsByClassName('code_area')[0];
    let examples_slider = document.getElementById('examples_slider');

    
    console.log(examples_slider.height + ' ' + window.screen.availWidth + ' ' );
    examples_slider.height = window.screen.availHeight;

    if(window.screen.availWidth < 1024) {
        textfield.rows = 50;
        textfield.cols = 40;
    } 
}