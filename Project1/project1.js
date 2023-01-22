
var scroll = window.requestAnimationFrame || function(callback){window.setTimeout(callback,1000/60)}
var popup;

window.onload = ()=>{
    EventListeners() 

    var navbarhome = document.getElementById('navbarhome');
    var navbarabout =document.getElementById('navbarabout');
    var navbarprojects = document.getElementById('navbarprojects')
    var navnarconnect = document.getElementById('navnarconnect')

    var homebtn =document.getElementById('homebtn')
    var aboutTitle = document.getElementById('aboutTitle')
    var aboutsection = document.getElementById('aboutsection')
    var aboutborder = document.getElementById("aboutborder")
    var skillsection = document.getElementById('skillsection')
    var skillbar = document.querySelectorAll("#skillbar")
    var PorjectTitileDiv = document.getElementById('ProjectsTitle')
    var individualProject = document.querySelectorAll("#individualProject")
    var contactTitle = document.getElementById('contactTitle')
    var contactform = document.getElementById('contactform')


    var currnav = navbarhome
    loop()
    function loop(){

        if(isElementInViewport(homebtn)){
            currnav.classList.remove('navBarOptionshighlighted')
            navbarhome.classList.add('navBarOptionshighlighted')
            currnav = navbarhome
        }
        if(isElementInViewport(aboutTitle)){
            aboutTitle.classList.replace("opac","aboutTitle")
        }
        if(isElementInViewport(aboutsection) || isElementInViewport(aboutborder) || isElementInViewport(skillsection) ){
            aboutborder.classList.add("aboutborder")
            aboutsection.classList.replace("opac","aboutsection")
            skillsection.classList.replace("opac","skillsection")

            currnav.classList.remove('navBarOptionshighlighted')
            navbarabout.classList.add('navBarOptionshighlighted')
            currnav = navbarabout
            var i =1
            window.setTimeout(()=>skillbar.forEach(element=>{
                element.classList.add(`skill${i}percent`)
                i+=1
            }),2000)
        }
        if(isElementInViewport(PorjectTitileDiv)){
            PorjectTitileDiv.classList.replace("opac","projectsTitle")
        }
        individualProject.forEach(function(element){
            if(isElementInViewport(element)){
                currnav.classList.remove('navBarOptionshighlighted')
                navbarprojects.classList.add('navBarOptionshighlighted')
                currnav = navbarprojects

                element.classList.add('projectbackground')
                element.classList.add('rotateOverlay')

                element.nextElementSibling.classList.replace('opac','projectOverlay')
            }
        })

        if(isElementInViewport(contactTitle)){
            contactTitle.classList.replace("opac",'contactTitle')
        }
        if(isElementInViewport(contactform)){
            currnav.classList.remove('navBarOptionshighlighted')
            navnarconnect.classList.add('navBarOptionshighlighted')
            currnav = navnarconnect
            contactform.classList.replace('opacity','contactForm')
        }

        scroll(loop)
    }
}

function EventListeners(){
    var stockappbtn =document.getElementById('stockappbtn')
    var searchappbtn = document.getElementById('searchappbtn')
    var sortappbtn = document.getElementById('sortappbtn')
    var tictactoeappbtn = document.getElementById('tictactoeappbtn')
    var sudokuappbtn = document.getElementById('sudokuappbtn')

    var popupleft =document.querySelectorAll('#popupleft')
    var popupright =document.querySelectorAll('#popupright')
    var close = document.querySelectorAll('#close')

    document.addEventListener('click',(e)=>{
        var divs = ["stockappdetails","searchingappdetails","sortingappdetails","tictactoeAppDetails","sudokuAppDetails"]
        for(var i=0;i<divs.length;i++){
            if (e.target.id==divs[i]){
                popup.close()
            }
        }

    })

    stockappbtn.addEventListener('click', ()=>{
        //document.getElementById('stockappdetails').style.display='flex'
        popup = new PopUp(0)
    })
    searchappbtn.addEventListener('click',()=>{
        popup = new PopUp(1)
    })
    sortappbtn.addEventListener('click',()=>{
        popup = new PopUp(2)
    })
    tictactoeappbtn.addEventListener('click',()=>{
        popup = new PopUp(3)
    })
    sudokuappbtn.addEventListener('click',()=>{
        popup = new PopUp(4)
    })
    popupleft.forEach(element=>{
        element.addEventListener('click',()=>{
            popup.subtractOne()
        })
    })
    popupright.forEach(element=>{
        element.addEventListener('click',()=>{
            popup.addOne()
        })
    })
    close.forEach(element=>{
        element.addEventListener('click',()=>{
            popup.close()
        })
    })
}



function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
  }


class PopUp{
    constructor(i){
        var divs = ["stockappdetails","searchingappdetails","sortingappdetails","tictactoeAppDetails","sudokuAppDetails"]
        var backgroundids= ['popupstockbackground',"popupsearchingbackground","popupsortingbackground","popupTictactoeBackground","popupSudokuBackground"]
        var images = ['Stockpopupbackgroundimage',"searchprojectimg","sortingprojectimg","tictactoeprojectimg","sudokuProjectImg"]
        var maxes = [3,4,3,2,2]
        this.curr = 1;
        this.background = document.getElementById(`${backgroundids[i]}`) 
        this.max = maxes[i];
        this.image = images[i]
        this.div = document.getElementById(`${divs[i]}`) 
        this.open()
    }
    addOne(){
        if(this.curr<this.max){
            this.background.classList.replace(`${this.image}${this.curr}`,`${this.image}${this.curr+1}`)
            this.curr+=1
        }
    }
    subtractOne(){
        if(this.curr>1){
            this.background.classList.replace(`${this.image}${this.curr}`,`${this.image}${this.curr-1}`)
            this.curr-=1
        }
    }
    open(){
        this.div.style.display='flex'
    }
    close(){
        this.background.classList.replace(`${this.image}${this.curr}`,`${this.image}1`)
        this.div.style.display='none'
    }

}