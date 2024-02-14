import { IoMdClose } from "react-icons/io";

function LanguageComponent({ nativeLanguage, inEnglish }) {
  return (
    <div className="m-2 p-3 text-base hover:bg-[rgb(90,90,90)]">
      <p>
        {nativeLanguage} <br />
        <span className="text-[rgb(145,145,145)]">{inEnglish}</span>
      </p>
    </div>
  );
}

export default function LanguagesModal({ open, onClose }) {
  if (!open) return null; //if not open return nothing
  //if open, render content ↓
  return (
    <div className="modal-overlay">
      <div className="languages-modal overflow-y-scroll">
        <header className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl">Choose a language</h1>
            <p className="text-base font-normal">
              This updates what you read on open.spotify.com
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-[#000] border-none rounded-[50%] p-1"
          >
            <IoMdClose className="text-2xl text-[rgb(145,145,145)]" />
          </button>
        </header>
        <hr className="mb-4" />
        <div className="grid grid-cols-4">
          <LanguageComponent nativeLanguage="English" inEnglish="English" />
          <LanguageComponent nativeLanguage="Africaans" inEnglish="Africaans" />
          <LanguageComponent nativeLanguage="አማርኛ" inEnglish="Amharic" />
          <LanguageComponent
            nativeLanguage="اَلْعَرَبِيَّةُ"
            inEnglish="Arabic"
          />
          <LanguageComponent
            nativeLanguage="مَصرى"
            inEnglish="Arabic (Egypt)"
          />
          <LanguageComponent
            nativeLanguage="المملكة المغربية"
            inEnglish="Arabic (Marocco)"
          />
          <LanguageComponent
            nativeLanguage="ٱلْعَرَبِيَّة ٱلسُّعُوْدِيَّة"
            inEnglish="Arabic (Saudi Arabia)"
          />
          <LanguageComponent
            nativeLanguage="Azerbaycanca"
            inEnglish="Azerbaijani"
          />
          <LanguageComponent
            nativeLanguage="български "
            inEnglish="Bulgarian"
          />
          <LanguageComponent nativeLanguage="भोजपुरी " inEnglish="Bhojpuri" />
          <LanguageComponent nativeLanguage="বাংলা " inEnglish="Bengali" />
          <LanguageComponent nativeLanguage="Bosanski" inEnglish="Bosnian" />
          <LanguageComponent nativeLanguage="Catala" inEnglish="Catalan" />
          <LanguageComponent nativeLanguage="Čeština" inEnglish="Chech" />
          <LanguageComponent nativeLanguage="Dansk" inEnglish="Danish" />
          <LanguageComponent nativeLanguage="Deutsch" inEnglish="German" />
          <LanguageComponent nativeLanguage="Ελληνικά" inEnglish="Greek" />
          <LanguageComponent
            nativeLanguage="English"
            inEnglish="United Kingdom"
          />
          <LanguageComponent
            nativeLanguage="Espanol de Espana"
            inEnglish="European Spanish"
          />
          <LanguageComponent
            nativeLanguage="Espanol de Latinoamerica"
            inEnglish="Latin American Spanish"
          />
          <LanguageComponent
            nativeLanguage="Espanol (Argentina)"
            inEnglish="Spanish (Argentina)"
          />
          <LanguageComponent
            nativeLanguage="Espanol (Mexico)"
            inEnglish="Spanish (Mexico)"
          />
          <LanguageComponent nativeLanguage="Eesti" inEnglish="Estonian" />
          <LanguageComponent nativeLanguage="Euskara" inEnglish="Basque" />
          <LanguageComponent nativeLanguage="فارسی" inEnglish="Persian" />
          <LanguageComponent nativeLanguage="Suomeski" inEnglish="Finnish" />
          <LanguageComponent nativeLanguage="Filipino" inEnglish="Filipino" />
          <LanguageComponent nativeLanguage="Francais" inEnglish="French" />
          <LanguageComponent
            nativeLanguage="Francais Canadian"
            inEnglish="Canadian French"
          />
          <LanguageComponent nativeLanguage="Galego" inEnglish="Galician" />
          <LanguageComponent nativeLanguage="ગુજરાતી" inEnglish="Gujarati" />
          <LanguageComponent nativeLanguage="עִבְֿרִית" inEnglish="Hebrew" />
          <LanguageComponent nativeLanguage="हिन्दी" inEnglish="Hindi" />
          <LanguageComponent nativeLanguage="Hrvatski" inEnglish="Croatian" />
          <LanguageComponent nativeLanguage="Magyar" inEnglish="Hungarian" />
          <LanguageComponent
            nativeLanguage="Bahasa Indonesia"
            inEnglish="Indonesian"
          />
          <LanguageComponent nativeLanguage="Islenska" inEnglish="Icelandic" />
          <LanguageComponent nativeLanguage="Islenska" inEnglish="Icelandic" />
          <LanguageComponent nativeLanguage="Italiano" inEnglish="Italian" />
          <LanguageComponent nativeLanguage="日本語" inEnglish="Japanese" />
          <LanguageComponent nativeLanguage="ಕನ್ನಡ" inEnglish="Kannada" />
          <LanguageComponent nativeLanguage="한국어" inEnglish="Korean" />
          <LanguageComponent nativeLanguage="Latviešu" inEnglish="Latvian" />
          <LanguageComponent
            nativeLanguage="македонски"
            inEnglish="Macedonian"
          />
          <LanguageComponent nativeLanguage="മലയാളം" inEnglish="Malayalam" />
          <LanguageComponent nativeLanguage="मराठी" inEnglish="Marathi" />
          <LanguageComponent nativeLanguage="Melayu" inEnglish="Melay" />
          <LanguageComponent nativeLanguage="Norsk" inEnglish="Norwegian" />
          <LanguageComponent nativeLanguage="नेपाली" inEnglish="Nepali" />
          <LanguageComponent nativeLanguage="Nederlands" inEnglish="Dutch" />
          <LanguageComponent nativeLanguage="ଓଡ଼ିଆ" inEnglish="Odia" />
          <LanguageComponent nativeLanguage="ਪੰਜਾਬੀ" inEnglish="Punjabi" />
        </div>
      </div>
    </div>
  );
}
