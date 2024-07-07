import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./contact.scss";
import { formSchema } from "../../formSchema/formSchema";
import Button from "../button/Button";
import { BsWhatsapp } from "react-icons/bs";

import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Title from "../title/Title";
import { useTheme } from "../../contexts/themecontext/ThemeProvider";
import { toast } from "react-toastify";
type DataType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};
const Contact = () => {
  const { theme } = useTheme();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleFormSubmit = (data: DataType, e: any) => {
    e.preventDefault();
    if (data) {
      toast.success("Message sent successfully !");
    }
    reset();
  };

  return (
    <div
      className={`contact ${theme === "light" ? "light" : "dark"}`}
      id="contact"
    >
      <div className="contactWrapper ">
        <div className="contactLeft">
          <div className="title">
            <Title title={"Get In Touch"} />
          </div>
          <p>
            I'm at your services, contact me and see my creativity work for your
            business.
          </p>
          <div className="imgContainer ">
            <img
              src="/images/contactImg.png"
              alt="contactImg"
              className="img"
            />
          </div>

          <div className="phone ">
            <a className="phoneLink" href="tel:+2349137347328">
              {" "}
              call:{""} +2349137347328
            </a>
          </div>
          <div className="mailContainer ">
            <a href="https://wa.me/+2349078512087" className="whatsapp">
              <BsWhatsapp />
            </a>
            <a className="mail" href="">
              <FaLinkedin />
            </a>
            <a className="mail" href="mailto:ukandieudo202@gmail.com">
              <MdMail />
            </a>
          </div>
        </div>
        <div className="contactRight">
          <h3>Send me a message</h3>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            action=""
            className="form"
          >
            <div className="inputDivider">
              <Input
                placeholder={"First name"}
                label={"first name"}
                errors={!!errors.firstName}
                errorMessage={errors.firstName?.message || ""}
                register={register("firstName")}
              />
              <Input
                placeholder={"Last name"}
                label={"last name"}
                errors={!!errors.lastName}
                errorMessage={errors.lastName?.message || ""}
                register={register("lastName")}
              />
            </div>
            <div className="inputDivider">
              <Input
                placeholder={"Email"}
                label={"email"}
                errors={!!errors.email}
                errorMessage={errors.email?.message || ""}
                register={register("email")}
              />
              <Input
                placeholder={"Phone"}
                label={"phone"}
                errors={!!errors.phoneNumber}
                errorMessage={errors.phoneNumber?.message || ""}
                register={register("phoneNumber")}
              />
            </div>
            <div className="textAreaContainer">
              <div>
                <label htmlFor="message">Message</label>
              </div>
              <textarea
                id=""
                cols={15}
                rows={10}
                maxLength={200}
                {...register("message")}
                placeholder="Type your message"
              ></textarea>
              {errors?.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>
            <Button type={"submit"} label="Send" className={"btnBgcolor"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
