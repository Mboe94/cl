
document.addEventListener('click', (event) => {
    const clicked = event.target.id || event.target.className;
    if(event.target.innerHTML == 'Læs mere...'){
        const containerElement = event.target.closest('.fordele_div');
        if (containerElement) {
            containerElement.style.gridTemplateRows = '1fr';
            event.target.innerHTML = 'Læs mindre...'
        }
    } else if (event.target.innerHTML == 'Læs mindre...'){
        const containerElement = event.target.closest('.fordele_div');
        if (containerElement) {
            containerElement.style.gridTemplateRows = '0fr';
            event.target.innerHTML = 'Læs mere...';
        }
    }
  })

