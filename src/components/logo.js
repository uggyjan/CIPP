import PropTypes from "prop-types";

export const Logo = (props) => {
  return (
    <img
      src="https://i.imgur.com/64xD6Iv.png" 
      alt="Logo"
      height="40px" 
      {...props} 
    />
  );
};

Logo.propTypes = {
  color: PropTypes.oneOf(["black", "primary", "white"]),
};
