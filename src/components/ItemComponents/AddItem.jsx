import React, { useState } from "react";
import ItemExpanded from "./ItemExpanded";
import Button from "../misc/Button";
import useAppContext from "../../context/useAppContext";

export default function AddItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clothingItems, setClothingItems } = useAppContext();
  const link = "tshirt.png";
  const text = "";
  const color = "";
  const textColor = "";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted with:", formData);
    setClothingItems((curr) => [formData, ...curr]);
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>
        <Button children={"Add Item"} />
      </button>
      {isModalOpen && (
        <dialog open className="modal">
          <ItemExpanded
            link={link}
            parentText={text}
            color={color}
            textColor={textColor}
            onSubmit={handleFormSubmit}
          />
          <button
            formMethod="dialog"
            onClick={closeModal}
            className="modal-backdrop backdrop-blur-sm"
          />
        </dialog>
      )}
    </>
  );
}