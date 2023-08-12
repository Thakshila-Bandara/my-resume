window.onscroll = function() {scrollActive()};

//This part for showing active link in navbar

function scrollActive(){
    
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.header-middle a');

        window.onscroll = () => {
            sections.forEach(sec => {

                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    
                    navLinks.forEach(links => {

                        links.classList.remove('active');
                        document.querySelector('.header-middle a[href*=' + id + ']').classList.add('active');
                    });
                }
            });
        };

    
    
  };
  