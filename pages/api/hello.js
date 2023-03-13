// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { url } from "url";
export default async function h(req, res) {


 console.log(req.url);
 let data = { name: 'John Doe' }
 let dd = JSON.stringify(data)
 res.status(200).json(dd)
}
