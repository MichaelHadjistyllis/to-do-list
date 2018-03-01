window.onload = function onStart() {

    //close button appending to li elements 

    var nodeList = document.getElementsByTagName("LI");
    for (var i = 0; i < nodeList.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        nodeList[i].appendChild(span);
    }

    //close button functionality 
    //constantly checks for user input
    this.setInterval(function() {
        var close = document.getElementsByClassName("close");
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }, 50);



    //toggle strikethrough on click

    var tasks = document.querySelector('ul');
    tasks.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('toggled');
        }
    }, false);
    newElement();
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//create new tasks using Add

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("task_list").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.appendChild(txt);
    li.appendChild(span);
    span.className = "close";
}