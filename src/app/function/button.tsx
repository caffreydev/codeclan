const Button = ({ children, style }: any) => {
  return <button className={`${style && style} inline rounded-lg border px-3 py-2 text-sm`}>{children}</button>;
};

export default Button;
