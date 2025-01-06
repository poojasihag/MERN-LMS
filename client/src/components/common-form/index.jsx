import { Button } from "../ui/button";
import FormControls from "./form-controls";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form-controls here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button className="mt-5 w-full" type="submit">{buttonText || "Submit"}</Button>
    </form>
  );
};

export default CommonForm;
