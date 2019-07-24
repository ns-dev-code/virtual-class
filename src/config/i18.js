
let _i18n;

if(typeof window !==  'undefined'){

const i18n = require('i18next').default;
const Backend = require('i18next-xhr-backend');
const LanguageDetector = require('i18next-browser-languagedetector');
const initReactI18next = require('react-i18next').initReactI18next;
const translationEN = require('../../public/locales/en/page-header.json');
const translationRU = require('../../public/locales/ru/page-header.json');

const availableLanguages= ['en','ru']
const resources = {
    en:{
        translation:translationEN
    },
    ru:{
        translation:translationRU
    }
}

_i18n = i18n;
i18n
.use(initReactI18next)
.use(Backend)
.use(LanguageDetector)
.init({
    resources,
    lng:"en",
    fallbackLng:"en",

    whitelist:availableLanguages,
    ns:["translations"],
    defaultNS:"translations",
    debug:true,
    
    interpolation:{
        escapeValue:false
    },
   
})  

}
export default _i18n