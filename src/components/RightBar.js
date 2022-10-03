import { Link } from "react-router-dom";

export default function RightBar() {
  return (
    <section className="flex flex-col items-end lg:mt-[200px]">
      <h6 className="font-Helvetica text-[64px] font-bold leading-[64px] text-right">
        Imagine if
      </h6>
      <h1 class="font-Helvetica font-bold text-right text-[64px] leading-[64px]  text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
        Snapchat
      </h1>
      <h6 className="font-Helvetica text-[64px] font-bold leading-[64px] text-right">
        had events.
      </h6>

      <div className="w-[521px] h-[56px]">
        <p className="font-Helvetica font-light text-[24px] leading-[27.6px] text-right text-[#4F4F4F]">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>

      <Link to="/create">
      <button className="float-right w-[320px] h-[55px] mt-10 p-[16px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white text-sm font-medium rounded-[10px]">
        Create my event
      </button>
      </Link>

    </section>
  );
}
