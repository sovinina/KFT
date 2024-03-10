document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('li')
    const pageFlip = new St.PageFlip(
        document.getElementById("demoBookExample"),
        {
            width: 538, // base page width
            height: 761, // base page height

            size: "stretch",
            // set threshold values:
            minWidth: 315,
            maxWidth: 1000,
            minHeight: 420,
            maxHeight: 1350,

            maxShadowOpacity: 0.5, // Half shadow intensity
            showCover: true,
            mobileScrollSupport: false // disable content scrolling on mobile devices
        }
    );
    /*document.querySelector('.to').addEventListener('click', function (){
        pageFlip.flip(46, 'top')
    })  */  
    contents.forEach((btn, index)=>{
        btn.addEventListener('click', function (){
            document.querySelector('.toc').classList.add('none')
            switch (index){
                case 0:
                    pageFlip.flip(5, 'top')
                    break;
                case 1:
                    pageFlip.flip(8, 'top')
                    break;
                case 2:
                    pageFlip.flip(10, 'top')
                    break;
                case 3:
                    pageFlip.flip(11, 'top')
                    break;
                case 4:
                    pageFlip.flip(13, 'top')
                    break;
                case 5:
                    pageFlip.flip(17, 'top')
                    break;
                case 6:
                    pageFlip.flip(18, 'top')
                    break;
                case 7:
                    pageFlip.flip(21, 'top')
                    break;
                case 8:
                    pageFlip.flip(22, 'top')
                    break;
                case 9:
                    pageFlip.flip(26, 'top')
                    break;
                case 10:
                    pageFlip.flip(30, 'top')
                    break;
                case 11:
                    pageFlip.flip(31, 'top')
                    break;
                case 12:
                    pageFlip.flip(32, 'top')
                    break;
                case 13:
                    pageFlip.flip(35, 'top')
                    break;
                case 14:
                    pageFlip.flip(38, 'top')
                    break;
                case 15:
                    pageFlip.flip(39, 'top')
                    break;
                case 16:
                    pageFlip.flip(40, 'top')
                    break;
                case 17:
                    pageFlip.flip(41, 'top')
                    break;
                case 18:
                    pageFlip.flip(42, 'top')
                    break;
                case 19:
                    pageFlip.flip(44, 'top')
                    break;
            }
        })
        
    })
    /*document.querySelector('.mybtn').addEventListener('click', function (){
        pageFlip.flip(5, 'top')
    })*/
    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    /*document.querySelector(".page-total").innerText = pageFlip.getPageCount();
    document.querySelector(
        ".page-orientation"
    ).innerText = pageFlip.getOrientation();*/

    /*document.querySelector(".btn-prev").addEventListener("click", () => {
        pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });

    document.querySelector(".btn-next").addEventListener("click", () => {
        pageFlip.flipNext(); // Turn to the next page (with animation)
    });*/

    // triggered by page turning
    pageFlip.on("flip", (e) => {
        /*document.querySelector(".page-current").innerText = e.data + 1;*/
        let n = Math.floor(Math.random() * (13 - 1) + 1)
        let audio = new Audio(`audio/${n}.mp3`)
        audio.play()
    });

    // triggered when the state of the book changes
   /* pageFlip.on("changeState", (e) => {
        document.querySelector(".page-state").innerText = e.data;
    });*/

    // triggered when page orientation changes
    /*pageFlip.on("changeOrientation", (e) => {
        document.querySelector(".page-orientation").innerText = e.data;
    });*/
});

for (let i =1;i<47;i++){
    let container = document.querySelector('.flip-book')
    let back = document.querySelector('.page-cover-bottom')
    let page = document.createElement('div')
    page.classList.add('page')
    let pageContent = document.createElement('div')
    pageContent.classList.add('page-content')
    let pageImage = document.createElement('div')
    pageImage.classList.add('page-image')
    container.insertBefore(page, back)
    page.appendChild(pageContent)
    pageContent.appendChild(pageImage)
    switch (i){
        case 3:
        case 29:
        case 19:
        case 24:
            pageImage.style.backgroundImage =`url(img/gif/Сказки-${i}.gif)`;
            break;
        default:
            pageImage.style.backgroundImage =`url(img/страницы/Сказки-${i}.png)`;
    }

}

document.querySelector('.to').querySelector('p').addEventListener('mouseenter',function (){
    document.querySelector('.toc').classList.remove('none')
})
document.querySelector('.to').querySelector('p').addEventListener('mouseleave',function (){
    document.querySelector('.toc').classList.add('none')
})
document.querySelector('.toc').addEventListener('mouseenter',function (){
    this.classList.remove('none')
})
document.querySelector('.toc').addEventListener('mouseleave',function (){
    this.classList.add('none')
})
