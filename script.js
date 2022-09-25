window.addEventListener('DOMContentLoaded', () => {
    const videoElements = document.querySelectorAll('.support__video__wrapper div');
    const video = document.querySelector('.support__video');
    const langUa = document.querySelector('#ua');
    const langEn = document.querySelector('#en');
    const langArrow = document.querySelector('#arrow');
    const langSwitcher = document.querySelector('.lang-switcher');

    let dropdownItem = [...langSwitcher.querySelectorAll("[data-lang]")];

    const strings = {
        ua: {
            about: "Про нас"
        },
        en: {
            about: "About us"
        }
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      
    }
    
    if (getCookie('lang')) {
        translateInterface(getCookie('lang'));
    } else {
        translateInterface('ua');
    }

    langUa.addEventListener('click', () => {
        langEn.classList.toggle('disable');
        langArrow.classList.toggle('arrow_active');
    });

    langSwitcher.addEventListener('click', () => {
        dropdownItem.forEach(item => {
            item.addEventListener('click', () => {
                translateInterface(item.dataset.lang);
                document.cookie = `lang=${item.dataset.lang}`
            });
        });
    });

    function getString(lang, key) {
        if (strings[lang].hasOwnProperty(key)) {
            return strings[lang][key];
        } else {
            return key;
        }
    }

    function translateInterface(language) {
        const stringsPlace = document.querySelectorAll('[data-key]');
    
        for (const string of stringsPlace) {
            string.innerHTML = getString(language, string.getAttribute('data-key'));
        }
    }
    
    
});
