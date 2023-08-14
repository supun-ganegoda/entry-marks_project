import React from "react";
//import styled from 'styled-components';
import "./PDFResult.css"; // Import the CSS file

const PDFResult = () => {
  const userName = "text-user";
  const email = "test@gmail.com";
  const pastPupils = "xx";
  const proximity = "xx";
  const cousins = "xx";
  const staff = "xx";
  const officers = "xz";
  const forign = "zz";

  return (
    <div className="invoice-box">
      <table cellPadding="0" cellSpacing="0">
        <tr className="top">
          <td colSpan="2">
            <table>
              <tr>
                <td className="title">
                  <img
                    src="https://wilcity.com/wp-content/uploads/2018/12/sample-logo-design-png-3-2.png"
                    style={{ width: "100%", maxWidth: "156px" }}
                  />
                </td>
                <td>
                  Date of Report:{" "}
                  {/* {`${today.getDate()}. ${
                    today.getMonth() + 1
                  }. ${today.getFullYear()}.`} */}
                  <br />
                  Email: {`${email}`}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr class="information">
          <td colspan="2">
            <table>
              <tr>
                <td>Customer name: ${userName}</td>
                <td>Receipt number: ${userName + email}</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr class="heading">
          <td>Category</td>
          <td>Marks</td>
        </tr>
        <tr class="item">
          <td>Based on Proximity:</td>
          <td>${proximity}</td>
        </tr>
        <tr class="item">
          <td>Based on Past pupils:</td>
          <td>${pastPupils}</td>
        </tr>
        <tr class="item">
          <td>Based on Brothers and Sisters:</td>
          <td>${cousins}</td>
        </tr>
        <tr class="item">
          <td>Based on Staff members:</td>
          <td>${staff}</td>
        </tr>
        <tr class="item">
          <td>Based on officers and armed forces:</td>
          <td>${officers}</td>
        </tr>
        <tr class="item">
          <td>Based on forigen:</td>
          <td>${forign}</td>
        </tr>
      </table>
      <br />

      <table cellpadding="0" cellspacing="0">
        <tr class="heading">
          <td>Details of Child</td>
          <td></td>
        </tr>
        <tr class="test-row">
          <td>Name in full:</td>
          <td>Name in full:</td>
        </tr>
        <tr>
          <td>Name with initials:</td>
          <td>Name with initials:</td>
        </tr>
        <tr>
          <td>Sex:</td>
        </tr>
        <tr>
          <td>Religion:</td>
        </tr>
        <tr>
          <td>Medium of learning:</td>
        </tr>
        <tr>
          <td>Date of birth:</td>
        </tr>

        <tr class="heading">
          <td>Details of Applicant</td>
          <td></td>
        </tr>
        <tr>
          <td>Name in full:</td>
        </tr>
        <tr>
          <td>Name with initials:</td>
        </tr>
        <tr>
          <td>NIC no:</td>
        </tr>
        <tr>
          <td>Are you Sri Lankan:</td>
        </tr>
        <tr>
          <td>Religion:</td>
        </tr>
        <tr>
          <td>Permanant Address:</td>
        </tr>
        <tr>
          <td>Latitude and longitude of home:</td>
        </tr>
        <tr>
          <td>Telephone number:</td>
        </tr>
        <tr>
          <td>Residential district:</td>
        </tr>
        <tr>
          <td>Divisional secratariat:</td>
        </tr>
        <tr>
          <td>Grama-Niladari division & number:</td>
        </tr>

        <tr class="heading">
          <td>Details of Spouse</td>
          <td></td>
        </tr>
        <tr>
          <td>Name in full:</td>
        </tr>
        <tr>
          <td>Name with initials:</td>
        </tr>
        <tr>
          <td>NIC no:</td>
        </tr>
        <tr>
          <td>Are you Sri Lankan:</td>
        </tr>
        <tr>
          <td>Religion:</td>
        </tr>
        <tr>
          <td>Permanant Address:</td>
        </tr>
        <tr>
          <td>Telephone number:</td>
        </tr>
        <tr>
          <td>Residential district:</td>
        </tr>
        <tr>
          <td>Divisional secratariat:</td>
        </tr>
        <tr>
          <td>Grama-Niladari division & number:</td>
        </tr>

        <tr class="heading">
          <td>Details of Applied Schools</td>
          <td></td>
        </tr>
        <tr>
          <td>Preference 1:</td>
        </tr>
        <tr>
          <td>Preference 2:</td>
        </tr>
        <tr>
          <td>Preference 3:</td>
        </tr>
        <tr>
          <td>Preference 4:</td>
        </tr>
        <tr>
          <td>
            <b>Distance between home and preferred school 1:</b>
          </td>
        </tr>
      </table>

      <table cellpadding="0" cellspacing="0">
        <tr class="heading">
          <td>Details on Electorial List</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Year:</td>
        </tr>
        <tr>
          <td>Electorial District:</td>
        </tr>
        <tr>
          <td>Grama-Niladari Div. and No:</td>
        </tr>
        <tr>
          <td>Polling division:</td>
        </tr>
        <tr>
          <td>Street/ Road/ Village:</td>
        </tr>
        <tr class="special-row">
          <td>Household No</td>
          <td>Serial No</td>
          <td>Name of electors</td>
        </tr>
      </table>
      <br />
      <h3 className="justify-center">
        Total marks:{" "}
        {parseInt(proximity) +
          parseInt(pastPupils) +
          parseInt(cousins) +
          parseInt(staff) +
          parseInt(officers) +
          parseInt(officers)}
      </h3>
      <footer>
        <p className="justify-center">
          Report was created on{" "}
          {/* {`${today.getDate()}. ${
            today.getMonth() + 1
          }. ${today.getFullYear()}.`} */}
        </p>
      </footer>
    </div>
  );
};

export default PDFResult;
