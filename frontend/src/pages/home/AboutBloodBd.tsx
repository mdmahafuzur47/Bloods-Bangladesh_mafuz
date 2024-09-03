import { RightDoubleArrowIcon } from "../../components/icons";
import Container from "../../components/ui/Container";

export default function AboutBloodBd() {
  return (
    <Container className="pt-20">
      <div className="flex px-2 lg:h-[88vh]  md:px-0 md:flex-row flex-col justify-center gap-16 items-center">
        <div className="flex-1 w-full h-full lg:w-[40%] relative">
          <img
            src="/images/home/help1.png"
            alt="img"
            className="w-full h-full object-cover"
          />

          {/* wrapper img  */}
          <div className="absolute right-0 top-[20%] lg:top-[35%]">
            <img
              src="/images/home/help2.png"
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* description  */}
        <div className="flex-1">
          <h3 className="text-primary font-semibold text-xl uppercase mb-4">
            Help The People in Need
          </h3>
          <h1 className="text-4xl lg:text-6xl tracking-wide lg:leading-[65px]  font-bold mb-8">
            Welcome to Blood Donors Organization
          </h1>
          <p className="text-gray-700 tracking-wide leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nostrum blanditiis molestias omnis tempora magnam debitis quod
            pariatur, dignissimos consequatur assumenda? Eius numquam alias
            facere id dolorum.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[1px] text-[18px] font-semibold">
                <RightDoubleArrowIcon className="text-2xl text-primary" />
                <h1>Good Service</h1>
              </div>
              <div className="flex items-center gap-[1px] text-[18px] font-semibold">
                <RightDoubleArrowIcon className="text-2xl text-primary" />
                <h1>24h Service</h1>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[1px] text-[18px] font-semibold">
                <RightDoubleArrowIcon className="text-2xl text-primary" />
                <h1>Help People</h1>
              </div>
              <div className="flex items-center gap-[1px] text-[18px] font-semibold">
                <RightDoubleArrowIcon className="text-2xl text-primary" />
                <h1>Health Check</h1>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[1px] text-[18px] font-semibold">
                <RightDoubleArrowIcon className="text-2xl text-primary" />
                <h1>Hugine Tools</h1>
              </div>
              <div className="flex items-center gap-[1px] text-[18px] font-semibold">
                <RightDoubleArrowIcon className="text-2xl text-primary" />
                <h1>Blood Bank</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
