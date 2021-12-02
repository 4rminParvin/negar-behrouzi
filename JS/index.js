// Update copyright date
<<<<<<< HEAD
let date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();

// Auto-resizable mail textarea
const textarea = document.getElementsByTagName("textarea");
for (let i = 0; i < textarea.length; i++) {
  textarea[i].setAttribute("style", "height:" + (textarea[i].scrollHeight) + "px;overflow-y:hidden;");
  textarea[i].addEventListener("input", OnInput, false);
}

function OnInput() {  
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}
=======

let date = new Date();
document.getElementById('year').innerHTML = date.getFullYear();

// Auto-resizable mail textarea

const textarea = document.getElementsByTagName('textarea');
for (let i = 0; i < textarea.length; i++) {
  textarea[i].setAttribute(
    'style',
    'height:' + textarea[i].scrollHeight + 'px;overflow-y:hidden;'
  );
  textarea[i].addEventListener('input', OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
}

// Header changes from Negar Behrouzi to N

function isTopOfElementInView(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top <= 0
  );
};

function isBottomOfElementInView(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

function isMiddleOfElementInView(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2)
  );
};

document.addEventListener('scroll', function changeHeader() {
  const text = isTopOfElementInView(document.getElementById('about-heading')) ?
  'N' : 'Negar Behrouzi';
  document.getElementById('header1').textContent = text;
});

// Add active class to navbar

document.addEventListener('scroll', function activateNavbar() {
  if (isTopOfElementInView(document.getElementById('about-heading'))) {
    document.getElementsByClassName('about-nav')[0].style.fontWeight = "bold";
    document.getElementsByClassName('portfolio-nav')[0].style.fontWeight = "normal";
    document.getElementsByClassName('contact-nav')[0].style.fontWeight = "normal";
  }
  if (isTopOfElementInView(document.getElementById('portfolio-heading'))) {
    document.getElementsByClassName('portfolio-nav')[0].style.fontWeight = "bold";
    document.getElementsByClassName('about-nav')[0].style.fontWeight = "normal";
    document.getElementsByClassName('contact-nav')[0].style.fontWeight = "normal";
  }
  if (isBottomOfElementInView(document.getElementById('contact-heading'))) {
    document.getElementsByClassName('contact-nav')[0].style.fontWeight = "bold";
    document.getElementsByClassName('about-nav')[0].style.fontWeight = "normal";
    document.getElementsByClassName('portfolio-nav')[0].style.fontWeight = "normal";
  }
});

// Change Aside Text

document.addEventListener('scroll', function changeAsideText() {
  if (isMiddleOfElementInView(document.getElementsByClassName('main-flex')[0])) {
    document.querySelector('.transform p').innerHTML = "projects";
  }

  if (isMiddleOfElementInView(document.getElementsByClassName('main-grid')[0])) {
    document.querySelector('.transform p').innerHTML = "illustrations";
  }
  
})

// Change colors based on season

let month = date.getMonth();
if (0 <= month && month <= 5) {

  document.getElementsByClassName('about')[0].style.backgroundColor = "#b8dcd5";
  document.getElementsByTagName('header')[0].style.backgroundColor = "#70beaf";
  document.getElementsByClassName('contact')[0].style.backgroundColor = "#b8dcd5";
  document.getElementsByClassName("transform")[0].style.backgroundColor = "#b8dcd5";
  document.querySelector(".instagram img").src = "./Resources/Portfolio/Spring/Instagram.png";
  document.querySelector(".linkedin img").src = "./Resources/Portfolio/Spring/LinkedIn.png";
  document.querySelector(".phone img").src = "./Resources/Portfolio/Spring/Phone.png";
  document.querySelector(".mail img").src = "./Resources/Portfolio/Spring//Mail.png";
  document.querySelector(".skype img").src = "./Resources/Portfolio/Spring/Skype.png"

} else if (6 <= month && month <= 8) {
  
  document.getElementsByClassName('about')[0].style.backgroundColor = "#fbd4a7";
  document.getElementsByTagName('header')[0].style.backgroundColor = "#d89349";
  document.getElementsByClassName('contact')[0].style.backgroundColor = "#fbd4a7";
  document.getElementsByClassName("transform")[0].style.backgroundColor = "#fbd4a7";
  document.querySelector(".instagram img").src = "./Resources/Portfolio/Autumn/Instagram.png";
  document.querySelector(".linkedin img").src = "./Resources/Portfolio/Autumn/LinkedIn.png";
  document.querySelector(".phone img").src = "./Resources/Portfolio/Autumn/Phone.png";
  document.querySelector(".mail img").src = "./Resources/Portfolio/Autumn/Mail.png";
  document.querySelector(".skype img").src = "./Resources/Portfolio/Autumn/Skype.png"

} else if (9 <= month && month <= 11) {

  document.getElementsByClassName('about')[0].style.backgroundColor = "#d0e2ec";
  document.getElementsByTagName('header')[0].style.backgroundColor = "#80a3bf";
  document.getElementsByClassName('contact')[0].style.backgroundColor = "#d0e2ec";
  document.getElementsByClassName("transform")[0].style.backgroundColor = "#d0e2ec";
  document.querySelector(".instagram img").src = "./Resources/Portfolio/Winter/Instagram.png";
  document.querySelector(".linkedin img").src = "./Resources/Portfolio/Winter/LinkedIn.png";
  document.querySelector(".phone img").src = "./Resources/Portfolio/Winter/Phone.png";
  document.querySelector(".mail img").src = "./Resources/Portfolio/Winter/Mail.png";
  document.querySelector(".skype img").src = "./Resources/Portfolio/Winter/Skype.png";
  
}

// Nav button interactivity

const button = document.getElementsByClassName('button')[0];

button.addEventListener('click', function showDropdown() {
  const dropdownContent = document.getElementsByClassName('dropdown-container')[0];
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    button.classList.add('button-off-animate');
    button.classList.remove('button-on-animate');
  } else {
    dropdownContent.style.display = "block";
    button.classList.add('button-on-animate');
    button.classList.remove('button-off-animate');
  }
});

// Nav bar scroll

function findPos(obj) {
  let headerElement = document.getElementById('main-header').offsetHeight / 3;
  let curtop = 0;
  if (obj.offsetParent) {
      do {
          curtop += (obj.offsetTop - headerElement);
      } while (obj = obj.offsetParent);
  return curtop;
  }
}

let aboutNavArr = document.getElementsByClassName('about-nav');

for (let item of aboutNavArr) {
  item.addEventListener('click', function changeURL() {
    window.scroll(0, findPos(document.getElementById("about-heading")));
  });
}


let portfolioNavArr = document.getElementsByClassName('portfolio-nav');

for (let item of portfolioNavArr) {
  item.addEventListener('click', function changeURL() {
    window.scroll(0, findPos(document.getElementById("portfolio-heading")));
  });
}


let contactNavArr = document.getElementsByClassName('contact-nav');

for (let item of contactNavArr) {
  item.addEventListener('click', function changeURL() {
    window.scroll(0, findPos(document.getElementById("contact-heading")));
  });
}

// Projects modals

const projectsArr = document.getElementsByClassName('container');

for (let item of projectsArr) {
  let modal = item.getElementsByClassName('modal')[0];
  let modalTxt = modal.getElementsByTagName('p')[0];

  item.addEventListener('click', function showModal() {
    modal.style.display = "block";
    modalTxt.style.display = "block";
  })

  window.addEventListener('click', function closeModal(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

// Illustrations modals

const illustrationsArr = document.getElementsByClassName('container');

for (let item of illustrationsArr) {
  let modal = item.getElementsByClassName('modal')[0];

  item.addEventListener('click', function showModal() {
    modal.style.display = "block";
  })

  window.addEventListener('click', function closeModal(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
>>>>>>> finalize website except navbar on mobile
