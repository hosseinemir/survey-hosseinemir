import React from "react";

export default function Footer() {
  return (
    <div className="  w-full min-h-[200px] flex items-center justify-center pb-10">
      <div className="w-3/4 min-h-[150px] flex flex-col  items-center justify-start rounded shadow-lg md:flex-row md:items-start md:justify-center bg-gradient-to-b from-[#230925]/50 to-[#39063f]/50">
        <div className="basis-1/2 p-6  flex items-start flex-col">
        <p>هدف ما چیه؟؟!</p>
        
        <p>اینجا یه پلتفرم برای کسب درامد و رسیدن به نتیجه مطلوب محقق هاست .</p>
        <p>همه ی ادما میتونن بیان اینجا و از کسب درآمد یا انجام  شدن تحقیق هاشون لذت ببرن.</p>
        </div>
        <div className="basis-1/2 p-6 flex flex-col">  
        
        <p>اعتبارمون از کجاست؟</p>
        <p>
          به جز مجوز های رسمی ای که داریم ، رفیقایی مثل شما که مارو به بقیه معرفی میکنن به ما اعتبار دادن
        </p>
        </div>
      </div>
    </div>
  );
}
