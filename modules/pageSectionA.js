import Link from "../component/link";
import { userlink, userProfile, ongoingProject } from "../pages/api/profileApi";
import { getImageUrl } from "../component/getimageurl";
import Image from "next/image";
import { v4 as uuidV4 } from "uuid";






// skill section
function Frontend(props){
  if (props.path === "frontend") {
    let frontend =  userProfile[0].skills[0].frontend.map((card) => {
      return (<li key={uuidV4()} className="card-btn-small">{card}</li>);
    })

    return (
      <ul key={uuidV4()} className="skill-card">{frontend}</ul>
    )
  }

  if (props.path === "backend") {
    let frontend =  userProfile[0].skills[0].backend.map((card) => {
      return (<li key={uuidV4()} className="card-btn-small">{card}</li>);
    })

    return (
      <ul key={uuidV4()} className="skill-card">{frontend}</ul>
    )
  }

  if (props.path === "middleware") {
    let frontend =  userProfile[0].skills[0].middleware.map((card) => {
      return (<li key={uuidV4()} className="card-btn-small">{card}</li>);
    })

    return (
      <ul key={uuidV4()} className="skill-card">{frontend}</ul>
    )
  }


}

//ongoing project
function OngoingProject(props) {
 let projectlist = ongoingProject.map((card) => {
    return (

        <li key={uuidV4()} className="cards-li-project">
          <Image
          className="icon"
            src={getImageUrl(card)}
            width={32}
            height={32}
            alt={card.projectName}
          />
          <a className="card-li-d" href={card.url}>
            <span >{card.projectName}</span>
            <span>tech: {card.techStack}
            <span className="bg"> date: {card.date}</span></span>
          </a>
        </li>

    );
  })

  return <div className={props.className}>on_going project<ul className="card-ul">{projectlist}</ul></div>
}







export function PageSectionA() {

  return (
    <>


      <div className="main1">
        <Link url={userlink} className={"linktree-list"}/>
        {/* description */}
        <div className="card">{userProfile[0].description}</div>

        {/* skills card */}
        <div className="card-btn">
          <Frontend path="frontend" />
          <Frontend path="backend" />
          <Frontend path="middleware" />
        </div>

        {/* ongoing project */}
        <OngoingProject className={"cards-ongoing-project"} />
      </div>

    </>
  );
}
