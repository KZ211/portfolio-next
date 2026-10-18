// The AJ mark redrawn as SVG. The black strokes use currentColor so the
// logo follows the theme; the three bars keep their brand colours.
export default function Logo({ className = '', title = 'Alexis Jares' }) {
  return (
    <svg viewBox="0 0 1008 726" className={className} role="img" aria-label={title}>
      <path fill="currentColor" d="M322 14H358V90L82 715H5Z" />
      <path fill="var(--brand-blue)" d="M358 14H396L515 274H441L358 90Z" />
      <circle fill="currentColor" cx="356" cy="368" r="52" />
      <rect fill="var(--brand-green)" x="320" y="538" width="71" height="188" />
      <rect fill="var(--brand-red)" x="668" y="14" width="330" height="64" />
      <path
        fill="currentColor"
        d="M925 78H998V505C998 640 905 718 790 718C705 718 640 680 598 610L512 428H588L665 595C695 640 740 655 790 655C870 655 925 600 925 505Z"
      />
    </svg>
  );
}
