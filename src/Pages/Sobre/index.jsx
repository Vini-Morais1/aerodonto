import ItemSobre from "../../Components/ItemSobre";
import sobreImg from "./sobre-img.png";

const Sobre = () => {
  return (
    <main className="overflow-hidden">
      <section className="flex items-center justify-center py-6 px-2 w-full sml:px-8 text-center md:justify-center xl:w-auto md:gap-6 bg-white dark:bg-zinc-950">
        <div className="w-auto px-0 md:w-[900px] flex flex-col items-center gap-4 ml:gap-8">
          <h1 className="text-black font-semibold text-xl text-nowrap dark:font-bold ml:text-3xl dark:text-gray-100">
            Conheça a Dra. Bárbara Cardoso
          </h1>
          <p className="text-base ml:text-xl text-black font-light dark:text-gray-100">
            A Dra. Barbara Cardoso é uma dentista apaixonada e dedicada, formada
            em Odontologia pela Universidade de Taubaté (UNITAU) em 2016. Com um
            compromisso firme com a excelência, ela se destaca à frente de seu
            próprio consultório, onde oferece uma gama de serviços odontológicos
            de alta qualidade.
          </p>
        </div>
        <img
          className="hidden ml:block text-center h-64 filter drop-shadow-[0px_0px_8px_grey] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] md:w-[350px] lg:min-w-[530px] xl:w-auto md:h-[400px] lg:h-[600px]"
          src={sobreImg}
          alt="Foto da Dra. Bárbara Cardoso"
        />
      </section>
      <section className="px-2 py-6 lg:py-12 font-light text-black dark:text-gray-100 text-center text-lg ml:text-xl bg-zinc-200 dark:bg-[#1F1F1F]">
        <h2 className=" mb-8 font-semibold dark:font-bold text-xl ml:text-2xl 2xl:text-4xl">
          Entre as especialidades da Dra. Barbara, estão:
        </h2>
        <ul className="grid grid-cols-1 mt-6 px-6 sm:grid-cols-2 xl:grid-cols-3 2xl:px-40  gap-8 place-items-center">
          <ItemSobre title="Facetas em Resina Composta">
            Utilizando técnicas estéticas avançadas, ela transforma a aparência
            dos dentes, proporcionando um sorriso mais harmonioso e atraente.
          </ItemSobre>
          <ItemSobre title="Implantodontia">
            Especializada na colocação de implantes dentários, a Dra. Barbara
            restaura tanto a funcionalidade quanto a estética do sorriso,
            garantindo uma solução duradoura para a perda dentária.
          </ItemSobre>
          <ItemSobre title="Prótese Protocolo">
            Oferece soluções estáveis para perdas dentárias múltiplas,
            utilizando próteses fixas sobre implantes que proporcionam conforto
            e segurança.
          </ItemSobre>
          <ItemSobre title="Endodontia">
            Com expertise em tratamentos de canal, ela alivia dores e preserva
            dentes, assegurando a saúde bucal a longo prazo.
          </ItemSobre>
          <ItemSobre title="Ortodontia">
            A Dra. Barbara aplica técnicas modernas para corrigir
            desalinhamentos dentários e problemas de mordida, contribuindo para
            sorrisos mais saudáveis e bonitos
          </ItemSobre>
        </ul>
      </section>
    </main>
  );
};

export default Sobre;
