function addEvent(el, eType, fn, uC) {
  if (el.addEventListener) {
    el.addEventListener(eType, fn, uC);
    return true;
  }
  else if (el.attachEvent) {
    return el.attachEvent('on' + eType, fn);
  }
  else {
    el['on' + eType] = fn;
  }
}

addEvent(
  document.getElementById("hamburg"),
  "change",
  function(){
    if(this.checked == true){
      document.getElementById("navbar").style.display = "block";
    }
  },
  false);

addEvent(
  document.getElementById("hamburg"),
  "change",
  function(){
    if(this.checked == false){
      document.getElementById("navbar").style.display = "none";
    }
  },
  false);

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//horizontal scrolling
var item = document.getElementsByTagName('HTML')[0];

window.addEventListener('wheel', function(e) {
  if (e.deltaY > 0) {
    item.scrollLeft += 50;
  } else if (e.deltaY < 0) {
    item.scrollLeft -= 50;
  }
});

//smooth scrolling on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
