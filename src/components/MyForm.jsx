"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import ErrorComponent from "./ErrorComponent";

const MyForm = ({ formRef }) => {
  const router = useRouter();

  const formInitialValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(4, "نام و نام خانوادگی معتبر نمی باشد")
      .required("این فیلد الزامی می باشد")
      .trim()
      .lowercase(),
      email: yup
      .string()
      .required("این فیلد الزامی می باشد")
      .trim()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "ایمیل معتبر نمی باشد"
      ),
      phoneNumber: yup
      .string()
      .matches(/^09\d{9}$/, "شماره تلفن معتبر نمی باشد")
      .required("این فیلد الزامی می باشد"),
  });
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      innerRef={formRef}
      onSubmit={() => router.push("/checkYourEmail")}
    >
      {(props) => (
        <>
          <Form className="flex flex-col justify-start items-center gap-1 w-full px-6">
            <label className="self-start text-[0.75rem]">
              نام و نام خانوادگی :
            </label>
            <Field
              placeholder="علیرضا محمدی"
              name="name"
              type="text"
              className={`w-full py-2 px-4 rounded-2xl outline-2 outline-double text-[0.75rem] ${
                props.errors.name && props.touched.name
                  ? "outline-red-600"
                  : " outline-secondaryColor"
              }`}
            />
            <ErrorMessage name="name" component={ErrorComponent} />
            <label className="self-start text-[0.75rem]">شماره تماس :</label>
            <div
              className={`w-full relative flex  rounded-2xl outline-2 bg-white  outline-double ${
                props.errors.phoneNumber && props.touched.phoneNumber
                  ? "outline-red-600 "
                  : "outline-secondaryColor"
              }`}
            >
              <Field
                name="phoneNumber"
                type="text"
                className="w-full rounded-2xl  text-[0.8rem]  px-4 bg-transparent focus:outline-none font-iransansNum font-bold"
                dir="ltr"
                placeholder="09123456789"
                onInput={handleInput}
              />
              <div className="border-r-2 px-4 py-1 flex flex-col justify-center items-center">
                <img
                  src="/images/form submitting/iran.png"
                  alt="پرچم ایران"
                  className="w-5 h-5"
                />
                <p
                  className="text-[0.76rem] font-iransansNum font-bold"
                  dir="ltr"
                >
                  +98
                </p>
              </div>
            </div>
            <ErrorMessage name="phoneNumber" component={ErrorComponent} />
            <label className="self-start text-[0.75rem]">ایمیل :</label>
            <Field
              name="email"
              dir="ltr"
              type="text"
              placeholder="example@email.com"
              className={`w-full py-2 px-4 rounded-2xl outline-2 outline-double   text-[0.75rem] ${
                props.errors.email && props.touched.email
                  ? "outline-red-600"
                  : " outline-secondaryColor"
              }`}
            />
            <ErrorMessage name="email" component={ErrorComponent} />
          </Form>
        </>
      )}
    </Formik>
  );
};

export default MyForm;
