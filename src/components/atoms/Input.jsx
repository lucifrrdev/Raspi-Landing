import React from 'react';

/**
 * Atomic Input component
 * STRICT RULE: No custom className passing. Use variants and sizes.
 */
export const Input = ({
  size = 'md', // sm | md | lg
  variant = 'default', // default | filled
  type = 'text',
  ...rest
}) => {
  let classes = 'font-mono transition-all duration-300 w-full outline-none ';

  // Size classes
  switch (size) {
    case 'sm':
      classes += 'text-xs px-3 py-1.5 rounded-md ';
      break;
    case 'md':
      classes += 'text-sm px-4 py-2 rounded-lg ';
      break;
    case 'lg':
      classes += 'text-base px-5 py-3 rounded-xl ';
      break;
  }

  // Variant classes
  if (variant === 'default') {
    classes += 'bg-transparent border border-border text-text-strong placeholder-muted focus:border-accent ';
  } else if (variant === 'filled') {
    classes += 'bg-surface-hover border border-transparent text-text-strong placeholder-muted focus:border-accent ';
  }

  return <input type={type} className={classes.trim()} {...rest} />;
};
