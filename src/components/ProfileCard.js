import papakoko from "../img/papakoko.jpg";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div  style={{paddingTop:"2rem"}}>
      <img src={papakoko} width="25%" alt="profile pic" style={{borderRadius:"5%"}} />
      <h1 style={{lineHeight:".3rem", marginTop:"2rem"}}>Sam Rosenberg <span className="dot"></span></h1>
      <h3 style={{fontWeight:"400"}}>React Native Apprentice</h3>
      <h4 style={{fontWeight:"400", lineHeight:".01rem", paddingTop: "0"}}>he/him</h4>
    </div>
  );
}

export default ProfileCard;
