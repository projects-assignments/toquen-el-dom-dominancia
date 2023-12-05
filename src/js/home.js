const buttonsHome1 = document.getElementsByClassName('button-try-home');
for (let i = 0; i < buttonsHome1.length; i++) {
  buttonsHome1[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = '#161515';
    this.style.border = '2px solid #D99923';
    this.style.color = '#fff';
  });
  buttonsHome1[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '#D99923';
    this.style.border = 'none';
    this.style.color = 'initial';
  });
}

const buttonsHome2 = document.getElementsByClassName('button-instruments-home');
for (let i = 0; i < buttonsHome2.length; i++) {
  buttonsHome2[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = '#161515';
    this.style.border = '2px solid #D99923';
    this.style.color = '#fff';
  });
  buttonsHome2[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '#D99923';
    this.style.border = 'none';
    this.style.color = 'initial';
  });
}


  
  

