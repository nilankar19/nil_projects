import React, { useState } from 'react';
import { v4 as uuidV4 } from "uuid";
import { responseApi } from '@/pages/api/profile';

let activeId = [];
let cardId = []
const columnVisiblity = (id) =>{


    activeId.push(id);
    activeId.forEach(elem => {
      document.getElementById(elem).style.display = "none";
      let pid = document.querySelector(`[data-pid="${elem}"]`);
      pid.style.display="none"
      // console.log(pid.style.display)

  });
    let elem =  document.getElementById(id);
    elem.style.display = "block"
    let pid = document.querySelector(`[data-pid="${id}"]`);
    pid.style.display="block"
    }
export function Card(props) {

  // const handleClick = (event) => {
  //   let target = event.target;
  //   while (target.tagName !== "LI") {
  //     target = target.parentNode;
  //   }
  //   console.log(target);
  //   const id = target.getAttribute('data-id');
  //   columnVisiblity(id)

  //   console.log(`UUID value: ${id}`,id);
  // }
  const handleClick = (event) => {
    let target = event.target;
    while (target.tagName !== "LI") {
    target = target.parentNode;
    }
    console.log(target);
    const id = target.getAttribute('data-id');
    columnVisiblity(id);

    // get the data-pid of the corresponding CardDetails component

    }

  let cardList = responseApi.user[0].profile.projectlist.map((card) => {
    let uuId = uuidV4();
    cardId.push(uuId);
    return (
      <li
        key={uuId}
        data-id={uuId}
        className={'card-li padding'}
        onClick={(e)=>handleClick(e)}
      >
        <div className="card-projectsb">
          <div className="imageColumn">
            {card.imageId ? (
              <img src={card.imageId} alt="userIcon"  />
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

  return <ul className={'ul cards-p padding display-topleft'}>{cardList}</ul>;
}
export function CardDetails (id) {
  let projectList_about= responseApi.user[0].profile.projectlist.map((card,index)=>{

    return (
      <div key={cardId[index]} data-pid={cardId[index]} className='user-section'>
          <div className=' padding flex-row relative'>
            <img src={responseApi.user[0].profile.imageId} alt="author" width={48} height={48} className='userIcon' />
            <p className='user-details'>
              {responseApi.user[0].profile.displayName}<br/>
              <span className='date'>{card.date}</span>
            </p>
          </div>
          <article className='p-articles flex-column'>
            <img src={card.imageId} alt="pimg" className='banner' /><br/>
            <p className='card-description'>{card.description}</p>
          </article>
      </div>
    )
    })

    return(
      <div id="projectList-about" className="display-topright  relative   col-2">
        {projectList_about}
      </div>
    )


}

const ProjectsCards = (props) => {
  return (
    <>
      <div className="padding relative flex-row projectCards">
        <Card />
        <CardDetails />
      </div>
    </>
  );
};

export default ProjectsCards;
