import { CONFIG_FORM_FIELDS } from "../../constants/CONFIG_FORM_FIELDS";

export default function ConfigFormFields({ register }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="configInputContainer">
        <p className="text-gray-600 text-sm">Store name</p>
        <input
          className="configInputField"
          {...register(CONFIG_FORM_FIELDS.name.name)}
          type={CONFIG_FORM_FIELDS.name.type}
          placeholder={CONFIG_FORM_FIELDS.name.placeholder}
        />
      </div>

      <div className="configInputContainer">
        <p className="text-gray-600 text-sm">Website address</p>
        <input
          className="configInputField"
          {...register(CONFIG_FORM_FIELDS.url.name)}
          type={CONFIG_FORM_FIELDS.url.type}
          placeholder={CONFIG_FORM_FIELDS.url.placeholder}
        />
      </div>

      <div className="configInputContainer">
        <p className="text-gray-600 text-sm">Support email</p>
        <input
          className="configInputField"
          {...register(CONFIG_FORM_FIELDS.email.name)}
          type={CONFIG_FORM_FIELDS.email.type}
          placeholder={CONFIG_FORM_FIELDS.email.placeholder}
        />
      </div>
    </div>
  );
}
