/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/tHQtXsoUkVF
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"

export function home() {
  return (
    <div key="1" className="min-h-screen bg-gray-800 text-white">
      <nav className="flex justify-between items-center p-4 bg-[#1e293b]">
        <h1 className="text-xl">ft_lanches | Nutrindo Mentes</h1>
        <Button className="text-white bg-blue-600 hover:bg-blue-700">Login</Button>
      </nav>
      <div className="flex">
        <div className="w-1/2">
          <img
            alt="Space image"
            className="object-cover h-full w-full"
            height="622"
            src="/placeholder.svg"
            style={{
              aspectRatio: "683/622",
              objectFit: "cover",
            }}
            width="683"
          />
        </div>
        <Card className="w-1/2">
          <CardHeader className="bg-gray-800 text-white">
            <CardTitle>Ajude-nos a garantir que todos os cadetes da 42SP possam se alimentar adequadamente!</CardTitle>
            <CardDescription>
              A 42 São Paulo é uma escola de engenharia de software gratuita e presencial, comprometida em promover
              diversidade no cenário tecnológico. No entanto, identificamos que alguns cadetes enfrentam dificuldades
              financeiras para fazer todas as refeições necessárias durante o dia no campus. Para solucionar esse
              problema, um grupo de cadetes decidiu agir! A Carol (@anacar03) estabeleceu uma parceria com um
              restaurante próximo a 42SP onde os participantes do programa ft_lanches poderão desfrutar das refeições
              oferecidas. É aqui que você entra! Ao apoiar nosso projeto, você contribuirá para garantir que todos os
              cadetes tenham acesso às suas refeições diárias. Com sua ajuda, poderemos atender a quantidade necessária
              de alunos e fornecer transparência total sobre como os fundos arrecadados são utilizados. Venha fazer
              parte dessa campanha e faça a diferença na vida dos nossos cadetes! Juntos podemos fortalecer essa
              comunidade estudantil incrível! Slogan: "Alimente o conhecimento - Apoie nossos Cadetes!"
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Link className="text-blue-600 hover:text-blue-700" href="#">
              Saiba mais
            </Link>
            <Button>Apoie agora</Button>
          </CardFooter>
        </Card>
      </div>
      <footer className="p-4 bg-[#1e293b] text-center">
        <Link className="text-blue-600 hover:text-blue-700" href="#">
          Quer saber mais sobre a 42 São Paulo?
        </Link>
      </footer>
    </div>
  )
}
