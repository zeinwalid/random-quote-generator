
const pageLoader = document.getElementById("page-loader");
const content = document.getElementById("content");
const auThor = document.getElementById("author")
const moreBtn = document.getElementById("more-btn");

moreBtn.addEventListener("click", () => {
    fetch("https://api.quotable.io/random").then((data) => data.json()).then((data) => {
        let { author, content: quote } = data;
        console.log(quote)
        content.textContent = quote;
        auThor.textContent = author;
    });
})


fetch("https://api.quotable.io/random").then((data) => data.json()).then((data) => {
    let { author, content: quote } = data;
    console.log(quote)
    content.textContent = quote;
    auThor.textContent = author;
});
ScrollReveal().reveal('.tex', { distance: "50px", duration: 1000, opacity: 0 });


setTimeout(() => {
    pageLoader.style.opacity = "0";
    setTimeout((() => {
        pageLoader.style.display = "none";
    }), 700)

}, 2000)