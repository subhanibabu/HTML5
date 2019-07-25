class View extends Controller {
    constructor(model) {
        super();
        this._model = model;
    }

    LoadView() {
        this._model.getAPIData().then(response => {
            const json = JSON.parse(JSON.stringify(response));
            this.CreateDOM(json);
        });
    }

    CreateDOM(jsondata) {

        document.body.appendChild(this.Header());

        var maindiv = document.createElement('div');
        maindiv.id = 'container';
        maindiv.className = 'maindiv';
        document.body.appendChild(maindiv);

        var leftdiv = document.createElement('div');
        leftdiv.id = 'left';
        leftdiv.className = 'leftdiv';
        maindiv.appendChild(leftdiv);

        leftdiv.appendChild(this.CreateModal());

        this.FillNewsContent(leftdiv, jsondata);

        var rightdiv = document.createElement('div');

        maindiv.appendChild(this.GenerateCategories(rightdiv));

        this.GenerateOptions();

        document.body.appendChild(this.FooterComponent());
    }

    CreateModal() {
        var modal = document.createElement('div');
        modal.id = 'myModal';
        modal.className = 'modal';

        var modalcontent = document.createElement('div');
        modalcontent.className = 'modal-content';
        modal.appendChild(modalcontent);

        var span = document.createElement('span');
        span.className = 'close';
        span.id = 'close';
        span.addEventListener('click',
            () => this.ClosePopUp());
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

    FillNewsContent(leftdiv, data) {
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

            var image = document.createElement('img');
            image.className = 'image';
            image.src = data.articles[i - 1].urlToImage;
            
            section.appendChild(image);

            var contentdiv = document.createElement('div');
            contentdiv.className = 'contentDiv';
            contentdiv.id = 'contentdiv';
            section.appendChild(contentdiv);

            var tittle = document.createElement('p');
            tittle.textContent = data.articles[i - 1].author;
            tittle.className = 'newschanneltext';
            tittle.id = 'ptittle' + i;
            contentdiv.appendChild(tittle);

            var category = document.createElement('p');
            category.className = 'category';
            category.id = 'pcategory' + i;
            category.textContent = data.articles[i - 1].title;
            contentdiv.appendChild(category);

            var content = document.createElement('p');
            content.className = 'content';
            content.id = 'pcontent' + i;
            content.textContent = data.articles[i - 1].description;
            contentdiv.appendChild(content);

            var continuereading = document.createElement('button');
            continuereading.className = 'contentReading';
            continuereading.textContent = 'Continue Reading';
            continuereading.value = i;
            continuereading.addEventListener('click',
                e => this.OpenPopUp(e.target.value));
            contentdiv.appendChild(continuereading);

            var line = document.createElement('p');
            contentdiv.appendChild(line);
        }
    }

    GenerateCategories(rightdiv) {

        rightdiv.id = 'right';
        rightdiv.className = 'rightdiv';

        var selectcategories = document.createElement('div');
        selectcategories.id = 'selectcategories';
        selectcategories.className = 'selectcategory';
        rightdiv.appendChild(selectcategories);

        var email = document.createElement('div');
        email.className = 'select';
        email.textContent = 'SELECT CATEGORY';
        rightdiv.appendChild(email);

        var all = document.createElement('div');
        rightdiv.appendChild(all);

        var select = document.createElement('select');
        select.setAttribute("id", "mySelect");
        select.className = 'selectwidth';
        select.addEventListener('change',
           e => this.SelectCategory(e.target.selectedIndex));
        all.appendChild(select);

        return rightdiv;
    }

    GenerateOptions() {
        for (var i = 0; i < 11; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", i);
            if (i === 0) {
                var text = document.createTextNode("All Channels");
            }
            else {
                var text = document.createTextNode(`News Channel - ${i}`); //template strings
            }
            option.appendChild(text);
            document.getElementById("mySelect").appendChild(option);
        }
    }

    Header() {
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

        headerp.appendChild(this.EmailComponent());

        return header;
    }

    EmailComponent() {
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
        subscribe.addEventListener('click',
            () => this.ValidateEmail());
        emaildiv.appendChild(subscribe);

        return emaildiv;
    }

    FooterComponent() {
        var footer = document.createElement('footer');
        var footerp = document.createElement('p');
        footerp.className = 'footer';
        footer.appendChild(footerp);

        var footerh6 = document.createElement('h6');
        footerh6.innerHTML = '&copy;NewsFeed 2019';
        footerp.appendChild(footerh6);

        return footer;
    }
}


