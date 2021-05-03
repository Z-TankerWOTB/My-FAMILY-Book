var Fam_img=["dad.jfif","mom.jfif","dada.jfif","dadi.jfif","bro.jfif","sis.jfif"];
var Fam_name=["Father","Mother","Grand father","Grand mother","Brother","Sister"];
var Z=0;

function next(){
    document.getElementById("img_img").src=Fam_img[Z];
    document.getElementById("show_names").innerHTML=Fam_name[Z];
    Z++;
    if(Z==6){
        Z=0;
    }
}