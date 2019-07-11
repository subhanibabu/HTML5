
function OpenPopUp(value) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    var text = "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.";
    document.getElementById("dynamictittle").innerHTML = document.getElementById("ptittle" + value).innerHTML;
    document.getElementById("dynamiccategory").innerHTML = document.getElementById("pcategory" + value).innerHTML;
    document.getElementById("dynamiccontent").innerHTML = document.getElementById("pcontent" + value).innerHTML + "<br/><br/>" + text;
}

function SelectCategory() {
    var value = document.getElementById("category").value;

    if (value == "0") {
        for (var i = 1; i < 11; i++) {
            var tittle = document.getElementById("tittle" + i);
            tittle.style.display = "block";
        }
    }
    else {
        for (var i = 1; i < 11; i++) {
            if (value == i) {
                var tittle = document.getElementById("tittle" + i);
                tittle.style.display = "block";
            }
            else {
                var tittle = document.getElementById("tittle" + i);
                tittle.style.display = "none";
            }
        }
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
