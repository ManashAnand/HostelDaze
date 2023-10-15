import HostelCard from "@/components/HostelCard";
import MainPageLogo from "@/components/MainPageLogo";
import { anotherPG, hostelData } from "@/data";


export default function Home() {
  return (
   <>
    <div className=" text-3xl flex justify-center items-center bg-[#FFB703] p-4 -skew-x-12 mt-8 text-white">Our Hostels</div>
    <div className="md:grid grid-cols-3 gap-4 flex flex-col mt-12">
    {
      hostelData?.map((hostel) => {
        return(
          <>
          <HostelCard name={hostel?.name} descp={hostel?.descp}/> 
          </>
        )
      })
    }
    </div>
    <MainPageLogo/>
    <div className=" text-2xl sm:text-3xl flex justify-center items-center bg-[#FFB703] p-4 -skew-x-12 mt-8 text-white">Another Nearby PG</div>
    <div className="md:grid grid-cols-3 gap-4 flex flex-col mt-12">
    {
      anotherPG?.map((hostel) => {
        return(
          <>
          <HostelCard name={hostel?.name} descp={hostel?.descp}/> 
          </>
        )
      })
    }
    </div>
   </>
  )
}
