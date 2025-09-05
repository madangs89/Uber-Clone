
const LoadingTailwind = ({ className = "", label = "Loading..." }) => {
  return (
    <div
      className={`inline-flex items-center justify-center text-current ${className}`}
      role="status"
      aria-label={label}
    >
      <svg
        viewBox="0 0 50 50"
        className="block w-[1em] h-[1em] animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          className="stroke-[rgba(0,0,0,0.12)]"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M45 25a20 20 0 0 1-20 20"
          className="stroke-current"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
};

export default LoadingTailwind;
