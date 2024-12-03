import React from "react";
import WorkMockUp_1 from "../Image_Files/ArinonImages/Work MockUp-01.jpg"
import WorkMockUp_2 from "../Image_Files/ArinonImages/Work MockUp-02.jpg"
import WorkMockUp_3 from "../Image_Files/ArinonImages/Work MockUp-03.jpg"
import WorkMockUp_4 from "../Image_Files/ArinonImages/Work MockUp-04.jpg"
import WorkMockUp_5 from "../Image_Files/ArinonImages/Work MockUp-05.jpg"
import WorkMockUp_6 from "../Image_Files/ArinonImages/Work MockUp-06.jpg"
import WorkMockUp_7 from "../Image_Files/ArinonImages/Work MockUp-07.jpg"
import WorkMockUp_8 from "../Image_Files/ArinonImages/Work MockUp-08.jpg"
const images = [
      WorkMockUp_1,
      WorkMockUp_2,
      WorkMockUp_3,
      WorkMockUp_4,
      WorkMockUp_5,
      WorkMockUp_6,
      WorkMockUp_7,
      WorkMockUp_8,
];

const Test = () => {
      return (
            <div className="grid grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-1 max-md:grid-cols-2 max-md:grid-rows-2 max-lg:grid-cols-3 max-lg:grid-rows-3 grid-cols-4 w-full gap-0">
                  {images.map((image, index) => (
                        <div key={index} >
                              <div className="relative group w-full h-full overflow-hidden">
                                    <img
                                          src={image}
                                          alt={`Image ${index + 1}`}
                                          className="w-full h-full object-cover"
                                    />
                                    <div className="text-center text-2xl absolute -bottom-12  group-hover:bottom-0 transition-all duration-300 left-0 z-50 text-black w-full h-12 bg-white" > CARDS{index + 1}</div>
                                    <div className="absolute opacity-0  group-hover:opacity-100 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 transition-all duration-300 bg-[#0000008f] flex justify-center items-center w-full h-full ">VISIT</div>
                              </div>
                        </div>
                  ))}
            </div>
      );
};

export default Test;
