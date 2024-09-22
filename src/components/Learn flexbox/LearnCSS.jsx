import "./LearnCSS.css"
import "../../i18n.js"
import { useTranslation } from "react-i18next"
import LanguageSelector from "../LangSelector/LangSelector.jsx"
const LearnCSS = () => {
   const {t} = useTranslation()
    return (
        <>
        {/* <div className="main-container"> */}
            {/* <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div> */}
            {/* <div className="one">5</div>
            <div className="two">6</div>
            <div className="three">7</div>
            <div className="one">8</div>
            <div className="two">9</div>
            <div className="three">10</div>
            <div className="one">11</div>
            <div className="two">12</div>
            <div className="three">13</div> */}
            <LanguageSelector />
            <h1 className="greeting">{t("greeting")}</h1>
            <h1 className="greeting">{t("intro")}</h1>
        {/* </div> */}
        </>
    )
}

export default LearnCSS