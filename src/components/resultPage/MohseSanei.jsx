const MohseSanei = () => {
  return (
    <div className="px-8 py-20 mt-24">
      <div className="bg-primaryColor flex justify-start items-center flex-col p-9 rounded-xl gap-8">
        <div className=" relative w-full flex justify-center items-center lg:h-20 md:h-12 h-10">
          <img
            src="/images/result/mohsen.png"
            alt="محسن صانعی"
            className="rounded-full border-8 border-primaryColor absolute bottom-0  w-2/3"
          />
        </div>
        <h4>سلام! من محسن صانعی هستم</h4>
        <p className="text-[0.75rem] text-center">
          یک ریلیتور حرفه‌ای با تجربه چندین ساله در بازار املاک و مستغلات هستم.
          هدف من این است که به شما در فرآیند خرید، فروش یا اجاره ملک کمک کنم و
          تجربه‌ای ساده، بی‌دغدغه و موفقیت‌آمیز را برایتان رقم بزنم.
        </p>
        <p className="self-start text-sm">ویژگی‌های من به عنوان یک ریلیتور:</p>
        <div className="flex justify-start items-center gap-3">
          <img
            src="/images/result/icons/recommend 1.png"
            alt="آیکن"
            className="w-8 aspect-square"
          />
          <p className="text-[0.75rem]">
            تجربه و تخصص: با چندین سال تجربه در بازار املاک، می‌توانم شما را در
            هر مرحله از خرید، فروش یا اجاره ملک راهنمایی کنم.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <img
            src="/images/result/icons/recommend 4.png"
            alt="آیکن"
            className="w-6 aspect-square"
          />
          <p className="text-[0.75rem]">
            تمرکز بر نیازهای شما: به دقت به نیازها و خواسته‌های شما گوش می‌دهم و
            بهترین پیشنهادها را ارائه می‌دهم..
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <img
            src="/images/result/icons/recommend 3.png"
            alt="آیکن"
            className="w-7 aspect-square"
          />
          <p className="text-[0.75rem]">
            مذاکرات حرفه‌ای: با توانمندی‌های مذاکره‌ام، بهترین قیمت و شرایط را
            برای شما در خرید، فروش یا اجاره فراهم می‌کنم.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <img
            src="/images/result/icons/recommend 5.png"
            alt="آیکن"
            className="w-7 aspect-square"
          />
          <p className="text-[0.75rem]">
            تعهد به مشتری: اولویت من رضایت شماست؛ با شفافیت و اعتماد، به شما در
            تصمیم‌گیری‌های آگاهانه کمک می‌کنم.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MohseSanei;
