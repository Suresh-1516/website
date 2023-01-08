function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: 'en' },
      'google_element'
    );
  }


  $(document).ready(function () {
    $("#google_element").hide();
  
    $(".icongt").click(function () {
  
      if ($('#google_element').is(':hidden')) {
        $('#google_element').show();
      } else {
  
        $('#google_element').hide();
      }
  
    });
  
  });
  
  
$(document).ready(function () {
  $(".languagesslide").hide();

  $("#languagebtn").mouseover(function () {

    if ($('.languagesslide').is(':hidden')) {
      $(".languagesslide").slideDown("slow");
      $(".questionsslide").hide();
      $(".exercisesslide").hide();
      $(".mycodeslide").hide();
    
    }   
  });

});

$(document).ready(function () {
  $(".exercisesslide").hide();

  $("#exercisesbtn").mouseover(function () {

    if ($('.exercisesslide').is(':hidden')) {
      $(".exercisesslide").slideDown("slow");
      $(".languagesslide").hide();
      $(".questionsslide").hide();
      $(".mycodeslide").hide();
    
    }   
  });

});

$(document).ready(function () {
  $(".questionsslide").hide();

  $("#questionsbtn").mouseover(function () {

    if ($('.questionsslide').is(':hidden')) {
      $(".questionsslide").slideDown("slow");
      $(".languagesslide").hide();
      $(".exercisesslide").hide();
      $(".mycodeslide").hide();

    }   
  });

});



$(document).ready(function () {
  $(".mycodeslide").hide();

  $("#mycodebtn").mouseover(function () {

    if ($('.mycodeslide').is(':hidden')) {
      $(".mycodeslide").slideDown("slow");
      $(".languagesslide").hide();
      $(".questionsslide").hide();
      $(".exercisesslide").hide();
    }   
  });

});