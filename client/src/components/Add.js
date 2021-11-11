import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { addNewUser, getUsers } from "../Redux/actions";
import { useDispatch } from "react-redux";

const Add = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUser(name, email, number));
    dispatch(getUsers());
    closeModal();
    setEmail("");
    setName("");
    setNumber("");
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            vlaue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            vlaue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Number</label>
          <input
            type="text"
            vlaue={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button>Save</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default Add;
