import React, { useReducer, useRef, useEffect } from "react";
import { updateCategories, getCategoryId } from "../../datafunctions/CheckData";
import axios from "axios";
import { formReducer, INITIAL_STATE } from "./FormReducer";
import defaultEvent from "../../images/defaultEvent.png";
import { useAppContext } from "../../context/DbContext";
//import { useHistory } from "react-router-dom";

//make updateCategories, getCategoryId
//make images folder in src

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const catRef = useRef();
  const { activeUser, setEvents } = useAppContext();
  const [adjust, setAdjust] = useState(false);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_EVENTS",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleCats = async () => {
    const cats = catRef.current.value.split(",");
    const addedCats = new Set(state.category);
    const newCats = [];
    cats.forEach((cat) => {
      const trimmedCat = cat.trim().toLowerCase();
      if (trimmedCat !== "") {
        if (!addedCats.has(trimmedCat)) {
          addedCats.add(trimmedCat);
          newCats.push({ name: trimmedCat });
        }
      }
    });
    if (newCats.length > 0) {
      dispatch({
        type: "UPDATE_CATEGORIES",
        payload: newCats,
      });
    }
  };

  useEffect(() => {
    const updateAllCategories = async () => {
      for (const cat of state.categories) {
        console.log(cat.name.name);
        await updateCategories(cat.name.name);
        const id = await getCategoryId(cat.name.name);
        if (!state.events.categoryIds.includes(id)) {
          state.events.categoryIds.push(id);
        }
      }
    };

    updateAllCategories();
  }, [state.categories]);

  useEffect(() => {
    dispatch({
      type: "UPDATE_EVENTS",
      payload: { createdBy: activeUser.id },
    });
  }, [activeUser.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.events.image === "") {
      state.events.image = defaultEvent;
    }

    //make it localhost:3000
    if (!adjust) {
      axios.post(`http://localhost:3000/events`, state.events);
      console.log("new event is made");
      axios.get(`http://localhost:3000/events`).then((response) => {
        setEvents(response.data);
      });
    } else {
      axios.put(
        `http://localhost:3000/events/${state.events.id}`,
        state.events
      );
      console.log("event is updated");
      axios.get(`http://localhost:3000/events`).then((response) => {
        setEvents(response.data);
      });
    }
  };
  return (
    <div>
      <form className="form_">
        <label>
          Username:
          <input
            type="text"
            placeholder={state.events.createdById || activeUser.name}
            name="createdById"
            value={activeUser.id}
            onChange={handleChange}
            readOnly
          />
        </label>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
          value={state.events.title || ""}
        />
        <input
          type="text"
          placeholder="Desc"
          onChange={handleChange}
          name="description"
          value={state.events.description || ""}
        />
        <input
          type="text"
          placeholder="location"
          onChange={handleChange}
          name="location"
          value={state.events.location || ""}
        />
        <input
          type="text"
          placeholder="image"
          onChange={handleChange}
          name="image"
          value={state.events.image || ""}
        />

        <input type="datetime-local" onChange={handleChange} name="startTime" />
        <input type="datetime-local" onChange={handleChange} name="endTime" />
        <p>Categories:</p>
        <textarea
          ref={catRef}
          placeholder="Seperate categories with commas..."
        ></textarea>
        <button onClick={handleCats} type="button">
          Add Categories
        </button>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
