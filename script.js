const mobileNavBar = document.querySelector("#btn-active");
const container = document.querySelector(".active");

const toggleNavbar = () =>{
//    alert("This is responsive")
container.classList.toggle('active')
}

mobileNavBar.addEventListener("click", () => toggleNavbar());