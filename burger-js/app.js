
const burger = document.querySelector(".main_header__burger")
const sidebar = document.querySelector(".burger_sidebar")
const closeSidebar = document.querySelector(".burger_sidebar__close")

// const showElement = (elem) => elem.classList.add("show")
const showElement = () => sidebar.classList.toggle("show")

burger.addEventListener("click", showElement)
console.log(sidebar.classList)



// const burger = document.querySelector(".main_header__burger")
// const sidebar = document.querySelector(".burger_sidebar")
// const closeSidebar = document.querySelector(".burger_sidebar__close")

// const showSidebar = () => sidebar.classList.toggle("show")
// const closeSidebar = () => sidebar.classList.toggle("hide")
// burger.addEventListener("click", showSidebar)
// closeSidebar.addEventListener("click", closeSidebar)
