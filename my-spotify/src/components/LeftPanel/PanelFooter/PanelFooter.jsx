import { HiOutlineGlobeAlt } from "react-icons/hi";
import LanguagesModal from "./LanguagesModal/LanguagesModal";
import { useState } from "react";

function PanelFooter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#121212] h-[40%] text-xs text-gray-400 font-bold p-4">
      <div className="mb-4">
        <a href="/" className="inline-block ml-4 mb-2">
          Legal
        </a>
        <a href="/" className="inline-block ml-4  mb-2">
          Privacy center
        </a>
        <a href="/" className="inline-block ml-4  mb-2">
          Privacy policy
        </a>
        <a href="/" className="inline-block ml-4 mb-2">
          Cookie settings
        </a>
      </div>
      <div className="mb-4">
        <a href="/" className="inline-block ml-4 ">
          About ads
        </a>
        <a href="/" className="inline-block ml-4 ">
          Accessibility
        </a>
      </div>
      <div>
        <a href="/" className="inline-block ml-4 ">
          Cookies
        </a>
      </div>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="mt-4 ml-4 py-2 px-3 border-2 border-slate-300 rounded-[40px] text-white hover:border-white "
      >
        <HiOutlineGlobeAlt className="inline-block items-center mr-2" />
        <strong>English</strong>
      </button>
      <LanguagesModal open={isOpen} onClose={() => setIsOpen(false)}>
        Chocoladinė diena
      </LanguagesModal>
    </div>
  );
}
export default PanelFooter;
