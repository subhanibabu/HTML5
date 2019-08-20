export default class Controller {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    selectCategory = (category) =>{
            for (var i = 1; i < 11; i++) {
                if ((category === 0 && i === 1) || category === i) {
                    let tittle = document.getElementById("tittle" + i);
                    tittle.style.display = "block";
                    tittle.className = 'section';
                }
                else if(category === 0) {
                    let tittle = document.getElementById("tittle" + i);
                    tittle.style.display = "block";
                    tittle.className = 'section line';
                }
                else {
                    let tittle = document.getElementById("tittle" + i);
                    tittle.style.display = "none";
                }
            }
    }

    openPopUp = (value) =>{
        // getter example
        var news = {
            text: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
            get getText() {
                return this.text;
            }
        };

        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        let text = news.getText;
        document.getElementById("dynamictittle").innerHTML = document.getElementById("ptittle" + value).innerHTML;
        document.getElementById("dynamiccategory").innerHTML = document.getElementById("pcategory" + value).innerHTML;
        document.getElementById("dynamiccontent").innerHTML = document.getElementById("pcontent" + value).innerHTML + "<br/><br/>" + text;
    }

    closePopUp = () =>{
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    getNewsHeadLines = ()=>{
        this._model.getHeadLines().then(response => {
        const data = JSON.parse(JSON.stringify(response));

        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        document.getElementById("dynamictittle").innerHTML = data.articles[0].author;
        document.getElementById("dynamiccategory").innerHTML = data.articles[0].title;
        document.getElementById("dynamiccontent").innerHTML = data.articles[0].description;
        });        
    }

    validateEmail = () =>{

        // setter example
        let email = {
            alertMessage: "",
            set message(value) {
                this.alertMessage = value;
            }
        };
        email.message = "You Email has been stored to local storage and it is:-";

        const alertMessage = {
            message: 'You have entered an invalid email address!'
        };

        // Object Destructuring
        const { message} = alertMessage;

        let inputText = document.getElementById("email").value;
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("name", inputText);
                alert(email.alertMessage + localStorage.getItem("name"));
            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
        }
        else {
            alert(message);
        }
    }
}