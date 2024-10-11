import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import FormMensagem from "../../Components/FormMensagem";

const Contato = () => {
  return (
    <main className="text-black dark:text-gray-100 bg-white dark:bg-zinc-900 pt-8">
      <h1 className="text-center mb-4 text-3xl ml:text-5xl ml:mb-8 font-semibold">
        Entre em contato
      </h1>
      <section className="full flex justify-center px-6 py-8 bg-zinc-200 dark:bg-zinc-900">
        <div className="bg-stone-50 flex flex-col items-center gap-4 ml:flex-row ml:gap-0 ml:pl-4 ml:border border-gray-400 dark:bg-zinc-950 ml:justify-center lg:w-[957px] text-center shadow-xl">
          <div className="flex flex-col gap-4 ml:w-2/3">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl ml:text-4xl">Consultório Aerodonto</h3>
              <a
                href="https://www.google.com/maps/place/Consult%C3%B3rio+Odontol%C3%B3gico+Aerodonto+-+Barbara+Cardoso/@-23.0131263,-45.5831186,17z/data=!3m1!4b1!4m6!3m5!1s0x94ccf92134c3666f:0x3f2fbf40d53db8d6!8m2!3d-23.0131263!4d-45.5831186!16s%2Fg%2F11fpv6h4_t?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D"
                className="text-lg hover:text-blue-500 duration-500 cursor-pointer underline dark:font-light"
              >
                R. Padre José Rubens Bonafé, 759 - Jardim das Bandeiras,
                Taubaté-SP, 12051-250
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-3xl text-center sm:text-wrap sm:text-4xl font-montserrat dark:text-white">
                Fale conosco através das nossas redes
              </h3>
              <div className="flex gap-8">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaInstagram
                    size={70}
                    className="dark:text-white h-16 sm:h-[70px] hover:text-[#E0306A] dark:hover:text-[#E0306A] duration-500 hover:scale-110"
                  />
                </a>

                <a
                  href="https://www.facebook.com/aerodonto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={70}
                    className="dark:text-white h-16 sm:h-[70px] hover:text-[#1877f2] dark:hover:text-[#1877f2] duration-500 hover:scale-110"
                  />
                </a>

                <a
                  href="https://api.whatsapp.com/send/?phone=5512987013110&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp
                    size={70}
                    className="dark:text-white h-16 sm:h-[70px] hover:text-[#25D366] dark:hover:text-[#25D366] duration-500 hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
          <iframe
            className="w-full h-80 sm:w-[600px] sm:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7344.598667116048!2d-45.58477499264276!3d-23.012779103697024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf92134c3666f%3A0x3f2fbf40d53db8d6!2sConsult%C3%B3rio%20Odontol%C3%B3gico%20Aerodonto%20-%20Barbara%20Cardoso!5e0!3m2!1spt-BR!2sbr!4v1728516141362!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <FormMensagem />
    </main>
  );
};

export default Contato;
