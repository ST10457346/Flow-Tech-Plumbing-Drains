
(function () {
   
    const burger = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    function closeMenu() {
        if (!burger || !navLinks) return;
        navLinks.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    }

    if (burger && navLinks) {
        burger.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            burger.classList.toggle('active', isOpen);
            burger.setAttribute('aria-expanded', isOpen);
        });

        
        document.addEventListener('click', function (e) {
            if (!e.target.closest('#burgerMenu') && !e.target.closest('#navLinks')) {
                closeMenu();
            }
        });

    
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) closeMenu();
        });
    }

    
    const enquiryForm = document.querySelector('main form');
    const formStatus = document.getElementById('formStatus');

    if (enquiryForm && formStatus) {
        enquiryForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            formStatus.textContent = 'Sending...';

            try {
                const response = await fetch(enquiryForm.action, {
                    method: 'POST',
                    body: new FormData(enquiryForm),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.textContent = 'Thank you! Your enquiry has been sent. We will contact you shortly.';
                    enquiryForm.reset();
                } else {
                    formStatus.textContent = 'Something went wrong. Please try again or contact us on WhatsApp.';
                }
            } catch (error) {
                formStatus.textContent = 'Network error. Please try again.';
            }
        });
    }
})();

    