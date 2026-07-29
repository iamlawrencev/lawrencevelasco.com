/* @ds-bundle: {"format":4,"namespace":"LawrenceDesignSystem_a32cf5","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"FloatingAction","sourcePath":"components/actions/FloatingAction.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"CodeBlock","sourcePath":"components/content/CodeBlock.jsx"},{"name":"DataTable","sourcePath":"components/content/DataTable.jsx"},{"name":"DescriptionList","sourcePath":"components/content/DescriptionList.jsx"},{"name":"EmptyState","sourcePath":"components/content/EmptyState.jsx"},{"name":"ListRow","sourcePath":"components/content/ListRow.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"InlineStatus","sourcePath":"components/feedback/InlineStatus.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormGroup","sourcePath":"components/forms/FormGroup.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextArea","sourcePath":"components/forms/TextArea.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"BottomTabBar","sourcePath":"components/navigation/BottomTabBar.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"MobileHeader","sourcePath":"components/navigation/MobileHeader.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"WebHeader","sourcePath":"components/navigation/WebHeader.jsx"},{"name":"CommandPalette","sourcePath":"components/overlays/CommandPalette.jsx"},{"name":"Dialog","sourcePath":"components/overlays/Dialog.jsx"},{"name":"Menu","sourcePath":"components/overlays/Menu.jsx"},{"name":"Popover","sourcePath":"components/overlays/Popover.jsx"},{"name":"Sheet","sourcePath":"components/overlays/Sheet.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"21f0b223afd4","components/actions/FloatingAction.jsx":"d76f4ad1b878","components/actions/IconButton.jsx":"e5a6dce2cf95","components/actions/TextLink.jsx":"62ec8a4e0365","components/content/Accordion.jsx":"1f07f9b27f0f","components/content/Avatar.jsx":"6c5a4c090f1a","components/content/CodeBlock.jsx":"b9cd92137011","components/content/DataTable.jsx":"b2eeb66daf9f","components/content/DescriptionList.jsx":"3bcc5228eba7","components/content/EmptyState.jsx":"4cfd687d316f","components/content/ListRow.jsx":"400c02661cf1","components/content/SectionHeading.jsx":"258ea3ce8e9d","components/content/Tag.jsx":"9ad0c01c6c18","components/feedback/Banner.jsx":"c92072ed43ce","components/feedback/InlineStatus.jsx":"49ca195ba6e4","components/feedback/ProgressBar.jsx":"6b5ae1da3383","components/feedback/Skeleton.jsx":"ab730302f767","components/feedback/Spinner.jsx":"094e51f0ee54","components/feedback/Toast.jsx":"3032b5e6f8c6","components/forms/Checkbox.jsx":"8c3cb05160ff","components/forms/FormGroup.jsx":"fd3ecc29f935","components/forms/Radio.jsx":"c5d9c4561bc5","components/forms/SearchField.jsx":"f234ed954cb8","components/forms/SegmentedControl.jsx":"195b61f2f968","components/forms/Select.jsx":"3f708e20bb30","components/forms/Slider.jsx":"1a1a61e57472","components/forms/Switch.jsx":"b246ccf5cba7","components/forms/TextArea.jsx":"06e937a2c3a8","components/forms/TextField.jsx":"e87e57d0041d","components/navigation/BottomTabBar.jsx":"e6dcd0fed882","components/navigation/Breadcrumbs.jsx":"4d091d0252d1","components/navigation/MobileHeader.jsx":"f0034acba947","components/navigation/Pagination.jsx":"c86e0b92f711","components/navigation/SideNav.jsx":"071349c3759b","components/navigation/Tabs.jsx":"1727c3b97a97","components/navigation/WebHeader.jsx":"758937fdf6c9","components/overlays/CommandPalette.jsx":"5fb704e2c99a","components/overlays/Dialog.jsx":"57b83c9f3a84","components/overlays/Menu.jsx":"d8905403cdd3","components/overlays/Popover.jsx":"02bcd8d5d416","components/overlays/Sheet.jsx":"ad2a5d1771aa","components/overlays/Tooltip.jsx":"a72efe049c28","ui_kits/mobile/MobileAppMain.jsx":"8e497bf4eedd","ui_kits/mobile/ios-frame.jsx":"24642b887be3","ui_kits/portfolio/PortfolioApp.jsx":"d29c1e7dcfbb","ui_kits/webapp/WebAppMain.jsx":"1af075fd780d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LawrenceDesignSystem_a32cf5 = window.LawrenceDesignSystem_a32cf5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon = null,
  children,
  onClick,
  type = 'button'
}) {
  const pad = size === 'sm' ? '0 16px' : size === 'lg' ? '0 28px' : '0 20px';
  const height = size === 'sm' ? 'var(--control-height-sm)' : size === 'lg' ? '52px' : 'var(--control-height-compact)';
  const base = {
    height,
    padding: pad,
    borderRadius: 'var(--radius-control)',
    fontFamily: 'var(--font-sans)',
    fontSize: size === 'sm' ? '0.9rem' : '1rem',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast)',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--color-action-primary-bg)',
      color: 'var(--color-action-primary-fg)'
    },
    secondary: {
      background: 'var(--color-action-secondary-bg)',
      color: 'var(--color-action-secondary-fg)',
      borderColor: 'var(--color-action-secondary-border)'
    },
    quiet: {
      background: 'transparent',
      color: 'var(--color-action-quiet-fg)'
    },
    destructive: {
      background: 'transparent',
      color: 'var(--color-action-destructive-fg)',
      borderColor: 'var(--color-action-destructive-fg)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  let bg = variants[variant].background;
  if (!disabled && variant === 'primary') {
    bg = pressed ? 'var(--color-action-primary-bg-pressed)' : hover ? 'var(--color-action-primary-bg-hover)' : bg;
  }
  const style = {
    ...base,
    ...variants[variant],
    background: bg,
    transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)'
  };
  return React.createElement('button', {
    type,
    style,
    disabled: disabled || loading,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false)
  }, loading ? React.createElement('span', {
    style: {
      width: 16,
      height: 16,
      border: '2px solid currentColor',
      borderRightColor: 'transparent',
      borderRadius: '50%',
      animation: 'ds-spin 0.7s linear infinite'
    }
  }) : icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/FloatingAction.jsx
try { (() => {
function FloatingAction({
  icon,
  label,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    type: 'button',
    'aria-label': label,
    title: label,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--color-action-primary-bg)',
      color: 'var(--color-action-primary-fg)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: hover ? 'var(--shadow-float-lg)' : 'var(--shadow-float-md)',
      cursor: 'pointer',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'all var(--duration-standard) var(--ease-spring-soft)'
    }
  }, icon);
}
Object.assign(__ds_scope, { FloatingAction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/FloatingAction.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'quiet',
  selected = false,
  onClick
}) {
  const dim = size === 'sm' ? 36 : 44;
  const [hover, setHover] = React.useState(false);
  const bg = selected ? 'var(--color-selection-bg)' : hover ? 'var(--color-bg-surface-secondary)' : 'transparent';
  const color = selected ? 'var(--color-selection-fg)' : 'var(--color-icon-primary)';
  return React.createElement('button', {
    type: 'button',
    'aria-label': label,
    title: label,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      minWidth: 44,
      minHeight: 44,
      borderRadius: 'var(--radius-control)',
      border: 'none',
      background: bg,
      color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function TextLink({
  href = '#',
  children,
  external = false
}) {
  return React.createElement('a', {
    href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
    style: {
      color: 'var(--color-link)',
      fontWeight: 500,
      textUnderlineOffset: '3px'
    }
  }, children, external ? ' \u2197' : '');
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function Accordion({
  items = []
}) {
  const [open, setOpen] = React.useState(new Set());
  const toggle = i => setOpen(s => {
    const n = new Set(s);
    n.has(i) ? n.delete(i) : n.add(i);
    return n;
  });
  return React.createElement('div', null, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      borderBottom: '1px solid var(--color-border-hairline)'
    }
  }, React.createElement('button', {
    type: 'button',
    onClick: () => toggle(i),
    'aria-expanded': open.has(i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 4px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      textAlign: 'left'
    }
  }, it.title, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    style: {
      transform: open.has(i) ? 'rotate(180deg)' : 'rotate(0)',
      transition: 'transform var(--duration-standard) var(--ease-standard)'
    }
  }, React.createElement('path', {
    d: 'M6 9l6 6 6-6'
  }))), React.createElement('div', {
    style: {
      maxHeight: open.has(i) ? 400 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--duration-standard) var(--ease-standard)'
    }
  }, React.createElement('p', {
    style: {
      margin: '0 4px 16px',
      color: 'var(--color-text-secondary)'
    }
  }, it.content)))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/Avatar.jsx
try { (() => {
function Avatar({
  name = '',
  src,
  size = 40
}) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return src ? React.createElement('img', {
    src,
    alt: name,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }) : React.createElement('div', {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--color-action-primary-bg)',
      color: 'var(--color-action-primary-fg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: size * 0.38
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/CodeBlock.jsx
try { (() => {
function CodeBlock({
  code = '',
  language = ''
}) {
  return React.createElement('pre', {
    style: {
      margin: 0,
      padding: '16px 18px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--neutral-900)',
      color: 'var(--neutral-50)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-code-size)',
      lineHeight: 'var(--text-code-lh)',
      overflowX: 'auto'
    }
  }, language && React.createElement('div', {
    style: {
      color: 'var(--neutral-500)',
      fontSize: 'var(--text-meta-size)',
      marginBottom: 8
    }
  }, language), React.createElement('code', null, code));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = []
}) {
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: '0.9rem'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map(c => React.createElement('th', {
    key: c,
    style: {
      textAlign: 'left',
      padding: '10px 12px',
      fontWeight: 600,
      color: 'var(--color-text-tertiary)',
      borderBottom: '1px solid var(--color-border-strong)',
      fontSize: 'var(--text-meta-size)',
      textTransform: 'uppercase',
      letterSpacing: '0.03em'
    }
  }, c)))), React.createElement('tbody', null, rows.map((r, i) => React.createElement('tr', {
    key: i,
    style: {
      borderBottom: '1px solid var(--color-border-hairline)'
    }
  }, columns.map(c => React.createElement('td', {
    key: c,
    style: {
      padding: '12px',
      color: 'var(--color-text-primary)'
    }
  }, r[c]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/content/DescriptionList.jsx
try { (() => {
function DescriptionList({
  items = []
}) {
  return React.createElement('dl', {
    style: {
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      rowGap: 12,
      columnGap: 16,
      margin: 0
    }
  }, items.map(it => React.createElement(React.Fragment, {
    key: it.term
  }, React.createElement('dt', {
    style: {
      fontSize: '0.9rem',
      color: 'var(--color-text-tertiary)',
      fontWeight: 500
    }
  }, it.term), React.createElement('dd', {
    style: {
      margin: 0,
      fontSize: '1rem',
      color: 'var(--color-text-primary)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { DescriptionList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DescriptionList.jsx", error: String((e && e.message) || e) }); }

// components/content/EmptyState.jsx
try { (() => {
function EmptyState({
  icon,
  title,
  description,
  action
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10,
      padding: 'var(--space-16) var(--space-6)',
      color: 'var(--color-text-secondary)'
    }
  }, icon && React.createElement('div', {
    style: {
      color: 'var(--color-text-tertiary)',
      marginBottom: 4
    }
  }, icon), React.createElement('h3', {
    style: {
      margin: 0,
      fontSize: 'var(--text-subheading-size)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, title), description && React.createElement('p', {
    style: {
      margin: 0,
      maxWidth: 360
    }
  }, description), action && React.createElement('div', {
    style: {
      marginTop: 8
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/content/ListRow.jsx
try { (() => {
function ListRow({
  title,
  subtitle,
  leading,
  trailing,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 4px',
      borderBottom: '1px solid var(--color-border-hairline)',
      cursor: onClick ? 'pointer' : 'default',
      background: hover && onClick ? 'var(--color-bg-surface-secondary)' : 'transparent',
      borderRadius: hover && onClick ? 'var(--radius-sm)' : 0,
      transition: 'background var(--duration-fast)'
    }
  }, leading, React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('div', {
    style: {
      fontSize: '1rem',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), subtitle && React.createElement('div', {
    style: {
      fontSize: 'var(--text-supporting-size)',
      color: 'var(--color-text-secondary)'
    }
  }, subtitle)), trailing);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  description
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 'var(--space-6)'
    }
  }, eyebrow && React.createElement('span', {
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--color-action-primary-bg)'
    }
  }, eyebrow), React.createElement('h2', {
    style: {
      fontSize: 'var(--text-section-title-size)',
      lineHeight: 'var(--text-section-title-lh)',
      fontWeight: 'var(--text-section-title-weight)',
      letterSpacing: 'var(--text-section-title-tracking)',
      margin: 0,
      color: 'var(--color-text-primary)'
    }
  }, title), description && React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-body-lg-size)',
      maxWidth: 'var(--content-measure)'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      bg: 'var(--color-bg-surface-secondary)',
      fg: 'var(--color-text-secondary)'
    },
    accent: {
      bg: 'var(--color-selection-bg)',
      fg: 'var(--color-selection-fg)'
    },
    success: {
      bg: 'color-mix(in srgb, var(--color-status-success) 16%, transparent)',
      fg: 'var(--color-status-success)'
    },
    warning: {
      bg: 'color-mix(in srgb, var(--color-status-warning) 18%, transparent)',
      fg: 'var(--color-status-warning)'
    },
    error: {
      bg: 'color-mix(in srgb, var(--color-status-error) 14%, transparent)',
      fg: 'var(--color-status-error)'
    }
  };
  const t = tones[tone];
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-meta-size)',
      fontWeight: 600,
      background: t.bg,
      color: t.fg
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function Banner({
  tone = 'info',
  title,
  description,
  onDismiss
}) {
  const colorVar = {
    success: '--color-status-success',
    warning: '--color-status-warning',
    error: '--color-status-error',
    info: '--color-status-info'
  }[tone];
  return React.createElement('div', {
    role: 'status',
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-bg-surface-secondary)',
      borderLeft: `3px solid var(${colorVar})`
    }
  }, React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, title), description && React.createElement('div', {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: '0.9rem',
      marginTop: 2
    }
  }, description)), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--color-icon-secondary)',
      cursor: 'pointer',
      fontSize: 14
    }
  }, '\u2715'));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineStatus.jsx
try { (() => {
const icons = {
  success: '\u2713',
  warning: '!',
  error: '\u2715',
  info: 'i'
};
function InlineStatus({
  tone = 'info',
  children
}) {
  const colorVar = {
    success: '--color-status-success',
    warning: '--color-status-warning',
    error: '--color-status-error',
    info: '--color-status-info'
  }[tone];
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '0.9rem',
      color: `var(${colorVar})`
    }
  }, React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: `1.5px solid var(${colorVar})`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      fontWeight: 700,
      flexShrink: 0
    }
  }, icons[tone]), children);
}
Object.assign(__ds_scope, { InlineStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineStatus.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  label
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, label && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-meta-size)',
      color: 'var(--color-text-secondary)'
    }
  }, React.createElement('span', null, label), React.createElement('span', null, Math.round(value) + '%')), React.createElement('div', {
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    style: {
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-border-hairline)',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      width: value + '%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-action-primary-bg)',
      transition: 'width var(--duration-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = '100%',
  height = 16,
  radius = 'var(--radius-sm)'
}) {
  return React.createElement('div', {
    style: {
      width,
      height,
      borderRadius: radius,
      background: 'linear-gradient(90deg,var(--color-bg-surface-secondary) 25%,var(--color-border-hairline) 50%,var(--color-bg-surface-secondary) 75%)',
      backgroundSize: '200% 100%',
      animation: 'ds-shimmer 1.4s ease-in-out infinite'
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function Spinner({
  size = 20,
  label = 'Loading'
}) {
  return React.createElement('span', {
    role: 'status',
    'aria-label': label,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      border: '2.5px solid var(--color-border-hairline)',
      borderTopColor: 'var(--color-action-primary-bg)',
      borderRadius: '50%',
      animation: 'ds-spin 0.7s linear infinite'
    }
  });
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'info',
  message,
  onDismiss
}) {
  const colorVar = {
    success: '--color-status-success',
    warning: '--color-status-warning',
    error: '--color-status-error',
    info: '--color-status-info'
  }[tone];
  return React.createElement('div', {
    role: 'status',
    className: 'ds-glass',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-glass-fill)',
      backdropFilter: 'blur(var(--blur-glass-sm)) saturate(var(--glass-saturation))',
      WebkitBackdropFilter: 'blur(var(--blur-glass-sm)) saturate(var(--glass-saturation))',
      boxShadow: 'var(--shadow-float-md)',
      border: '1px solid var(--color-glass-edge)',
      maxWidth: 360
    }
  }, React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: `var(${colorVar})`,
      flexShrink: 0
    }
  }), React.createElement('span', {
    style: {
      color: 'var(--color-text-primary)',
      fontSize: '0.9rem',
      flex: 1
    }
  }, message), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--color-icon-secondary)',
      cursor: 'pointer'
    }
  }, '\u2715'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  indeterminate = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontSize: '1rem',
      color: 'var(--color-text-primary)'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    ref: el => {
      if (el) el.indeterminate = indeterminate;
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 44,
      height: 44,
      margin: 0,
      cursor: 'pointer'
    }
  }), React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked || indeterminate ? 'var(--color-action-primary-bg)' : 'var(--color-border-strong)'}`,
      background: checked || indeterminate ? 'var(--color-action-primary-bg)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, (checked || indeterminate) && React.createElement('svg', {
    width: 13,
    height: 13,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--color-action-primary-fg)',
    strokeWidth: 3
  }, React.createElement('path', {
    d: indeterminate ? 'M5 12h14' : 'M5 13l4 4L19 7'
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormGroup.jsx
try { (() => {
function FormGroup({
  title,
  description,
  children
}) {
  return React.createElement('fieldset', {
    style: {
      border: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, title && React.createElement('legend', {
    style: {
      fontSize: 'var(--text-subheading-size)',
      fontWeight: 'var(--text-subheading-weight)',
      padding: 0,
      marginBottom: description ? 4 : 0
    }
  }, title), description && React.createElement('p', {
    style: {
      margin: 0,
      marginBottom: 8,
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-body-size)'
    }
  }, description), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, children));
}
Object.assign(__ds_scope, { FormGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontSize: '1rem',
      color: 'var(--color-text-primary)'
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    checked,
    onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 44,
      height: 44,
      margin: 0,
      cursor: 'pointer'
    }
  }), React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--color-action-primary-bg)' : 'var(--color-border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-action-primary-bg)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function SearchField({
  placeholder = 'Search',
  value,
  onChange,
  onClear
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--control-height-compact)',
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${focus ? 'var(--color-focus-ring)' : 'var(--color-border-hairline)'}`,
      background: 'var(--color-bg-surface-secondary)'
    }
  }, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--color-icon-secondary)',
    strokeWidth: 2
  }, React.createElement('circle', {
    cx: 11,
    cy: 11,
    r: 7
  }), React.createElement('path', {
    d: 'M21 21l-4.3-4.3'
  })), React.createElement('input', {
    value,
    placeholder,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: '0.95rem',
      color: 'var(--color-text-primary)'
    }
  }), value && onClear && React.createElement('button', {
    type: 'button',
    onClick: onClear,
    'aria-label': 'Clear search',
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--color-icon-secondary)',
      cursor: 'pointer',
      fontSize: 14
    }
  }, '\u2715'));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange
}) {
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'inline-flex',
      padding: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-bg-surface-secondary)',
      gap: 2
    }
  }, options.map(o => React.createElement('button', {
    key: o.value,
    type: 'button',
    role: 'tab',
    'aria-selected': value === o.value,
    onClick: () => onChange && onChange(o.value),
    style: {
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: 600,
      background: value === o.value ? 'var(--color-bg-surface)' : 'transparent',
      color: value === o.value ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
      boxShadow: value === o.value ? 'var(--shadow-float-sm)' : 'none',
      transition: 'all var(--duration-standard) var(--ease-standard)'
    }
  }, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = []
}) {
  const id = React.useId();
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && React.createElement('label', {
    htmlFor: id,
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)'
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    id,
    value,
    onChange,
    style: {
      height: 'var(--control-height-compact)',
      width: '100%',
      padding: '0 36px 0 14px',
      borderRadius: 'var(--radius-control)',
      border: '1px solid var(--color-border-strong)',
      background: 'var(--color-bg-surface)',
      color: 'var(--color-text-primary)',
      fontSize: '1rem',
      appearance: 'none',
      cursor: 'pointer'
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))), React.createElement('svg', {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--color-icon-secondary)',
    strokeWidth: 2,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, React.createElement('path', {
    d: 'M6 9l6 6 6-6'
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function Slider({
  label,
  min = 0,
  max = 100,
  value = 50,
  onChange
}) {
  const pct = (value - min) / (max - min) * 100;
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)'
    }
  }, label && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-label-size)',
      fontWeight: 600
    }
  }, React.createElement('span', null, label), React.createElement('span', {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, value)), React.createElement('div', {
    style: {
      position: 'relative',
      height: 44,
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-border-hairline)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 0,
      width: pct + '%',
      height: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-action-primary-bg)'
    }
  }), React.createElement('input', {
    type: 'range',
    min,
    max,
    value,
    onChange,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      width: '100%',
      appearance: 'none',
      background: 'transparent',
      height: 44,
      margin: 0
    }
  })));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontSize: '1rem',
      color: 'var(--color-text-primary)'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    role: 'switch',
    checked,
    onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), React.createElement('span', {
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-action-primary-bg)' : 'var(--color-border-strong)',
      position: 'relative',
      transition: 'background var(--duration-standard) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-float-sm)',
      transition: 'left var(--duration-standard) var(--ease-spring-soft)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextArea.jsx
try { (() => {
function TextArea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  helperText
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && React.createElement('label', {
    htmlFor: id,
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)'
    }
  }, label), React.createElement('textarea', {
    id,
    rows,
    value,
    placeholder,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: '12px 14px',
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${focus ? 'var(--color-focus-ring)' : 'var(--color-border-strong)'}`,
      background: 'var(--color-bg-surface)',
      color: 'var(--color-text-primary)',
      fontSize: '1rem',
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      resize: 'vertical',
      lineHeight: 1.5
    }
  }), helperText && React.createElement('span', {
    style: {
      fontSize: 'var(--text-meta-size)',
      color: 'var(--color-text-tertiary)'
    }
  }, helperText));
}
Object.assign(__ds_scope, { TextArea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextArea.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  placeholder,
  value,
  onChange,
  helperText,
  error,
  type = 'text',
  required = false
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && React.createElement('label', {
    htmlFor: id,
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      color: 'var(--color-text-primary)'
    }
  }, label, required && ' *'), React.createElement('input', {
    id,
    type,
    value,
    placeholder,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-height-compact)',
      padding: '0 14px',
      borderRadius: 'var(--radius-control)',
      border: `1px solid ${error ? 'var(--color-status-error)' : focus ? 'var(--color-focus-ring)' : 'var(--color-border-strong)'}`,
      background: 'var(--color-bg-surface)',
      color: 'var(--color-text-primary)',
      fontSize: '1rem',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--color-focus-ring) 20%, transparent)' : 'none',
      transition: 'border-color var(--duration-fast),box-shadow var(--duration-fast)'
    }
  }), (helperText || error) && React.createElement('span', {
    style: {
      fontSize: 'var(--text-meta-size)',
      color: error ? 'var(--color-status-error)' : 'var(--color-text-tertiary)'
    }
  }, error || helperText));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomTabBar.jsx
try { (() => {
function BottomTabBar({
  tabs = [],
  active
}) {
  return React.createElement('div', {
    className: 'ds-glass',
    style: {
      display: 'flex',
      height: 64,
      background: 'var(--color-glass-fill)',
      backdropFilter: 'blur(var(--blur-glass-md)) saturate(var(--glass-saturation))',
      WebkitBackdropFilter: 'blur(var(--blur-glass-md)) saturate(var(--glass-saturation))',
      borderTop: '1px solid var(--color-glass-edge)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.label,
    type: 'button',
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      border: 'none',
      background: 'none',
      color: t.label === active ? 'var(--color-action-primary-bg)' : 'var(--color-icon-secondary)',
      cursor: 'pointer'
    }
  }, t.icon, React.createElement('span', {
    style: {
      fontSize: 11,
      fontWeight: 600
    }
  }, t.label))));
}
Object.assign(__ds_scope, { BottomTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomTabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = []
}) {
  return React.createElement('nav', {
    'aria-label': 'Breadcrumb',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '0.9rem',
      color: 'var(--color-text-secondary)'
    }
  }, items.map((it, i) => React.createElement(React.Fragment, {
    key: it
  }, i > 0 && React.createElement('span', {
    'aria-hidden': true
  }, '/'), i === items.length - 1 ? React.createElement('span', {
    style: {
      color: 'var(--color-text-primary)',
      fontWeight: 600
    }
  }, it) : React.createElement('a', {
    href: '#',
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, it))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MobileHeader.jsx
try { (() => {
function MobileHeader({
  title,
  onBack,
  rightAction
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 56,
      padding: '0 8px',
      position: 'relative'
    }
  }, onBack && React.createElement('button', {
    onClick: onBack,
    'aria-label': 'Back',
    style: {
      width: 44,
      height: 44,
      border: 'none',
      background: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-icon-primary)'
    }
  }, React.createElement('svg', {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2
  }, React.createElement('path', {
    d: 'M15 18l-6-6 6-6'
  }))), React.createElement('h1', {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: '1.05rem',
      fontWeight: 700,
      margin: 0,
      pointerEvents: 'none'
    }
  }, title), React.createElement('div', {
    style: {
      marginLeft: 'auto',
      zIndex: 1
    }
  }, rightAction));
}
Object.assign(__ds_scope, { MobileHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MobileHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pageCount = 1,
  onChange
}) {
  const go = p => onChange && p >= 1 && p <= pageCount && onChange(p);
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement('button', {
    onClick: () => go(page - 1),
    disabled: page <= 1,
    'aria-label': 'Previous page',
    style: {
      width: 36,
      height: 36,
      border: 'none',
      background: 'none',
      borderRadius: 'var(--radius-control)',
      cursor: page <= 1 ? 'default' : 'pointer',
      opacity: page <= 1 ? 0.35 : 1,
      color: 'var(--color-icon-primary)'
    }
  }, '\u2039'), React.createElement('span', {
    style: {
      fontSize: '0.9rem',
      color: 'var(--color-text-secondary)',
      padding: '0 8px'
    }
  }, `Page ${page} of ${pageCount}`), React.createElement('button', {
    onClick: () => go(page + 1),
    disabled: page >= pageCount,
    'aria-label': 'Next page',
    style: {
      width: 36,
      height: 36,
      border: 'none',
      background: 'none',
      borderRadius: 'var(--radius-control)',
      cursor: page >= pageCount ? 'default' : 'pointer',
      opacity: page >= pageCount ? 0.35 : 1,
      color: 'var(--color-icon-primary)'
    }
  }, '\u203a'));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function SideNav({
  sections = [],
  active
}) {
  return React.createElement('nav', {
    style: {
      width: 240,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      padding: 'var(--space-6) var(--space-4)',
      background: 'var(--color-bg-canvas)',
      borderRight: '1px solid var(--color-border-hairline)',
      height: '100%'
    }
  }, sections.map(sec => React.createElement('div', {
    key: sec.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-meta-size)',
      fontWeight: 600,
      color: 'var(--color-text-tertiary)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      padding: '0 12px',
      marginBottom: 6
    }
  }, sec.title), sec.items.map(it => React.createElement('a', {
    key: it,
    href: '#',
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-control)',
      fontSize: '0.95rem',
      fontWeight: it === active ? 600 : 400,
      color: it === active ? 'var(--color-selection-fg)' : 'var(--color-text-primary)',
      background: it === active ? 'var(--color-selection-bg)' : 'transparent'
    }
  }, it)))));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--color-border-hairline)'
    }
  }, items.map(it => React.createElement('button', {
    key: it,
    role: 'tab',
    'aria-selected': it === active,
    onClick: () => onChange && onChange(it),
    type: 'button',
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '12px 2px',
      fontSize: '1rem',
      fontWeight: it === active ? 600 : 400,
      color: it === active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
      borderBottom: it === active ? '2px solid var(--color-action-primary-bg)' : '2px solid transparent',
      marginBottom: -1
    }
  }, it)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/WebHeader.jsx
try { (() => {
function WebHeader({
  logo = 'Lawrence',
  nav = [],
  active,
  cta,
  maxWidth = 900
}) {
  return React.createElement('div', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      pointerEvents: 'none',
      height: 0,
      overflow: 'visible',
      display: 'flow-root'
    }
  }, React.createElement('div', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 48,
      background: 'linear-gradient(to bottom, var(--color-bg-canvas) 0%, var(--color-bg-canvas) 35%, transparent 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement('header', {
    className: 'ds-glass',
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      width: 'calc(100% - 48px)',
      maxWidth: maxWidth,
      margin: '16px auto 0',
      height: 56,
      padding: '0 14px 0 24px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-glass-fill)',
      backdropFilter: 'blur(var(--blur-glass-md)) saturate(var(--glass-saturation))',
      WebkitBackdropFilter: 'blur(var(--blur-glass-md)) saturate(var(--glass-saturation))',
      border: '1px solid var(--color-glass-edge)',
      boxShadow: 'var(--shadow-float-md)',
      pointerEvents: 'auto'
    }
  }, React.createElement('span', {
    style: {
      fontWeight: 700,
      fontSize: '1.05rem',
      color: 'var(--color-text-primary)',
      whiteSpace: 'nowrap'
    }
  }, logo), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center'
    }
  }, nav.map(n => React.createElement('a', {
    key: n,
    href: '#',
    style: {
      fontSize: '0.9rem',
      fontWeight: n === active ? 700 : 500,
      whiteSpace: 'nowrap',
      color: n === active ? 'var(--color-text-primary)' : 'var(--color-text-secondary)'
    }
  }, n))), cta));
}
Object.assign(__ds_scope, { WebHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/WebHeader.jsx", error: String((e && e.message) || e) }); }

// components/overlays/CommandPalette.jsx
try { (() => {
function CommandPalette({
  open,
  query,
  onQueryChange,
  results = []
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 100,
      background: 'var(--color-bg-overlay-scrim)',
      zIndex: 100
    }
  }, React.createElement('div', {
    className: 'ds-glass',
    style: {
      width: 520,
      maxWidth: '90%',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-glass-fill)',
      backdropFilter: 'blur(var(--blur-glass-lg)) saturate(var(--glass-saturation))',
      WebkitBackdropFilter: 'blur(var(--blur-glass-lg)) saturate(var(--glass-saturation))',
      border: '1px solid var(--color-glass-edge)',
      boxShadow: 'var(--shadow-float-lg)',
      overflow: 'hidden'
    }
  }, React.createElement('input', {
    autoFocus: true,
    value: query,
    onChange: onQueryChange,
    placeholder: 'Jump to…',
    style: {
      width: '100%',
      border: 'none',
      borderBottom: '1px solid var(--color-border-hairline)',
      padding: '16px 20px',
      fontSize: '1.05rem',
      background: 'transparent',
      color: 'var(--color-text-primary)',
      outline: 'none'
    }
  }), React.createElement('div', {
    style: {
      padding: 6,
      maxHeight: 280,
      overflowY: 'auto'
    }
  }, results.map(r => React.createElement('div', {
    key: r,
    style: {
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '0.95rem',
      color: 'var(--color-text-primary)',
      cursor: 'pointer'
    }
  }, r)))));
}
Object.assign(__ds_scope, { CommandPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-bg-overlay-scrim)',
      zIndex: 100
    }
  }, React.createElement('div', {
    role: 'dialog',
    'aria-modal': true,
    'aria-label': title,
    className: 'ds-glass',
    style: {
      width: 420,
      maxWidth: '90%',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-glass-fill)',
      backdropFilter: 'blur(var(--blur-glass-lg)) saturate(var(--glass-saturation))',
      WebkitBackdropFilter: 'blur(var(--blur-glass-lg)) saturate(var(--glass-saturation))',
      border: '1px solid var(--color-glass-edge)',
      boxShadow: 'var(--shadow-float-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement('h2', {
    style: {
      margin: 0,
      fontSize: 'var(--text-subheading-size)',
      fontWeight: 700
    }
  }, title), React.createElement('div', {
    style: {
      color: 'var(--color-text-secondary)'
    }
  }, children), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 8
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Menu.jsx
try { (() => {
function Menu({
  open,
  items = [],
  anchorStyle
}) {
  if (!open) return null;
  return React.createElement('div', {
    role: 'menu',
    className: 'ds-glass',
    style: {
      position: 'absolute',
      ...anchorStyle,
      background: 'var(--color-glass-fill)',
      backdropFilter: 'blur(var(--blur-glass-md)) saturate(var(--glass-saturation))',
      WebkitBackdropFilter: 'blur(var(--blur-glass-md)) saturate(var(--glass-saturation))',
      border: '1px solid var(--color-glass-edge)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-float-md)',
      padding: 6,
      minWidth: 180,
      zIndex: 50
    }
  }, items.map(it => React.createElement('button', {
    key: it.label,
    role: 'menuitem',
    type: 'button',
    onClick: it.onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      padding: '9px 10px',
      border: 'none',
      background: 'none',
      textAlign: 'left',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontSize: '0.9rem',
      color: it.destructive ? 'var(--color-action-destructive-fg)' : 'var(--color-text-primary)'
    }
  }, it.icon, it.label)));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Popover.jsx
try { (() => {
function Popover({
  open,
  anchorStyle,
  children
}) {
  if (!open) return null;
  return React.createElement('div', {
    className: 'ds-glass',
    style: {
      position: 'absolute',
      ...anchorStyle,
      background: 'var(--color-glass-fill)',
      backdropFilter: 'blur(var(--blur-glass-md)) saturate(var(--glass-saturation))',
      WebkitBackdropFilter: 'blur(var(--blur-glass-md)) saturate(var(--glass-saturation))',
      border: '1px solid var(--color-glass-edge)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-float-md)',
      padding: 'var(--space-4)',
      zIndex: 50,
      minWidth: 220
    }
  }, children);
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Popover.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Sheet.jsx
try { (() => {
function Sheet({
  open,
  title,
  children,
  onClose
}) {
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: open ? 'var(--color-bg-overlay-scrim)' : 'transparent',
      pointerEvents: open ? 'auto' : 'none',
      transition: 'background var(--duration-standard) var(--ease-standard)',
      zIndex: 100
    }
  }, React.createElement('div', {
    className: 'ds-glass',
    style: {
      width: '100%',
      maxWidth: 480,
      borderTopLeftRadius: 'var(--radius-sheet)',
      borderTopRightRadius: 'var(--radius-sheet)',
      background: 'var(--color-glass-fill)',
      backdropFilter: 'blur(var(--blur-glass-lg)) saturate(var(--glass-saturation))',
      WebkitBackdropFilter: 'blur(var(--blur-glass-lg)) saturate(var(--glass-saturation))',
      border: '1px solid var(--color-glass-edge)',
      boxShadow: 'var(--shadow-float-lg)',
      padding: 'var(--space-4) var(--space-6) var(--space-6)',
      transform: open ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform var(--duration-slow) var(--ease-spring-soft)'
    }
  }, React.createElement('div', {
    style: {
      width: 36,
      height: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-border-strong)',
      margin: '0 auto 16px'
    }
  }), title && React.createElement('h2', {
    style: {
      margin: '0 0 12px',
      fontSize: 'var(--text-subheading-size)',
      fontWeight: 700
    }
  }, title), children));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--neutral-900)',
      color: 'var(--neutral-25)',
      fontSize: 'var(--text-meta-size)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-float-sm)',
      zIndex: 60
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/MobileAppMain.jsx
try { (() => {
const {
  BottomTabBar,
  MobileHeader,
  Button,
  TextField,
  Switch,
  Sheet,
  Spinner,
  EmptyState,
  Banner,
  SegmentedControl,
  Avatar,
  Tag,
  ListRow
} = window.LawrenceDesignSystem_a32cf5;
const {
  IOSDevice
} = window;
const HomeIcon = () => React.createElement('svg', {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2
}, React.createElement('path', {
  d: 'M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z'
}));
const SearchIcon = () => React.createElement('svg', {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2
}, React.createElement('circle', {
  cx: 11,
  cy: 11,
  r: 7
}), React.createElement('path', {
  d: 'M21 21l-4.3-4.3'
}));
const ProfileIcon = () => React.createElement('svg', {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2
}, React.createElement('circle', {
  cx: 12,
  cy: 8,
  r: 4
}), React.createElement('path', {
  d: 'M4 20c0-4 4-6 8-6s8 2 8 6'
}));
const TRIPS = [{
  name: 'Kyoto in autumn',
  status: 'Booked',
  days: 'Oct 12–19'
}, {
  name: 'Iceland ring road',
  status: 'Draft',
  days: 'Jun 3–14'
}, {
  name: 'Lisbon weekend',
  status: 'Booked',
  days: 'Sep 2–5'
}];
function Onboarding({
  onDone
}) {
  return React.createElement('div', {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 28px',
      gap: 16,
      background: 'var(--color-bg-canvas)'
    }
  }, React.createElement('div', {
    style: {
      width: 64,
      height: 64,
      borderRadius: 20,
      background: 'var(--color-action-primary-bg)'
    }
  }), React.createElement('h1', {
    style: {
      fontSize: '2rem',
      fontWeight: 700,
      margin: '12px 0 0',
      color: 'var(--color-text-primary)'
    }
  }, 'Plan trips, offline.'), React.createElement('p', {
    style: {
      color: 'var(--color-text-secondary)',
      margin: 0
    }
  }, 'Wayfare keeps your maps and plans ready even without signal.'), React.createElement(Button, {
    variant: 'primary',
    onClick: onDone
  }, 'Get started'));
}
function Home({
  onOpen,
  loading
}) {
  return React.createElement('div', {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement('div', {
    style: {
      padding: '20px 20px 8px'
    }
  }, React.createElement('h1', {
    style: {
      fontSize: '1.75rem',
      fontWeight: 700,
      margin: 0
    }
  }, 'Your trips')), React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 20px'
    }
  }, loading ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: 40
    }
  }, React.createElement(Spinner, null)) : TRIPS.map(t => React.createElement(ListRow, {
    key: t.name,
    title: t.name,
    subtitle: t.days,
    trailing: React.createElement(Tag, {
      tone: t.status === 'Booked' ? 'success' : 'neutral'
    }, t.status),
    onClick: () => onOpen(t)
  }))));
}
function Detail({
  trip,
  onBack
}) {
  return React.createElement('div', {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement(MobileHeader, {
    title: trip.name,
    onBack
  }), React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 20
    }
  }, React.createElement(Tag, {
    tone: trip.status === 'Booked' ? 'success' : 'neutral'
  }, trip.status), React.createElement('p', {
    style: {
      color: 'var(--color-text-secondary)',
      marginTop: 16
    }
  }, trip.days + '. Offline maps and itinerary sync automatically when you land.'), React.createElement(Banner, {
    tone: 'info',
    title: 'Maps downloaded',
    description: 'Available offline for this trip.'
  })));
}
function NewTripSheet({
  open,
  onClose
}) {
  return React.createElement(Sheet, {
    open,
    title: 'New trip',
    onClose
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement(TextField, {
    label: 'Destination',
    placeholder: 'Where to?'
  }), React.createElement(TextField, {
    label: 'Dates',
    placeholder: 'Add dates'
  }), React.createElement(Switch, {
    label: 'Download maps for offline use',
    checked: true
  }), React.createElement(Button, {
    variant: 'primary',
    onClick: onClose
  }, 'Create trip')));
}
function Search() {
  const [q, setQ] = React.useState('');
  return React.createElement('div', {
    style: {
      height: '100%',
      padding: 20
    }
  }, React.createElement('h1', {
    style: {
      fontSize: '1.5rem',
      fontWeight: 700,
      margin: '0 0 16px'
    }
  }, 'Search'), q ? React.createElement(EmptyState, {
    title: 'No destinations found',
    description: 'Try a different city or country.'
  }) : React.createElement('p', {
    style: {
      color: 'var(--color-text-tertiary)'
    }
  }, 'Type to search 40,000+ destinations.'));
}
function Profile({
  theme,
  onThemeChange
}) {
  return React.createElement('div', {
    style: {
      height: '100%',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, React.createElement(Avatar, {
    name: 'Lawrence Velasco',
    size: 72
  }), React.createElement('div', {
    style: {
      fontWeight: 700,
      fontSize: '1.1rem',
      color: 'var(--color-text-primary)'
    }
  }, 'Lawrence Velasco'), React.createElement(SegmentedControl, {
    options: [{
      value: 'light',
      label: 'Light'
    }, {
      value: 'dark',
      label: 'Dark'
    }],
    value: theme,
    onChange: onThemeChange
  }));
}
function MobileAppRoot() {
  const [step, setStep] = React.useState('onboarding');
  const [tab, setTab] = React.useState('Home');
  const [trip, setTrip] = React.useState(null);
  const [sheet, setSheet] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);
  let screen;
  if (step === 'onboarding') screen = React.createElement(Onboarding, {
    onDone: () => setStep('app')
  });else if (trip) screen = React.createElement(Detail, {
    trip,
    onBack: () => setTrip(null)
  });else if (tab === 'Home') screen = React.createElement(Home, {
    onOpen: setTrip,
    loading
  });else if (tab === 'Search') screen = React.createElement(Search);else screen = React.createElement(Profile, {
    theme,
    onThemeChange: setTheme
  });
  const showTabs = step === 'app' && !trip;
  const content = React.createElement('div', {
    'data-theme': theme,
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: 'var(--color-bg-canvas)',
      color: 'var(--color-text-primary)'
    }
  }, React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'hidden',
      paddingTop: 54,
      display: 'flex',
      flexDirection: 'column'
    }
  }, screen), showTabs && React.createElement(BottomTabBar, {
    tabs: [{
      label: 'Home',
      icon: React.createElement(HomeIcon)
    }, {
      label: 'Search',
      icon: React.createElement(SearchIcon)
    }, {
      label: 'Profile',
      icon: React.createElement(ProfileIcon)
    }],
    active: tab
  }), showTabs && tab === 'Home' && React.createElement('button', {
    onClick: () => setSheet(true),
    style: {
      position: 'absolute',
      right: 16,
      bottom: 80,
      width: 52,
      height: 52,
      borderRadius: 26,
      border: 'none',
      background: 'var(--color-action-primary-bg)',
      color: 'var(--color-action-primary-fg)',
      fontSize: 24,
      boxShadow: 'var(--shadow-float-md)'
    }
  }, '+'), React.createElement(NewTripSheet, {
    open: sheet,
    onClose: () => setSheet(false)
  }));
  return React.createElement(window.IOSDevice, {
    dark: theme === 'dark'
  }, content);
}
window.MobileApp = MobileAppRoot;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/MobileAppMain.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      "data-om-starter": "ios-frame",
      style: {
        width,
        height,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: dark ? '#000' : '#F2F2F7',
        boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
        fontFamily: '-apple-system, system-ui, sans-serif',
        WebkitFontSmoothing: 'antialiased'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 11,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 126,
        height: 37,
        borderRadius: 24,
        background: '#000',
        zIndex: 50
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement(IOSStatusBar, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
      title: title,
      dark: dark
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: 'auto'
      }
    }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
      dark: dark
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 8,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 139,
        height: 5,
        borderRadius: 100,
        background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
      }
    })))
  );
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/PortfolioApp.jsx
try { (() => {
function Nav({
  page,
  setPage
}) {
  const {
    WebHeader,
    Button
  } = window.LawrenceDesignSystem_a32cf5;
  return React.createElement(WebHeader, {
    maxWidth: 900,
    nav: ['Work', 'About', 'Contact'],
    active: page === 'home' ? 'Work' : page === 'about' ? 'About' : undefined,
    cta: React.createElement(Button, {
      size: 'sm',
      onClick: () => setPage('contact')
    }, 'Say hello')
  });
}
function Hero() {
  return React.createElement('section', {
    style: {
      padding: 'var(--space-24) var(--space-8) var(--space-16)',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--color-action-primary-bg)',
      marginBottom: 16
    }
  }, 'Lawrence Builds Apps'), React.createElement('h1', {
    style: {
      fontSize: 'var(--text-hero-size)',
      lineHeight: 'var(--text-hero-lh)',
      fontWeight: 'var(--text-hero-weight)',
      letterSpacing: 'var(--text-hero-tracking)',
      margin: '0 0 24px',
      color: 'var(--color-text-primary)'
    }
  }, 'Build things people actually use.'), React.createElement('p', {
    style: {
      fontSize: 'var(--text-body-lg-size)',
      lineHeight: 'var(--text-body-lg-lh)',
      color: 'var(--color-text-secondary)',
      maxWidth: '60ch',
      margin: 0
    }
  }, 'I design and ship products end-to-end — from the first sketch to the App Store. Currently focused on native-feeling mobile apps and calm, fast web tools.'));
}
function ProjectList({
  onOpen
}) {
  const {
    SectionHeading,
    ListRow,
    Tag,
    Avatar
  } = window.LawrenceDesignSystem_a32cf5;
  const projects = [{
    name: 'Field Notes',
    desc: 'React Native journaling app for hikers',
    tag: 'Featured',
    year: '2026'
  }, {
    name: 'Lawrence Builds Apps',
    desc: 'This very portfolio, built with the Lawrence Design System',
    tag: 'Live',
    year: '2026'
  }, {
    name: 'Tidepool',
    desc: 'Responsive web dashboard for freelance invoicing',
    tag: 'Live',
    year: '2025'
  }, {
    name: 'Wayfare',
    desc: 'iOS trip-planning app with offline maps',
    tag: 'Case study',
    year: '2024'
  }];
  return React.createElement('section', {
    style: {
      padding: '0 var(--space-8) var(--space-16)',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: 'Selected work',
    title: 'Recent projects'
  }), projects.map(p => React.createElement(ListRow, {
    key: p.name,
    title: p.name,
    subtitle: p.desc + ' · ' + p.year,
    leading: React.createElement(Avatar, {
      name: p.name,
      size: 44
    }),
    trailing: React.createElement(Tag, {
      tone: p.tag === 'Featured' ? 'accent' : p.tag === 'Live' ? 'success' : 'neutral'
    }, p.tag),
    onClick: () => onOpen(p)
  })));
}
function Skills() {
  const {
    SectionHeading
  } = window.LawrenceDesignSystem_a32cf5;
  const groups = [{
    title: 'Product design',
    items: ['UX flows', 'Design systems', 'Prototyping']
  }, {
    title: 'Engineering',
    items: ['React / React Native', 'TypeScript', 'Swift']
  }, {
    title: 'Craft',
    items: ['Motion design', 'Accessibility', 'Copywriting']
  }];
  return React.createElement('section', {
    style: {
      padding: '0 var(--space-8) var(--space-16)',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: 'Capabilities',
    title: 'What I bring'
  }), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-8)'
    }
  }, groups.map(g => React.createElement('div', {
    key: g.title
  }, React.createElement('h3', {
    style: {
      fontSize: 'var(--text-subheading-size)',
      margin: '0 0 10px'
    }
  }, g.title), g.items.map(it => React.createElement('div', {
    key: it,
    style: {
      color: 'var(--color-text-secondary)',
      padding: '4px 0'
    }
  }, it))))));
}
function Timeline() {
  const {
    SectionHeading
  } = window.LawrenceDesignSystem_a32cf5;
  const rows = [{
    y: '2024–now',
    t: 'Independent · Product design + engineering'
  }, {
    y: '2021–2024',
    t: 'Senior Product Designer, mobile-first startup'
  }, {
    y: '2019–2021',
    t: 'Frontend Engineer, design systems team'
  }];
  return React.createElement('section', {
    style: {
      padding: '0 var(--space-8) var(--space-16)',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: 'Path',
    title: 'Work history'
  }), rows.map(r => React.createElement('div', {
    key: r.y,
    style: {
      display: 'flex',
      gap: 24,
      padding: '14px 0',
      borderBottom: '1px solid var(--color-border-hairline)'
    }
  }, React.createElement('div', {
    style: {
      width: 120,
      flexShrink: 0,
      color: 'var(--color-text-tertiary)',
      fontSize: '0.9rem'
    }
  }, r.y), React.createElement('div', {
    style: {
      fontWeight: 500
    }
  }, r.t))));
}
function Contact() {
  const {
    SectionHeading,
    Button,
    TextField,
    TextArea
  } = window.LawrenceDesignSystem_a32cf5;
  return React.createElement('section', {
    style: {
      padding: '0 var(--space-8) var(--space-24)',
      maxWidth: 600,
      margin: '0 auto'
    }
  }, React.createElement(SectionHeading, {
    eyebrow: 'Get in touch',
    title: "Let's build something.",
    description: "That email doesn't look right? Don't worry — I'll reply either way."
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement(TextField, {
    label: 'Email',
    placeholder: 'you@example.com'
  }), React.createElement(TextArea, {
    label: 'Message',
    rows: 4,
    placeholder: 'Tell me about your project'
  }), React.createElement(Button, {
    variant: 'primary'
  }, 'Send message')));
}
function ProjectDetail({
  project,
  onBack
}) {
  const {
    Breadcrumbs,
    Tag,
    CodeBlock,
    DescriptionList,
    Button
  } = window.LawrenceDesignSystem_a32cf5;
  return React.createElement('section', {
    style: {
      padding: 'var(--space-8)',
      maxWidth: 800,
      margin: '0 auto'
    }
  }, React.createElement(Breadcrumbs, {
    items: ['Work', project.name]
  }), React.createElement('div', {
    style: {
      height: 24
    }
  }), React.createElement('h1', {
    style: {
      fontSize: 'var(--text-page-title-size)',
      fontWeight: 'var(--text-page-title-weight)',
      margin: '0 0 8px'
    }
  }, project.name), React.createElement(Tag, {
    tone: 'accent'
  }, project.tag), React.createElement('p', {
    style: {
      fontSize: 'var(--text-body-lg-size)',
      color: 'var(--color-text-secondary)',
      maxWidth: '65ch',
      margin: '20px 0'
    }
  }, project.desc + '. A full case study would walk through the problem, constraints, and outcome here.'), React.createElement(DescriptionList, {
    items: [{
      term: 'Role',
      value: 'Design + Engineering'
    }, {
      term: 'Year',
      value: project.year
    }, {
      term: 'Stack',
      value: 'React Native, TypeScript'
    }]
  }), React.createElement('div', {
    style: {
      height: 24
    }
  }), React.createElement(CodeBlock, {
    language: 'tsx',
    code: 'export function TripCard({trip}) {\n  return <Card>{trip.title}</Card>\n}'
  }), React.createElement('div', {
    style: {
      height: 24
    }
  }), React.createElement(Button, {
    variant: 'quiet',
    onClick: onBack
  }, '← Back to work'));
}
function PortfolioApp() {
  const [page, setPage] = React.useState('home');
  const [project, setProject] = React.useState(null);
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      background: 'var(--color-bg-canvas)'
    }
  }, React.createElement(Nav, {
    page,
    setPage
  }), project ? React.createElement(ProjectDetail, {
    project,
    onBack: () => setProject(null)
  }) : page === 'contact' ? React.createElement(Contact) : React.createElement(React.Fragment, null, React.createElement(Hero), React.createElement(ProjectList, {
    onOpen: setProject
  }), React.createElement(Skills), React.createElement(Timeline), React.createElement(Contact)));
}
window.PortfolioApp = PortfolioApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/PortfolioApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webapp/WebAppMain.jsx
try { (() => {
function Shell({
  children
}) {
  const {
    SideNav,
    SearchField,
    IconButton
  } = window.LawrenceDesignSystem_a32cf5;
  return React.createElement('div', {
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--color-bg-canvas)'
    }
  }, React.createElement(SideNav, {
    sections: [{
      title: 'Workspace',
      items: ['Projects', 'Clients', 'Invoices']
    }, {
      title: 'Account',
      items: ['Settings']
    }],
    active: 'Projects'
  }), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, children));
}
function TopBar({
  onSearch,
  q,
  onNew
}) {
  const {
    SearchField,
    Button
  } = window.LawrenceDesignSystem_a32cf5;
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 32px',
      borderBottom: '1px solid var(--color-border-hairline)'
    }
  }, React.createElement('h1', {
    style: {
      fontSize: 'var(--text-page-title-size)',
      fontWeight: 'var(--text-page-title-weight)',
      margin: 0
    }
  }, 'Projects'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, React.createElement(SearchField, {
    placeholder: 'Search projects',
    value: q,
    onChange: e => onSearch(e.target.value)
  }), React.createElement(Button, {
    size: 'sm',
    onClick: onNew
  }, 'New project')));
}
const ROWS = [{
  Project: 'Aster Rebrand',
  Client: 'Aster Co.',
  Status: 'Live',
  Updated: '2h ago'
}, {
  Project: 'Northwind Site',
  Client: 'Northwind',
  Status: 'Draft',
  Updated: '1d ago'
}, {
  Project: 'Fieldkit App',
  Client: 'Fieldkit',
  Status: 'Live',
  Updated: '3d ago'
}, {
  Project: 'Loop Dashboard',
  Client: 'Loop Inc.',
  Status: 'Review',
  Updated: '5d ago'
}];
function ProjectsList({
  onOpen,
  q,
  tab
}) {
  const {
    DataTable,
    Tag,
    EmptyState,
    Button,
    Tabs
  } = window.LawrenceDesignSystem_a32cf5;
  const filtered = ROWS.filter(r => r.Project.toLowerCase().includes((q || '').toLowerCase()) && (tab === 'All' || r.Status === tab));
  return React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '0 32px 32px'
    }
  }, React.createElement(Tabs, {
    items: ['All', 'Live', 'Draft', 'Review'],
    active: tab,
    onChange: window.__setTab
  }), React.createElement('div', {
    style: {
      height: 16
    }
  }), filtered.length === 0 ? React.createElement(EmptyState, {
    title: 'No projects match',
    description: 'Try a different search or filter.',
    action: React.createElement(Button, {
      variant: 'quiet'
    }, 'Clear filters')
  }) : React.createElement(DataTable, {
    columns: ['Project', 'Client', 'Status', 'Updated'],
    rows: filtered.map(r => ({
      ...r,
      Status: React.createElement(Tag, {
        tone: r.Status === 'Live' ? 'success' : r.Status === 'Draft' ? 'neutral' : 'warning'
      }, r.Status)
    }))
  }));
}
function DetailSheet({
  open,
  onClose
}) {
  const {
    Sheet,
    TextField,
    Select,
    Button,
    Banner
  } = window.LawrenceDesignSystem_a32cf5;
  return React.createElement(Sheet, {
    open,
    title: 'Edit project',
    onClose
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement(Banner, {
    tone: 'success',
    title: 'Saved automatically'
  }), React.createElement(TextField, {
    label: 'Project name',
    value: 'Aster Rebrand'
  }), React.createElement(Select, {
    label: 'Status',
    options: [{
      value: 'live',
      label: 'Live'
    }, {
      value: 'draft',
      label: 'Draft'
    }]
  }), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, React.createElement(Button, {
    variant: 'quiet',
    onClick: onClose
  }, 'Close'), React.createElement(Button, {
    variant: 'primary',
    onClick: onClose
  }, 'Save'))));
}
function WebAppRoot() {
  const [q, setQ] = React.useState('');
  const [tab, setTab] = React.useState('All');
  const [sheetOpen, setSheetOpen] = React.useState(false);
  window.__setTab = setTab;
  return React.createElement(Shell, null, React.createElement(TopBar, {
    q,
    onSearch: setQ,
    onNew: () => setSheetOpen(true)
  }), React.createElement(ProjectsList, {
    q,
    tab,
    onOpen: () => setSheetOpen(true)
  }), React.createElement(DetailSheet, {
    open: sheetOpen,
    onClose: () => setSheetOpen(false)
  }));
}
window.WebAppShell = WebAppRoot;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/WebAppMain.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FloatingAction = __ds_scope.FloatingAction;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DescriptionList = __ds_scope.DescriptionList;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.InlineStatus = __ds_scope.InlineStatus;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormGroup = __ds_scope.FormGroup;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.BottomTabBar = __ds_scope.BottomTabBar;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.MobileHeader = __ds_scope.MobileHeader;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.WebHeader = __ds_scope.WebHeader;

__ds_ns.CommandPalette = __ds_scope.CommandPalette;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
