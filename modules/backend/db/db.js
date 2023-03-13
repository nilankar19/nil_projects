
let host = 'http://0.0.0.0:3009';
// let header = {
//   method: 'POST',
//   mode: 'no-cors',
//   headers: {'Content-Type':'application/json'},
//   body:JSON.stringify("yuii"),
//   Host: 'http://0.0.0.0:3009',
//   origin:'http://localhost:3000',
//   statusCode:200,
//   statusMessage:'ok'
// }
export async function userSignUpDb(userEmail,password) {
    let requestpath = `${host}/signup?email=${userEmail}&pwd=${password}`
    console.log(requestpath);


      // let data = {email : userEmail,pwd : password};
      // let url = 'http://0.0.0.0:3009/signup?'
      const fetched = await fetch(requestpath,{method:'POST',credentials:"include"}).then(s=>{return s},e=>{return null})
      if(fetched){

       const data  = await fetched.json()
        .then(s=>{let parses = JSON.parse(s);console.log(parses); return parses},e=>{console.log("fetch_err = ",e);return `{"message": ${e}}`});
        return data;
      }else{
        return false;
      }
        // .then((res)=>{return JSON.parse(res)});
      // .then((final)=>{let d = final;console.log(d); return  final ? final : {error:'not parse'}})
      // // let data = await JSON.parse(fetched)
      // console.log("data = ",fetched);
      // return data;






}

export async function userSignInDb(userEmail,password) {

  let requestpath = `${host}/login?email=${userEmail}&pwd=${password}`
  console.log(requestpath);
  const fetched = await fetch(requestpath,{method:'POST',credentials:"include"}).then(s=>{return s},e=>{return null})
      if(fetched){

       const data  = await fetched.json()
        .then(s=>{let parses = JSON.parse(s);console.log(parses); return parses},e=>{console.log("fetch_err = ",e);return `{"message": ${e}}`});
       return data;
      }else{
        return false;
      }
}

export async function sendOtp(userEmail,otp) {

  let requestpath = `${host}/verify?email=${userEmail}&otp=${otp}`
    console.log(requestpath);


      // let data = {email : userEmail,pwd : password};
      // let url = 'http://0.0.0.0:3009/signup?'
      const fetched = await fetch(requestpath,{method:'POST',credentials:"include"})
      .then(s=>{return s.json()},e=>{ console.log("fetch_err = ",e);return e})
      .then((res)=>{return JSON.parse(res)});
      // .then((final)=>{let d = final;console.log(d); return  final ? final : {error:'not parse'}})
      // // let data = await JSON.parse(fetched)
      // console.log("data = ",fetched);
      return fetched;
}
