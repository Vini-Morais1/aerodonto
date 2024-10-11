import { useEffect, useRef } from "react";
import opinioes from "../../opinioes.json";
import CardOpiniao from "../CardOpiniao";

const OpiniaoClientes = () => {
  const opiniaoRefs = useRef([]);

  useEffect(() => {
    const currentRefs = opiniaoRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100"
            );
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
      }
    );

    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="pt-10 pb-16 px-4 bg-zinc-200 dark:bg-zinc-950">
      <h2 className="text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">
        Avaliações dos nossos pacientes
      </h2>
      <div className="grid grid-cols-1 ml:grid-cols-2 xl:grid-cols-4 place-items-center gap-8">
        {opinioes &&
          opinioes.map((opiniao, index) => (
            <div
              ref={(el) => (opiniaoRefs.current[index] = el)}
              key={opiniao.id}
              className="opacity-0 transform translate-y-10 scale-95 transition-all duration-700 ease-out"
            >
              <CardOpiniao
                feedback={opiniao.feedback}
                autor={opiniao.autor}
                img={opiniao.img}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default OpiniaoClientes;
