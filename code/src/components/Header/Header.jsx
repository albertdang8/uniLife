import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { MdOutlineHolidayVillage, MdMailOutline } from "react-icons/md";
// MdOutlineAddHome for booking Modal


import "./Header.css";

function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);
  Modal.setAppElement(document.getElementById("root"));

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="row nav-container">
      <div className="logo row">
        <MdOutlineHolidayVillage size={48} />
        <h1 id="unilife">UniLife</h1>
      </div>

      <div className="right-header row j-center a-center">
        <div className="short-list row a-center">
          <AiOutlineHeart size={20} />
          <p className="smol">Shortlist</p>
        </div>
        <div className="contact row a-center">
          <AiOutlineMail size={20} />
          <button onClick={openModal} className="smol">Contact Us</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 className="modal-title">Contact Us</h2>
            <MdMailOutline />
            <div>
            <h3>Feel free to contact us if you have any questions</h3>
            <h3>Looking forward to hear from you.</h3>
            </div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
