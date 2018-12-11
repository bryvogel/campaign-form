// LEARN MORE ACCORDION

$('.learn').click(function () {

    // REVEAL TARGET, CLOSE OTHERS
    var target = $(this).closest('.campaign-details').find('.hidden');
    target.slideToggle();

    $('.campaign-details').find('.hidden').not( target ).slideUp();

    // ADD CLASS TO ACTIVE PANEL
    var active = $(this).closest('.campaign-details');
    active.toggleClass('activeLearn');

    $('.campaign-details').not( active ).removeClass('activeLearn');

    // RESET BUTTON LABEL
    $('.campaign-details').find('.learn').text('Learn more');

    // CHANGE BUTTON TEXT
    $('.activeLearn').find('.learn').text('Show less');
});


// CAMPAIGN CHECKBOXES

    // NOT CHECKED BY DEFAULT
    var checkboxes = document.getElementsByTagName('input');

    for (var i=0; i<checkboxes.length; i++)  {
      if (checkboxes[i].type == 'checkbox')   {
        checkboxes[i].checked = false;
      }
    }

    // IF CHECKED, DO THIS
    $('.campaigns input:checkbox').change(function(){

      var enroll = $(this).closest('.campaign-details');

        if($(this).is(":checked")) {
            $(enroll).addClass("checked");
            $(enroll).find('.learn').addClass("checkedLearn");
            $(enroll).find('.enroll').addClass("checkedEnroll");
            $(enroll).find('.icon').addClass("checkedFill");
            $(this).siblings('span').html('Enrolled');
            $(enroll).find('.sampleButton .button').addClass("checkedDownload");

    // IF NOT, DO THIS
        } else {
            $(enroll).removeClass("checked");
            $(enroll).find('.learn').removeClass("checkedLearn");
            $(enroll).find('.enroll').removeClass("checkedEnroll");
            $(enroll).find('.icon').removeClass("checkedFill");
            $(this).siblings('span').html('Enroll');
            $(enroll).find('.sampleButton .button').removeClass("checkedDownload");
        }
    });

    $('body').on('click', '#checkAllValue', function () {
      if ($(this).hasClass('checkedAll')) {
          $(this).text('Enroll all');
          // $('input[type="checkbox"]', '.value').prop('checked', false);
      } else {
          // $(this).text('Unenroll all');
          $('input[type="checkbox"]', '.value').prop('checked', true);
      }
      // $(this).toggleClass('checkedAll');
      $('.campaigns input:checkbox').trigger('change');
    })

    $('body').on('click', '#checkAllRelationships', function () {
      if ($(this).hasClass('checkedAll')) {
          $(this).text('Enroll all');
          // $('input[type="checkbox"]', '.relationships').prop('checked', false);
      } else {
          // $(this).text('Unenroll all');
          $('input[type="checkbox"]', '.relationships').prop('checked', true);
      }
      // $(this).toggleClass('checkedAll');
      $('.campaigns input:checkbox').trigger('change');
    })




// AGENCY CHECKBOXES

    // IF CHECKED, DO THIS
    $('.agencyInfo input:checkbox').change(function(){

      var enroll = $(this).closest('.agency-details');

        if($(this).is(":checked")) {
            $(enroll).addClass("checked");
            $(enroll).find('.learn').addClass("checkedLearn");
            $(enroll).find('.enroll').addClass("checkedEnroll");
            $(enroll).find('.icon').addClass("checkedFill");
            $(this).siblings('span').html('Included');
            $(enroll).find('.sampleButton .button').addClass("checkedDownload");

    // IF NOT, DO THIS
        } else {
            $(enroll).removeClass("checked");
            $(enroll).find('.learn').removeClass("checkedLearn");
            $(enroll).find('.enroll').removeClass("checkedEnroll");
            $(enroll).find('.icon').removeClass("checkedFill");
            $(this).siblings('span').html('Include');
            $(enroll).find('.sampleButton .button').removeClass("checkedDownload");
        }
    });

    $('body').on('click', '#checkAllAgency', function () {
      if ($(this).hasClass('checkedAll')) {
          $(this).text('Include all');
          // $('input[type="checkbox"]', '.value').prop('checked', false);
      } else {
          // $(this).text('Unenroll all');
          $('input[type="checkbox"]', '.agencyInfo').prop('checked', true);
      }
      // $(this).toggleClass('checkedAll');
      $('.agencyInfo input:checkbox').trigger('change');
    })


// SVG INLINER

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
