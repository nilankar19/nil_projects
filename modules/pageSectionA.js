import Link from "../component/link";
import { responseApi } from "../pages/api/profile";
import { h } from "../pages/api/profile";
import { getImageUrl } from "../component/getimageurl";
import Image from "next/image";
import { v4 as uuidV4 } from "uuid";
import { useEffect, useState } from "react";
import SocialMedia from "@/component/socialmedia";
// import Worker from 'worker-loader!../public/worker.js';

// import h from "../pages/api/hello";





function ParentComponent() {
  const [frontendSkills, setFrontendSkills] = useState([]);
  const [backendSkills, setBackendSkills] = useState([]);
  const [middlewareSkills, setMiddlewareSkills] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);

  useEffect(() => {





    setFrontendSkills(responseApi.user[0].profile.skills[0].frontend);
    setBackendSkills(responseApi.user[0].profile.skills[0].middleware);
    setMiddlewareSkills(responseApi.user[0].profile.skills[0].backend);
    setOngoingProjects(responseApi.user[0].profile.currentProjects);

  }, []);

  return (
    <>
    <div className="card-btn">
      <Frontend skills={frontendSkills} />
      <Backend skills={backendSkills} />
      <Middleware skills={middlewareSkills} />
    </div>
    <OngoingProject projects={ongoingProjects} />
    </>
  );
}

function Frontend(props) {
  const skillList = props.skills.map((card) => {
    return <li key={uuidV4()} className="card-btn-small">{card}</li>;
  });

  return <ul key={uuidV4()} className="skill-card">{skillList}</ul>;
}

function Backend(props) {
  const skillList = props.skills.map((card) => {
    return <li key={uuidV4()} className="card-btn-small">{card}</li>;
  });

  return <ul key={uuidV4()} className="skill-card">{skillList}</ul>;
}

function Middleware(props) {
  const skillList = props.skills.map((card) => {
    return <li key={uuidV4()} className="card-btn-small">{card}</li>;
  });

  return <ul key={uuidV4()} className="skill-card">{skillList}</ul>;
}

function OngoingProject(props) {
  const projectList = props.projects.map((card) => {
    return (
      <li key={card.id} className="cards-li-project">
       <Image
          className="icon"
          src={getImageUrl(card)}
          width={32}
          height={32}
          alt={card.projectName}
        />
        <a className="card-li-d" href={card.url}>
          <span>{card.projectName}</span>
          <span>
            tech: {card.techStack}
            <span className="bg"> date: {card.date}</span>
          </span>
        </a>
      </li>
    );
  });

  return (
        <div className="cards-ongoing-project">
          on_going project
          <ul className="card-ul">{projectList}</ul>
        </div>
      );

}

export function PageSectionA() {
  const [userProfile, setUserProfile] = useState([
    {
      id: uuidV4(),
      description:
        "It's Nilankar.fullstack developer ",
    },
  ]);



  return (
    <>
      <div className="main1">
        <Link url={responseApi.user[0].profile.linktree} className="linktree-list" />
        {/* description */}
        <div className="card">{userProfile[0].description}</div>
        <br />

        {/* <div className="card" onClick={() => apiCall()}>
          {o}
        </div> */}

        <ParentComponent />
        <SocialMedia />

      </div>
    </>
  );
}