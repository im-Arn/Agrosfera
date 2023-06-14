const ContentZone = ({ children, className }) => {
  return (
    <div className={`w-[87.3%] mx-auto max-w-[1300px] ${className}`}>{children}</div>
  );
};

export default ContentZone;
