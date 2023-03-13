import { v4 as uuidV4 } from "uuid";

function UrlList(props) {
  const listItems = props.url.map((data) => {
    return (
      <li key={uuidV4()} className={props.className}>
        <a
          key={data.id}
          href={data.url}
          target="blank"
          rel="noopener noreferrer"
        >
          {data.url}
        </a>
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export default function Link(props) {
  return (
    <div className="linktree">
      <UrlList url={props.url} className={props.className} />
    </div>
  );
}
