import Layout from '../components/Layout'
import utilStyles from '../styles/Utils.module.css'

export default function Home() {
  return (
    <Layout
      title="Home | NextJS"
      description="Esta e s la descripcion del home"
      home
    >
      <section className={utilStyles.headingMd}>
        <p>Tu propia introducción</p>
        <p>
          Este es un simple website - puedes construir uno similar usando NextJS
        </p>
      </section>
    </Layout>
  )
}
