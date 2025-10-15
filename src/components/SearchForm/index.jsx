import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";

const SearchForm = () => {
  const { handleSubmit, control, register } = useForm();

  const onSubmit = (data) => {
    console.log("dataform" + JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default SearchForm;
