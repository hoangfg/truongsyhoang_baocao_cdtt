//copy menu for mobile
import { Swiper } from 'swiper';
function copyMenu() {
    //copy inside .dpt-cat to .deparment
    var daptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector(".deparments")
    dptPlace.innerHTML = daptCategory.innerHTML

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav')
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector(".header-top .wrapper")
    var topPlace = document.querySelector(".off-canvas .thetop-nav")
    topPlace.innerHTML = topNav.innerHTML
    // console.log(topPlace);
}
copyMenu()
// show mobile menu
const menuButton = document.querySelector(".trigger"),
    closeButton = document.querySelector(".t-close"),
    addClass = document.querySelector(".site")
menuButton.addEventListener('click', function () {
    addClass.classList.add('showmenu')
})
closeButton.addEventListener('click', function () {
    addClass.classList.remove('showmenu')
})

// show submenu on mobile
const submenu = document.querySelectorAll(".has-child .icon-small")
submenu.forEach((menu) => menu.addEventListener("click", toggle))

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null)
    if (this.closest('.has-child').classList != 'expand')
        this.closest('.has-child').classList.toggle('expand')
}
// slider
const swiper = new Swiper('.swiper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

// show menu search
const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site')

searchButton.addEventListener('click', function () {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function () {
    showClass.classList.remove('showsearch')
})
// show dpt menu
const dptButton = document.querySelector('.dpt-cat ,dpt-trigger'),
    dptClass = document.querySelector('.site')
dptButton.addEventListener('click', function () {
    dptClass.classList.toggle('showdpt')
})

// product image slider
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32
        }
    }
});

var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    thumbs: {
        swiper: productThumb,
    }
});

// stock products bar width percentage
var stocks = document.querySelectorAll(".products .stock");
for (let x = 0; x, stocks.length; x++) {
    let stock = stocks[x].dataset.stock,
        available = stocks[x].querySelector('.qty-available').innerHTML,
        sold = stocks[x].querySelector('.qty-sold').innerHTML,
        percent = sold * 100 / stock;

    stocks[x].querySelector('.available').style.width = percent + "%"
}

// show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show')
        }
    }, 250)
})
// close by click outsider
document.addEventListener("click", (e) => {
    const isClosest = e.target.closest(divtoShow);
    if (!isClosest && divPopup.classList.contains("show")) {
        divPopup.classList.remove("show");
    }
});










function submitFilters() {
    // Lấy tất cả các input checkbox trong khối lọc "Category"
    const categoryCheckboxes = document.querySelectorAll('.filter-block#category input[type="checkbox"]');

    // Lấy tất cả các input checkbox trong khối lọc "Activity"
    const activityCheckboxes = document.querySelectorAll('.filter-block#activity input[type="checkbox"]');

    // Lấy tất cả các input checkbox trong khối lọc "Brand"
    const brandCheckboxes = document.querySelectorAll('.filter-block#brand input[type="checkbox"]');

    // Lấy giá trị của input radio trong khối lọc "Color"
    const selectedColor = document.querySelector('.filter-block#color input[type="radio"]:checked');



    // Tiến hành xử lý các giá trị đã lấy được ở trên
    // ...

    // Ví dụ: In các giá trị đã chọn ra console
    console.log("Selected Category:", getSelectedValues(categoryCheckboxes));
    console.log("Selected Activity:", getSelectedValues(activityCheckboxes));
    console.log("Selected Brand:", getSelectedValues(brandCheckboxes));
    console.log("Selected Color:", selectedColor ? selectedColor.id : null);

}

// Hàm trợ giúp để lấy giá trị được chọn trong một tập hợp các checkbox
function getSelectedValues(checkboxes) {
    const selectedValues = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.id);
        }
    });
    return selectedValues;
}
// show modal on load
window.onload = function () {
    document.querySelector('.site').classList.toggle('showmodal')
}

document.querySelector('.modalclose').addEventListener('click', function () {
    document.querySelector('.site').classList.remove('showmodal')
})