var tl= gsap.timeline({scrollTrigger:{
    trigger:"#main",
    markers:"true",
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
tl.
to("#top",{
    top:"-50%"
})


