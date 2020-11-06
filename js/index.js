$(function () {
    var flag = true;
    $(window).scroll(function () {
      if (flag) {
        var st = $(this).scrollTop();
        if (st >= 600) {
          $("#floorNav").fadeIn();
        } else {
          $("#floorNav").fadeOut();
        }

        $("#content li").each(function () {
          if (st >= $(this).offset().top - $(this).outerHeight() / 2) {
            var index = $(this).index();
            $("#floorNav li").eq(index).addClass("hover").siblings().removeClass(
              "hover");
          }
        })
      }
    })
    $("#floorNav li:not(:last)").click(function () {
      flag = false;
      $(this).addClass("hover").siblings().removeClass("hover");
      var index = $(this).index();
      $("html,body").animate({
        "scrollTop": $("#content li").eq(index).offset().top
      }, 500, function () {
        flag = true;
      });
    })

    $("#floorNav li:last").click(function () {
      $("html,body").animate({
        "scrollTop": 0
      }, 500);
    })

  })