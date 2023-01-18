import { theme } from '../../src/theme';

function DoubleRight({ ...restProps }: React.SVGProps<SVGSVGElement>) {
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
        d="M13 17L18 12L13 7"
        stroke={theme.palette.gray300}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17L11 12L6 7"
        stroke={theme.palette.gray300}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default DoubleRight;
