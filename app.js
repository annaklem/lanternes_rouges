//down

let down = $("a[href='#down']");

down.on("click", function(){
    $("html,body").animate({
       scrollTop: $(document).height() - $(window).height()
    },500);
});


/* 
$(plat).hover(
    function(){
        $(platDescription).css("transform", "rotate(20deg)")
    }
)
*/


/*Sidebar*/
let burger=$('.fa-bars');
let sidebar=$('.sidebar');
let closeIcon=$('.fa-times')


burger.on("click",function(){
    sidebar.css('transform', 'translateX(0)');
})

closeIcon.on("click",function(){
    sidebar.css("display","none");
})
