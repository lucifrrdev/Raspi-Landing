import React from 'react';

/**
 * Atomic Button component
 * STRICT RULE: No custom className passing. Use variants, colors, and sizes.
 */
export const Button = ({
  children,
  variant = 'solid', // solid | ghost | outline | nav | bottomNav | unstyled
  size = 'md',       // xs | sm | md | icon | icon-sm | icon-xs | navIcon | circle | unstyled
  color = 'default', // default | accent | muted | red
  as = 'button',
  active = false,
  href,
  onClick,
  type = 'button',
  title,
  ...rest
}) => {
  const Component = as;

  // Base classes
  let classes = 'inline-flex items-center justify-center font-mono transition-all duration-300 shrink-0 ';

  // Size classes
  switch (size) {
    case 'xs':
      classes += 'text-xxs px-2 py-1 rounded-md gap-1 ';
      break;
    case 'sm':
      classes += 'text-xs px-3 py-1.5 rounded-md gap-2 ';
      break;
    case 'md':
      classes += 'text-sm px-4 py-2 rounded-lg gap-2 ';
      break;
    case 'icon':
      classes += 'p-2 rounded-md ';
      break;
    case 'icon-sm':
      classes += 'p-1.5 rounded-md ';
      break;
    case 'icon-xs':
      classes += 'p-1 rounded-md ';
      break;
    case 'circle':
      classes += 'p-2 rounded-full ';
      break;
    case 'navIcon':
      classes += 'p-2 md:p-0 md:gap-0 md:justify-center md:mx-auto md:w-8 md:h-8 rounded-lg gap-3 ';
      break;
  }

  // Variant & Color classes
  if (variant === 'nav') {
    if (active) {
      classes += 'text-accent bg-accent/10 ';
    } else {
      classes += 'text-muted hover:text-text-strong hover:bg-surface-hover ';
    }
  } else if (variant === 'solid') {
    if (color === 'accent') classes += 'bg-accent text-background hover:bg-accent-hover ';
    else if (color === 'red') classes += 'bg-red text-white hover:bg-red/80 ';
    else classes += 'bg-text-strong text-background hover:bg-text ';
  } else if (variant === 'ghost') {
    if (color === 'accent') classes += 'text-accent hover:bg-accent/10 hover:text-accent-hover ';
    else if (color === 'red') classes += 'text-red hover:bg-red/10 ';
    else classes += 'text-muted hover:text-text-strong hover:bg-surface-hover ';
  } else if (variant === 'outline') {
    if (color === 'accent') classes += 'text-accent border border-accent hover:bg-accent/10 ';
    else classes += 'text-muted hover:text-text-strong border border-border hover:bg-surface-hover ';
  } else if (variant === 'bottomNav') {
    if (active) {
      classes += 'flex-col gap-2 text-accent p-2 ';
    } else {
      classes += 'flex-col gap-2 text-muted hover:text-text-strong transition-colors p-2 ';
    }
  } else if (variant === 'unstyled') {
    // raw component without styling wrapper except structure
  }

  const props = {
    className: classes.trim(),
    onClick,
    title,
    ...rest,
  };

  if (as === 'button') {
    props.type = type;
  } else if (as === 'a') {
    props.href = href;
  }

  return <Component {...props}>{children}</Component>;
};
