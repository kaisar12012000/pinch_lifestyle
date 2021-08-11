//initialize aos
AOS.init();



//for loader
window.onload = ()=>{
  //alert("Hey");
  let loader = document.getElementById("loader");
  loader.classList.add("invisible");
}


//for scroll to top button

var topButton = document.getElementById("goTopBtn");

window.onscroll = () => {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.classList.remove("invisible");
  } else {
    topButton.classList.add("invisible");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

topButton.addEventListener('click',topFunction);


// statistics
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj1 = document.getElementById("clientCount1");
  const obj2 = document.getElementById("clientCount2");
  const obj3 = document.getElementById("clientCount3");
  const obj4 = document.getElementById("clientCount4");
  const obj5 = document.getElementById("clientCount5");
  const obj6 = document.getElementById("clientCount6");

function animateCounters(time){
  animateValue(obj1, 0, 50, time);
  animateValue(obj2, 0, 200, time);
  animateValue(obj3, 0, 150, time);
  animateValue(obj4, 0, 200, time);
  animateValue(obj5, 0, 300, time);
  animateValue(obj6, 0, 50, time);
}

//adding waypoint

var Statsaypoint = new Waypoint({
element: document.getElementById('statistics'),
handler: function(direction) {
  animateCounters(2000);
}
})


//modal hide and show

function openModal() {
const modal = document.querySelector(".modal");
modal.classList.toggle("visible");
modal.classList.toggle("invisible");
}

function closeModal() {
const modal = document.querySelector(".modal");
modal.classList.toggle("visible");
modal.classList.toggle("invisible");
}


// navbar code 

document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
  
    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
          this.querySelectorAll('.submenu').forEach(function(everysubmenu){
            // hide every submenu as well
            everysubmenu.style.display = 'none';
          });
      })
    });
  
    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
      element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('submenu')) {	
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            if(nextEl.style.display == 'block'){
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
  
          }
      });
    })
  }
  // end if innerWidth
  }); 
  // DOMContentLoaded  end

