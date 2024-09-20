import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';



interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = '',
  className = '',
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full focus:outline-none ${className}`}
    >
      <FaWhatsapp  className='w-12 h-12 text-[#658C6F]'/>
    </Link>
  );
};
