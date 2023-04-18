let sidebar = document.querySelector(".sidebar")
let closeBtn = document.querySelector("#btn")

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open")
  menuBtnChange() //calling the function(optional)
})

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right") //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu") //replacing the iocns class
  }
}

const nav = document.querySelector(".nav-list"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".home-section"),
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a")
  a.addEventListener("click", function () {
    for (let k = 0; k < totalNavList; k++) {
      navList[k].querySelector("a").classList.remove("active")
    }
    this.classList.add("active")
    showSection(this)
  })
}
function showSection(element) {
  for (let j = 0; j < totalSection; j++) {
    allSection[j].classList.remove("active")
    
  }
  const target = element.getAttribute("href").split("#")[1]
  document.querySelector("#" + target).classList.add("active")
}