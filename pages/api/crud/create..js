// columnAction means which form data section is created

async function createAction(accessToken, data,columnAction) {

  let host = "http://0.0.0.0:3009";
  let requestpath = `${host}/create/${columnAction}?email=${userEmail}&id=${userId}&accessToken={userWriteToken}`;
  console.log(requestpath);



  const fetched = await fetch(requestpath, {
    method: "POST",
    body: data,
    credentials: "include",
  }).then(
    (s) => {
      return s;
    },
    (e) => {
      return null;
    }
  );
  if (fetched) {
    const data = await fetched.json().then(
      (s) => {
        let parses = JSON.parse(s);
        console.log(parses);
        return parses;
      },
      (e) => {
        console.log("fetch_err = ", e);
        return `{"message": ${e}}`;
      }
    );
    return data;
  } else {
    return false;
  }
}

export default async function create(req, res) {
  // query the path
  // database call
  console.log(req.url);
  console.log(req.body);

  createAction(accessToken,req.body)
  const profileData = JSON.stringify({ userProfile, userlink, projectlist });
  // res.redirect("../login?asd=er");

  res.status(200).json(profileData);
}
