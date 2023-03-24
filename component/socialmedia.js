import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
   
          <FaTwitter className="styles.icon" />

      </Link>
      <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">

          <FaLinkedin className="styles.icon" />

      </Link>
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">

          <FaGithub className="styles.icon" />

      </Link>
    </div>
  );
};

export default SocialMedia;
