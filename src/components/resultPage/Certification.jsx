const Certification = () => {
  return (
    <div className="py-5 px-8 w-full">
      <div className="w-full flex flex-col justify-start items-center gap-8">
        <h4 className="mb-4">گواهی و افتخارات ما </h4>
        <div className="flex flex-col justify-center items-center  shadow-md shadow-black/20 rounded-xl">
          <img
            src="/images/result/certification1.png"
            alt="گواهی"
            className="w-full border-b-4 border-primaryColor"
          />
          <div className="flex justify-between items-center p-2 bg-primaryColor border-b-2 border-primaryColor rounded-b-xl">
            <img
              src="/images/result/royal.jfif"
              alt=" Royal LePage logo"
              className="w-1/4"
            />
            <p> عضو مشاورین Royal LePage</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  shadow-md shadow-black/20 rounded-xl">
          <img
            src="/images/result/certification2.png"
            alt="گواهی"
            className="w-full border-b-4 border-primaryColor"
          />
          <div className="flex justify-between items-center p-2 bg-primaryColor border-b-2 border-primaryColor rounded-b-xl">
            <img
              src="/images/result/royal.jfif"
              alt=" Royal LePage logo"
              className="w-1/4"
            />
            <p> عضو مشاورین Royal LePage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
