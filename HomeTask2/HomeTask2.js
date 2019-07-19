window.onload = function () {

    document.body.appendChild(Header());
    var maindiv = document.createElement('div');
    maindiv.id = 'container';
    maindiv.className = 'maindiv';
    document.body.appendChild(maindiv);

    var leftdiv = document.createElement('div');
    leftdiv.id = 'left';
    leftdiv.className = 'leftdiv';
    maindiv.appendChild(leftdiv);

    leftdiv.appendChild(CreateModal());

    FetchDataFromJson(leftdiv);

    var rightdiv = document.createElement('div');

    maindiv.appendChild(GenerateCategories(rightdiv));

    GenerateOptions();

    rightdiv.appendChild(SubscribeCompent());

    rightdiv.appendChild(EmailComponent());

    document.body.appendChild(FooterComponent());
}

const FetchDataFromJson = (leftdiv) => {
    fetch("News.json", {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then(data => {
            FillNewsContent(leftdiv, JSON.parse(JSON.stringify(data)));
        })
        .catch(error => alert(error));
}

const CreateModal = () => {
    var modal = document.createElement('div');
    modal.id = 'myModal';
    modal.className = 'modal';

    var modalcontent = document.createElement('div');
    modalcontent.className = 'modal-content';
    modal.appendChild(modalcontent);

    var span = document.createElement('span');
    span.className = 'close';
    span.id = 'close';
    span.onclick = function () { ClosePopUp()() };
    span.innerHTML = "&times;"
    modalcontent.appendChild(span);

    var dynamicsection = document.createElement('section');
    dynamicsection.id = 'dynamicsection';
    modalcontent.appendChild(dynamicsection);

    var dynamictittle = document.createElement('p');
    dynamictittle.id = 'dynamictittle';
    dynamicsection.appendChild(dynamictittle);

    var dynamiccategory = document.createElement('p');
    dynamiccategory.id = 'dynamiccategory';
    dynamiccategory.className = 'category';
    dynamicsection.appendChild(dynamiccategory);

    var dynamiccontent = document.createElement('p');
    dynamiccontent.id = 'dynamiccontent';
    dynamiccontent.className = 'content';
    dynamicsection.appendChild(dynamiccontent);

    return modal;
}

const FillNewsContent = (leftdiv, jsondata) => {
    for (var i = 1; i < 11; i++) {
        var section = document.createElement('section');
        section.id = 'tittle' + i;
        if (i === 1) {
            section.className = 'section';
        }
        else {
            section.className = 'section line';
        }
        leftdiv.appendChild(section);

        var image = document.createElement('p');
        image.className = 'image';
        section.appendChild(image);

        var contentdiv = document.createElement('div');
        contentdiv.className = 'contentDiv';
        section.appendChild(contentdiv);

        var tittle = document.createElement('p');
        tittle.textContent = jsondata.tittle + i;
        tittle.className = 'newschanneltext';
        tittle.id = 'ptittle' + i;
        contentdiv.appendChild(tittle);

        var category = document.createElement('p');
        category.className = 'category';
        category.id = 'pcategory' + i;
        category.textContent = jsondata.category + i;
        contentdiv.appendChild(category);

        var content = document.createElement('p');
        content.className = 'content';
        content.id = 'pcontent' + i;
        content.textContent = jsondata.content;
        contentdiv.appendChild(content);

        var continuereading = document.createElement('button');
        continuereading.className = 'contentReading';
        continuereading.textContent = 'Continue Reading';
        continuereading.value = i;
        continuereading.onclick = function () { OpenPopUp(this.value)() };
        contentdiv.appendChild(continuereading);
    }
}

const GenerateCategories = (rightdiv) => {

    rightdiv.id = 'right';
    rightdiv.className = 'rightdiv';

    var selectcategories = document.createElement('div');
    selectcategories.id = 'selectcategories';
    selectcategories.className = 'selectcategory';
    rightdiv.appendChild(selectcategories);

    var email = document.createElement('div');
    email.className = 'email';
    email.textContent = 'SELECT CATEGORY';
    rightdiv.appendChild(email);

    var all = document.createElement('div');
    rightdiv.appendChild(all);

    var select = document.createElement('select');
    select.setAttribute("id", "mySelect");
    select.className = 'selectwidth';
    select.onchange = function () { SelectCategory() };
    all.appendChild(select);

    return rightdiv;
}

const GenerateOptions = () => {
    for (var i = 0; i < 11; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
        if (i === 0) {
            var text = document.createTextNode("All Channels");
        }
        else {
            var text = document.createTextNode("News Channel -" + i);
        }
        option.appendChild(text);
        document.getElementById("mySelect").appendChild(option);
    }
}

const Header = () => {
    var header = document.createElement('header');

    var headerp = document.createElement('p');
    headerp.className = 'header p';
    header.appendChild(headerp);

    var h2 = document.createElement('h2');
    h2.textContent = 'NEWSFEED';
    h2.className = 'header h2';
    headerp.appendChild(h2);

    var h6 = document.createElement('h6');
    h6.textContent = 'Yet Another NewsFeed';
    h6.className = 'header h6';
    headerp.appendChild(h6);

    return header;
}

const SubscribeCompent = () => {
    var subscribe = document.createElement('div');
    subscribe.className = 'padding';
    subscribe.textContent = 'SUBSCRIBE';

    return subscribe;
}

const EmailComponent = () => {
    var emaildiv = document.createElement('div');
    emaildiv.className = 'email';

    var emailaddress = document.createElement('input');
    emailaddress.type = 'text';
    emailaddress.id = 'email';
    emailaddress.textContent = 'search';
    emailaddress.placeholder = 'Email Address';
    emailaddress.className = 'emailaddress';
    emaildiv.appendChild(emailaddress);

    var subscribe = document.createElement('button');
    subscribe.className = 'subscribe';
    subscribe.type = 'submit';
    subscribe.textContent = 'Subscribe';
    subscribe.onclick = function () { ValidateEmail() };
    emaildiv.appendChild(subscribe);

    return emaildiv;
}

const FooterComponent = () => {
    var footer = document.createElement('footer');
    var footerp = document.createElement('p');
    footerp.className = 'footer';
    footer.appendChild(footerp);

    var footerh6 = document.createElement('h6');
    footerh6.innerHTML = '&copy;NewsFeed 2019';
    footerp.appendChild(footerh6);

    return footer;
}

const OpenPopUp = (value) => {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    let text = "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.";
    document.getElementById("dynamictittle").innerHTML = document.getElementById("ptittle" + value).innerHTML;
    document.getElementById("dynamiccategory").innerHTML = document.getElementById("pcategory" + value).innerHTML;
    document.getElementById("dynamiccontent").innerHTML = document.getElementById("pcontent" + value).innerHTML + "<br/><br/>" + text;
}

const ClosePopUp = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

const SelectCategory = () => {
    var value = document.getElementById("mySelect").value;
    if (value == 0) {
        for (var i = 1; i < 11; i++) {
            if (i === 1) {
                let tittle = document.getElementById("tittle" + i);
                tittle.style.display = "block";
                tittle.className = 'section';
            }
            else {
                let tittle = document.getElementById("tittle" + i);
                tittle.style.display = "block";
                tittle.className = 'section line';
            }
        }
    }
    else {
        for (var i = 1; i < 11; i++) {
            if (value == i) {
                let tittle = document.getElementById("tittle" + i);
                tittle.style.display = "block";
                tittle.className = 'section';
            }
            else {
                let tittle = document.getElementById("tittle" + i);
                tittle.style.display = "none";
            }
        }
    }
}

var ValidateEmail = () => {
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
