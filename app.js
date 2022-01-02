$(document).ready(function() {

    //show hide animation

    $('.show_hide').click(() => {
        if ($('.show_hide img').css('left') == '0px') {
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 0);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 50);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 100);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 150);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 200);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 250);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 300);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 350);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 400);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 450);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 500);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 550);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 600);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 650);
            setTimeout(() => {
                $('.show_hide img').css({ left: '-=34px' })
            }, 700);
        }
        if ($('.show_hide img').css('left') == '-510px') {
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 0);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 50);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 100);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 150);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 200);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 250);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 300);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 350);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 400);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 450);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 500);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 550);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 600);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 650);
            setTimeout(() => {
                $('.show_hide img').css({ left: '+=34px' })
            }, 700);
        }
    })

    //on click on show_hide display mobile_menu

    $('.show_hide').click(() => {
        if ($('.show_hide img').css('left') == '0px') {
            $('.menu_mobile_wrapper').slideDown('2000');
        }
        if ($('.show_hide img').css('left') == '-510px') {
            $('.menu_mobile_wrapper').slideUp('2000');
        }
    })


    //slide down - up for dropdowns

    $('.drowdown_about_us').mouseenter(() => {
        $(".hidden_about_us_cont").slideDown(200);
    })
    $('.drowdown_about_us').mouseleave(() => {
        $(".hidden_about_us_cont").slideUp(200);
    })

    $('.language_laptop').mouseenter(() => {
        $(".language_hidden").slideDown(200);
    })
    $('.language_laptop').mouseleave(() => {
        $(".language_hidden").slideUp(200);
    })

    //carousel 1

    var timer1 = setInterval(carousel1, 4000);
    var counter1 = 1; //for carousel items
    var counter2 = 3; //for counting from 0 to 5 , and this counter is necessary because carousel counter goes to infinity. 

    function carousel1() {
        var img = $('.carousel_1_item');
        var width = img[0].clientWidth;
        for (var i = 0; i < img.length; i++) { //this parth transforms carousel elements left side by their width.
            img.css({ transform: `translateX(${-counter1*(width)}px)` })
        }
        $(img[counter2]).css('left', '+=500%') //adds 500% to every item's left property
        counter2++;
        if (counter2 == 5) {
            counter2 = 0;
        }
        counter1 += 1;
    }

    $('.carousel_1_right_arrow').click(() => {
        clearInterval(timer1);
        var img = $('.carousel_1_item');
        var width = img[0].clientWidth;
        console.log('c1 start:' + counter1);
        for (var i = 0; i < img.length; i++) { //this parth transforms carousel elements left side by their width.
            img.css({ transform: `translateX(${-counter1*width}px)` })
        }
        console.log('c2 start:' + counter2);
        $(img[counter2]).css('left', '+=500%') //adds 500% to every item's left property
        console.log(counter2 + 'item has been shifted to the right')
        counter2++;
        if (counter2 == 5) {
            counter2 = 0;
        }
        console.log('c2 end:' + counter2);
        counter1 += 1;
        console.log('c1 end:' + counter1);
        timer1 = setInterval(carousel1, 4000);
    })

    $('.carousel_1_left_arrow').click(() => {
        clearInterval(timer1);
        counter1 -= 2;
        console.log('c1 start:' + counter1);
        var img = $('.carousel_1_item');
        var width = img[0].clientWidth;
        for (var i = 0; i < img.length; i++) { //this parth transforms carousel elements left side by their width.
            img.css({ transform: `translateX(${-counter1*width}px)` })
        }
        console.log('c2 start:' + counter2);
        $(img[counter2 - 1]).css('left', '-=500%') //adds 500% to every item's left property
        console.log(counter2 - 1 + 'item has been shifted to the left')
        counter2--;
        if (counter2 == 0) {
            counter2 = 5;
        }
        console.log('c2 end:' + counter2);
        counter1++;
        console.log('c1 end:' + counter1);
        timer1 = setInterval(carousel1, 4000);
    })



    //pop up box 

    $('.request').click(() => {
        $('.pop_up_box').css({ right: '0px' });
    })
    $('#pop_up_box_close').click(() => {
        $('.pop_up_box').css({ right: '-300px' });
    })

    //scroll button 

    $('.scroll').click(() => {
        $("html, body").animate({
                scrollTop: $(".scroll").position().top + 93
            },
            1000
        );
    })

    //elemnt's animations

    $(window).scroll(() => {
        if ($(window).scrollTop() > $('.grid_cont').offset().top - 400) {
            setTimeout(() => {
                $('.grid_item').eq(0).css({ transform: 'translateX(0px)', opacity: '1' })
            }, 0);
            setTimeout(() => {
                $('.grid_item').eq(1).css({ transform: 'translateX(0px)', opacity: '1' })
            }, 100);
            setTimeout(() => {
                $('.grid_item').eq(2).css({ transform: 'translateX(0px)', opacity: '1' })
            }, 200);
            setTimeout(() => {
                $('.grid_item').eq(3).css({ transform: 'translateX(0px)', opacity: '1' })
            }, 300);
            setTimeout(() => {
                $('.grid_item').eq(4).css({ transform: 'translateX(0px)', opacity: '1' })
            }, 400);
            setTimeout(() => {
                $('.grid_item').eq(5).css({ transform: 'translateX(0px)', opacity: '1' })
            }, 500);
            setTimeout(() => {
                $('.grid_item').eq(6).css({ transform: 'translateX(0px)', opacity: '1' })
            }, 600);
        }
    })

    if ($(window).scrollTop() > $('.grid_cont').offset().top - 400) {
        setTimeout(() => {
            $('.grid_item').eq(0).css({ transform: 'translateX(0px)', opacity: '1' })
        }, 0);
        setTimeout(() => {
            $('.grid_item').eq(1).css({ transform: 'translateX(0px)', opacity: '1' })
        }, 100);
        setTimeout(() => {
            $('.grid_item').eq(2).css({ transform: 'translateX(0px)', opacity: '1' })
        }, 200);
        setTimeout(() => {
            $('.grid_item').eq(3).css({ transform: 'translateX(0px)', opacity: '1' })
        }, 300);
        setTimeout(() => {
            $('.grid_item').eq(4).css({ transform: 'translateX(0px)', opacity: '1' })
        }, 400);
        setTimeout(() => {
            $('.grid_item').eq(5).css({ transform: 'translateX(0px)', opacity: '1' })
        }, 500);
        setTimeout(() => {
            $('.grid_item').eq(6).css({ transform: 'translateX(0px)', opacity: '1' })
        }, 600);

    }

});