$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
    });
  });

  function redirecionar() {
    window.location.href = "https://calendly.com/fisioterapiarm/agendamento";
}