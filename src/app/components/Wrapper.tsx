type WrapperProps = {
  className: string;
  children: any;
};

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <div className={`mx-auto w-full max-w-[87rem] px-4 sm:px-6 md:px-8 ${className}`}>{children}</div>;
};

export default Wrapper;
