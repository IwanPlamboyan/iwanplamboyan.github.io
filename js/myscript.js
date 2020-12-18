const darks = document.querySelectorAll('.dark-check');
const themes = document.querySelectorAll('.theme-setting');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

const darkTheme = function() {
    document.body.classList.add('dark');
    nav.classList.remove('navbar-light');
    logo.src="img/logo2.png";
    themes.forEach(theme => {
        theme.classList.add('fa-moon');
        theme.classList.remove('fa-sun');
    })
}

const lightTheme = function() {
    document.body.classList.remove('dark');
    nav.classList.add('navbar-light');
    logo.src="img/logo1.png";
    themes.forEach(theme => {
        theme.classList.remove('fa-moon');
        theme.classList.add('fa-sun');
    })
}

if (localStorage.getItem('dark-mode') === 'true') {
    darkTheme();
} else if (localStorage.getItem('dark-mode') === 'false') {
    lightTheme();
}

darks.forEach(dark => {
    dark.addEventListener('click', function() {
        if (this.checked) {
            // Dark
            darkTheme();
            localStorage.setItem('dark-mode', 'true');
        } else {
            // Light
            lightTheme();
            localStorage.setItem('dark-mode', 'false');
        }
    })
});

const navScroll = function() {
	if (window.scrollY > 70) {
        nav.classList.remove('bg-transparent');
        nav.classList.add('muncul');
	} else {
        nav.classList.add('bg-transparent');
        nav.classList.remove('muncul');
	}
}

document.addEventListener("scroll", navScroll)

const home = document.querySelector('.homee');
const move = 20
const images = document.querySelectorAll('.ani');
const profileImage = document.querySelector('.profile');

function movingElement(e) {
    const { offsetWidth: width, offsetHeight: height } = this
    let { x: x, y: y } = e

    const xMove = Math.round( (x / width * move) - (move / 2) )
    const yMove = Math.round( (y / height * move) - (move / 2) )

    images.forEach(image => {
        if (image.classList.contains('minus-float')) {
            image.style.transform = `translate(${-xMove}px, ${-yMove}px)`;
        } else {
            image.style.transform = `translate(${xMove}px, ${yMove}px)`;
        }
    })

    profileImage.style.transform = `rotateY(${xMove}deg)rotateX(${-yMove}deg)`;
}

home.addEventListener('mousemove', movingElement);

const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        icon.style.transition = "0.5s ease-in-out";
        icon.style.transform = "rotate(360deg)";
        icon.style.color = icon.dataset.color;
	})

	icon.addEventListener('mouseout', function() {
        icon.style.transition = "0.5s ease-in-out";
        icon.style.transform = "rotate(0deg)";
        icon.style.color = "";
	});
});

const move2 = 20
const gambar = document.querySelectorAll('.ani2');

function movingElementt(e) {
    const { offsetWidth: width, offsetHeight: height } = this
    let { x: x, y: y } = e

    const xMovee = Math.round( (x / width * move2) - (move2 / 2) )
    const yMovee = Math.round( (y / height * move2) - (move2 / 2) )

    gambar.forEach(image => {
        if (image.classList.contains('minus-float')) {
            image.style.transform = `translate(${-xMovee}px, ${-yMovee}px)`;
        } else {
            image.style.transform = `translate(${xMovee}px, ${yMovee}px)`;
        }
    })
}
document.body.addEventListener('mousemove', movingElementt);