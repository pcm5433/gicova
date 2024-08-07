// 스크롤 색상 변경
const head = document.querySelector("header");
const sec1 = document.querySelector(".sec1");
const sec1Height = sec1.getBoundingClientRect().height;

document.addEventListener("scroll", ()=>{
    if(window.scrollY > sec1Height){
        head.classList.add("fixed");
    }else{
        head.classList.remove("fixed");
    }
});


// 부드러운 스크롤
const topScroll = document.querySelector(".top");
topScroll.addEventListener("click",()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
});