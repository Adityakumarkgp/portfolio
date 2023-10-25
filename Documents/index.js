const hamburger=document.querySelector(".hamburger");
const menu=document.querySelector("#mainMenu");
const abEducationB=document.querySelector("#abDesEducationB");
const abSkillsB=document.querySelector("#abDesSkillsB");
const abExperienceB=document.querySelector("#abDesExperienceB");
const abEducation=document.querySelector("#abDesEducation");
const abSkills=document.querySelector("#abDesSkills");
const abExperience=document.querySelector("#abDesExperience");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
});

/*Adding functionality to faq*/

let answers=document.querySelectorAll(".que");
answers.forEach((event)=>{
    event.addEventListener("click",()=>{      
       if(event.classList.contains("active"))
       {
           event.classList.remove("active")
       }
       else
       {
           event.classList.add("active");
       }
    })
})

//know me section functionality

abDesEducation.classList.toggle("active");

abEducationB.addEventListener('click',()=>{
    abEducation.classList.toggle("active");

    if(abSkills.classList.contains("active"))
    {
        abSkills.classList.toggle("active");
    }
    if(abExperience.classList.contains("active"))
    {
        abExperience.classList.toggle("active");
    }
});

abSkillsB.addEventListener('click',()=>{
    
    abSkills.classList.toggle("active");

    if(abEducation.classList.contains("active"))
    {
        abEducation.classList.toggle("active");
    }
    if(abExperience.classList.contains("active"))
    {
        abExperience.classList.toggle("active");
    }
});

abExperienceB.addEventListener('click',()=>{
    abExperience.classList.toggle("active");

    if(abSkills.classList.contains("active"))
    {
        abSkills.classList.toggle("active");
    }
    if(abEducation.classList.contains("active"))
    {
        abEducation.classList.toggle("active");
    }
});