import "./AddUser.css";
import { useAppContext } from "../../context/DbContext";
import React, { useState } from "react";
import manLogo from "../../images/man.png";
import womanLogo from "../../images/woman.png";
import axios from "axios";

export const AddUser = () => {
  const { setActiveUser, users } = useAppContext();
  const [name, setName] = useState("");
  const [image, setImage] = useState(manLogo);
  const [isMatch, setIsMatch] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleDefaultImageSelection = (event) => {
    const selectedImage = event.target.value;
    setImage(selectedImage);
  };

  const findUserIdByName = (name) => {
    const user = users.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );

    return user ? user.id : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;

    const lastName = e.target.elements.lastName.value;

    const full = `${firstName.charAt(0).toUpperCase()}${firstName.slice(
      1
    )} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)}`;

    setName(full);

    const userNames = users.map((item) => item.name);
    const names = userNames.map((item) => item.toLowerCase());

    const lowFullName = full.toLowerCase();

    if (names.some((item) => item === lowFullName)) {
      const userId = findUserIdByName(full);
      setIsMatch(true);
      setActiveUser(users.filter((user) => user.id === userId)[0]);
    } else {
      setIsMatch(false);
    }

    if (!isMatch) {
      axios
        .post(`http://localhost:3000/users`, { name: full, image })
        .then((response) => {
          console.log(response.data);
          setActiveUser(response.data);
          setIsFormSubmitted(true);
        });
    }
  };

  return (
    <div className="user-check-form">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" required />
        </label>
        <br />
        <label>
          Choose Image:
          <br />
          <input
            className="default-image"
            type="image"
            name="Default man"
            value={manLogo}
            src={manLogo}
            onClick={handleDefaultImageSelection}
          />
          <input
            className="default-image"
            type="image"
            name="Default woman"
            value={womanLogo}
            src={womanLogo}
            onClick={handleDefaultImageSelection}
          />
        </label>

        <br />
        <button type="submit" onSubmit={handleSubmit}>
          Make user
        </button>
      </form>
    </div>
  );
};
