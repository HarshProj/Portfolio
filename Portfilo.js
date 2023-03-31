// alert("Not completely done with it :")
function lessmore() {
    let r1 = document.getElementById("read")
    let r2 = document.getElementById("dot")
    let r3 = document.getElementById("less-more")

    if (r2.style.display == "none") {
        r2.style.display = "inline"
        r3.textContent = "Read More"
        r1.style.display = "none"
    }
    else {
        r2.style.display = "none"
        r3.textContent = "Read Less"
        r1.style.display = "inline" 
    }
}
function more() {
    let r1=document.getElementById("btnin");
    let r2=document.getElementById("navin");
    console.log(r2);
    console.log(r1);
    if (r1.style.display == "none") {
        // r2.style.display = "inline"
        r2.style.padding="0px"
        // r3.textContent = "Read More"
        r2.style.display = "none"
    }
    else {
        r1.style.display="none"
        r2.style.padding="20px"

    }
}
// proj.style.display="none";
function skill(){
    let skill=document.getElementById("skills")
    let proj=document.getElementById("projects")
    skill.style.display="block";
    proj.style.display="none";
}
function proj(){
    let skill=document.getElementById("skills")
    let proj=document.getElementById("projects")
    skill.style.display="none";
    proj.style.display="flex";

}
// let x=getElementById("something-wrong");
// function some(){
// }