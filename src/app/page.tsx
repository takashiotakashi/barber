import Image from "next/image"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        {/* TEXTO */}
        <h2 className="text-x1 font-bold">Olá, Carlos!</h2>
        <p>Segunda-feira, 05 de Agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com Barber"
            src="/banner-01.png"
            fill
            className="rounded-x1 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
