const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videoElements = document.querySelectorAll('.support__video__wrapper div');
const videoElements2 = document.querySelectorAll('.school__video__wrapper div');

console.log(videoElements2);
let player;
let player2;
let playerMobile;
let playerMobile2;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '-ggxuolcxeg',
    events: {
        'onReady': onReady
    }
  });

  player2 = new YT.Player('player2', {
    height: '317',
    width: '619',
    videoId: 'BkMZWW3AP0c',
    events: {
        'onReady': onReady2
    }
  });

  playerMobile = new YT.Player('playerMobile', {
    height: '211',
    width: '273',
    videoId: '-ggxuolcxeg',
    events: {
        'onReady': onReady
    }
  });

  playerMobile2 = new YT.Player('playerMobile2', {
    height: '166',
    width: '323',
    videoId: 'BkMZWW3AP0c',
    events: {
        'onReady': onReady2
    }
  });
}

function onReady() {
    player.addEventListener('onStateChange', function(e) {
        videoElements.forEach(item => {
            if(e.data == '1') {
                item.style.cssText = `opacity: 0; transition: .3s ease`;
            } else {
                item.style.cssText = `opacity: 1; transition: .3s ease`;
            }
            
        });
    });
    playerMobile.addEventListener('onStateChange', function(e) {
        videoElements.forEach(item => {
            if(e.data == '1') {
                item.style.cssText = `opacity: 0; transition: .3s ease`;
            } else {
                item.style.cssText = `opacity: 1; transition: .3s ease`;
            }
            
        });
    });
}

function onReady2() {
    player2.addEventListener('onStateChange', function(e) {
        videoElements2.forEach(item => {
            if(e.data == '1') {
                item.style.cssText = `opacity: 0; transition: .3s ease`;
            } else {
                item.style.cssText = `opacity: 1; transition: .3s ease`;
            }
            
        });
    });

    playerMobile2.addEventListener('onStateChange', function(e) {
        videoElements2.forEach(item => {
            if(e.data == '1') {
                item.style.cssText = `opacity: 0; transition: .3s ease`;
            } else {
                item.style.cssText = `opacity: 1; transition: .3s ease`;
            }
            
        });
    });
}

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
            about: "Про нас",
            contacts: "Контакти",
            btn: "ПІДТРИМАТИ",
            supportTitle: "Здобуваємо перемогу у повітрі разом",
            supportDescr: "Підтримуємо виробництво дронів, навчаємо операторів для пілотування БПЛА і забезпечуємо військових необхідною технікою",
            supportSubtitle: "Збір на ударний дрон",
            goal: "Сума:",
            specifications: "Характеристики:",
            specification_1: "Дальність польоту на 10 км",
            specification_2: "Корисне навантаження до 10 кг",
            specification_3: "Тепловізійна камера",
            specification_4: "Система скидання на 6 зарядів",
            supportFor: "Для кого:",
            supportForValue_1: "Група Браво-2.",
            supportForValue_2: "Рота Софія",
            supportForValue_3: "Батальон Тор патрульної поліції",
            location: "Локація:",
            locationValue: "Бахмут, Україна",
            videoBtn: "Терміново",
            schoolTitle: "Підтримати UA Drone School",
            aboutSchool: "Про школу",
            aboutSchoolValue_1: "Безкоштовний 4-х денний курс для військових",
            aboutSchoolValue_2: "Теоретична та технічна підготовка",
            aboutSchoolValue_3: "Практичні заняття",
            aboutSchoolValue_4: "Імітація бойових завдань",
            aboutTitle: "Про нас",
            aboutDescr: "Advanced Defence - громадська організація, що займається підготовкою і підвищенням кваліфікації операторів дронів, а також підтримує розробку та виготовлення Українських коптерів та БПЛА. Окрім того, ми займаємося цільовими зборами для підрозділів, що потребують відповідної техніки.",
            accomplishments_1: "військових випускників UA Drone School",
            accomplishments_2: "годин учбового часу в небі",
            accomplishments_3: "волонтерів залучених до роботи в ГО",
            footerTitle: "ГО “Advanced Defenсe”"
        },
        en: {
            about: "About us",
            contacts: "Contacts",
            btn: "Donate Now",
            supportTitle: "Winning In The Air Together",
            supportDescr: "We support the Ukrainian production of drones, train Unmanned Aircraft Systems operators, and provide the military with the necessary equipment.",
            supportSubtitle: "Fundraising One Combat Drone",
            goal: "Goal: ",
            specifications: "Specifications:",
            specification_1: "The flight range is up to 10 km",
            specification_2: "Payload is up to 10 kg",
            specification_3: "Thermal imaging camera",
            specification_4: "Drop system for 6 missiles",
            supportFor: "For the fighters of",
            supportForValue_1: "Group Bravo-2",
            supportForValue_2: "Sofia Company",
            supportForValue_3: "Tor Battalion of the Patrol Police",
            location: "Location:",
            locationValue: "Bakhmut, Ukraine",
            videoBtn: "urgently",
            schoolTitle: "Fundraising For UA DRONE SCHOOL",
            aboutSchool: "About the school:",
            aboutSchoolValue_1: "Free 4-day course for military personnel",
            aboutSchoolValue_2: "Theoretical and technical training",
            aboutSchoolValue_3: "Practical training",
            aboutSchoolValue_4: "Simulation of combat missions",
            aboutTitle: "About us",
            aboutDescr: "Advanced Defense is a non-governmental organization engaged in the training and improvement of the qualifications of drone operators, as well as supporting the development and production of Ukrainian copters and UAVs.",
            accomplishments_1: "military graduates",
            accomplishments_2: "flight hours",
            accomplishments_3: "volunteers",
            footerTitle: "“Advanced Defenсe”"
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

    // langUa.addEventListener('click', () => {
        
    // });

    langSwitcher.addEventListener('click', () => {
        dropdownItem.forEach(item => {
            item.addEventListener('click', () => {
                translateInterface(item.dataset.lang);
                document.cookie = `lang=${item.dataset.lang}`
            });
        });
        langEn.classList.toggle('disable');
        langArrow.classList.toggle('arrow_active');
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
