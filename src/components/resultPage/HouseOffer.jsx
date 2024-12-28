"use client";
const HouseOffer = () => {
  return (
    <div className="w-full py-5 px-8">
      <div className="flex gap-2 w-full justify-center items-center">
        <p className="text-[0.75rem] basis-2/3">
          فرصت تناسب شما برای خرید خانه در این منطقه :
        </p>
        <div className="flex flex-col justify-center items-center basis-1/3">
          <p className="font-iransansNum font-bold text-[0.8rem]">20%</p>
          <label className="w-full relative bg-zinc-200 rounded-md h-3  ">
            <span
              className={`absolute left-0 h-full rounded-md bg-secondaryColor w-1  transition-all duration-300`}
              style={{ width: "20%" }}
            ></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default HouseOffer;
