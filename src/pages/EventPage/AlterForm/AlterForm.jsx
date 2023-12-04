import { useAppContext } from "../../../context/DbContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  formReducer,
  INITIAL_STATE,
} from "../../../components/AddForm/FormReducer";
export const AlterForm = () => {
  const { id } = useParams();
  const { events, categories } = useAppContext();
  const [event, setEvent] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [formValues, setFormValues] = useState({
    events: {
      createdBy: "",
      title: "",
      description: "",
      image: "",
      categoryIds: [],
      location: "",
      startTime: "",
      endTime: "",
    },
  });

  useEffect(() => {
    const event = events.find((event) => event.id == id);
    setEvent(event);
    setCurrentId(event.id);
  }, [id]);

  useEffect(() => {
    if (event) {
      setFormValues({
        events: {
          createdBy: event.createdBy,
          title: event.title,
          description: event.description,
          image: event.image,
          categoryIds: event.categoryIds,
          location: event.location,
          startTime: event.startTime,
          endTime: event.endTime,
        },
      });
    }
  }, [event]);
  console.log(categories);
  console.log(event.categoryIds);

  const makeDate = async (date) => {
    const newDate = new Date(date).toISOString().slice(0, 16);
    return newDate;
  };

  {
    /** 
  const catDisplay = ({ prop }) => {
    console.log(prop);
    return console.log(
      prop
        .map((id) => {
          const cat = categories.find((cat) => cat.id == id);
          return cat ? cat.name : "";
        })
        .join(", ")
    );
  };

  catDisplay({ prop: event.categoryIds });
*/
  }
  return (
    <>
      {event && (
        <form>
          <label>Created by</label>
          {/**  <input type="text" name="createdBy" value={formValues.events.createdBy} />*/}
          <label>Title</label>
          <input type="text" name="title" value={formValues.events.title} />
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder={formValues.events.description}
            value={formValues.description}
          />
          <label>Image</label>
          <input type="text" name="image" value={formValues.events.image} />

          <label>Category</label>
          <textarea
            type="text"
            name="categoryIds"
            value={formValues.events.categoryIds
              .map((id) => {
                const cat = categories.find((cat) => cat.id == id);
                return cat ? cat.name : "";
              })
              .join(", ")}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formValues.events.location}
          />
          <label>Start time</label>
          <input
            type="datetime-local"
            name="startTime"
            placeholder={makeDate(formValues.events.startTime)}
            value={formValues.events.startTime}
          />
          <label>End time</label>
          <input
            type="datetime-local"
            name="endTime"
            placeholder={makeDate(formValues.events.endTime)}
            value={formValues.events.endTime}
          />
        </form>
      )}
    </>
  );
};
