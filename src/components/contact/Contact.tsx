import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./contact.scss";
import { formSchema } from "../../formSchema/formSchema";
const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({ resolver: yupResolver(formSchema) });
  return (
    <div className="contact">
      <h3>Get in Touch</h3>
      <div className="contactLeft"></div>
      <div className="contactRight">
        <form action="">
          <div className="inputDivider">
            <Input
              label={"first name"}
              errors={!!errors.firstName}
              errorMessage={errors.firstName?.message || ""}
              register={register("firstName")}
            />
            <Input
              label={"last name"}
              errors={!!errors.lastName}
              errorMessage={errors.lastName?.message || ""}
              register={register("lastName")}
            />
          </div>
          <div className="inputDivider">
            <Input
              label={"email"}
              errors={!!errors.email}
              errorMessage={errors.email?.message || ""}
              register={register("email")}
            />
            <Input
              label={"phone"}
              errors={!!errors.phoneNumber}
              errorMessage={errors.phoneNumber?.message || ""}
              register={register("phoneNumber")}
            />
          </div>
          <div className="textAreaContainer">
            <textarea
              id=""
              cols={30}
              maxLength={200}
              {...register("message")}
              placeholder="Type your message"
            ></textarea>
            {errors?.message && <p>{errors.message.message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
