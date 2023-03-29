import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="team">
        <div className="team-header">
          <h2>MEET OUR PROFESSIONAL TEAM</h2>
        </div>
        <p></p>
        
          <div className="service">
            <div className="border">
              <div className="pic">
                <img src="../images/manager.jpg" alt="manager" />
              </div>
              <h3>Mr. Dineth Jayakody</h3>
              <h5>Project Manager</h5>
              <p>
                Mr. D.S. Jayakody is currently a third year Electrical and
                Information undergraduate student from the Faculty of
                Engineering, University of Ruhuna. He has been a part of a
                number of software projects throughout his university career. He
                is well known as a front end developer and specializes as a
                UX/UI developer as well. In addition to that he has managed some
                leading projects in the electrical and information department
                which makes him the most ideal person to lead this team at the
                project.
              </p>
            </div>
            <div className="border">
              <div className="pic">
                <img src="../images/ui.jpg" alt="ui/ux developer" />
              </div>
              <h3>Mr. Koshila Isuranda</h3>
              <h5>UX/UI Designer </h5>
              <p>
                Mr. M.A.K. Isuranda is currently a third year Electrical and
                Information undergraduate student from the faculty of
                Engineering, University of Ruhuna. He has successfully completed
                a number of software projects in undergraduate life. Mainly, he
                is a well-known front-end developer as well as a UX/UI
                developer. And also, is good at prototyping, wire framing, and
                visual communication.
              </p>
            </div>
            <div className="border">
              <div className="pic">
                <img src="../images/frontend.jpg" alt="frontend-developer" />
              </div>
              <h3>Mr. Ganegoda G.S.S</h3>
              <h5>Frontend Developer </h5>
              <p>
                {" "}
                Meet G.S.S.S Ganegoda, a 3rd year undergraduate of Electrical
                and Information Engineering at the University of Ruhuna. With a
                passion for software development, G.S.S.S Ganegoda has already
                made a significant impact as a Front-end developer, having
                successfully contributed to a variety of projects. Skilled in
                HTML, CSS, JavaScript, DOM manipulation, and AJAX, G.S.S.S
                Ganegoda possesses a strong foundation in the technologies and
                techniques necessary to design and implement effective user
                interfaces. With a dedication to staying current with the latest
                industry trends and best practices, G.S.S.S Ganegoda is an asset
                to any software development team looking to build innovative and
                engaging user experiences
              </p>
            </div>
            <div className="border">
              <div className="pic">
                <img src="../images/backend.jpg" alt="backend-developer" />
              </div>
              <h3>Ms. Niromali R.M.D</h3>
              <h5>Backend Developer </h5>
              <p>
                Ms.R.M.D. Niromali is currently a third year Electrical and
                Information undergraduate student from the Faculty of
                Engineering, University of Ruhuna. She has been an active member
                of a number of software projects throughout her university
                career. She is strong in design and integration with intuitive
                problem solving skills. She is a experienced full stack
                developer
              </p>
            </div>
          </div>
      </div>
    </>
  );
};
export default AboutUs;
