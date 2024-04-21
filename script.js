var typed = new Typed(".typing",{
    Strings:["Web Designer","Web Developer","Graphic Designer","Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
     navList = nav.querySelectorAll("li"),
     totalNavList = navList.length,
     allSection = document.querySelectorAll(".section"),
     totalSection = allSection.length;
     for(let i=0; i<totalNavList; i++)
     {
        const a= navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        
        })

     }
     function showSection(element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const targetId = element.getAttribute("href").substr(1);
        document.getElementById(targetId).classList.add("active");
    }
    