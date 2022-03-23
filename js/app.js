(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const teachers_namespaceObject = JSON.parse('{"teachers":[{"firstName":"Алексей","middleName":"Алексеевич","lastName":"Березников","specialization":"Основы финансовой грамотности","photo":"img/content/shul.jpg"},{"firstName":"Галина","middleName":"Викторовна","lastName":"Долгoдушь","specialization":"Тех механика","photo":"img/content/dolg.jpg"},{"firstName":"Виталий","middleName":"Викторович","lastName":"","specialization":"Электро техника","photo":"img/content/vitali.jpg"},{"firstName":"Оксана","middleName":"Николаевна ","lastName":"Субботина","specialization":"Заместитель директора по учебной-вопитательной работе","photo":"img/content/EnXTmxugJA4.jpg"},{"firstName":"Александр","middleName":"","lastName":"Жданов","specialization":"отдел молодежной политики","photo":"img/content/zd.jpg"},{"firstName":"Валентина","middleName":"","lastName":"Мещерикова","specialization":"Зам директор","photo":"img/content/vmsch.jpg"},{"firstName":"Наталья","middleName":"","lastName":"Якимова","specialization":"","photo":"img/content/nya.jpg"},{"firstName":"Геннадий ","middleName":"","lastName":"Петрович","specialization":"Физра","photo":"img/content/gp.jpg"},{"firstName":"Алексей ","middleName":"","lastName":"Пыханов","specialization":"Физра","photo":"img/content/Ap.jpg"},{"firstName":"Яна","middleName":"","lastName":"Вишневская","specialization":"Директор","photo":"img/content/dir.jpg"},{"firstName":"Наталья ","middleName":"Михайловна","lastName":"","specialization":"","photo":"img/content/nm.jpg"}]}');
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
    window["FLS"] = true;
    isWebp();
    menuInit();
})();