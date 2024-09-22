import { useTranslation } from "react-i18next"
import "./Contact.css"

const Contact = () => {
  const {t}  = useTranslation()
  const {line1} =  t("description",{
    gitchannel : "Kishor6941"
  })
  
    return (
        <>
        <h1>{t("intro")}</h1>
        <h2>{line1}</h2>
        </>
    )
}

export default Contact