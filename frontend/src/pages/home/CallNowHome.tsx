import { PhoneIcon } from "../../components/icons";

export default function CallNowHome() {
  return (
    <div
      className="w-full h-[500px] lg:h-[400px] mt-16  relative"
      style={{
        background: "url('/images/home/count.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 w-full h-full bg-[#20120de8]"></div>
      <div className="absolute top-0 w-full h-full">
        <div className="flex justify-center items-center px-2 w-full h-full ">
          <div className="py-10 border-[8px] rounded-sm border-red-800 w-full max-w-5xl mx-auto relative ">
            <div className="size-16 left-1/2 -top-[35px] rounded-md -translate-x-1/2 absolute bg-red-800 rotate-[45deg] flex justify-center items-center">
              <PhoneIcon className="text-4xl -rotate-45 text-gray-300" />
            </div>

            <div className="text-center text-white py-5">
              <h3 className="text-xl font-medium">START DONATING</h3>
              <h1 className="text-4xl mt-4 font-semibold">Call Now: 0179325 3675</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
