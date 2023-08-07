// normal
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector("#hero");
    console.log(hero)
})

// j Query
$.ready(() => {
    const hero = $("#hero")
    hero.html = "hi"
    console.log(hero)
})