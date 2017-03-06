window.onload = function () {

    var mainNav = document.getElementById('main-nav');
    var menuItems = document.querySelectorAll('.dropdown li');
    var selectableNavs = document.querySelectorAll('.selectable-nav');

    menuItems[0].onclick = function () {
        menuItems[1].classList.remove('selected');
        this.classList.toggle('selected');
        if (document.querySelector('li.selected')) {
            mainNav.classList.add('opened');
            selectableNavs[0].classList.add('selected');
            selectableNavs[1].classList.remove('selected');
        }
        else
        { 
            mainNav.classList.remove('opened'); 
            selectableNavs[0].classList.remove('selected');
        }
    }
    menuItems[1].onclick = function () {
        menuItems[0].classList.remove('selected');
        this.classList.toggle('selected');
        if (document.querySelector('li.selected')) {
            mainNav.classList.add('opened');
            selectableNavs[1].classList.add('selected');
            selectableNavs[0].classList.remove('selected');
        }
        else
        { 
            mainNav.classList.remove('opened'); 
            selectableNavs[1].classList.remove('selected');
        }
    }

};