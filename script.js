// html den gelenler

const hamburgerMenu = document.querySelector(".menu"); 
const navigation = document.querySelector("nav"); 
// olay izleyicileri

hamburgerMenu.addEventListener("click", handleMenu); 

// navigasyonu açıp kapamaya yarayan fonksiyon
// Hamburger menüsüne tıklanınca çalışır
function handleMenu(){
    // classList.toggle()}  ona parametre olarak verdiğimiz class yoksa ekler varsa çıkarır
   navigation.classList.toggle("hide")
}

