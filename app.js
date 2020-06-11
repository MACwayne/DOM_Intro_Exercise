console.log("Javascript is alive!");

document.addEventListener('DOMContentLoaded', function () {

    // 1.
    const changeGreeting = (elms) => elms.forEach(el => {
        el.innerText = "Hello, There!"
    })

    changeGreeting(document.querySelectorAll("greeting"))

    // 2. 
    const changeli = (elms) => elms.forEach(el => {
        el.style.backgroundColor = "yellow"
    })

    changeli(document.querySelectorAll("li"))

    // 3.
    Element.prototype.appendAfter = function (element) {
        element.parentNode.insertBefore(this, element.nextSibling);
      },false;

    var image = document.createElement('img');
    image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"
    image.appendAfter(document.getElementById("greeting"))

    // 4.
    var image = document.createElement('ul');
    image.innerText = "todo-items"
    image.id = "mylist"
    image.appendAfter(document.body)

    // 5.
    var items = ['make coffee','eat donut','change diapers','drive to work']

    for (var i = 0; i < items.length; i++) {
        var listitem = document.createElement('li');
        listitem.innerText = items[i]
        document.getElementById("mylist").append(listitem)
    }


    // AFTERWARDS:

    // 4. 
    const menuLis = document.querySelectorAll("#mylist > li");
    for (let li of menuLis) {

        li.addEventListener("click", function(){
        // 1. Remove Class from All Lis
        for (let li of menuLis) {
            li.classList.remove('selected');
            console.log('class removed');
        }
        
        // 2. Add Class to Relevant Li
        this.classList.add('selected');
        console.log('class added');
        });
    }

    //5.
    const images = document.querySelectorAll("img");
    images[1].src = "./images/honey.jpeg"
    images[1].classList = "changingImage"

    const essList = document.querySelectorAll("#essentials > ul > li");
    for (let li of essList) {

        li.addEventListener("click", function(){
        // 1. Remove Class from All Lis
        for (let li of essList) {
            li.classList.remove('selected');
            li.classList.remove('selected-image')
            console.log('class removed');
        }
        
        // 2. Add Class to Relevant Li
        this.classList.add('selected');
        this.classList.add('selected-image')
        console.log('class added');
        

        const imageSelected = document.querySelector(".changingImage");
        const newImage = document.querySelector(".selected-image")
        console.log("./images/"+newImage.innerText+".jpeg")
        imageSelected.src = "./images/"+newImage.innerText+".jpeg"

        });
    }

    //6. 
    document.getElementById("ghosting").addEventListener("mouseover", mouseOver);

    function mouseOver() {
        event.target.remove();
    }

    //7.
    var changableDiv = document.getElementById('resize')
    document.getElementById("resize").addEventListener("mouseover", mouseOver2);
    document.getElementById("resize").addEventListener("mouseout", mouseOver3);

    function mouseOver2() {
        changableDiv.style.width = changableDiv.offsetWidth * 2 + "px";
    }

    function mouseOver3() {
        changableDiv.style.width = changableDiv.offsetWidth / 2 + "px";
    }

    // 8.
    document.getElementById("reset").type = "reset"
    var element1 = document.getElementById("reset")
    element1.addEventListener("mouseover", mouseOver4);

    function mouseOver4() {
        console.log("HI")
        for (let li of essList) {
            li.classList.remove('selected');
            li.classList.remove('selected-image')
            console.log('class removed');
        }

        for (let li of menuLis) {
            li.classList.remove('selected');
            console.log('class removed');
        }
    };

    //9. 
    document.addEventListener("keydown", function(event) {
        const isNumber = isFinite(event.key);

        if (isNumber) {
            alert("I HATE NUMBERZZZ!")
        }
    })
})
