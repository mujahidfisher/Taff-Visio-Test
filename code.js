$(document).ready(function () {
  var currentIndex = 0;
  function showSlide(index) {
    $(".interiorImg").hide();
    $(".interiorImg:eq(" + index + ")").fadeIn();
    $(".indicator").removeClass("active");
    $(".indicator:eq(" + index + ")").addClass("active");
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % $(".interiorImg").length;
    showSlide(currentIndex);
  }
  showSlide(currentIndex);
  var intervalId = setInterval(function () {
    nextSlide();
  }, 6000);
  $(".next").on("click", function () {
    clearInterval(intervalId);
    nextSlide();
  });
  $(".autoplay-indicators .indicator").on("click", function () {
    clearInterval(intervalId);
    currentIndex = $(this).index();
    showSlide(currentIndex);
  });
});
let list = [
  {
    id: 1,
    heading_1: "THE VISIO ",
    heading_2: "DIFFERENCE",
    sub_heading: "HEDGE FUND",
    sub_heading2: "UNIT TRUST",
  },
  {
    id: 2,
    heading_1: " MEET THE  ",
    heading_2: "  VISIO TEAM",
    sub_heading: "SEGREGATED MANDATES ",
    sub_heading2: "AFRICA FUNDS",
  },
  {
    id: 3,
    heading_1: " OUR DESIGNS AND ",
    heading_2: " PRODUCTS",
    sub_heading: "FUND PERFORMANCE ",
    sub_heading2: "RISK MANAGEMENT ",
  },
];
let target = document.querySelector(".taff");
list.forEach((element) => {
  target.innerHTML += `
    <div class="container">
    <div class="container-banner">
    <i class="fa-solid fa-greater-than"></i>
     <div class="heading">
     <h1>
      ${element.heading_1} <br>
      ${element.heading_2}
      </h1>
     </div>
     </div>
     <div class="button-holder">
      <P><span class="name-icon">${element.sub_heading}</span><span class="icon">></span></P>
      <P><span class="name-icon">${element.sub_heading2}</span> <span class="icon">></span></P>
     </div>
  </div>
    `;
});
