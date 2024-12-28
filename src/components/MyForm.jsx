"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { PhoneInput } from "react-international-phone";
import * as yup from "yup";
import ErrorComponent from "./ErrorComponent";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";
import "./MyForm.css";

const phoneUtil = PhoneNumberUtil.getInstance();
const isPhoneValid = (phone) => {
  try {
    const parsedNumber = phoneUtil.parseAndKeepRawInput(phone);
    const isValid = phoneUtil.isValidNumber(parsedNumber);
    return isValid;
  } catch (error) {
    return false; // If parsing fails, return false
  }
};

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
      .test("phoneNumber", "شماره معتبر نمی باشد", (value) => {
        return isPhoneValid(value);
      })
      .required("این فیلد الزامی می باشد"),
  });

  return (
    <>
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
              <div dir="ltr" className="w-full">
                <PhoneInput
                  defaultCountry="ir"
                  value={props.values.phoneNumber}
                  onChange={(value) => {
                    props.setFieldValue("phoneNumber", value);
                  }}
                  className={`border-2 rounded-2xl px-2 py-1  bg-white ${
                    props.errors.phoneNumber && props.touched.phoneNumber
                      ? " border-red-600"
                      : " border-secondaryColor"
                  }`}
                  onBlur={() => props.setFieldTouched("phoneNumber", true)}
                />
              </div>
              <span className="text-red-600 text-[0.7rem]">
                {props.errors.phoneNumber && props.touched.phoneNumber
                  ? props.errors.phoneNumber
                  : ""}
              </span>
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
    </>
  );
};

export default MyForm;
