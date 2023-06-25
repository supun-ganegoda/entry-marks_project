import FormCat1 from "./FormCat1";
import FormCat2 from "./FormCat2";
import FormCat3 from "./FormCat3";
import FormCat4 from "./FormCat4";
import FormCat5 from "./FormCat5";
import FormCat6 from "./FormCat6";
import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FloatingSummary from "../FloatingSummary";
import { MarksContext } from "../context/MarksContext";

const CatHolder = () => {
  const BoldTab = styled(Tab)`
    font-weight: bold;
  `;
  const location = useLocation();
  const { updateMarks } = useContext(MarksContext);
  const checkboxes = location.state?.checkboxes || {};

  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    // Find the first checked checkbox and set it as the active component
    const checkedComponent = Object.keys(checkboxes).find(
      (key) => checkboxes[key]
    );
    setActiveComponent(checkedComponent);
  }, [checkboxes]);

  const handleTabChange = (event, newActiveComponent) => {
    console.log(newActiveComponent);
    setActiveComponent(newActiveComponent);
  };

  const handleMarksInit = () => {
    if (checkboxes.checkbox1) {
      updateMarks("cat1", false);
    }
    if (checkboxes.checkbox2) {
      updateMarks("cat2", false);
    }
    if (checkboxes.checkbox3) {
      updateMarks("cat3", false);
    }
    if (checkboxes.checkbox4) {
      updateMarks("cat4", false);
    }
    if (checkboxes.checkbox5) {
      updateMarks("cat5", false);
    }
    if (checkboxes.checkbox6) {
      updateMarks("cat6", false);
    }
  };

  console.log(checkboxes);

  useEffect(() => {
    handleMarksInit();
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "98%",
          bgcolor: "background.paper",
          marginBottom: "8px",
          position: "sticky",
          top: "80px",
          zIndex: 1,
        }}
      >
        <Tabs
          value={activeComponent}
          onChange={handleTabChange}
          variant="scrollable"
          allowScrollButtonsMobile
          scrollButtons="auto"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {checkboxes.checkbox1 && (
            <BoldTab
              value="checkbox1"
              label="Children of residents close proximity to the school"
              wrapped
            />
          )}
          {checkboxes.checkbox2 && (
            <BoldTab
              value="checkbox2"
              label="Children of past pupils"
              wrapped
            />
          )}
          {checkboxes.checkbox3 && (
            <BoldTab
              value="checkbox3"
              label="Brothers/ sistors of students studying in the school at present"
              wrapped
            />
          )}
          {checkboxes.checkbox4 && (
            <BoldTab
              value="checkbox4"
              label="Children of staff in education institutions involved in school education"
              wrapped
            />
          )}
          {checkboxes.checkbox5 && (
            <BoldTab
              value="checkbox5"
              label="Children of officers transffered due to government exigencies or annual transfers"
              wrapped
            />
          )}
          {checkboxes.checkbox6 && (
            <BoldTab
              value="checkbox6"
              label="Children of persons arriving after living abroad with the child"
              wrapped
            />
          )}
        </Tabs>
      </Box>

      {activeComponent === "checkbox1" && <FormCat1 />}
      {activeComponent === "checkbox2" && <FormCat2 />}
      {activeComponent === "checkbox3" && <FormCat3 />}
      {activeComponent === "checkbox4" && <FormCat4 />}
      {activeComponent === "checkbox5" && <FormCat5 />}
      {activeComponent === "checkbox6" && <FormCat6 />}

      <FloatingSummary />
    </>
  );
};

export default CatHolder;
