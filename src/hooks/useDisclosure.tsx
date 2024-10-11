"use client"
import { useCallback, useState } from "react"

export default function useDisclosure(){
    const [isOpen, setIsOpen] = useState(false) 

    const onOpen = useCallback(() => setIsOpen(true), [])

    const onClose = useCallback((event: any) => {
        // Ensure we don't hide the dropdown when hovering on the dropdown menu
        if (!event.relatedTarget || !event.relatedTarget.closest('#dropdownMenu')) {
            setIsOpen(false);
        }
    },[])

    const onToggle = useCallback(() => setIsOpen(prev => !prev), [])


    return{
        isOpen,
        onOpen,
        onClose,
        onToggle
    }
}