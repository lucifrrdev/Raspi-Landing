import React from 'react';

/**
 * Atomic Avatar component
 */
export const Avatar = ({
  src,
  alt = 'Avatar',
  size = 'md', // sm | md | lg
  ...rest
}) => {
  let classes = 'rounded-full border border-border shrink-0 object-cover ';

  switch (size) {
    case 'sm':
      classes += 'w-6 h-6 ';
      break;
    case 'md':
      classes += 'w-7 h-7 sm:w-8 sm:h-8 ';
      break;
    case 'lg':
      classes += 'w-10 h-10 ';
      break;
  }

  return <img src={src} alt={alt} className={classes.trim()} {...rest} />;
};
