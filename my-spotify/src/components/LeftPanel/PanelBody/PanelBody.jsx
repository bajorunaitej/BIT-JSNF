import { IoLibrarySharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

function PanelBody() {
  return (
    <div className="bg-[#121212] h-[80%] rounded-lg p-4">
      <div className="flex justify-between font-bold mb-4">
        <a className="linkInHeader" href="/">
          <IoLibrarySharp className="text-2xl mr-4" />{" "}
          <span className="flex ">Your Library</span>
        </a>
        <a href="/">
          <FaPlus className="text-2xl mr-4" />
        </a>
      </div>
      <div className="grid gap-6 h-48 min-h-12 overflow-y-scroll transition-transform">
        <div className="bg-[#242424] leading-10 p-4 rounded-[8px]">
          <h3 className="font-bold text-xl">Create your own playlist</h3>
          <p className="font-medium mb-4">It's easy, we'll help you</p>
          <button className="bg-[#fff] text-black font-medium rounded-[25px] px-3 py-px hover:font-[660]">
            Create playlist
          </button>
        </div>
        <div className="bg-[#242424] leading-10 p-4 rounded-[8px]">
          <h3 className="font-bold text-xl text-wrap">
            Let's find some podcasts to follow
          </h3>
          <p className="font-medium mb-4 mt-2 leading-[20px]">
            We'll keep you updated on new episodes
          </p>
          <button className="bg-[#fff] text-black font-medium rounded-[25px] px-3 py-px hover:font-[660]">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
}
export default PanelBody;
