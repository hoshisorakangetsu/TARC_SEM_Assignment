export default function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      focusable="false"
      className={className}
    >
      <g transform="translate(9.7,12) rotate(45)">
        <path d="M-4.2 0 L4.2 0" strokeWidth="2"></path>
      </g>
      <g transform="translate(14.3,12) rotate(-45)">
        <path d="M-4.2 0 L4.2 0" strokeWidth="2"></path>
      </g>
    </svg>
  );
}
