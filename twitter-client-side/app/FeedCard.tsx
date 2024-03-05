import Image from "next/image"
import { AiOutlineHeart } from "react-icons/ai"
import { BiMessageRounded, BiUpload } from "react-icons/bi"
import { FaRetweet } from "react-icons/fa6"

export default function FeedCard(){
    return(
   <div className="border border-r-0 border-l-0 border-b-0 border-gray-600  p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-2">
         <div className="cols-span-1">
            <Image  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" 
            alt="user-image" 
            height={50}
             width={50}>
             </Image>
         </div>
         <div className="col-span-11">
            <h5>Kirandeep Singh</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia eos distinctio obcaecati temporibus voluptate facere dolorum quidem inventore? Natus.</p>
            <div className="flex justify-between  items-center mt-5 text-xl p-2 w-[90%">
            <div>
              <BiMessageRounded/>
            </div>
            <div>
               <FaRetweet/>
            </div>
            <div>
               <AiOutlineHeart/>
            </div>
            <div>
               <BiUpload/>
            </div>
          </div>
         </div>
         
      </div>
   </div>
    ) 
}

