const Contenedor = ({ children }) => {
  return (
    <section
      className="container bg-slate-900 p-4 m-auto flex flex-row flex-wrap justify-center max-w-6xl"
      style={{ color: 'white' }}
    >
      {children}
    </section>
  )
}
export default Contenedor
