async function get_img(urls){
  const urlsArray = [];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      const fileblob = await response.blob();

      if (fileblob.type === "image/jpeg" || fileblob.type === "image/jpg" || fileblob.type === "image/png") {
        const imgUrl = URL.createObjectURL(fileblob);
        urlsArray.push(imgUrl);
      }
    } catch (error) {
      console.log("error worker.js");
    }
  }

  return urlsArray;
}

async function get_video(urls){
  const urlsArray = [];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      const fileblob = await response.blob();

      if (fileblob.type === "video/mp4" || fileblob.type === "video/webm") {
        const videoUrl = URL.createObjectURL(fileblob);
        urlsArray.push(videoUrl);
      }
    } catch (error) {
      console.log("error worker.js");
    }
  }

  return urlsArray;
}

onmessage = async (event) => {
  let {images,video} = event.data;
  console.log(images);

  const imgUrl = await get_img(images);
  console.log(imgUrl);

  

  // const videoUrl = await get_video(video);
  // console.log(videoUrl);

  postMessage({ images: imgUrl });
}
