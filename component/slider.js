import { createElement, useEffect, useState } from "react";

let images = [
  "https://nilankar19.github.io/imgApi2/img3232/bg1.jpg",
  "https://nilankar19.github.io/imgApi2/img3232/bg2.jpg",
  "https://nilankar19.github.io/imgApi2/img3232/banner1.jpg",
];

function imageElm({ urls }) {
  console.log("Urls imageelem", urls);

  let zindex = ["-100", "-150", "-200","-250"];
  const slideClass = ["slide1","slide2","slide3"];
  // let slideimgid = ["imgId0","imgId1","imgId2"];
  let slideimgid = [];
  urls.map((url, index) => {
    let slideimgidtext = "imgId" + index;
    slideimgid.push(slideimgidtext);
    const newImg = document.createElement("img");
    newImg.className = "slide" + " " + slideClass[index];
    newImg.id = slideimgidtext;
    newImg.src = url;
    newImg.style.display = "block";
    newImg.style.transition = "2s";
    // newImg.style.zIndex = zindex[index];
    newImg.alt = "slide" + index;
    // newImg.style.position="fixed"
    newImg.style.animation = "2s "

    // Get the existing img element and its parent container

    const imageContainer = document.querySelector("#slide-container");

    // Append the new img element after the existing one
    imageContainer.appendChild(newImg);

    let setintervalCount = 0;
    let w = 100;
    let t = 0;
    let state = 2;
    setInterval(()=>{
      if (setintervalCount==4) {
        slideimgid.map((id,index)=>{ document.getElementById(id).style.width = "100%";})
        w = 100
        t = 0
        state =2
        setintervalCount = 0;
        // clearTimeout()
      }
      ++setintervalCount
      // console.log(setintervalCount,"set");
      // console.log("state",state);
      if(state == 0){
         w = 100
         t++
        state = 2
        }
      // console.log("null,",state);
      if (t == slideClass.length) {
        t = 0
        // w = 100
      }
       w = w - 50
      let ws = w.toString()
      // console.log("t",t);
      let cl = slideimgid[t]
      if (state > 0) {

        let i = document.getElementById(cl);
          i.style.width = ws + "%"
          --state

      }
    },4000)
  });

}

const workerfnc_Slider = (data, callback) => {
  const worker = new Worker("/worker.js", { type: "module" });

  worker.onmessage = (event) => {
    const result = event.data;

    callback(result);
  };

  worker.postMessage({ images });

  return () => worker.terminate();
};

export default function Slider(props) {
  const [initial_Img, set_Initial_Img] = useState(null);

  useEffect(() => {
    workerfnc_Slider({ images }, (result) => {
      set_Initial_Img(true);

      if (Object.keys(result)[0] == "images") {
        console.log("workerfnc_Slider", result);
        imageElm({ urls: result.images });
      }
    });
  }, []);

  return (
    <>
      <div id="slide-container" className="slide-container ">
        {/* <img
          src=""
          alt=""
          className="bg-img"
          id="bg-img1"
          style={{ display: "block" }}
        /> */}
      </div>
    </>
  );
}
