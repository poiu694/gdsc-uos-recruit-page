import { theme } from '../../src/theme';

const Up = ({ ...restProps }) => {
  return (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M20.9864 15L14.2262 9L7.46606 15"
        stroke={theme.palette.gray300}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Up;
