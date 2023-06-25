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

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
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
          value={activeTab}
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
              label="Children of residents close proximity to the school"
              wrapped
            />
          )}
          {checkboxes.checkbox2 && (
            <BoldTab label="Children of past pupils" wrapped />
          )}
          {checkboxes.checkbox3 && (
            <BoldTab
              label="Brothers/ sistors of students studying in the school at present"
              wrapped
            />
          )}
          {checkboxes.checkbox4 && (
            <BoldTab
              label="Children of staff in education institutions involved in school education"
              wrapped
            />
          )}
          {checkboxes.checkbox5 && (
            <BoldTab
              label="Children of officers transffered due to government exigencies or annual transfers"
              wrapped
            />
          )}
          {checkboxes.checkbox6 && (
            <BoldTab
              label="Children of persons arriving after living abroad with the child"
              wrapped
            />
          )}
        </Tabs>
      </Box>

      {checkboxes.checkbox1 && activeTab === 0 && <FormCat1 />}
      {checkboxes.checkbox2 && activeTab === 1 && <FormCat2 />}
      {checkboxes.checkbox3 && activeTab === 2 && <FormCat3 />}
      {checkboxes.checkbox4 && activeTab === 3 && <FormCat4 />}
      {checkboxes.checkbox5 && activeTab === 4 && <FormCat5 />}
      {checkboxes.checkbox6 && activeTab === 5 && <FormCat6 />}

      <FloatingSummary />
    </>
  );
};

export default CatHolder;
