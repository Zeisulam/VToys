document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".product-carousel .product");
    const prevArrow = document.querySelector(".carousel-arrow.prev");
    const nextArrow = document.querySelector(".carousel-arrow.next");
    const dots = document.querySelectorAll(".carousel-dot");
    let currentItem = 0;

    function showItem(index) {
        if (index < 0 || index >= carouselItems.length) return;

        for (let i = 0; i < carouselItems.length; i++) {
            carouselItems[i].classList.remove("active");
            dots[i].classList.remove("active");
        }

        carouselItems[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function showNextItem() {
        currentItem = (currentItem + 1) % carouselItems.length;
        showItem(currentItem);
    }

    function showPreviousItem() {
        currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentItem);
    }

    function showItemByDot(dotIndex) {
        showItem(dotIndex);
        currentItem = dotIndex;
    }

    prevArrow.addEventListener("click", function () {
        showPreviousItem();
    });

    nextArrow.addEventListener("click", function () {
        showNextItem();
    });

    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            showItemByDot(index);
        });
    });

    showItem(currentItem);
    setInterval(showNextItem, 2500); // Change slide every 2.5 seconds
});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    var animateElements = document.querySelectorAll("#animateElement[data-animate='fade']");

    animateElements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add("animated");
        } else {
            element.classList.remove("animated");
        }
    });
}

window.addEventListener("scroll", handleScrollAnimations);
window.addEventListener("DOMContentLoaded", handleScrollAnimations);

function goToProducts(category) {
    var url = 'products.html#' + category;
    var win = window.open(url, '_blank');
    win.focus();
}

