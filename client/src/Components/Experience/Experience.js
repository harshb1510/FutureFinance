import "./Experience.css";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import PeopleIcon from '@mui/icons-material/People';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PhonelinkIcon from '@mui/icons-material/Phonelink';

const Experience = () => {
  return (
    <section>

    <div className="experienceContainer">
      <div className="experienceTop">
        <h1 className="experienceHeadline">
          Creating Extraordinary customer experience
          <p className="experienceParagraph">
            By prioritizing user-friendly interfaces, proactive financial
            guidance,
            <br /> and swift issue resolution, banks can elevate customer
            satisfaction, fostering long-term loyalty and trust.{" "}
          </p>
        </h1>
      </div>
      <div
        className="experienceBottom"
        style={{ display: "grid", gap: "40px",paddingBottom:"30px" }}
        >
        <div
          className="experienceBottomT"
          style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              fontSize: "25px",
              textAlign:"center"
            }}
            >
          <div>
            
            <h4 style={{display:"flex",alignItems:"center",justifyContent:'center'}}><AdminPanelSettingsIcon style={{fontSize:"40px",paddingRight:"10px",color:"rgb(198,125,184)"}}/>Integrity</h4>
            <span className="experienceSpan">Displaying the highest level of Integrity<br/> in the way we conduct our business</span>
          </div>
          <div>
            <h4 style={{display:"flex",alignItems:"center",justifyContent:'center'}}><OndemandVideoIcon style={{fontSize:"40px",paddingRight:"10px",color:"rgb(198,125,184)"}}/>Demonstrate</h4>
            <span className="experienceSpan">Demonstrating a strong Will to<br/> Win in the market place</span>
          </div>
          <div>
            <h4 style={{display:"flex",alignItems:"center",justifyContent:'center'}}><Diversity2Icon style={{fontSize:"40px",paddingRight:"10px",color:"rgb(198,125,184)"}}/>Diversity</h4>
            <span className="experienceSpan">Promoting Diversity in the work<br/> place and community</span>
          </div>
          <div>
            <h4 style={{display:"flex",alignItems:"center",justifyContent:'center'}}><PeopleIcon style={{fontSize:"40px",paddingRight:"10px",color:"rgb(198,125,184)"}}/>Teamwork</h4>
            <span className="experienceSpan">Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. A semper aenean id pen</span>
          </div>
        </div>
        <div
          className="experienceBottomB"
          style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              fontSize: "25px",
              textAlign:'center'
            }}
            >
           <div>
            <h4 style={{display:"flex",alignItems:"center",justifyContent:'center'}}><GroupWorkIcon style={{fontSize:"40px",paddingRight:"10px",color:"rgb(198,125,184)"}}/>Collaboration</h4>
            <span className="experienceSpan">Displaying the highest level of Integrity<br/> in the way we conduct our business</span>
          </div>
          <div style={{marginRight:"22px"}}>
            <h4 style={{display:"flex",alignItems:"center",justifyContent:'center'}}><CorporateFareIcon style={{fontSize:"40px",paddingRight:"10px",color:"rgb(198,125,184)"}}/>Corporate</h4>
            <span className="experienceSpan">Displaying the highest level of Integrity<br/> in the way we conduct our business</span>
          </div>
          <div style={{marginRight:"22px"}}>
            <h4 style={{display:"flex",alignItems:"center",justifyContent:'center'}}><SyncAltIcon style={{fontSize:"40px",paddingRight:"10px",color:"rgb(198,125,184)"}}/>Technology</h4>
            <span className="experienceSpan">Displaying the highest level of Integrity<br/> in the way we conduct our business</span>
          </div>
          <div style={{marginRight:"22px"}} >
            <h4 style={{display:"flex",alignItems:"center",justifyContent:'center'}}><PhonelinkIcon style={{fontSize:"40px",paddingRight:"10px",color:"rgb(198,125,184)"}}/>Digital</h4>
            <span className="experienceSpan">Displaying the highest level of Integrity<br/> in the way we conduct our business</span>
          </div>
        </div>
        </div>
      </div>
    
            </section>
  );
};

export default Experience;
