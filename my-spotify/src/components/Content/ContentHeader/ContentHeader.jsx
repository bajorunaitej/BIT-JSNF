import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function ContentHeader() {
  return (
    <div className="bg-[#121212] py-8 flex justify-between items-center">
      <div className="flex ml-4 text-5xl ">
        <a href="/">
          <MdKeyboardArrowLeft className="mr-4 border-none rounded-[50%] bg-[#000] text-[#8d8d8d]" />
        </a>
        <a href="/">
          <MdKeyboardArrowRight className="border-none rounded-[50%] bg-[#000] text-[#8d8d8d]" />
        </a>
      </div>

      <div className=" mr-8 flex gap-8 text-2xl font-bold text-[#a2a2a2] items-center">
        <a href="/" className="hover:text-white">
          Premium
        </a>
        <a href="/" className="hover:text-white">
          Support
        </a>
        <a href="/" className="hover:text-white">
          Download
        </a>
        <p>|</p>
        <a href="/" className="hover:text-white">
          Sign up
        </a>
        <button className="border-none bg-white text-black py-4 px-8 rounded-[40px] font-medium hover:font-bold">
          Log in
        </button>
      </div>
    </div>
  );
}
export default ContentHeader;
