import localFont from "next/font/local";
import React from "react";

const SourGummy = localFont({
  src: "../app/fonts/SourGummy.ttf",
  variable: "--sourGummy",
  weight: "100 900",
});

const yujiMai = localFont({
  src: "../app/fonts/YujiMai-Regular.ttf",
  variable: "--YujiMai",
  weight: "100 900",
});

export const ContactMe = () => {
  return (
    <div className="h-[100vh] w-[100%] mt-3">
      <div
        className={`getIntouch text-white ${SourGummy.className} text-4xl text-center `}
      >
        Get in Touch
      </div>
      <div className="form flex justify-evenly items-center mt-[18vh]">
        <div className="contactInfo flex flex-col text-white gap-4">
          <p className="font-serif text-xl font-semibold">
            Contact Information
          </p>
          <div className="email flex items-center gap-2">
            <img src="./gmail.png" alt="gmail" className="h-6" />
            <p className="email text-md font-mono">
              vedantpersonal676@gmail.com
            </p>
          </div>
          <div className="phoneCall flex items-center gap-2">
            <img src="./phone-call.png" alt="phone" className="h-6" />
            <p className="call text-md font-mono">+91 7249864592</p>
          </div>
          <div className="lacation flex items-center gap-2">
            <img src="./placeholder.png" alt="phone" className="h-6" />
            <p className="location text-md font-mono">Nagpur, Maharashtra</p>
          </div>
        </div>
        <form action="">
          <div className="element flex flex-col gap-7 bg-gray-900 p-5 rounded-lg w-[30vw]">
            <input
              type="text"
              placeholder="Enter Your name"
              className="py-1 px-5 mt-3 text-slate-200 rounded w-[100%] text-lg font-mono bg-slate-950 shadow-md shadow-black"
            />
            <input
              type="text"
              placeholder="Enter Your Email Id"
              className="py-1 px-5 text-slate-200 rounded w-[100%] text-lg font-mono bg-slate-950 shadow-md shadow-black"
            />
            <textarea
              name="message"
              placeholder="Enter Some Messeges...."
              className="py-1 px-5 text-slate-200 h-32 rounded w-[100%] text-lg font-mono bg-slate-950 shadow-md shadow-black"
            ></textarea>
            <button
              className={`py-3 px-3 rounded-lg bg-slate-950 mb-3 shadow-lg mt-4 shadow-black text-white ${yujiMai.className} text-xl`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
