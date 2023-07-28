$(".humber_menu").click(function () {
  $(".nav-ul").addClass("active");
  $(".backlayer").addClass("d-block");
  $("body").addClass("overflow-hidden");
});
$(".backlayer").click(function () {
  $(".nav-ul").removeClass("active");
  $(".backlayer").removeClass("d-block");
  $("body").removeClass("overflow-hidden");
  $(".arrivalAccordion").removeClass("active");
});
$(".nav-item .nav-link").click(function () {
  $(".nav-ul").removeClass("active");
  $(".backlayer").removeClass("d-block");
  $("body").removeClass("overflow-hidden");
});
