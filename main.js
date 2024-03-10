document.addEventListener('DOMContentLoaded', function() {

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
    document.querySelector('.to').addEventListener('click', function (){
        pageFlip.flip(46, 'top')
    })
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
