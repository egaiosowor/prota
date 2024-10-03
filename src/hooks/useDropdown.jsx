"use client"
import { useState } from "react"

export default function useDropdown(){
    const [isOpen, setIsOpen] = useState(false) 

    const showDropdown = () => setIsOpen(true);

    const hideDropdown = (event) => {
        // Ensure we don't hide the dropdown when hovering on the dropdown menu
        if (!event.relatedTarget || !event.relatedTarget.closest('#dropdownMenu')) {
            setIsOpen(false);
        }
    };


    return{
        isOpen,
        showDropdown,
        hideDropdown
    }
}