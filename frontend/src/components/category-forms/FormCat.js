import FormCat1 from "./FormCat1";
import FormCat2 from "./FormCat2";
import FormCat3 from "./FormCat3";
import FormCat4 from "./FormCat4";
import FormCat5 from "./FormCat5";
import FormCat6 from "./FormCat6";

const FormCat = ({ category }) => {
  return (
    <>
      {category === "proximity" ? <FormCat1 /> : null}
      {category === "pastPupil" ? <FormCat2 /> : null}
      {category === "cousins" ? <FormCat3 /> : null}
      {category === "staff" ? <FormCat4 /> : null}
      {category === "officers" ? <FormCat5 /> : null}
      {category === "forigion" ? <FormCat6 /> : null}
    </>
  );
};
export default FormCat;
