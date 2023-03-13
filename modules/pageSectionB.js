import Link from "../component/link";
import { projectlist } from "../pages/api/profileApi";
import { getImageUrl } from "../component/getimageurl";
import Image from "next/image";
import s from "../styles/pagesectionb.module.css";
import { v4 as uuidV4 } from "uuid";
import { Fragment } from "react";

function Card(props) {
  let cardList = projectlist.map((card) => {
    return (
      <li key={uuidV4()} className={s.card}>
        {/* section1 */}
        <div className={s.cardImg}>

            <img
              src={getImageUrl(card)}
              alt={card.imageId}
              className={s.cardImgDiv}
            />

        </div>
        {/* section2 */}
        <div className={s.sectionAbout}>
            <div className={s.about}>
              <div className={s.sidebarStacks}>{card.projectName}</div>
              <div className={s.sidebarStacks}>{card.backend}</div>
              <div className={s.sidebarStacks}>{card.frontend}</div>
              <div className={s.sidebarStacks}>{card.middleware}</div>
              <div className={s.sidebarStacks}>{card.date}</div>
            </div>
        </div>
      </li>
    );
  });

  return <ul className={s.ul}>{cardList}</ul>;
}



export function PageSectionB() {
  return (
    <>
      <div className={s.main2}>
        <Card />
      </div>
    </>
  );
}
