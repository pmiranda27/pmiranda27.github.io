const projectTab = document.querySelectorAll(".allProjects");
const contactTab = document.querySelectorAll(".userContact");

function changeTab(tabIndex){
    if(tabIndex === 0){
        for(i = 0; i < projectTab.length; i++){
            projectTab[i].style.display = 'flex';
        }
        for(p = 0; p < contactTab.length; p++){
            contactTab[p].style.display = 'none';
        }
    }else if(tabIndex === 1){
        for(p = 0; p < contactTab.length; p++){
            contactTab[p].style.display = 'flex';
        }
        for(i = 0; i < projectTab.length; i++){
            projectTab[i].style.display = 'none';
        }
    }else{

    }
}