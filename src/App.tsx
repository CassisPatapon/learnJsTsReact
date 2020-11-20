import * as React from "react";
import "./styles.css";

////////////////////////////////////////////////////////////

interface Man {
  firstName: string;
  lastName: string;
}

function formatName(man: Man) {
  return man.firstName + " " + man.lastName;
}

const man = {
  firstName: "Cassis",
  lastName: "Patapon"
};

// élément React
// décrit ce qu'on voit à l'écran
// immuable
const element = <h2>Bonjour {formatName(man)}</h2>;

////////////////////////////////////////////////////////////

// composant
function SayHello(props: { name: string }) {
  return <h3>Hello {props.name}</h3>;
}

// composant
class SayGoodBye extends React.Component<{ name: string }> {
  render() {
    return <h3>Goodbye {this.props.name}</h3>;
  }
}

////////////////////////////////////////////////////////////

interface User {
  avatarUrl: string;
  name: string;
}

function Avatar(props: { author: User }) {
  return (
    <img
      className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

function UserInfo(props: { user: User }) {
  return (
    <div className="UserInfo">
      <Avatar author={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props: { author: User; text: string; date: date }) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

export default function App() {
  return (
    <div>
      <div>
        <ul>
          <li>{element}</li>
          <li>
            <SayHello name="Sambre" />
          </li>
          <li>
            <SayGoodBye name="Patate" />
          </li>
          <li>
            <SayGoodBye name="Pierrot" />
          </li>
        </ul>
      </div>
      <div>
        <Comment
          author={{ avatarUrl: "", name: "" }}
          text="et ron et ron"
          date="31.09"
        />
      </div>
    </div>
  );
}
////////////////////////////////////////////////////////////

// penser à quoi doit ressembler l'interface à un moment donné
// nommer selon le point de vue du composant
