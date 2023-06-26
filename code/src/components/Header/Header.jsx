import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { MdOutlineHolidayVillage, MdMailOutline } from "react-icons/md";

import "./Header.css";

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement(document.getElementById("root"));

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
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
          <button onClick={openModal} className="smol">
            Contact Us
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Contact Modal"
            className="modal-container"
          >
            <div className="row">
              <h2 className="modal-title">Contact Us</h2>
              <MdMailOutline size={30} className="mail-icon" />
            </div>
            <div>
              <h3 className="words">
                Feel free to contact us if you have any questions.
              </h3>
              <h3 className="words">Looking forward to hearing from you.</h3>
            </div>
            <form className="contact-form">
              <div className="left-form column">
                <div className="column form-section">
                  <label htmlFor="name">Name</label>
                  <input className="input"type="text" placeholder="Enter your name" />
                </div>
                <div className="column form-section">
                  <label htmlFor="phone">Phone Number</label>
                  <input className="input" type="text" placeholder="Enter your Phone number" />
                </div>
                <div className="column form-section">
                  <label htmlFor="status">Are you a...</label>
                  <select type="text" className="employed">
                    <option>Student</option>
                    <option>Barbarian</option>
                    <option>Druid</option>
                    <option>Necromancer</option>
                    <option>Rogue</option>
                    <option>Sorcercor</option>
                  </select>
                </div>
              </div>

              <div className="right-form column">
                <div className="column form-section">
                  <label htmlFor="email">Email</label>
                  <input className="input" type="text" placeholder="Enter your email address" />
                </div>
                <div className="column form-section">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  className="submit-btn"
                  onClick={() => setModalIsOpen(false)}
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
