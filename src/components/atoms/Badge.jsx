import React from 'react';

/**
 * Atomic Badge component
 * STRICT RULE: No custom className passing. Use variants, colors, and sizes.
 */
export const Badge = ({
  children,
  variant = 'solid', // solid | subtle | outline
  size = 'sm',       // xs | sm
  color = 'default', // default | red | accent
  title,
  ...rest
}) => {
  let classes = 'inline-flex items-center justify-center font-mono font-bold shrink-0 ';

  // Size classes
  switch (size) {
    case 'xs':
      classes += 'text-xxs px-1.5 py-0.5 rounded ';
      break;
    case 'sm':
      classes += 'text-xs px-2 py-1 rounded-md ';
      break;
  }

  // Variant & Color classes
  if (variant === 'subtle') {
    if (color === 'red') classes += 'bg-red/10 text-red border border-red/20 shadow-[0_0_10px_rgba(239,68,68,0.1)] ';
    else if (color === 'accent') classes += 'bg-accent/10 text-accent border border-accent/20 ';
    else classes += 'bg-surface-hover text-muted border border-border ';
  } else if (variant === 'solid') {
    if (color === 'red') classes += 'bg-red text-white shadow-[0_0_10px_rgba(239,68,68,0.3)] ';
    else if (color === 'accent') classes += 'bg-accent text-background ';
    else classes += 'bg-text-strong text-background ';
  } else if (variant === 'outline') {
    if (color === 'red') classes += 'text-red border border-red ';
    else if (color === 'accent') classes += 'text-accent border border-accent ';
    else classes += 'text-muted border border-border ';
  }

  return (
    <span className={classes.trim()} title={title} {...rest}>
      {children}
    </span>
  );
};
