import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import logoImg from './assets/ft_lanches.jpg'

export default function Home() {
  return (
    <div className={styles.description}>
      <Head>
          <title>ft_lanches | Food for Thought: Nutrindo Mentes, Empoderando Futuros!</title>
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            src={logoImg}
            width={750}
            height={410}
            alt="logo da campanha"
          />
        </div>
        <div>
          <h1 className={styles.h1}>Ajude-nos a garantir que todos os cadetes da 42 São Paulo possam se alimentar adequadamente!</h1>
        </div>
      </main>
    </div>
  )
}
