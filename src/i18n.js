import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
    backend: {
        // for all available options read the backend's repository readme file
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      },
//   debug: true, // for development purpose only
  // lng : "hi",
  fallbackLng: "en",
  returnObjects: true,
  // resources : {
  //     en : {
  //         translation :{
  //             greeting : "Hello Kishor!",
  //             intro : "Hi, my name is jon and I am from US",
  //             description : {
  //                 line1 : "You are seeing {{gitchannel}} gitHub account"
  //             }
  //         }
  //     },
  // hi : {
  //     translation :{
  //         greeting : "नमस्ते किशोर!",
  //         intro : "नमस्ते, मेरा नाम जॉन है और मैं अमेरिका से हूं",
  //         description : {
  //             line1 : "आप {{gitchannel}} गिटहब खाता देख रहे हैं"
  //         }
  //     }
  // }
  //}
});
