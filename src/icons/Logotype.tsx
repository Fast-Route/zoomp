interface LogotypeProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

function Logotype({ className, width, height }: LogotypeProps) {
  return (
    <svg 
      width={width || "auto"}
      height={height || "auto"}
      viewBox="0 0 122 73" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M0.897217 6.64441L96.353 0.235088L67.968 52.6556L121.534 65.4746L26.0783 72.3417L54.0052 20.6079L0.897217 6.64441Z" 
        fill="#6D28D9"
        className={className}
      />
    </svg>
  );
}

export default Logotype;