import React from "react";
import { ProfileProps } from "../models/Person.model";

const ProfileComponent: React.FC<ProfileProps>= ({person})  => {
    // Your component logic goes here
    return (
      <div>
        <h1>Person Details</h1>
        <h2>{person.name}</h2>
        <p>{`Age: ${person.age}`}</p>
        <p>{`Email: ${person.email || 'No email provided'}`}</p>
      </div>
    );
  };

export default ProfileComponent;
  