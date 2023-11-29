import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '../components/Button'
import Image from 'next/image'

const Home: NextPage = () => {
  const { data, status } = useSession()

  return (
    <div className="h-full min-h-screen w-screen bg-gray-900">
      <header className="flex w-screen items-center justify-between bg-slate-700 px-8 py-4">
        <span className="text-xl font-bold">ft_lanches | Nutrindo Mentes</span>

        {status === 'authenticated' ? (
          <div className="flex items-center gap-4">
            <span>
              Olá <strong>{data.user?.name}</strong>
            </span>
            <div className="h-10 w-0.5 bg-white" />
            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        ) : (
          <Button onClick={() => signIn('42-school')}>Login</Button>
        )}
      </header>
      <main className="mx-auto flex max-w-4xl flex-col justify-center">
        <Image
          className="w-full"
          src="/ft_lanches.jpg"
          width={800}
          height={400}
          alt="ft_lanches"
        />
        <div className="bg-slate-700 px-6 py-4">
          <p className="text-lg">
            Ajude-nos a garantir que todos os cadetes da 42SP possam se
            alimentar adequadamente! A 42 São Paulo é uma escola de engenharia
            de software gratuita e presencial, comprometida em promover
            diversidade no cenário tecnológico. No entanto, identificamos que
            alguns cadetes enfrentam dificuldades financeiras para fazer todas
            as refeições necessárias durante o dia no campus. Para solucionar
            esse problema, um grupo de cadetes decidiu agir! A Carol (@anacaro3)
            estabeleceu uma parceria com um restaurante próximo à 42SP onde os
            participantes do programa ft_lanches poderão desfrutar das refeições
            oferecidas. E é aqui que você entra! Ao apoiar nosso projeto, você
            contribuirá para garantir que todos os cadetes tenham acesso às suas
            refeições diárias. Com sua ajuda, poderemos atender a quantidade
            necessária de alunos e fornecer transparência total sobre como os
            fundos arrecadados são utilizados. Venha fazer parte dessa campanha
            e faça a diferença na vida dos nossos cadetes! Juntos podemos
            fortalecer essa comunidade estudantil incrível! Slogan:
            &quot;Alimente o conhecimento - Apoie nossos Cadetes!&quot;
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
