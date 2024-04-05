import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/actions";
import { useRef } from "react";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import CategoryTag from "../CategoryTag";
import Popup from "../Popup";
import "./styles.scss";

const Modal = ({ onClose, onClick }) => {
  const [tag, setTag] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const inputTitleRef = useRef();
  const inputSubtitleRef = useRef();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onClickCategory = (event) => {
    const value = event.target.getAttribute("data-value");
    setTag(value);
  };

  const onSubmit = (data) => {
    setIsPopupOpen(false);

    const newData = {
      ...data,
      photo_url: null,
      category: tag,
    };
    dispatch(addPost(newData));
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="closer-btn">
          <Button
            className="modal-close"
            onClick={onClose}
            label="&#10006;"
            type="type"
            width={20}
          />
        </div>

        {isPopupOpen ? (
          <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
            <h2 className="modal-title">Create your new post!</h2>
            <Controller
              control={control}
              name="title"
              defaultValue=""
              rules={{ required: "You need to fill the title!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  aria-invalid={errors.title}
                  placeholder="The title of the post"
                  width={400}
                  height={50}
                  ref={inputTitleRef}
                  borderColor={errors.title ? "red" : "#dcdddf"}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              defaultValue=""
              rules={{ required: "You need to fill the subtitle!" }}
              render={({ field }) => (
                <Input
                  {...field}
                  aria-invalid={errors.description}
                  type="text"
                  placeholder="The subtitle of the post"
                  width={400}
                  height={50}
                  ref={inputSubtitleRef}
                  borderColor={errors.description ? "red" : "#dcdddf"}
                />
              )}
            />
            <textarea
              {...register("content_text", {
                required: "You need to write a post!",
              })}
              aria-invalid={errors.content_text}
              className="text-area"
              placeholder="Write a new post..."
              style={{ borderColor: errors.content_text ? "red" : "#dcdddf" }}
            />
            <div className="categoryTag">
              <CategoryTag
                dataValue="love"
                onClick={onClickCategory}
                text="love"
                tag={tag}
              />
              <CategoryTag
                dataValue="math"
                onClick={onClickCategory}
                text="math"
                tag={tag}
              />
              <CategoryTag
                dataValue="programming"
                onClick={onClickCategory}
                text="programming"
                tag={tag}
              />
              <CategoryTag
                dataValue="gaming"
                onClick={onClickCategory}
                text="gaming"
                tag={tag}
              />
            </div>

            {errors.title && (
              <div style={{ color: "red" }}>{errors.title.message}</div>
            )}
            {errors.description && (
              <div style={{ color: "red" }}>{errors.description.message}</div>
            )}
            {errors.content_text && (
              <div style={{ color: "red" }}>{errors.content_text.message}</div>
            )}
            <div className="modal-btn">
              <Button onClick={onClose} label="Close" type="type" width={180} />
              <Button onClick={onClick} label="Save" type="type" width={180} />
            </div>
          </form>
        ) : (
          <Popup />
        )}
      </div>
    </div>
  );
};

export default Modal;
