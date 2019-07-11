
function openpopup(value) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    document.getElementById("dynamictittle").innerHTML = document.getElementById("ptittle" + value).innerHTML;
    document.getElementById("dynamiccategory").innerHTML = document.getElementById("pcategory" + value).innerHTML;
    document.getElementById("dynamiccontent").innerHTML = document.getElementById("pcontent" + value).innerHTML;
}

function SelectCategory() {
    var value = document.getElementById("category").value;
    if (value == "All") {
        var tittle1 = document.getElementById("tittle1");
        var tittle2 = document.getElementById("tittle2");
        var tittle3 = document.getElementById("tittle3");
        var tittle4 = document.getElementById("tittle4");
        var tittle5 = document.getElementById("tittle5");
        tittle1.style.display = "block";
        tittle2.style.display = "block";
        tittle3.style.display = "block";
        tittle4.style.display = "block";
        tittle5.style.display = "block";
    }
    if (value == "TittleOne") {
        var tittle1 = document.getElementById("tittle1");
        var tittle2 = document.getElementById("tittle2");
        var tittle3 = document.getElementById("tittle3");
        var tittle4 = document.getElementById("tittle4");
        var tittle5 = document.getElementById("tittle5");
        tittle1.style.display = "block";
        tittle2.style.display = "none";
        tittle3.style.display = "none";
        tittle4.style.display = "none";
        tittle5.style.display = "none";
    }
    if (value == "TittleTwo") {
        var tittle1 = document.getElementById("tittle1");
        var tittle2 = document.getElementById("tittle2");
        var tittle3 = document.getElementById("tittle3");
        var tittle4 = document.getElementById("tittle4");
        var tittle5 = document.getElementById("tittle5");
        tittle1.style.display = "none";
        tittle2.style.display = "block";
        tittle3.style.display = "none";
        tittle4.style.display = "none";
        tittle5.style.display = "none";
    }
    if (value == "TittleThree") {
        var tittle1 = document.getElementById("tittle1");
        var tittle2 = document.getElementById("tittle2");
        var tittle3 = document.getElementById("tittle3");
        var tittle4 = document.getElementById("tittle4");
        var tittle5 = document.getElementById("tittle5");
        tittle1.style.display = "none";
        tittle2.style.display = "none";
        tittle3.style.display = "block";
        tittle4.style.display = "none";
        tittle5.style.display = "none";
    }
    if (value == "TittleFour") {
        var tittle1 = document.getElementById("tittle1");
        var tittle2 = document.getElementById("tittle2");
        var tittle3 = document.getElementById("tittle3");
        var tittle4 = document.getElementById("tittle4");
        var tittle5 = document.getElementById("tittle5");
        tittle1.style.display = "none";
        tittle2.style.display = "none";
        tittle3.style.display = "none";
        tittle4.style.display = "block";
        tittle5.style.display = "none";
    }
    if (value == "TittleFive") {
        var tittle1 = document.getElementById("tittle1");
        var tittle2 = document.getElementById("tittle2");
        var tittle3 = document.getElementById("tittle3");
        var tittle4 = document.getElementById("tittle4");
        var tittle5 = document.getElementById("tittle5");
        tittle1.style.display = "none";
        tittle2.style.display = "none";
        tittle3.style.display = "none";
        tittle4.style.display = "none";
        tittle5.style.display = "block";
    }
}
function ValidateEmail() {
    var inputText = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("name", inputText);
            alert('You Email has been stored to local storage and it is:-' + localStorage.getItem("name"));
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
    else {
        alert("You have entered an invalid email address!");
    }
}
