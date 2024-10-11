import opinioes from "../../opinioes.json";
import CardOpiniao from "../CardOpiniao";

const OpiniaoClientes = () => {
  return (
    <section className="pt-10 pb-16 px-4 bg-zinc-200 dark:bg-zinc-950">
      <h2 className="text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">
        Avaliações dos nossos pacientes
      </h2>
      <div className="grid grid-cols-1 ml:grid-cols-2 xl:grid-cols-4 place-items-center gap-8">
        {opinioes &&
          opinioes.map((opiniao, index) => (
            <CardOpiniao
              feedback={opiniao.feedback}
              autor={opiniao.autor}
              img={opiniao.img}
              key={index}
            />
          ))}
      </div>
    </section>
  );
};

export default OpiniaoClientes;
