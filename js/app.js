(() => {
    "use strict";
    const teachers_namespaceObject = JSON.parse('{"teachers":[{"firstName":"Алексей","middleName":"Алексеевич","lastName":"Березников","specialization":"Основы финансовой грамотности","photo":"img/content/shul.jpg"},{"firstName":"Галина","middleName":"Викторовна","lastName":"Долгoдушь","specialization":"Тех механика","photo":"img/content/dolg.jpg"},{"firstName":"Виталий","middleName":"Викторович","lastName":"","specialization":"Электро техника","photo":"img/content/vitali.jpg"},{"firstName":"Оксана","middleName":"Николаевна ","lastName":"Субботина","specialization":"Заместитель директора по учебной-вопитательной работе","photo":"img/content/EnXTmxugJA4.jpg"},{"firstName":"Александр","middleName":"","lastName":"Жданов","specialization":"отдел молодежной политики","photo":"img/content/zd.jpg"},{"firstName":"Валентина","middleName":"","lastName":"Мещерикова","specialization":"Зам директор","photo":"img/content/vmsch.jpg"},{"firstName":"Наталья","middleName":"","lastName":"Якимова","specialization":"","photo":"img/content/nya.jpg"},{"firstName":"Геннадий ","middleName":"","lastName":"Петрович","specialization":"Физра","photo":"img/content/gp.jpg"},{"firstName":"Алексей ","middleName":"","lastName":"Пыханов","specialization":"Физра","photo":"img/content/Ap.jpg"},{"firstName":"Яна","middleName":"","lastName":"Вишневская","specialization":"Директор","photo":"img/content/dir.jpg"},{"firstName":"Наталья ","middleName":"Михайловна","lastName":"","specialization":"","photo":"img/content/nm.jpg"},{"firstName":"Светлана","middleName":"Викторовна","lastName":"","specialization":"В бухгалтерии","photo":""},{"firstName":"Владимир","middleName":"Иванович","lastName":"Войтенко","specialization":"Физра","photo":""},{"firstName":"Коренской","middleName":"Олег","lastName":"Александрович","specialization":"Мдк","photo":""}]}');
    teachers_namespaceObject.toString();
    let teachersElem = document.querySelector(".teachers");
    function t(t) {
        for (let s = 0; s < t.length; s++) {
            let i = `\n\t\t\t<div class="persons__list">\n\t\t\t<div class="persons__avatar">\n\t\t\t\t<img src="${t[s].photo}" alt="teacher shtpt">\n\t\t\t</div>\n\t\t\t<div class="persons__body">\n\t\t\t\t<h3 class="persons__title">\n\t\t\t\t\t${t[s].firstName} ${t[s].middleName} ${t[s].lastName}\n\t\t\t\t</h3>\n\t\t\t\t${t[s].specialization ? `\n\t\t\t\t<div class="persons__text">\n\t\t\t\t${t[s].specialization}\n\t\t\t\t</div>` : ""}\n\t\t\t</div >\n\t\t</div >\n\t\t`;
            teachersElem.innerHTML += i;
        }
    }
    t(teachers_namespaceObject.teachers);
    const searchIcon = document.querySelector("#searchIcon");
    const searchInput = document.querySelector(".search__input");
    const searchInputInner = searchInput.children[0];
    const content = document.querySelector(".content");
    searchIcon.onclick = function() {
        searchInput.classList.toggle("active-search");
        if (searchInput.classList.contains("active-search")) {
            searchInputInner.focus();
            content.classList.add("padding-content");
        } else {
            searchInputInner.blur();
            content.classList.remove("padding-content");
            searchInputInner.value = "";
        }
    };
    searchInputInner.oninput = function() {
        let val = searchInputInner.value.toUpperCase().trim();
        let persons = document.querySelectorAll(".persons__list");
        if ("" != val) persons.forEach((function(elem) {
            if (-1 == elem.innerText.toUpperCase().search(val)) elem.classList.add("hide"); else elem.classList.remove("hide");
        })); else persons.forEach((function(elem) {
            elem.classList.remove("hide");
        }));
    };
})();
