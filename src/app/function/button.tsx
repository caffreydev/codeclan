const Button = ({children, style}: any) => {
  return (
    <button className={`${style && style} inline text-sm px-3 py-2 border rounded-lg`}>
      {children}
    </button>
  )
}

export default Button;