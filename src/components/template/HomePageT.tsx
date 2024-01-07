import Image from "next/image";
import Link from "next/link";

export default function HomePageT() {
  return (
    <div className="w-full md:mt-40">
      <div className="flex flex-col md:flex-row w-full">
        <div className="basis-1/3 flex justify-center">
          <Image
            src={"/background-img/1.png"}
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className="basis-1/3 flex justify-center flex-col mt-20">
          <h2 className="flex justify-center text-3xl mb-5 font-medium">
            پرسشنامه هاتو بسپار به ما
          </h2>
          <h4 className="flex justify-center text-2xl font-normal">
            راحت بپرس و راحت جواب بده
          </h4>
        </div>
        <div className="hidden md:flex basis-1/3  justify-center">
          <Image
            src={"/background-img/2.png"}
            width={250}
            height={250}
            alt=""
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Link href={"./create-survey"}>
          <button className="p-3 m-2 transition-all bg-gradient-to-r from-[#E55327] to-[#FEC428] hover:ring-8 ring-orange-400 rounded-lg">
            ایجاد پرسشنامه
          </button>
        </Link>
        <Link href={"./guid"}>
          <button className="p-3 m-2 transition-all bg-gradient-to-r from-[#0023EF] to-[#1086F3] hover:ring-8 ring-cyan-400 rounded-lg">
            راهنما
          </button>
        </Link>
      </div>
      {/* <div className="bg-about-me bg-fixed bg-bottom min-h-32 md:min-h-[200px] opacity-30  mt-11"></div> */}
      <div>
        ye texture
      </div>
      <div className="text-sm font-extralight mt-5 md:mt-10 md:w-4/5 m-auto bg-black/35 p-10 rounded-xl shadow-lg">
       
        <p>سلام ، من امیرحسینم</p>
        <p>
          فعلا دانشجوی مدیریت بازرگانی دانشگاه تهرانم و یکی از دغدغه
          هام پر کردن پرسشنامه هاییه که برای تحقیقاتم نیاز دارم
          پس این سایت رو ایجاد کردم تا هم برای خودم و هم برای بقیه مفید باشه
          راستی یادم رفت بگم ، من برنامه نویس فرانت اند هم هستم . 
          برای ارتباط با من میتونی بهم ایمیل بزنی  
        </p>
        <p>
          hosseinemir79@gmail.com
        </p>
      </div>
    </div>
  );
}
