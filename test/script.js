var nav = document.querySelector('.nav');
var navItems = nav.querySelectorAll('a');

window.onscroll = function () {
  onScrollNav(navItems);
}

function onScrollNav(items) {
  items.forEach(el => {
    const itemHref = el.getAttribute('href').replace('#', '');
    const itemID = document.getElementById(itemHref);
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const elementOffsetTop = itemID.offsetTop;
    const elementHeight = itemID.offsetHeight;

    let percentage
    if (scrollTop >= elementOffsetTop) {
      percentage = 100
    } else if (scrollTop < elementOffsetTop - viewportHeight) {
      percentage = 0
    } else {
      percentage = 100 * (scrollTop - (elementOffsetTop - viewportHeight)) / elementHeight
    }

    let progress = Math.min(100, Math.max(0, percentage));
    el.parentElement.querySelector('div').style.width = progress + "%";
  })
}
