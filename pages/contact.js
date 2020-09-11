import Layout from '../components/master/layout'

export default function Contact() {
  return (
    <Layout title="Contact us">
      <div>Contact {process.env.API_URL}</div>
    </Layout>
  )
}