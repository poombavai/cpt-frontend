//////CUSTOM JQUERIES
$(document).ready(function () {
    $("#sidebar, .table-scroll, .created-tax").mCustomScrollbar({
        axis:"xy",
        theme: "minimal"
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, .page').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('.right-sidebar-close, .right-sidebar-overlay, #add').on('click', function () {
        $('.right-sidebar-content').toggleClass('right-sidebar-open');
        $('.right-sidebar-overlay').toggleClass('overlay-active');
    });
});
   function alertValue(Message)
      {
      debugger;
       let value='';
       switch(Message)
       {
        case 'Success':
        return value= "'alert alert-success'|'far fa-thumbs-up'"
        break;
        case 'Error':
        return value ="'alert alert-danger'|'far fa-times-circle'"
        break;
        case 'Warning':
        return value="'alert alert-warning'|'fas fa-exclamation-triangle'"
        break;
        case 'Info':
        return value="'alert alert-info'|'fas fa-info-circle'"
        break;
        default : return value="'alert alert-info'|'fas fa-info-circle'"
        return value;
       }
  }


    function myalertFunction(alerttype,Message) {
    let alertmessage =alertValue(alerttype);
    var str = alertmessage;
        var altype = str.split("|")[0];
        var imgtype=str.split("|")[1];
    debugger;

       document.getElementById("goop").innerHTML = "<div class="+altype+" id='alert'></div>";
       document.getElementById("alert").innerHTML ="<i class="+imgtype+"></i><strong> "+Message+"</strong>" 
        setTimeout(function()
        { 
          document.getElementById("goop").innerHTML = "";
        }, 3000);
    }

$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('active').addClass('btn-danger');
            $item.addClass('active');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a")

            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.active').trigger('click');
});