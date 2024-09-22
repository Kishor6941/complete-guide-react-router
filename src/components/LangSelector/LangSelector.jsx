import { useTranslation } from "react-i18next";

const language = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "Hindi" },
];

const LanguageSelector = () => {
  const style = {
    display: "flex",
    margin: "10px",
    justifyContent: "center",
    alignItems: "center",
  };

  let { i18n } = useTranslation();
  console.log(i18n);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  };

  return (
    <div className="btn-container" style={style}>
      {language.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
