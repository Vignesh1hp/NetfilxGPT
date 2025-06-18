import { BG_IMG } from "../utils/constant";
// import GptMovieSuggestions from "./GptMovieSuggestion";
// import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_IMG} alt="logo" />
      </div>
      <div className="">
        {/* <GptSearchBar />
        <GptMovieSuggestions /> */}
      </div>
    </>
  );
};
export default GPTSearch;