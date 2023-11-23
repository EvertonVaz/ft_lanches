import logo from './assets/ft_lanches.jpg'
import Head from 'next/head'
import Image from 'next/image'

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex justify-between items-center p-4">
        <div>
          <h1 className="text-lg font-bold">ft_lanches | Food for Thought: Nutrindo Mentes, Empoderando Futuros!</h1>
        </div>
        <div>
          {/* Botão de login */}
          <a href="/cadetes" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Formulario cadetes</a>
        </div>
      </nav>
    </header>
  )
}

function Main() {
  return (
    <main className="flex flex-col md:flex-row justify-start mt-8 md:mt-12">
      <div className='className="left flex-grow w-full md:w-[70%] relative'>
        <Image src={logo} alt="ft_lanches" width={1200} height={300} className="rounded" />
      </div>
      <div className="right flex-shrink">
        <div className="card shadow-md rounded p-6 md:p-8 pt-6 md:pt-8 mr-2">
          <h2 className="text-xl font-bold mb-4">Campanha no</h2>
          <p className="text-gray-600 mb-4">Card Description</p>
          <a href='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Doações</a>
        </div>
      </div>
    </main>
  )
}


function Article() {
  return (
    <article className="mt-8 bg-gray-800 text-white p-8">
      <h3 className="text-gray-300">
        Ajude-nos a garantir que todos os cadetes da 42SP possam se alimentar adequadamente!

        A 42 São Paulo é uma escola de engenharia de software gratuita e presencial, comprometida em promover diversidade no cenário tecnológico. No entanto, identificamos que alguns cadetes enfrentam dificuldades financeiras para fazer todas as refeições necessárias durante o dia no campus.

        Para solucionar esse problema, um grupo de cadetes decidiu agir! A Carol (@anacaro3) estabeleceu uma parceria com um restaurante próximo à 42SP onde os participantes do programa ft_lanches poderão desfrutar das refeições oferecidas. E é aqui que você entra!

        Ao apoiar nosso projeto, você contribuirá para garantir que todos os cadetes tenham acesso às suas refeições diárias. Com sua ajuda, poderemos atender a quantidade necessária de alunos e fornecer transparência total sobre como os fundos arrecadados são utilizados.

        Venha fazer parte dessa campanha e faça a diferença na vida dos nossos cadetes! Juntos podemos fortalecer essa comunidade estudantil incrível!

        Slogan: "Alimente o conhecimento - Apoie nossos Cadetes!"
      </h3>
  </article>
  )
}

export default function Page() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-8 pt-10">
      <Head>
        <title>Ft Lanches | Food for Thought: Nutrindo Mentes, Empoderando Futuros!</title>
      </Head>

      <Header />

      <Main />

      <Article />
    </div>
  )
}
