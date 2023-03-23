import React, { useState } from 'react';
import { v4 as uuidV4 } from "uuid";
import { responseApi } from '@/pages/api/profile';

let activeId = [];
const columnVisiblity = (id) =>{
    activeId.push(id);
    activeId.forEach(elem => {
      document.getElementById(elem).style.display = "none";
    });
    let elem =  document.getElementById(id);
    elem.style.display = "block"
    }
export function Card(props) {

  const handleClick = (event) => {
    let target = event.target;
    while (target.tagName !== "LI") {
      target = target.parentNode;
    }
    console.log(target);
    const id = target.getAttribute('data-id');
    columnVisiblity(id)

    console.log(`UUID value: ${id}`,id);
  }

  let cardList = responseApi.user[0].profile.projectlist.map((card) => {
    let uuId = uuidV4();
    return (
      <li
        key={uuId}
        data-id={uuId}
        className={''}
        onClick={(e)=>handleClick(e)}
      >
        <div className="card-projectsb">
          <div className="imageColumn">
            {card.imageId ? (
              <img src={card.imageId} alt="Example Image" />
            ) : null}
          </div>
          <div className="accordionColumn">
            <h2>{card.projectName}</h2>

              <div id={uuId} className="p-description">Additional content here</div>

          </div>
        </div>
      </li>
    );
  });

  return <ul className={'ul cards-p'}>{cardList}</ul>;
}

const ProjectsCards = (props) => {
  return (
    <>
      <div className="pageb-col">
        <Card />
        {/* <CardsDetails /> */}
      </div>
    </>
  );
};

export default ProjectsCards;
