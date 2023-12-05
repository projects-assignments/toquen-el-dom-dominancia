const buttonsInstruments = document.getElementsByClassName('button-instruments');

for (let i = 0; i < buttonsInstruments.length; i++) {
    buttonsInstruments[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#161515';
        this.style.border = '2px solid #D99923';
        this.style.color = '#fff';
    });

    buttonsInstruments[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = '#D99923';
        this.style.border = 'none';
        this.style.color = 'initial';
    });
}



