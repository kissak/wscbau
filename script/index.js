window.onload = function (){

    let arrayOfClasses = document.querySelectorAll('#slides .slide');
    if(arrayOfClasses.length > 0){
    let arrayOfClassesP = document.getElementsByClassName('projectInfo');
    let currentSlide = 0;
    let currentProject = 0;
    let slideInterval = setInterval(AutoChange,10000);
    
    function AutoChange() {

        arrayOfClassesP[currentProject].className = 'projectInfo';
        currentProject = (currentProject+1)%arrayOfClassesP.length;
        arrayOfClassesP[currentProject].className = 'projectInfo currentProject';
        
        arrayOfClasses[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%arrayOfClasses.length;
        arrayOfClasses[currentSlide].className = 'slide current';
    }
   
    } 
        document.getElementById("burgerIcon").addEventListener('click', function(){
            document.getElementById("mobile_menu").style.display = "grid";
            document.getElementById("mobile_menu").style.height = "100vh";
            document.getElementById("mobile_menu").style.opacity = "1";
            document.getElementById("mobile_menu").style.zIndex = "3";
            document.getElementById("mobile_menu").style.pointerEvents = "auto";
            document.getElementById("mobile_menu").style.cursor = "pointer";
            })
            document.getElementById("Xicon").addEventListener('click', function(){
                document.getElementById("mobile_menu").style.opacity = "0";
                document.getElementById("mobile_menu").style.zIndex = "-1";
                setTimeout(function(){document.getElementById("mobile_menu").style.height = "0vh"},700);
                document.getElementById("mobile_menu").style.pointerEvents = "auto";
                document.getElementById("mobile_menu").style.cursor = "pointer";
                })

        }
    window.addEventListener('load', function(){
        let arrayOfImages= document.getElementsByTagName('img');
        for (let i=0; i<arrayOfImages.length; i++) {
            if (arrayOfImages[i].getAttribute('data-src')) {
                arrayOfImages[i].setAttribute('src', arrayOfImages[i].getAttribute('data-src'));
            }
        }
    }, true)

    