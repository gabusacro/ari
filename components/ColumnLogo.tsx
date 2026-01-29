/** Classical column / temple icon for Isla Capital branding */
export default function ColumnLogo({
  className = "",
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Pedestal */}
      <path d="M4 28h24v2H4z" fill="currentColor" />
      {/* Column base */}
      <path d="M8 24h16v4H8z" fill="currentColor" />
      {/* Column shaft */}
      <rect x="10" y="8" width="12" height="16" fill="currentColor" />
      {/* Capital (top) */}
      <path d="M6 6h20v4H6z" fill="currentColor" />
      <path d="M4 4h24v2H4z" fill="currentColor" />
    </svg>
  );
}
