//boton para cambiar el tema del index
const darkModeButton = document.getElementById('boton');
    const body = document.body;
    
const luna = document.getElementById('luna');

    darkModeButton.addEventListener('click', () => {
        body.classList.toggle('bg-dark');
        body.classList.toggle('text-light');
        //crear condicion if para id luna
        if (luna.classList.contains('fa-moon')) {
        luna.classList.remove('fa-moon');
        luna.classList.add('fa-sun');
        }
        else{
            luna.classList.remove('fa-sun');
            luna.classList.add('fa-moon');
            }              
    });

    window.addEventListener('scroll', function() {
        var button = document.getElementById('boton');
        var rect = button.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
            button.style.visibility = 'hidden';
        } else {
            button.style.visibility = 'visible';
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('animate__animated', 'animate__pulse');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('animate__animated', 'animate__pulse');
        });
    });