import React, { createContext, useContext, useState } from "react";
import ContactModal from "../components/ContactModal";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ open: false, type: "" });

  const openModal = (type) => setModal({ open: true, type });
  const closeModal = () => setModal({ open: false, type: "" });

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}

      {/* 🔥 THIS WAS MISSING */}
      {modal.open && modal.type === "contact" && <ContactModal />}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
