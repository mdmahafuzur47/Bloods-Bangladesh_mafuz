
import Container from '../../components/ui/Container'

export default function CallNowHome() {
  return (
    <div
      className="w-full h-[500px] lg:h-[300px] mt-16 relative"
      style={{
        background: "url('/images/home/count.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 w-full h-full bg-[#20120de8]"></div>
      <div className="absolute top-0 w-full h-full">
        <Container className="flex md:flex-row flex-col w-full h-full justify-center text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-between md:mx-16  w-full gap-5 sm:gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                className="sm:w-14 sm:h-16 mb-4 object-fill"
                src="/images/home/c1.png"
                alt="img"
              />
              <h1 className=" text-2xl sm:text-4xl font-bold">2</h1>
              <h4 className="text-md sm:text-xl font-medium mt-2 uppercase">
                Year experience
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                className="sm:w-14 sm:h-16 mb-4 object-fill"
                src="/images/home/c2.png"
                alt="img"
              />
              <h1 className=" text-2xl sm:text-4xl font-bold">316</h1>
              <h4 className="text-md sm:text-xl font-medium mt-2 uppercase">
                happy donors
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                className="sm:w-14 sm:h-16 mb-4 object-fill"
                src="/images/home/c3.png"
                alt="img"
              />
              <h1 className=" text-2xl sm:text-4xl font-bold">8</h1>
              <h4 className="text-md sm:text-xl font-medium mt-2 uppercase">
                total awards
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                className="sm:w-14 sm:h-16 mb-4 object-fill"
                src="/images/home/c4.png"
                alt="img"
              />
              <h1 className=" text-2xl sm:text-4xl font-bold">310</h1>
              <h4 className="text-md sm:text-xl font-medium mt-2 uppercase">
                happy recipient
              </h4>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
