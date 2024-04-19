const Error = ({children}:{children:string}) => {
  return (
    <p className="error">{children}</p>
  )
}

export default Error