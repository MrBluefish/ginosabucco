document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scroll-to-top");

  window.onscroll = function() {
    scrollFunction();
  };

  scrollToTopBtn.onclick = function() {
    scrollToTop(scrollToTopBtn);
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  function scrollToTop(btn) {
    console.log("Scroll to top button clicked");
    btn.classList.add("animate");
    setTimeout(function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 1000);
  }
});