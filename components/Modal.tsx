import React from 'react';
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoUrl }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Close the modal only if the click is on the overlay and not inside the content
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-75"
            onClick={handleOverlayClick}
        >
            <div className="relative bg-white rounded-lg overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white z-50"
                >
                    <Image
                        src='/images/close_button.svg'
                        alt='Close Modal'
                        width={24}
                        height={24}
                    />
                </button>
                <video
                    className="w-full h-full p-40 rounded-sm"
                    controls
                    autoPlay
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Modal;
