const userData = [
    {
        name:"James",
        city:"Chennai",
        description : "Frontend Designer",
        skills: ["UI/UX", "Frontend Development", "HTML", "CSS", "JS", "React", "Node"],
        online: true,
        profile:"images/1.png",
        lang:["Tamil", "English", "Hindi"]
    },
    {
        name:"Krishna",
        city:"SVG",
        description : "Full stack Developer",
        skills: ["Frontend Development", "Backend Development", "HTML", "CSS", "JS", "React", "API"],
        online: false,
        profile:"images/2.png",
        lang:["Tamil", "English", "German"]
    },
    {
        name:"Keech",
        city:"USA",
        description : "Back-End Developer",
        skills: ["SQL", "Backend Development", "HTML", "CSS", "JS", "React", "Node"],
        online: true,
        profile:"images/3.png",
        lang:["Tamil", "English"]
    }
]


function User(props) {
return <div className="Card-Container">
<span className={props.online ? "pro online": "pro offline"}>
    {props.online ? "ONLINE" : "OFFLINE"}</span>

<img src= {props.profile} className="img" alt="profile" />
<h2>{props.name}</h2>
<h3>{props.city}</h3>
<p>{props.description}</p>

<div className="buttons">
    <button className="primary">Message</button>
    <button className="primary outline">Followers</button>
</div>

<div className="skills">
    <h6>Skills</h6>
    <ul>
    {props.skills.map((skill, index) => (
        <li key= {index}>{skill}</li>
    ))}
    </ul>
</div>

<div className="lang">
<h6>Languages Known</h6> 
<ul>
    {props.lang.map((skill, index) => (
        <li key= {index}>{skill}</li>
    ))}
    </ul>
</div>
</div>
}
export const Usercard = () => {
  return <>
  {
  userData.map((user, index) => (
    <User key={index} 
    name={user.name} 
    city={user.city}
    description={user.description}
    online = {user.online}
    profile = {user.profile}
    skills={user.skills}
    lang = {user.lang}
     />
  ))
  }
  </>
}
