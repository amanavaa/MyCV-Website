$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution:512,
        dropRadius:10
    })
    const bars= document.querySelectorAll(".progress_bar")

    bars.forEach(function(bar){
        let percent = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percent + '%';
        bar.style.width = percent +'%';
        // console.log(percent)
    })
    const counter = document.querySelectorAll('.counter');
    // console.log(counter)
    function runcounter(){
        counter.forEach(count =>{
            count.innerText =0;
            let target = +count.dataset.counts;
            let step = target/100;
            // console.log(target)
            let countit = function(){
                let displaycount = +count.innerText;
                if(displaycount < target){
                    count.innerText = Math.ceil(displaycount +step);
                    // console.log(displaycount)
                    setTimeout(countit, 1);
                }else{
                    count.innerText = target;
                }
            }
            countit();
        })
    }
    // coutnter of achivement
    let countersectio = document.querySelector('.counter_section');
    let options = {
        rootMargin:'0px 0px -15px 0px'
    }
    let done =0;
    const sectionobserve = new IntersectionObserver(function(enteries){
        if (enteries[0].isIntersecting && done!=1){
            done =1;
            runcounter()
        }
    }, options)
    sectionobserve.observe(countersectio)

    // work sections
    var $wrapper = $('.portfolio_wrapper');
    // intialize isotope
    $wrapper.isotope({
        filter:'*',
        layoutMode:"masonry",
        animationOptions :{
            duration:750,
            easing:'linear',
            queue: false,
        }
    })
    let links = document.querySelectorAll('.tabs a')
    links.forEach(link =>{
       let selector = link.dataset.fileter;
       link.addEventListener('click', function(eve){
        eve.preventDefault();
        $wrapper.isotope({
            filter:selector,
            layoutMode:"masonry",
            animationOptions :{
                duration:750,
                easing:'linear'
            }
        })
        links.forEach(link =>{
            link.classList.remove("active")
        })
        link.classList.add("active")
       
       })

    })

    // magnific apply
    $('.magnific').magnificPopup({
        type: 'image',
        gallary  :{
            enable:true
        },
        zoom:{
            enable:true
        }
    })

    // slider
    $('.slider').slick({
        arrows:false,
        autoplay:true,
    })
    let btn = document.querySelector(".clickbtn");
    btn.addEventListener("click" , function(){
        // window.print()
        // var body = document.querySelector("#body").innerHTML;
        // var data = document.querySelector(".data").innerHTML;
        // document.getElementById('body').innerHTML = data;
        window.print()
        // document.getElementById('body').innerHTML = body;
    })
});



