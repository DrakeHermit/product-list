import { useState, useEffect } from "react";

export const useModal = () => { 
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset"; 
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset"; 
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);
  
  return { isOpen, openModal, closeModal };
 }