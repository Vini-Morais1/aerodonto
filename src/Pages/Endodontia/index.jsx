import CardEndodontia from "../../Components/CardEndodontia";

const Endodontia = () => {
  return (
    <>
      <main className="dark:text-gray-100 dark:bg-zinc-900 ">
        <div className="mx-auto p-6 flex flex-col items-center lg:w-[800px] xl:[w-1000px] gap-4">
          <h1 className="text-3xl md:text-6xl md:mb-4 font-bold">
            Endodontia: Tudo o Que Você Precisa Saber Sobre Tratamentos de Canal
          </h1>
          <h2 className="text-3xl font-montserrat md:text-4xl">
            O Que é Endodontia?
          </h2>
          <p className="text-lg md:text-xl">
            A endodontia é uma especialidade da odontologia focada na saúde da
            polpa dentária, que é a parte interna do dente onde ficam os nervos
            e vasos sanguíneos. Quando essa área é afetada por infecção ou dano,
            o tratamento de canal se torna necessário para salvar o dente e
            aliviar a dor.
          </p>
          <h2 className="text-3xl font-montserrat md:text-4xl">
            Por Que o Tratamento de Canal é Necessário?
          </h2>
          <p className="text-lg md:text-xl">
            O tratamento de canal é essencial quando a polpa dentária fica
            inflamada ou infectada. Isso pode ocorrer devido a cáries profundas,
            traumas no dente, fraturas ou múltiplos procedimentos dentários.
            Ignorar esses problemas pode levar a dor intensa, abscessos e até
            mesmo a perda do dente.
          </p>
        </div>
        <div className="bg-zinc-300 dark:bg-zinc-950 text-center px-1 pt-6">
          <h2 className="text-3xl font-montserrat md:text-4xl">
            Como é Realizado o Tratamento de Canal?
          </h2>
        </div>
        <ul className="bg-zinc-300 dark:bg-zinc-950 grid grid-cols-1 py-6 px-6 sm:grid-cols-2 xl:grid-cols-3 2xl:px-40 gap-8 place-items-center">
          <CardEndodontia title="Anestesia">
            A área ao redor do dente afetado é anestesiada para garantir
            conforto durante o procedimento.
          </CardEndodontia>
          <CardEndodontia title="Remoção da Polpa">
            A polpa infectada ou danificada é removida cuidadosamente.
          </CardEndodontia>
          <CardEndodontia title="Limpeza e Desinfecção">
            Os canais radiculares são limpos e desinfetados para eliminar
            bactérias.
          </CardEndodontia>
          <CardEndodontia title="Obturacao">
            Os canais são preenchidos com um material específico para selá-los e
            prevenir novas infecções.
          </CardEndodontia>
          <CardEndodontia title="Restauração">
            O dente é restaurado com uma coroa ou obturação para recuperar sua
            forma e função.
          </CardEndodontia>
        </ul>
        <div className="dark:bg-zinc-900 text-center px-1 pt-6">
          <h2 className="text-3xl font-montserrat md:text-4xl font-semibold">
            Benefícios do Tratamento de Canal
          </h2>
        </div>
        <ul className="mx-auto p-6 flex flex-col items-center lg:w-[800px] xl:[w-1000px] gap-4">
          <li className="flex flex-col gap-3 items-center">
            <h2 className="text-3xl text-center font-montserrat md:text-4xl">
              Alívio da Dor
            </h2>
            <p className="text-lg md:text-xl">
              O dente é restaurado com uma coroa ou obturação para recuperar sua
              forma e função.
            </p>
          </li>
          <li className="flex flex-col gap-3 items-center">
            <h2 className="text-3xl text-center font-montserrat md:text-4xl">
              Preservação do Dente
            </h2>
            <p className="text-lg md:text-xl">
              Salva o dente natural, evitando extrações e a necessidade de
              próteses dentárias.
            </p>
          </li>
          <li className="flex flex-col gap-3 items-center">
            <h2 className="text-3xl text-center font-montserrat md:text-4xl">
              Melhora na Saúde Bucal
            </h2>
            <p className="text-lg md:text-xl">
              Previne a propagação de infecções para outros dentes e tecidos
              bucais.
            </p>
          </li>
        </ul>
        <div className="bg-zinc-300 dark:bg-zinc-950 text-center flex flex-col items-center px-1 pt-6">
          <h2 className="text-3xl font-montserrat md:text-4xl font-semibold md:w-[700px]">
            Sinais de que Você Pode Precisar de um Tratamento de Canal
          </h2>
          <ul className="p-6 flex flex-col items-center lg:w-[800px] xl:[w-1000px] gap-4">
            <li className="flex flex-col gap-3 items-center">
              <p className="text-lg md:text-xl">
                Dor intensa ao mastigar ou pressionar o dente
              </p>
            </li>
            <li className="flex flex-col gap-3 items-center">
              <p className="text-lg md:text-xl">
                Sensibilidade prolongada ao calor ou frio
              </p>
            </li>
            <li className="flex flex-col gap-3 items-center">
              <p className="text-lg md:text-xl">Escurecimento do dente</p>
            </li>
            <li className="flex flex-col gap-3 items-center">
              <p className="text-lg md:text-xl">
                Inchaço e dor nas gengivas ao redor do dente afetado
              </p>
            </li>
            <li className="flex flex-col gap-3 items-center">
              <p className="text-lg md:text-xl">
                Formação de um abscesso (caroço) na gengiva
              </p>
            </li>
          </ul>
          <div className="p-6 flex flex-col items-center lg:w-[800px] xl:[w-1000px] gap-4">
            <h2 className="text-3xl font-montserrat md:text-4xl font-semibold md:w-[700px]">
              Conclusão
            </h2>
            <p className="text-lg md:text-xl md:w-[700px]">
              A endodontia desempenha um papel crucial na manutenção da saúde
              bucal, oferecendo soluções eficazes para problemas que afetam a
              polpa dentária. Se você está sentindo algum dos sintomas
              mencionados, não hesite em procurar um endodontista para avaliação
              e tratamento adequado. O tratamento de canal é uma maneira segura
              e eficiente de preservar seu sorriso e evitar complicações mais
              graves.
            </p>
            <p className="text-lg md:text-xl md:w-[700px]">
              Para mais informações sobre endodontia e cuidados dentários,
              continue navegando em nosso site e descubra como manter seus
              dentes saudáveis e livres de dor.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Endodontia;
