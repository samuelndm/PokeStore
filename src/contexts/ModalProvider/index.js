import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import * as UI from "../../components/UIComponents";

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [size, setSize] = useState("");
  const [content, setContent] = useState(null);

  const createModal = (modal) => {
    const { content, customSize } = modal;
    setContent(content);
    setSize(customSize);
    setOpenModal(true);
  };

  return (
    <ModalContext.Provider value={{ createModal }}>
      {children}

      <UI.Modal openModal={openModal} closeModal={setOpenModal} size={size}>
        {content}
      </UI.Modal>
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalProvider;
