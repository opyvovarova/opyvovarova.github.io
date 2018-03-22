$(function() {

    $('ul#slider-carousel').carouFredSel({

        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover: true,
            prev: "#btn_left",
            next: "#btn_right",
        },

        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        }
    });
});

function open_closeNav() {//open and close nav menu
     var a = document.getElementById("greem_nav").style.width;
    if (a == "0px") {
        document.getElementById("greem_nav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    } else{
        document.getElementById("greem_nav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
}

var dropdown = document.getElementsByClassName("greem-dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = document.getElementById("greem-dropdown-container");

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
