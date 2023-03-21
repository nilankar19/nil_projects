let resizedURL = resizeImage(500, 500, 'image/jpeg', url);


function resizeImage(width, height, type, url) {
    let img = new Image();
    img.src = url;
    img.onload = function() {
      let canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      let resizedURL = canvas.toDataURL(type);
      console.log(`Resized image URL: ${resizedURL}`);
      return resizedURL;
    };

  }

  //code to upload to server
const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');

uploadBtn.addEventListener('click', () => {
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Do something with the response data
  })
  .catch(error => {
    console.error('There was an error uploading the file:', error);
  });
});

export default async function h(req, res) {
    console.log(req.url);
    // const profileData = JSON.stringify({userProfile,userlink,projectlist});
    // res.redirect("../login?asd=er");

    res.status(200).json(profileData)
  }