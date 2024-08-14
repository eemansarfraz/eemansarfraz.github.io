
// Easy selector helper function
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
}
  
// Easy event listener function
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
}

// Scrolls to an element with header offset
const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
        top: elementPos - 20,
        behavior: 'smooth'
    })
}

// Scroll with offset on links with a class name .scrollto
on('click', '.scrollto', function(e) {
    console.log(e);
    if (select(this.hash)) {
      e.preventDefault()
      scrollto(this.hash)
    }
}, true)
  
// Hero type effect
const typed = select('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}
  
// Function to open a modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Function to close a modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.style.overflow = ""; 
}

// Attach event listeners to buttons and close elements
document.querySelectorAll('[id^="proj"]').forEach(button => {
    button.onclick = function() {
        var modalId = this.id + "-modal";
        openModal(modalId);
    };
});

document.querySelectorAll('.close').forEach(span => {
    span.onclick = function() {
        var modalId = this.getAttribute('data-target');
        closeModal(modalId);
    };
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}
