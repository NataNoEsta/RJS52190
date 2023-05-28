import './footer.scss'

export const Footer = () => {
  return (
    <footer
      className="container_footer container min-w-full bg-blue-300 overflow-hidden"
      id="foot"
    >
      <section className="main_row flex flex-wrap bg-blue-300">
        <article className="footer_column flex flex-col col-span-3 p-10">
          <ul>
            <li>articulo</li>
            <li>articulo</li>
            <li>articulo</li>
          </ul>
        </article>
        <article className="footer_column flex flex-col col-span-3 p-10">
          <ul>
            <li>articulo</li>
            <li>articulo</li>
            <li>articulo</li>
          </ul>
        </article>
        <article className="footer_column flex flex-col col-span-3 p-10">
          <ul>
            <li>articulo</li>
            <li>articulo</li>
            <li>articulo</li>
          </ul>
        </article>
      </section>
    </footer>
  )
}
