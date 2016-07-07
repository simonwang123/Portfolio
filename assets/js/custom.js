/* ============================================================
 * Plugin Core Init
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
 
'use strict';

(function() {
    window.signature = {
        initialize: function() {
            return $('.demo-signature svg').each(function() {
                var delay, i, len, length, path, paths, previousStrokeLength, results, speed;
                paths = $('path, circle, rect', this);
                delay = 0;
                results = [];
                for (i = 0, len = paths.length; i < len; i++) {
                    path = paths[i];
                    length = path.getTotalLength();
                    previousStrokeLength = speed || 0;
                    speed = length < 100 ? 20 : Math.floor(length);
                    delay += previousStrokeLength + 100;
                    results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
                }
                return results;
            });
        },
        animate: function() {
            return $('.demo-signature svg').each(function() {
                var delay, i, len, length, path, paths, results, speed;
                paths = $('path, circle, rect', this);
                results = [];
                for (i = 0, len = paths.length; i < len; i++) {
                    path = paths[i];
                    length = $(path).attr('data-length');
                    speed = $(path).attr('data-speed');
                    delay = $(path).attr('data-delay');
                    results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
                }
                return results;
            });
        }
    };
    $(document).ready(function() {

        // $('.demo-handbook').pgFloat({
        //     maxTopTranslate: 40, // stop parallax effect after element is moved up in given pixels. 0 = after element hides from the screen
        //     maxBottomTranslate: 300, // stop parallax effect after element is moved down in given pixels. 0 = after element hides from the screen
        //     speed: -0.1, // 0.1
        //     delay: 1000, // 1000
        //     curve: 'ease'
        // });

// ---------------------------------------- BEGIN SIMON CUSTOM JS ----------------------------------------
        var str1 = "Hi, I'm Simon.";
        var str2 = "Welcome to my website!";
        var text = "";
        var i = 0;
        var message = "first";
        document.getElementById('typewriter').innerHTML = text;


        function print(){
            if (message === "first"){
                var print1 = setInterval(function() {
                    text = str1.slice(0, i++);
                    document.getElementById('typewriter').innerHTML = text;
                    if (text === str1) {
                        clearInterval(print1);
                        message = "second";
                        setTimeout(print,2000);
                    }
                }, 60)
            }
            if (message === "second"){
                var print2 = setInterval(function() {
                    text = str1.slice(0, i--);
                    document.getElementById('typewriter').innerHTML = text;
                    if (text === "") {
                        clearInterval(print2);
                        message = "third";
                        print();
                    }
                }, 60)
            }
            if (message === "third"){
                var print3 = setInterval(function() {
                    text = str2.slice(0, ++i);
                    document.getElementById('typewriter').innerHTML = text;
                    if (text === str2) {
                        clearInterval(print3);
                        message = "fourth";
                        setTimeout(print,10000);
                    }
                }, 60)
            }
            if (message === "fourth"){
                var print4 = setInterval(function() {
                    text = str2.slice(0, --i);
                    document.getElementById('typewriter').innerHTML = text;
                    if (text === "") {
                        clearInterval(print4);
                        message = "first";
                        print();
                    }
                }, 60)
            }
        }
        setTimeout(print,50)
        // function print1(){
        //     i = 0;
        //     var print1 = setInterval(function(){
        //     text = str1.slice(0,++i);
        //     document.getElementById('typewriter').innerHTML = text;
        //     if(text === str1)
        //         clearInterval(print1);
        //   },50);
        // }
        // function print2(){
        //     i = 0;
        //     var print2 = setInterval(function(){
        //     text = str2.slice(0,++i);
        //     document.getElementById('typewriter').innerHTML = text;
        //     if(text === str2)
        //         clearInterval(print2);
        //   },50);
        // }
        // setTimeout(print1,50)
        // setTimeout(print2, 2000);

        // SCROLLING EFFECT
        $('.anchor-home').click(function() {
            $("#home").velocity("scroll", {
                duration: 800
            });
        });

        $('.anchor-biography').click(function() {
            $("#biography").velocity("scroll", {
                duration: 800
            });
        });


        $('.anchor-interests').click(function() {
            $("#interests").velocity("scroll", {
                duration: 800
            });
        });

        $('.anchor-projects').click(function() {
            $("#projects").velocity("scroll", {
                duration: 800
            });
        });

        $('.anchor-work').click(function() {
            $("#work-experience").velocity("scroll", {
                duration: 800
            });
        });

        $('.anchor-contact').click(function() {
            $("#contact").velocity("scroll", {
                duration: 800
            });
        });
// ---------------------------------------- END SIMON CUSTOM JS ----------------------------------------





        window.signature.initialize();

        if ($('#meet').length &&  ($('#meet').position().top - $(window).scrollTop() < 450)) {
            window.signature.animate();
        }


    });


    if(typeof Waypoint !== 'undefined'){
         var waypoint = new Waypoint({
        element: $('#meet').get(0),
        handler: function() {
            window.signature.animate();
        },
        offset: '60%'
    })
    }
   

}.call(this));