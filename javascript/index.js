window.addEventListener('DOMContentLoaded', function () {

    const navItems = document.querySelectorAll('.nav');


    showActive = (x) => {
        for (i = 0; i < navItems.length; i++) {
            if (i == x) {
                navItems[i].classList.add('active');
            } else {
                navItems[i].classList.remove('active');
            }
        }
    }




})