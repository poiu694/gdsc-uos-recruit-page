import { theme } from '../../theme';

function DoubleLeft({ ...restProps }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M11 17L6 12L11 7"
        stroke={theme.palette.gray100}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 17L13 12L18 7"
        stroke={theme.palette.gray100}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default DoubleLeft;
