import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  massege: string;
};
type Props = {};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:marahman@binaryquest.com?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.massege} ($${formData.email})`;
  };

  return (
    <div
      className="min-h-screen flex flex-col md:text-left text-center relative
    xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="underline  decoration-[#F7AB0A]/50">Lets talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">+8801937091332</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">mrahman@binaryquest.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">Laxmibazar,dhaka-1100</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contentInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contentInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contentInput"
            type="text"
          />
          <textarea
            {...register("massege")}
            placeholder="massege"
            className="contentInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
