import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const contribs = [
  'https://avatars.githubusercontent.com/u/39712525?s=96&v=4',
  'https://avatars.githubusercontent.com/u/67555849?s=96&v=4',
  'https://avatars.githubusercontent.com/u/62768034?s=96&v=4',
  'https://avatars.githubusercontent.com/u/100293881?s=96&v=4',
  'https://avatars.githubusercontent.com/u/98928629?s=96&v=4',
  'https://avatars.githubusercontent.com/u/69852751?s=96&v=4',
  'https://avatars.githubusercontent.com/u/100098755?s=96&v=4',
  'https://avatars.githubusercontent.com/u/57506257?s=96&v=4',
  'https://avatars.githubusercontent.com/u/100294117?s=96&v=4',
  'https://avatars.githubusercontent.com/u/112044620?s=96&v=4',
  'https://avatars.githubusercontent.com/u/100283966?s=96&v=4',
  'https://avatars.githubusercontent.com/u/56888067?s=96&v=4',
  'https://avatars.githubusercontent.com/u/89698942?s=96&v=4',
  'https://avatars.githubusercontent.com/u/100294107?s=96&v=4',
  'https://avatars.githubusercontent.com/u/58307012?s=96&v=4',
  'https://avatars.githubusercontent.com/u/93823300?s=96&v=4'
]

function SprintOne() {
  return (
    <div className={styles.grid}>
      <div className={`${styles.thirteen} ${styles.A}`}>
        <h1 className={inter.className}>+500 <Image src="/gh.svg" alt="Gh logo" width={30} height={30} /></h1>
        <h3 className={inter.className}>Contribuições em 10 repositórios</h3>
      </div>
      <div className={`${styles.thirteen} ${styles.B}`}>
        <Image src="vitest.svg" alt="vitest logo" style={{ filter: 'drop-shadow(0 0 0.5rem yellow)' }} width={50} height={50} />
        <h1 className={inter.className}>Sistema de testes e controle de qualidade com Integração Contínua</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.C}`}>
        <Image src="lock.svg" alt="lock icon" width={45} height={45} />
        <h1 className={inter.className}>Autenticação unificada entre plataformas</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.D}`}>
        <Image src="folders.svg" alt="lock icon" width={45} height={45} />
        <h1 className={inter.className}>Armazenamento, compressão e otimização de arquivos</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.E}`}>
        <h2 className={`${inter.className}`} style={{ marginRight: '3rem' }}>
          Contribuidores
        </h2>
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', maxWidth: '60%' }}>
          {contribs.map(c => <Image key={c} src={c} alt="contrib image" width={40} height={40} style={{ filter: 'drop-shadow(0 0 0.15rem blue)', borderRadius: '9999px' }} />)}
        </div>
      </div>
      <div className={`${styles.F} ${styles.fourteen}`}>
        <Image src="einer-only.svg" alt="Einer" width={325} height={175} />
      </div>
      <div className={`${styles.thirteen} ${styles.G}`}>
        <Image src="prototype.svg" alt="rust icon" width={350} height={250} style={{ filter: 'drop-shadow(0 0 0.1rem white)', paddingBottom: '1rem' }} />
        <h1 className={inter.className}>Prototipagem do App</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.H}`}>
        <Image src="terminal.svg" alt="terminal icon" width={45} height={45} />
        <h1 className={inter.className}>Serviço de Log tracking centralizado</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.I}`}>
        <div>
          <Image src="rust.svg" alt="rust icon" width={65} height={65} />
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" style={{ filter: 'drop-shadow(0 0 0.3rem blue)' }} alt="Ts logo" width={45} height={45} />
        </div>
        <h1 className={inter.className}>Einer Toolchain + SDKs para desenvolvedores</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.J}`}>
        <div>
          <Image src="vsdia.svg" alt="vsdia icon" width={45} height={45} style={{ filter: 'drop-shadow(0 0 0.3rem green)' }} />
          <Image src="planner.svg" alt="planner icon" width={45} height={45} style={{ filter: 'drop-shadow(0 0 0.3rem dodgerblue)' }} />
          <Image src="borum.svg" alt="borum icon" width={45} height={45} style={{ filter: 'drop-shadow(0 0 0.3rem green)' }} />
        </div>
        <h1 className={inter.className}>Versão beta em breve</h1>
      </div>
    </div>
  )
}

function SprintTwo() {
  return (
    <div className={styles.grid2}>
      <div className={`${styles.thirteen} ${styles.A}`}>
        <h1 className={inter.className} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" style={{ filter: 'drop-shadow(0 0 0.3rem blue)' }} alt="Ts logo" width={30} height={30} />
          <span>+18k</span> 
          <Image src="/gh.svg" alt="Gh logo" width={30} height={30} />
        </h1>
        <h3 className={inter.className}>Linhas de código aprovadas por review para produção</h3>
      </div>
      <div className={`${styles.F} ${styles.fourteen}`}>
        <Image src="einer-only.svg" alt="Einer" width={325} height={175} />
      </div>
      <div className={`${styles.thirteen} ${styles.C}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1rem' }}>
          <Image style={{ filter: 'drop-shadow(0 0 0.1rem yellow)'}} src="/linux-logo.png" alt="linux logo" width={70} height={70}/>
          <Image style={{ filter: 'drop-shadow(0 0 0.3rem blue)' }} src="/win-logo.png" alt="windows icon" width={55} height={55} />
        </div>
        <h1 className={inter.className}>EWCL</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.D}`}>
        <Image src="zap.svg" alt="zap icon" width={45} height={45} />
        <h1 className={inter.className}>Interações com feedback em tempo real</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.E}`}>
        <h1 className={`${inter.className}`} style={{ marginRight: '2rem', textAlign: 'center' }}>
          Plataforma de deploy
        </h1>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', maxWidth: '60%', marginLeft: '4rem' }}>
          <Image src="/gh.svg" alt="Gh logo" width={60} height={60} />
          <Image src="/docker.png" alt="docker logo" width={200} height={110} style={{ filter: 'drop-shadow(0 0 0.15rem blue)' }} />
          <Image src="/caprover.png" alt="caprover logo" width={75} height={75} style={{ filter: 'drop-shadow(0 0 0.15rem orange)' }} />
        </div>
      </div>
      <div className={`${styles.thirteen} ${styles.B2}`}>
        <Image src="brush.svg" alt="brush icon" width={45} height={45} />
        <br />
        <h1 className={inter.className}>Personalização de perfil</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.G}`}>
        <Image src="/note_adm.svg" alt="rust icon" width={350} height={350} style={{ filter: 'drop-shadow(0 0 0.1rem white)', paddingBottom: '1rem' }} />
        <h1 className={inter.className}>Painel de Administração</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.H}`}>
        <Image src="send.svg" alt="terminal icon" width={45} height={45} />
        <h1 className={inter.className}>Serviço de notificações e mailing</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.I}`}>
        <Image src="file-text.svg" alt="file text icon" width={50} height={50} />
        <h1 className={inter.className}>Documentação técnica e para usuários</h1>
      </div>
      <div className={`${styles.thirteen} ${styles.J}`}>
        <div>
          <Image src="vsdia.svg" alt="vsdia icon" width={45} height={45} style={{ filter: 'drop-shadow(0 0 0.3rem green)' }} />
          <Image src="planner.svg" alt="planner icon" width={45} height={45} style={{ filter: 'drop-shadow(0 0 0.3rem dodgerblue)' }} />
          <Image src="borum.svg" alt="borum icon" width={45} height={45} style={{ filter: 'drop-shadow(0 0 0.3rem green)' }} />
        </div>
        <h1 className={inter.className}>Início dos testes <span style={{ filter: 'drop-shadow(0 0 0.3rem dodgerblue)', fontSize: '1.5rem' }}>Versão Beta</span></h1>
      </div>
    </div>
  )
}

const sprints = [
  <SprintOne key={1} />,
  <SprintTwo key={2}/>
]

export default function Home() {
  const [selectedSprint, setSelectedSprint] = useState(sprints[0]);

  return (
    <>
      <Head>
        <title>Einer Report</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles.center}`}>
        <div className={styles.description}>
          <div>
            <Image
              src="/einer.svg"
              alt="Einer Logo"
              className={`${styles.vercelLogo}`}
              width={500}
              height={40}
              priority
            />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80vw' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {sprints.map((_, idx) => (
              <h1 
                key={idx} 
                className={`${inter.className} ${styles.SprintReport} ${sprints.indexOf(selectedSprint) == idx ? '' : styles.NotSelectedSprintReport}`}
                onClick={() => {
                  setSelectedSprint(sprints[idx])
                }} 
              >
                Sprint {idx+1}
              </h1>
            ))}
          </div>
          <h1 style={{ marginRight: '-2.5rem'}} className={`${inter.className} ${styles.SprintReport}`}>
            Sprint Report
          </h1>
        </div>
        {selectedSprint}
      </main>
    </>
  )
}
