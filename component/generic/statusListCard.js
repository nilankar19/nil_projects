import { useEffect, useState } from "react";
import styles from "./statusListCard.module.css";
export default function StatusListCard(params) {
  const base = new URL("http://localhost:3009");
  const route = "/api/home/card";
  const cardUrl = base + route + params.userAccessToken;

  let fetchObj = {
    firstCard: "",
    secondCard: "",
    thirdCard: "",
  };

  const [cardData, setCardData] = useState("");
  useEffect(() => {
    const fetched = async () => {
      await fetch(cardUrl, { method: "POST", credentials: "include" }).then(
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
            console.log("fetch cardApi", parses);
            // add fetch data to obj
            fetchObj.firstCard = parses["0"];
            fetchObj.secondCard = parses["1"];
            fetchObj.thirdCard = parses["2"];

            return parses;
          },
          (e) => {
            console.log("fetch_err = ", e);
            return `{"message": ${e}}`;
          }
        );
        return data;
      } else {
        console.log("card fetch data:-", "null");
        fetchObj.firstCard = "";
        fetchObj.secondCard = "";
        fetchObj.thirdCard = "";
        return data;
      }
    };
  }, []);

  return (
    <>
      <div className={styles.statusListDiv}>
        <ul className={styles.statusListDivSubDiv}>
        </ul>
      </div>
    </>
  );
}
