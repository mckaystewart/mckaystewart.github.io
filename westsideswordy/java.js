var galleryarray1 = new Array("thumb1.png", "thumb2.png",
    "thumb3.png", "thumb4.png", "thumb5.png",
    "thumb6.png"
);

var galleryarray2 = new Array("bigpic1.jpg", "bigpic2.jpg",
    "bigpic3.jpg", "bigpic4.jpg", "bigpic5.jpg",
    "bigpic6.jpg"
);


var booarray = new Array("boo1", "boo2",
    "boo3");

var cheerarray = new Array("cheer1", "cheer2",
    "cheer3", "cheer4", "cheer5");




function choosePic() {


    var myPix = new Array("images/image1.png", "images/image2.png",
        "images/image3.png", "images/image4.png", "images/image5.png",
        "images/image6.png", "images/image7.png", "images/image8.png"
    );
    var myPix2 = new Array("images/image1.png", "images/image2.png",
        "images/image3.png", "images/image4.png", "images/image5.png",
        "images/image6.png", "images/image7.png", "images/image8.png"
    );


    var ids = new Array("test1", "test2", "test3", "test4", "test5", "test7", "test8",
        "test9", "test10", "test11", "test12", "test13", "test14", "test15", "test16", "test6"
    );




    for (var i = 0; i < 8; i++) {
        var randomNum = Math.floor((Math.random() * myPix.length));
        var randomNum2 = Math.floor((Math.random() * ids.length));
        document.getElementById(ids[randomNum2]).src = myPix[randomNum];
        myPix.splice(randomNum, 1);
        ids.splice(randomNum2, 1);
    }
    for (var i = 0; i < 8; i++) {
        var randomNum = Math.floor((Math.random() * myPix2.length));
        var randomNum2 = Math.floor((Math.random() * ids.length));
        document.getElementById(ids[randomNum2]).src = myPix2[randomNum];
        myPix2.splice(randomNum, 1);
        ids.splice(randomNum2, 1);
    }


}



function load1() {


    document.getElementById('load1').src = "picture1.jpg";
    document.getElementById('load2').src = "picture2.jpg";

    document.getElementById('load3').src = "picture3.jpg";
    document.getElementById('load4').src = "picture4.jpg";
    document.getElementById('load5').src = "picture5.jpg";
    document.getElementById('load6').src = "picture6.jpg";



    galleryarray1 = new Array("thumb1.png", "thumb2.png",
        "thumb3.png", "thumb4.png", "thumb5.png",
        "thumb6.png"
    );

    galleryarray2 = new Array("bigpic1.jpg", "bigpic2.jpg",
        "bigpic3.jpg", "bigpic4.jpg", "bigpic5.jpg",
        "bigpic6.jpg"
    );




}

function load2() {

    document.getElementById('load1').src = "picture7.jpg";
    document.getElementById('load2').src = "picture8.jpg";

    document.getElementById('load3').src = "picture9.jpg";
    document.getElementById('load4').src = "picture10.jpg";
    document.getElementById('load5').src = "picture11.jpg";
    document.getElementById('load6').src = "picture12.jpg";



    galleryarray1 = new Array("thumb7.png", "thumb8.png",
        "thumb9.png", "thumb10.png", "thumb11.png",
        "thumb12.png"
    );

    galleryarray2 = new Array("bigpic7.jpg", "bigpic8.jpg",
        "bigpic9.jpg", "bigpic10.jpg", "bigpic11.jpg",
        "bigpic12.jpg"
    );


}

function load3() {



    document.getElementById('load1').src = "picture13.jpg";
    document.getElementById('load2').src = "picture14.jpg";

    document.getElementById('load3').src = "picture15.jpg";
    document.getElementById('load4').src = "picture16.jpg";
    document.getElementById('load5').src = "picture17.jpg";
    document.getElementById('load6').src = "picture18.jpg";



    galleryarray1 = new Array("thumb13.jpg", "thumb14.jpg",
        "thumb15.jpg", "thumb16.jpg", "thumb17.jpg",
        "thumb18.jpg"
    );

    galleryarray2 = new Array("bigpic13.jpg", "bigpic14.jpg",
        "bigpic15.jpg", "bigpic16.jpg", "bigpic17.jpg",
        "bigpic18.jpg"
    );



}




var check = 0;
var x = 0;
var a = 0;
var y = 0;
var d = 0;
var c, imgObject, y, z;
var ctx1, ctx2, ctx3, ctx4, ctx5, ctx5, ctx6;
var game = 0;
var source;
var gamecheck = 0;
var new1 = 0;
var previous, current;
var new2 = 0;
var offset, offset1;
var p, m;
var checked;
var mult = 1;
var mult2 = 1;
var marleft;
var check2 = 0;
var gallerycheck;
var gallerycheck2 = 1;
var aboutcheck = 0;
var menucheck = 0;
var loader = 0;
var loadercounter = 0;
var extrachecker;
var pointerchecker = 0;
var superchecker;
var bug = 0;
var video = 1;
var last = 1;

function doOnOrientationChange() {

    if ($(window).height() > $(window).width() && screen.width < 1024) {


        $("body").css("transform", "rotate(-90deg)");
        $("body").css("position", "relative");

        $("body").css("left", (1 * ($(window).width() - $(window).height())) / 2 + 'px');
        $("body").css("top", (-1 * ($(window).width() - $(window).height())) / 2 + 'px');
        $("body").css("height", $(window).width() + 'px');
        $("body").css("width", $(window).height() + 'px');

    } else {
        $("body").css("transform", "rotate(0deg)");
        $("body").css("width", $(window).width() + 'px');
        $("body").css("height", $(window).height() + 'px');
        $("body").css("left", "0%");
        $("body").css("top", "0%");


    }
}


function menu3() {
    $("#bg").css("display", "none");
    $("#bigcontainer").css('display', 'block');

    var myAudio = document.getElementById("audio1");
    myAudio.volume = 1;

    $(".icon").css("pointer-events", "none");
    $("#icon7").css("pointer-events", "visible");

    $("#scene").parallax('disable');
    $("#bigcontainer").css("pointer-events", "visible");

    if ($(".movement").css("marginLeft") == -1 * $(window).width() * 3 + "px") {

    } else {
        $(".movement").animate({
            marginLeft: '-300%'
        }, 1000, "swing");
    }

    var interval101 = setInterval(function() {
        $("#blackout").css('display', 'block');

        var inter4 = setInterval(function() {

            $("#blackout").css('opacity', '1');
            clearInterval(inter4);
        }, 50);

        $("#bigcontainer").css("pointer-events", "none");

        clearInterval(interval101);
    }, 1000);
}


$(document).ready(function() {

    //doOnOrientationChange();
    window.addEventListener('resize', doOnOrientationChange);

    document.getElementById('load1').src = "picture1.jpg";

    document.getElementById('load2').src = "picture2.jpg";

    document.getElementById('load3').src = "picture3.jpg";
    document.getElementById('load4').src = "picture4.jpg";
    document.getElementById('load5').src = "picture5.jpg";
    document.getElementById('load6').src = "picture6.jpg";

    document.getElementById('black1').src = "blackpic.png";
    document.getElementById('black2').src = "blackpic.png";
    document.getElementById('black3').src = "blackpic.png";
    document.getElementById('black4').src = "blackpic.png";
    document.getElementById('black5').src = "blackpic.png";
    document.getElementById('black6').src = "blackpic.png";




    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").load(function() {
                loader++;

            }).attr("src", arguments[i]);


        }
    }


    $("<img />").attr("src", "inputhover.png");
    $("<img />").attr("src", "inputhover2.png");
    $("<img />").attr("src", "inputhover3.png");

    $("<img />").attr("src", "formback.png");
    $("<img />").attr("src", "inputback.png");
    $("<img />").attr("src", "textarea.png");




    if (loadercounter == 0) {

        $.preloadImages("bigpic1.jpg", "bigpic2.jpg",
            "bigpic3.jpg", "bigpic4.jpg", "bigpic5.jpg",
            "bigpic6.jpg", "bigpic7.jpg", "bigpic8.jpg",
            "bigpic9.jpg", "bigpic10.jpg", "bigpic11.jpg",
            "bigpic12.jpg", "bigpic13.jpg", "bigpic14.jpg", "bigpic15.jpg",
            "bigpic16.jpg", "bigpic17.jpg", "bigpic18.jpg",
            "picture1.jpg", "picture2.jpg", "picture3.jpg", "picture4.jpg",
            "picture5.jpg", "picture6.jpg",
            "picture7.jpg", "picture8.jpg", "picture9.jpg", "picture10.jpg",
            "picture11.jpg", "picture12.jpg", "picture13.jpg", "picture14.jpg", "picture15.jpg", "picture16.jpg", "picture17.jpg", "picture18.jpg");
        loadercounter++;
    }




    $(window).focus(function() {

        if (video == 0) {
            var src = $("#shown").attr('src');
            if (src == "music.png") {
                document.getElementById('audio1').play();
            }
        }
    });



    $(window).blur(function() {
        document.getElementById('audio1').pause();
    });




    $(".nav-top").css('z-index', 100);
    $("#icon7").css('z-index', 100);


    $("body").click(function() {

        var src = $("#shown").attr('src');
        if (src == "music.png") {
            document.getElementById('audio1').play();
        }

        if (video == 1) {
            $("#videowrap").css('display', 'none');

            var inter1 = setInterval(function() {
                console.log("yes");
                $("#blackout").css('display', 'none');

                clearInterval(inter1);
            }, 300);



            $(".icon").css("pointer-events", "visible");
            video = 0;
            var vidsrc = $("#video").attr('src');


            $("#video").attr('src', '');


            //$("#video").attr('src', vidsrc);




        }

    });




    $("#trailer").click(function() {



        $("#video").attr('src', "//player.vimeo.com/video/125714055?autoplay=1");

        $(".icon").css("pointer-events", "none");



        $("#blackout").css('display', 'block');


        var inter = setInterval(function() {

            $("#blackout").css('opacity', '1');


            clearInterval(inter);

        }, 100);


        $("#videowrap").css('display', 'block');
        var intervalvideo = setInterval(function() {

            video = 1;

            document.getElementById('audio1').pause();

            clearInterval(intervalvideo);


        }, 300);

    });


    /*if (window.location.hash.substr(1) == 'rsvp') {
        menu3();
    }*/




    $("#menu2").click(function() {

        if ($(".movement").css("marginLeft") != -1 * $(window).width() * 2 + "px") {

            if ($("#about2").css("left") == "0%" || $("#about2").css("left") == "0px") {

                var int3 = setInterval(function() {

                    $("#bg").css("display", "block");

                    clearInterval(int3);

                }, 1000)

            }

        }

        $("#bigcontainer").css('display', 'block');
        var myAudio = document.getElementById("audio1");
        myAudio.volume = 0.7;

        $(".icon").css("pointer-events", "none");
        $("#icon7").css("pointer-events", "visible");

        if (aboutcheck == 0) {
            choosePic();
            aboutcheck++;

        }

        $("#scene").parallax('disable');
        $("#bigcontainer").css("pointer-events", "visible");

        if ($(".movement").css("marginLeft") == -1 * $(window).width() * 2 + "px") {

        } else {

            $(".movement").animate({
                marginLeft: '-200%'
            }, 1000, "swing");

        }




        /*
        if($("#rsvp").css('display')=="block" || $("#ri").css('display')=="block" || $("#contact1").css('display')=="block" ||
         $("#gallery1").css('display')=="block")
        {

        $("#bigcontainer").css("pointer-events","visible");

        if($("#ri").css('display')=="block" ){


        $("#ri").animate({left:'100%'},500,"linear");


        }


        if($("#gallery1").css('display')=="block"){


        $("#gallery1").animate({left:'-150%'},500,"linear");



        }



        if($("#rsvp").css('display')=="block" ){


        $("#rsvp").animate({left:'100%'},500,"linear");


        }

        if($("#contact1").css('display')=="block" ){


        $("#contact1").animate({left:'100%'},500,"linear");


        }




        if($("#rsvp").css('display')=="block" || $("#ri").css('display')=="block" || $("#contact1").css('display')=="block" ||
         $("#gallery1").css('display')=="block"){


        $("#about1").css("top","-100%");

        $("#about1").css("left","0%");



        }



        $("#container2").css('display','initial');

        $("#about1").animate({top:'0%'},500,"linear");













        }
        else{


        if($("#container2").css('display')=="block" ){
        if($("#about1").css("left")=="0px"){

        }

        if($("#about2").css("left")=="0px"){

        $("#about2").animate({left:'-100%'},500);
        $("#about1").animate({left:'0%'},500);

        }


        }


        else

        {


        $("#about1").css("top","-100%");

        $("#about1").css("left","0%");



        $("#blackout").css('display','initial');
        $("#about1").css("top","-100%");
        $("#container2").css('display','initial');

        $("#about1").animate({top:'0%'},500);
        $(".nav-top").css('z-index',100);
        $("#icon7").css('z-index',100);
        $(".icon").css("pointer-events","none");
        $("#icon7").css("pointer-events","visible");


        $("#scene").parallax('disable');

        }


        }



        */

        var interval99 = setInterval(function() {



            $("#blackout").css('display', 'block');

            var inter2 = setInterval(function() {

                $("#blackout").css('opacity', '1');


                clearInterval(inter2);

            }, 50);



            $("#bigcontainer").css("pointer-events", "none");

            clearInterval(interval99);


        }, 1000);




    });



    $("#pic2").click(function() {

        document.getElementById("winner").play();

        $("#about1").animate({
            left: '100%'
        }, 500);
        $("#about2").animate({
            left: '0%'
        }, 500);

        var int = setInterval(function() {

            $("#bg").css("display", "block");


            clearInterval(int);


        }, 500);


    });

    //x=$(window).width()/2;
    x = 0;



    p = $("#box1");
    m = $("#box1");

    check = 0;

    if ($(window).width() > 1920) {
        marleft = 1920 * 4 * .005;
    } else {
        marleft = $(window).width() * 4 * .005;
    }

    marleft = marleft * 12;

    $("#gallery").mousedown(function(e) {

        last = 1;

        bug = 1;

        offset1 = $(this).offset();
        a = e.pageX;


        e.preventDefault();


        $("#gallery").mousemove(function(event) {

            last = 0;

            offset = p.offset();
            offset2 = m.offset();
            y = a - event.pageX;



            x = x - y;


            $(".box").stop().animate({
                left: x + 'px'
            }, 0, "linear");

            //$(".box").css('transform',"translateX("+x+"px)");




            if (y < 0) {

                if ((offset1.left - offset.left) < 300) {

                    if (check == 0) {
                        var multiply = mult2 * -1 * (2640 + marleft);

                        $("#box12,#box11,#box10").css('transform', "translateX(" + multiply + "px)");

                        p = $("#box10");
                        m = $("#box10");
                        mult--;
                        check2 = 3;
                        check = 1;

                    } else {
                        if (check == 1) {
                            var multiply1 = mult2 * -1 * (2640 + marleft);
                            $("#box9,#box8,#box7").css('transform', "translateX(" + multiply1 + "px)");

                            p = $("#box7");
                            m = $("#box7");
                            check2 = 2;
                            check = 2;

                        } else {
                            if (check == 2) {

                                var multiply1 = mult2 * -1 * (2640 + marleft);
                                $("#box6,#box5,#box4").css('transform', "translateX(" + multiply1 + "px)");

                                p = $("#box4");
                                check = 3;
                                m = $("#box4");
                                check2 = 1;
                            } else {


                                var multiply1 = mult2 * -1 * (2640 + marleft);
                                $("#box3,#box2,#box1").css('transform', "translateX(" + multiply1 + "px)");

                                p = $("#box1");
                                m = $("#box1");

                                check = 0;
                                check2 = 0;
                                mult2++;

                            }


                        }
                    }

                }


            }



            if (y > 0) {

                if ((offset1.left - offset2.left) > 800) {

                    if (check2 == 0) {

                        var multiply = mult * 1 * (2640 + marleft);

                        $("#box1,#box2,#box3").css('transform', "translateX(" + multiply + "px)");

                        m = $("#box4");
                        p = $("#box4");

                        check = 3;

                        check2 = 1;

                        mult2--;

                    } else {
                        if (check2 == 1) {
                            var multiply1 = mult * 1 * (2640 + marleft);
                            $("#box4,#box5,#box6").css('transform', "translateX(" + multiply1 + "px)");

                            m = $("#box7");
                            p = $("#box7");

                            check = 2;


                            check2 = 2;

                        } else {
                            if (check2 == 2) {

                                var multiply1 = mult * 1 * (2640 + marleft);
                                $("#box7,#box8,#box9").css('transform', "translateX(" + multiply1 + "px)");

                                m = $("#box10");

                                p = $("#box10");

                                check = 1;

                                check2 = 3;


                            } else {

                                var multiply1 = mult * 1 * (2640 + marleft);
                                $("#box10,#box11,#box12").css('transform', "translateX(" + multiply1 + "px)");

                                m = $("#box1");

                                check2 = 0;


                                p = $("#box1");

                                check = 0;

                                mult++;

                            }


                        }
                    }

                }


            }




            a = event.pageX;




        });




    });


    $(document).mouseup(function(e) {
        if (last == 0) {
            if (bug == 1) {
                if (y > 0) {
                    x = x - 70;

                    $(".box").animate({
                        left: x + 'px'
                    }, 600, "linear");

                }

                if (y < 0) {
                    x = x + 70;
                    $(".box").animate({
                        left: x + 'px'
                    }, 600, "linear");

                }
                bug = 0;
            }
        }

        $("#gallery").off("mousemove");



    });




    $("#menu1").click(function() {

        $("#bg").css("display", "none");

        $("#bigcontainer").css('display', 'block');
        $("#enclose").css("visibility", "visible");
        $("#enclose2").css("visibility", "hidden");
        var myAudio = document.getElementById("audio1");
        myAudio.volume = 1;


        $("#placeholder").css("visibility", "hidden");

        if ($(window).width() > 1920) {
            superchecker = 1920;
        } else {
            superchecker = $(window).width();
        }

        $("#bigcontainer").css("pointer-events", "visible");

        if (Math.floor($(".movement").css("marginLeft").replace(/[^-\d\.]/g, '')) == -1 * superchecker * 1) {
            extrachecker = 1;

            $("#blackout").css('opacity', '0.8');

        } else {



            $(".movement").animate({
                marginLeft: '-100%'
            }, 1000, "swing");
            extrachecker = 0;
            clearInterval(interval91);
        }




        gallerycheck2 = 1;


        if ($("#pictures").css('opacity') == 0) {

            $("#zoom").css("display", "none");
            document.getElementById('enlarge').src = "";

            $("#pictures").css('opacity', '1.0');


        };

        document.getElementById('nthumb2').src = "thumb7.png";
        document.getElementById('pthumb2').src = "thumb1.png";

        galleryarray2 = new Array("bigpic1.jpg", "bigpic2.jpg",
            "bigpic3.jpg", "bigpic4.jpg", "bigpic5.jpg",
            "bigpic6.jpg"
        );

        galleryarray1 = new Array("thumb1.png", "thumb2.png",
            "thumb3.png", "thumb4.png", "thumb5.png",
            "thumb6.png"
        );


        //$("#gallery1").css('display','none');



        $("#scene").parallax('disable');




        document.getElementById('load1').src = "picture1.jpg";

        document.getElementById('load2').src = "picture2.jpg";

        document.getElementById('load3').src = "picture3.jpg";
        document.getElementById('load4').src = "picture4.jpg";
        document.getElementById('load5').src = "picture5.jpg";
        document.getElementById('load6').src = "picture6.jpg";

        document.getElementById('black1').src = "blackpic.png";
        document.getElementById('black2').src = "blackpic.png";
        document.getElementById('black3').src = "blackpic.png";
        document.getElementById('black4').src = "blackpic.png";
        document.getElementById('black5').src = "blackpic.png";
        document.getElementById('black6').src = "blackpic.png";

        if ($(window).width() > 1920) {
            d = 1920 * .50 * .333333333;
        } else {
            d = $(window).width() * .50 * .333333333;
        }




        c = document.getElementById("myCanvas1");
        c.height = d;
        c.width = d;

        ctx1 = c.getContext("2d");
        ctx1.webkitImageSmoothingEnabled = true;
        ctx1.mozImageSmoothingEnabled = true;

        imageObj = new Image();

        imageObj.onload = function() {

            ctx1.drawImage(imageObj, 0, 0, d, d);


        };
        $("#myCanvas1").css('opacity', '0');


        imageObj.src = 'picicon.png';




        c = document.getElementById("myCanvas2");
        c.height = d;
        c.width = d;

        ctx2 = c.getContext("2d");
        ctx2.webkitImageSmoothingEnabled = true;
        ctx2.mozImageSmoothingEnabled = true;


        imageObj = new Image();

        imageObj.onload = function() {

            ctx2.drawImage(imageObj, 0, 0, d, d);


        };
        $("#myCanvas2").css('opacity', '0');
        imageObj.src = 'picicon.png';




        c = document.getElementById("myCanvas3");
        c.height = d;
        c.width = d;

        ctx3 = c.getContext("2d");
        ctx3.webkitImageSmoothingEnabled = true;
        ctx3.mozImageSmoothingEnabled = true;
        imageObj = new Image();

        imageObj.onload = function() {

            ctx3.drawImage(imageObj, 0, 0, d, d);


        };
        $("#myCanvas3").css('opacity', '0');
        imageObj.src = 'picicon.png';




        c = document.getElementById("myCanvas4");
        c.height = d;
        c.width = d;

        ctx4 = c.getContext("2d");
        ctx4.webkitImageSmoothingEnabled = true;
        ctx4.mozImageSmoothingEnabled = true;

        imageObj = new Image();

        imageObj.onload = function() {

            ctx4.drawImage(imageObj, 0, 0, d, d);


        };
        $("#myCanvas4").css('opacity', '0');
        imageObj.src = 'picicon.png';




        c = document.getElementById("myCanvas5");
        c.height = d;
        c.width = d;

        ctx5 = c.getContext("2d");
        ctx5.webkitImageSmoothingEnabled = true;
        ctx5.mozImageSmoothingEnabled = true;

        imageObj = new Image();

        imageObj.onload = function() {

            ctx5.drawImage(imageObj, 0, 0, d, d);


        };
        $("#myCanvas5").css('opacity', '0');
        imageObj.src = 'picicon.png';




        c = document.getElementById("myCanvas6");
        c.height = d;
        c.width = d;

        ctx6 = c.getContext("2d");
        ctx6.webkitImageSmoothingEnabled = true;
        ctx6.mozImageSmoothingEnabled = true;

        imageObj = new Image();

        imageObj.onload = function() {

            ctx6.drawImage(imageObj, 0, 0, d, d);


        };
        $("#myCanvas6").css('opacity', '0');
        imageObj.src = 'picicon.png';




        checked = 1;


        /*
        $("#gallery1").css("left","0%");


        if($("#ri").css('display')=="block" ){


        $("#gallery1").css("left","-100%");
        $("#ri").animate({left:'100%'},500,"linear");

        }

        if($("#contact1").css('display')=="block" ){


        $("#gallery1").css("left","-100%");
        $("#contact1").animate({left:'100%'},500,"linear");

        }

        if($("#rsvp").css('display')=="block" ){


        $("#gallery1").css("left","-100%");
        $("#rsvp").animate({left:'100%'},500,"linear");

        }

        if($("#container2").css('display')=="block" ){

        $("#gallery1").css("left","-100%");
        if($("#about1").css("left")=="0px"){

        $("#about1").animate({left:'100%'},500,"linear");
        }
        else
        {

        $("#about2").animate({left:'100%'},500,"linear");
        }

        }


        */


        var interval91 = setInterval(function() {

            if (extrachecker == 1) {

            } else {
                $("#blackout").css('display', 'block');

                var inter3 = setInterval(function() {


                    $("#blackout").css('opacity', '0.8');


                    clearInterval(inter3);

                }, 50);

                extrachecker = 0;
            }

            if (pointerchecker == 1) {
                $("#bigcontainer").css("pointer-events", "none");
            }


            clearInterval(interval91);


        }, 1000);




        var interval10 = setInterval(function() {

            if (loader == 36) {

                $("#gallery1").css('visibility', 'visible');



                $(".icon").css("pointer-events", "none");
                $("#icon7").css("pointer-events", "visible");
                if (pointerchecker == 0) {
                    $("#bigcontainer").css("pointer-events", "none");
                    pointerchecker = 1;
                }

                clearInterval(interval10);
            }
        }, 20);




    });


    $(".myCanvas").mousemove(function(e) {

        var offset = $(this).offset();
        y = e.pageX - offset.left;
        z = e.pageY - offset.top;

        if (checked == 1) {
            var imgd = ctx1.getImageData(y, z, 1, 1).data;
            if (imgd[3] != 0) {
                $(this).css('cursor', 'pointer');
            } else {
                $(this).css('cursor', 'auto');


            }

        }




    });

    $(".myCanvas").mouseover(function(e) {

        $(this).fadeTo(300, 1);
        $(this).parent().children(".black").fadeTo(300, 1);

    });

    $(".myCanvas").mouseout(function(e) {

        $(this).fadeTo(300, 0);
        $(this).parent().children(".black").fadeTo(300, 0);

    });



    $(".myCanvas").click(function(e) {

        if ($(this).css('cursor') == "pointer") {

            $("#enclose2").css("visibility", "visible");
            $("#enclose").css("visibility", "visible");

            $("#blackout").css('opacity', '1.0');
            $("#blackout").css('display', 'block');
            $(".nav-top").css('z-index', 100);
            $("#icon7").css('z-index', 100);



            $("#pictures").css('opacity', '0');
            document.getElementById('close1').src = "close.png";

            if ($(this).attr('id') == "myCanvas6") {

                document.getElementById('enlarge').src = galleryarray2[5];
                gallerycheck = 6;

                if (gallerycheck2 == 1) {
                    document.getElementById('nthumb2').src = "thumb7.png";

                }

                if (gallerycheck2 == 2) {
                    document.getElementById('nthumb2').src = "thumb13.jpg";

                }

                if (gallerycheck2 == 3) {
                    $("#enclose").css("visibility", "hidden");

                }

                document.getElementById('pthumb2').src = galleryarray1[4];


            }


            if ($(this).attr('id') == "myCanvas3") {
                document.getElementById('enlarge').src = galleryarray2[2];
                gallerycheck = 3;
                document.getElementById('nthumb2').src = galleryarray1[3];
                document.getElementById('pthumb2').src = galleryarray1[1];

            }


            if ($(this).attr('id') == "myCanvas2") {
                document.getElementById('enlarge').src = galleryarray2[1];
                gallerycheck = 2;
                document.getElementById('nthumb2').src = galleryarray1[2];
                document.getElementById('pthumb2').src = galleryarray1[0];
            }



            if ($(this).attr('id') == "myCanvas1") {


                document.getElementById('enlarge').src = galleryarray2[0];
                document.getElementById('nthumb2').src = galleryarray1[1];

                if (gallerycheck2 == 1) {
                    $("#enclose2").css("visibility", "hidden");


                }

                if (gallerycheck2 == 2) {
                    document.getElementById('pthumb2').src = "thumb6.png";

                }

                if (gallerycheck2 == 3) {
                    document.getElementById('pthumb2').src = "thumb12.png";

                }

                gallerycheck = 1;


            }

            if ($(this).attr('id') == "myCanvas4") {

                document.getElementById('enlarge').src = galleryarray2[3];
                gallerycheck = 4;
                document.getElementById('nthumb2').src = galleryarray1[4];
                document.getElementById('pthumb2').src = galleryarray1[2];

            }


            if ($(this).attr('id') == "myCanvas5") {

                document.getElementById('enlarge').src = galleryarray2[4];
                gallerycheck = 5;
                document.getElementById('nthumb2').src = galleryarray1[5];
                document.getElementById('pthumb2').src = galleryarray1[3];

            }




            $("#zoom").css("display", "initial");




        }




    });


    $("#close1").click(function(e) {


        $("#zoom").css("display", "none");
        document.getElementById('enlarge').src = "";
        $("#blackout").css('opacity', '0.8');

        $("#pictures").css('opacity', '1.0');
        if (gallerycheck2 == 1) {
            $("#enclose2").css("visibility", "hidden");
            $("#enclose").css("visibility", "visible");
            document.getElementById('nthumb2').src = "thumb7.png";
            document.getElementById('pthumb2').src = "thumb1.png";

        }
        if (gallerycheck2 == 2) {
            $("#enclose2").css("visibility", "visible");
            $("#enclose").css("visibility", "visible");
            document.getElementById('nthumb2').src = "thumb13.jpg";
            document.getElementById('pthumb2').src = "thumb1.png";

        }

        if (gallerycheck2 == 3) {
            $("#enclose").css("visibility", "hidden");
            $("#enclose2").css("visibility", "visible");
            document.getElementById('nthumb2').src = "thumb13.jpg";
            document.getElementById('pthumb2').src = "thumb7.png";

        }

    });

    $("#menu3").click(function() {
        menu3();
    });




    /*
    if($("#container2").css('display')=="block" || $("#ri").css('display')=="block" || $("#contact1").css('display')=="block"
    || $("#gallery1").css('display')=="block")
    {
    $("#bigcontainer").css("pointer-events","visible");


    if($("#container2").css('display')=="block"){

    if($("#about1").css("left")=="0px"){

    $("#about1").animate({left:'-100%'},500,"linear");
    }
    else
    {

    $("#about2").animate({left:'-100%'},500,"linear");
    }
    }

    if($("#gallery1").css('display')=="block"){


    $("#gallery1").animate({left:'-150%'},500,"linear");

    }



    if($("#ri").css('display')=="block"){


    $("#ri").animate({left:'100%'},500,"linear");

    }

    if($("#contact1").css('display')=="block"){

    $("#contact1").animate({left:'100%'},500,"linear");

    }

    if($("#container2").css('display')=="block" || $("#gallery1").css('display')=="block"){
    $("#rsvp").css("left","100%");
    }


    if($("#contact1").css('display')=="block" || $("#ri").css('display')=="block"){
    $("#rsvp").css("left","-100%");

    }

    $("#rsvp").css('display','initial');
    $("#rsvp").animate({left:'0%'},500,"linear");
    },1000);


    }
    else{

    $("#rsvp").css("left","0%");

    $("#blackout").css('display','initial');
    $("#rsvp").css('display','initial');

    $("#scene").parallax('disable');

    $(".nav-top").css('z-index',100);
    $("#icon7").css('z-index',100);

    $(".icon").css("pointer-events","none");
    $("#icon7").css("pointer-events","visible");


    }

    */



    $("#menu4").click(function() {

        $("#bg").css("display", "none");

        $("#bigcontainer").css('display', 'block');
        var myAudio = document.getElementById("audio1");
        myAudio.volume = 1;




        $("#scene").parallax('disable');

        $(".icon").css("pointer-events", "none");
        $("#icon7").css("pointer-events", "visible");
        $("#bigcontainer").css("pointer-events", "visible");

        if ($(".movement").css("marginLeft") == -1 * $(window).width() * 4 + "px") {

        } else {
            $(".movement").animate({
                marginLeft: '-400%'
            }, 1000, "swing");

        }



        /*
        if($("#container2").css('display')=="block" || $("#rsvp").css('display')=="block" || $("#contact1").css('display')=="block"
        || $("#gallery1").css('display')=="block")
        {

        $("#bigcontainer").css("pointer-events","visible");

        if($("#container2").css('display')=="block"){

        if($("#about1").css("left")=="0px"){

        $("#about1").animate({left:'-100%'},500,"linear");
        }
        else
        {

        $("#about2").animate({left:'-100%'},500,"linear");
        }

        }



        if($("#rsvp").css('display')=="block"){


        $("#rsvp").animate({left:'-100%'},500,"linear");


        }

        if($("#gallery1").css('display')=="block"){


        $("#gallery1").animate({left:'-150%'},500,"linear");


        }


        if($("#contact1").css('display')=="block"){


        $("#contact1").animate({left:'100%'},500,"linear");


        }



        if($("#container2").css('display')=="block" || $("#rsvp").css('display')=="block" || $("#gallery1").css('display')=="block"){
        $("#ri").css("left","100%");
        }

        if($("#contact1").css('display')=="block"){
        $("#ri").css("left","-100%");

        }


        $("#ri").css('display','initial');

        $("#ri").animate({left:'0%'},500,"linear");







        }
        else{
        $("#ri").css("left","0%");

        $("#blackout").css('display','initial');
        $("#ri").css('display','initial');

        $("#scene").parallax('disable');


        $(".nav-top").css('z-index',100);
        $("#icon7").css('z-index',100);
        $(".icon").css("pointer-events","none");
        $("#icon7").css("pointer-events","visible");

        }
        */


        var interval102 = setInterval(function() {



            $("#blackout").css('display', 'block');

            var inter5 = setInterval(function() {



                $("#blackout").css('opacity', '1');


                clearInterval(inter5);

            }, 50);



            $("#bigcontainer").css("pointer-events", "none");


            clearInterval(interval102);


        }, 1000);




    });


    $("#menu5").click(function() {

        $("#bg").css("display", "none");

        $("#bigcontainer").css('display', 'block');
        var myAudio = document.getElementById("audio1");
        myAudio.volume = 1;



        $("#scene").parallax('disable');

        $(".icon").css("pointer-events", "none");
        $("#icon7").css("pointer-events", "visible");
        $("#bigcontainer").css("pointer-events", "visible");

        if ($(".movement").css("marginLeft") == -1 * $(window).width() * 5 + "px") {

        } else {
            $(".movement").animate({
                marginLeft: '-500%'
            }, 1000, "swing");

        }


        /*
        if($("#container2").css('display')=="block" || $("#rsvp").css('display')=="block" || $("#ri").css('display')=="block"
        || $("#gallery1").css('display')=="block")
        {
        $("#bigcontainer").css("pointer-events","visible");


        if($("#container2").css('display')=="block"){

        if($("#about1").css("left")=="0px"){



        $("#about1").animate({left:'-100%'},500,"linear");
        }
        else
        {

        $("#about2").animate({left:'-100%'},500,"linear");
        }

        }


        if($("#rsvp").css('display')=="block"){


        $("#rsvp").animate({left:'-100%'},500,"linear");


        }

        if($("#gallery1").css('display')=="block"){


        $("#gallery1").animate({left:'-150%'},500,"linear");


        }

        if($("#ri").css('display')=="block"){


        $("#ri").animate({left:'-100%'},500,"linear");


        }





        $("#contact1").css('display','initial');
        $("#contact1").css("left","100%");


        $("#contact1").animate({left:'0%'},500,"linear");







        }





        else{




        $("#contact1").css("left","0%");

        $("#blackout").css('display','block');
        $("#contact1").css('display','block');

        $("#scene").parallax('disable');
        $(".nav-top").css('z-index',100);
        $("#icon7").css('z-index',100);
        $(".icon").css("pointer-events","none");
        $("#icon7").css("pointer-events","visible");

        }

        */


        var interval103 = setInterval(function() {




            $("#blackout").css('display', 'block');


            var inter6 = setInterval(function() {



                $("#blackout").css('opacity', '1');


                clearInterval(inter6);

            }, 50);




            $("#bigcontainer").css("pointer-events", "none");




            clearInterval(interval103);


        }, 1000);

    });



    $("#menu0").click(function() {

        $("#bg").css("display", "none");


        var myAudio = document.getElementById("audio1");
        myAudio.volume = 1;

        $("#bigcontainer").css("pointer-events", "visible");

        $(".movement").animate({
            marginLeft: '0%'
        }, 1000, "swing");


        $("#blackout").css('opacity', '0');



        var inter7 = setInterval(function() {



            $("#blackout").css('display', 'none');


            clearInterval(inter7);

        }, 300);




        var interval999 = setInterval(function() {
            $("#bigcontainer").css('display', 'none');
            clearInterval(interval999);
        }, 1000);



        $("#scene").parallax('enable');




        $(".icon").css("pointer-events", "visible");




    });




    var scope = $(".tile");




    $(".shape2").click(function() {




        $(".shape2").unbind("click");

        $(".tile").css({
            'transform': 'rotateY(-180deg)  '
        });
        $(".photos").css({
            'transform': 'rotateY(0deg)  '
        });


        var interval = setInterval(function() {

            $(".tile").css({
                'transform': 'rotateY(0deg)  '
            });
            $(".photos").css({
                'transform': 'rotateY(180deg)  '
            });


            clearInterval(interval);


        }, 4000);



        scope.click(function() {


            if (new1 == 0) {


                if (new2 == 1) {

                    new2 = 0;

                }

                $(this).css({
                    'transform': 'rotateY(-180deg)  '
                });
                $(this).parent().children(".photos").css({
                    'transform': 'rotateY(0deg)  '
                });
                source = $(this).parent().children(".photos").attr('src');
                previous = $(this);
                new1 = 1;

            } else {




                if ($(this).parent().children(".photos").attr('src') == source) {

                    $(this).css({
                        'transform': 'rotateY(-180deg)  '
                    });
                    $(this).parent().children(".photos").css({
                        'transform': 'rotateY(0deg)  '
                    });


                    var interval1001 = setInterval(function() {


                        if (gamecheck != 8) {

                            var randomnumber2 = Math.floor((Math.random() * 5));

                            document.getElementById(cheerarray[randomnumber2]).play();

                        }

                        clearInterval(interval1001);



                    }, 1000);




                    new1 = 0;

                    gamecheck++;
                    if (gamecheck == 8) {

                        document.getElementById("winner").play();

                        var interval3 = setInterval(function() {

                            $("#about1").animate({
                                left: '100%'
                            }, 500);
                            $("#about2").animate({
                                left: '0%'
                            }, 500);


                            var int1 = setInterval(function() {

                                $("#bg").css("display", "block");

                                clearInterval(int1);

                            }, 500);


                            clearInterval(interval3);



                        }, 2500);




                    }




                } else {

                    $(this).css({
                        'transform': 'rotateY(-180deg)  '
                    });
                    $(this).parent().children(".photos").css({
                        'transform': 'rotateY(0deg)  '
                    });


                    current = $(this);

                    new1 = 0;
                    new2 = 1;
                    scope.css("pointer-events", "none");


                    var interval2 = setInterval(function() {

                        var randomnumber = Math.floor((Math.random() * 3));

                        document.getElementById(booarray[randomnumber]).play();

                        current.css({
                            'transform': 'rotateY(0deg)  '
                        });
                        current.parent().children(".photos").css({
                            'transform': 'rotateY(-180deg)  '
                        });

                        previous.css({
                            'transform': 'rotateY(0deg)  '
                        });
                        previous.parent().children(".photos").css({
                            'transform': 'rotateY(-180deg)  '
                        });

                        var interval4 = setInterval(function() {

                            scope.css("pointer-events", "visible");

                            clearInterval(interval4);

                        }, 500);

                        clearInterval(interval2);

                    }, 1000);




                }



            }

        });




    });




    $(".icon").mouseover(
        function() {
            $(this).children(".hide").fadeTo(300, 1);

            $(this).children(".show").fadeTo(300, 0);


        });

    $(".icon").mouseout(
        function() {

            $(this).children(".show").fadeTo(300, 1);
            $(this).children(".hide").fadeTo(300, 0);

        });


    var audioplayer = document.getElementById("audio1");
    $("#icon7").click(function() {


        if ($("#bigcontainer").css("pointer-events") != "visible") {

            $("#bigcontainer").css("pointer-events", "visible");
            var gap = setInterval(function() {



                $("#bigcontainer").css("pointer-events", "none");


                clearInterval(gap);

            }, 200);

        }
        if (audioplayer.paused) {
            audioplayer.play();
            document.getElementById("hidden").src = "musichover.png";
            document.getElementById("shown").src = "music.png";


        } else {
            audioplayer.pause();
            document.getElementById("hidden").src = "musicoffhover.png";
            document.getElementById("shown").src = "musicoff.png";

        }


    });




    var interval100;

    $("#next1,#next2").mouseover(
        function() {

            $("#enclose").animate({
                left: '87%'
            }, 250, "swing");




        });


    $("#enclose").mouseleave(
        function() {




            $("#enclose").animate({
                left: '93.3%'
            }, 250, "swing");



        });



    $("#previous1,#previous2").mouseover(
        function() {


            $("#enclose2").animate({
                left: '0%'
            }, 250, "swing");



        });


    $("#enclose2").mouseleave(
        function() {


            $("#enclose2").animate({
                left: '-6.3%'
            }, 250, "swing");



        });


    $("#next1,#next2").click(
        function() {


            if ($("#zoom").css('display') == "block") {
                if (gallerycheck == 6) {
                    if (gallerycheck2 == 1) {
                        load2();
                        document.getElementById('pthumb2').src = "thumb6.png";

                    }

                    if (gallerycheck2 == 2) {
                        load3();
                        document.getElementById('pthumb2').src = "thumb12.png";

                    }
                    gallerycheck = 0;
                    gallerycheck2++;

                    document.getElementById('enlarge').src = "";
                    document.getElementById('enlarge').src = galleryarray2[gallerycheck];

                    document.getElementById('nthumb2').src = galleryarray1[gallerycheck + 1];

                    gallerycheck++;
                } else {



                    document.getElementById('enlarge').src = "";
                    document.getElementById('enlarge').src = galleryarray2[gallerycheck];
                    if (gallerycheck == 5) {
                        if (gallerycheck2 == 1) {
                            document.getElementById('nthumb2').src = "thumb7.png";

                        }

                        if (gallerycheck2 == 2) {
                            document.getElementById('nthumb2').src = "thumb13.jpg";

                        }

                        if (gallerycheck2 == 3) {
                            $("#enclose").css("visibility", "hidden");

                        }
                    } else {
                        $("#enclose2").css("visibility", "visible");
                        $("#enclose").css("visibility", "visible");
                        document.getElementById('nthumb2').src = galleryarray1[gallerycheck + 1];
                    }

                    document.getElementById('pthumb2').src = galleryarray1[gallerycheck - 1];

                    gallerycheck++;
                }

            } else {

                if (gallerycheck2 < 3) {

                    $("#pictures").fadeTo(300, 0);

                }

                var interval14 = setInterval(function() {

                    if (gallerycheck2 == 1) {




                        document.getElementById('load1').src = "picture7.jpg";
                        document.getElementById('load2').src = "picture8.jpg";

                        document.getElementById('load3').src = "picture9.jpg";
                        document.getElementById('load4').src = "picture10.jpg";
                        document.getElementById('load5').src = "picture11.jpg";
                        document.getElementById('load6').src = "picture12.jpg";



                        galleryarray1 = new Array("thumb7.png", "thumb8.png",
                            "thumb9.png", "thumb10.png", "thumb11.png",
                            "thumb12.png"
                        );

                        galleryarray2 = new Array("bigpic7.jpg", "bigpic8.jpg",
                            "bigpic9.jpg", "bigpic10.jpg", "bigpic11.jpg",
                            "bigpic12.jpg"
                        );

                    }

                    if (gallerycheck2 == 2) {




                        document.getElementById('load1').src = "picture13.jpg";
                        document.getElementById('load2').src = "picture14.jpg";

                        document.getElementById('load3').src = "picture15.jpg";
                        document.getElementById('load4').src = "picture16.jpg";
                        document.getElementById('load5').src = "picture17.jpg";
                        document.getElementById('load6').src = "picture18.jpg";



                        galleryarray1 = new Array("thumb13.jpg", "thumb14.jpg",
                            "thumb15.jpg", "thumb16.jpg", "thumb17.jpg",
                            "thumb18.jpg"
                        );

                        galleryarray2 = new Array("bigpic13.jpg", "bigpic14.jpg",
                            "bigpic15.jpg", "bigpic16.jpg", "bigpic17.jpg",
                            "bigpic18.jpg"
                        );

                    }




                    $("#pictures").fadeTo(300, 1);

                    if (gallerycheck2 < 3) {
                        gallerycheck2++;
                    }


                    if (gallerycheck2 == 1) {
                        document.getElementById('nthumb2').src = "thumb7.png";
                        document.getElementById('pthumb2').src = "thumb1.png";

                    }
                    if (gallerycheck2 == 2) {
                        $("#enclose2").css("visibility", "visible");
                        document.getElementById('nthumb2').src = "thumb13.jpg";
                        document.getElementById('pthumb2').src = "thumb1.png";

                    }

                    if (gallerycheck2 == 3) {
                        $("#enclose").css("visibility", "hidden");
                        document.getElementById('nthumb2').src = "thumb13.jpg";
                        document.getElementById('pthumb2').src = "thumb7.png";

                    }


                    clearInterval(interval14);


                }, 300);




            }




        });




    $("#previous1,#previous2").click(
        function() {


            if ($("#zoom").css('display') == "block") {
                if (gallerycheck == 1) {
                    if (gallerycheck2 == 2) {
                        load1();
                        document.getElementById('nthumb2').src = "thumb7.png";

                    }

                    if (gallerycheck2 == 3) {
                        load2();
                        document.getElementById('nthumb2').src = "thumb13.jpg";

                    }
                    gallerycheck = 7;
                    gallerycheck2--;

                    document.getElementById('enlarge').src = "";
                    document.getElementById('enlarge').src = galleryarray2[gallerycheck - 2];

                    document.getElementById('pthumb2').src = galleryarray1[gallerycheck - 3];

                    gallerycheck--;


                } else {


                    document.getElementById('enlarge').src = "";
                    document.getElementById('enlarge').src = galleryarray2[gallerycheck - 2];



                    if (gallerycheck == 2) {
                        if (gallerycheck2 == 1) {
                            $("#enclose2").css("visibility", "hidden");


                        }

                        if (gallerycheck2 == 2) {
                            document.getElementById('pthumb2').src = "thumb6.png";

                        }

                        if (gallerycheck2 == 3) {
                            document.getElementById('pthumb2').src = "thumb12.png";

                        }
                    } else {
                        $("#enclose2").css("visibility", "visible");
                        $("#enclose").css("visibility", "visible");
                        document.getElementById('pthumb2').src = galleryarray1[gallerycheck - 3];
                    }
                    document.getElementById('nthumb2').src = galleryarray1[gallerycheck - 1];
                    gallerycheck--;
                }

            } else {
                if (gallerycheck2 > 1) {

                    $("#pictures").fadeTo(300, 0);

                }

                var interval24 = setInterval(function() {

                    if (gallerycheck2 == 2) {




                        document.getElementById('load1').src = "picture1.jpg";
                        document.getElementById('load2').src = "picture2.jpg";

                        document.getElementById('load3').src = "picture3.jpg";
                        document.getElementById('load4').src = "picture4.jpg";
                        document.getElementById('load5').src = "picture5.jpg";
                        document.getElementById('load6').src = "picture6.jpg";



                        galleryarray1 = new Array("thumb1.png", "thumb2.png",
                            "thumb3.png", "thumb4.png", "thumb5.png",
                            "thumb6.png"
                        );

                        galleryarray2 = new Array("bigpic1.jpg", "bigpic2.jpg",
                            "bigpic3.jpg", "bigpic4.jpg", "bigpic5.jpg",
                            "bigpic6.jpg"
                        );

                    }

                    if (gallerycheck2 == 3) {




                        document.getElementById('load1').src = "picture7.jpg";
                        document.getElementById('load2').src = "picture8.jpg";

                        document.getElementById('load3').src = "picture9.jpg";
                        document.getElementById('load4').src = "picture10.jpg";
                        document.getElementById('load5').src = "picture11.jpg";
                        document.getElementById('load6').src = "picture12.jpg";



                        galleryarray1 = new Array("thumb7.png", "thumb8.png",
                            "thumb9.png", "thumb10.png", "thumb11.png",
                            "thumb12.png"
                        );

                        galleryarray2 = new Array("bigpic7.jpg", "bigpic8.jpg",
                            "bigpic9.jpg", "bigpic10.jpg", "bigpic11.jpg",
                            "bigpic12.jpg"
                        );


                    }




                    $("#pictures").fadeTo(300, 1);

                    if (gallerycheck2 > 1) {
                        gallerycheck2--;
                    }


                    if (gallerycheck2 == 1) {
                        $("#enclose2").css("visibility", "hidden");
                        document.getElementById('nthumb2').src = "thumb7.png";
                        document.getElementById('pthumb2').src = "thumb1.png";


                    }
                    if (gallerycheck2 == 2) {
                        $("#enclose").css("visibility", "visible");
                        document.getElementById('nthumb2').src = "thumb13.jpg";
                        document.getElementById('pthumb2').src = "thumb1.png";

                    }

                    clearInterval(interval24);


                }, 300);




            }




        });




    $("form#input2").submit(function(e) {
        e.preventDefault();
    });



    $("#container").click(function(e) {


        if ($("#container2").css("display") == "block" && $("#bigcontainer").css("pointer-events") == "none") {

            $("#bg").css("display", "none");


            var myAudio = document.getElementById("audio1");
            myAudio.volume = 1;

            $("#bigcontainer").css("pointer-events", "visible");

            $(".movement").animate({
                marginLeft: '0%'
            }, 1000, "swing");


            $("#blackout").css('opacity', '0');



            var inter7 = setInterval(function() {



                $("#blackout").css('display', 'none');


                clearInterval(inter7);

            }, 300);




            var interval999 = setInterval(function() {
                $("#bigcontainer").css('display', 'none');
                clearInterval(interval999);
            }, 1000);



            $("#scene").parallax('enable');
            $(".icon").css("pointer-events", "visible");

        }

    });
});