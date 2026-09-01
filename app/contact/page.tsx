import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#f5f4f1] text-[#202626]">

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative h-[450px] overflow-hidden">

                <Navbar />

                <Image
                    src="/images/about/fachada.jpg"
                    alt="Nómada Restaurante"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Contenido */}
                <div className="relative z-10 flex h-full items-start justify-center px-6 pt-10 text-center">

                    <div>

                        <p className="text-[9px] font-medium tracking-[0.35em] text-[#00a8c7]">
                            NÓMADA RESTAURANTE
                        </p>

                        <h1 className="mt-5 font-serif text-[45px] font-light leading-[1.05] text-white md:text-[60px]">
                            Estamos aquí
                            <br />
                            para recibirte
                        </h1>

                        <div className="mx-auto mt-7 h-[1px] w-9 bg-[#00a8c7]" />

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACTO + INFORMACIÓN
            ===================================================== */}
            <section className="px-6 py-10 md:px-12 md:py-28">

                <div className="mx-auto max-w-[1100px]">

                    {/* Cabecera */}
                    <div className="mb-14 text-center">

                        <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                            CONTACTO
                        </p>

                        <h2 className="mt-4 font-serif text-[34px] font-light md:text-[42px]">
                            Ven a conocernos
                        </h2>

                        <div className="mx-auto mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                        <p className="mx-auto mt-6 max-w-[550px] text-[11px] leading-6 text-[#656b6b]">
                            Estamos en Pamplona, preparados para llevarte de viaje
                            a través de nuestra cocina.
                        </p>

                    </div>


                    {/* =================================================
                        DATOS DE CONTACTO
                    ================================================= */}
                    <div className="grid grid-cols-1 border-y border-[#d9d9d4] md:grid-cols-3">

                        {/* DIRECCIÓN */}
                        <div className="border-b border-[#d9d9d4] px-8 py-12 text-center md:border-b-0 md:border-r">

                            <div className="mx-auto flex h-10 w-10 items-center justify-center border border-[#00a8c7] text-[#00a8c7]">
                                <span className="text-lg">
                                    ⌖
                                </span>
                            </div>

                            <p className="mt-5 text-[9px] font-semibold tracking-[0.3em] text-[#00a8c7]">
                                ENCUÉNTRANOS
                            </p>

                            <h3 className="mt-3 font-serif text-[23px] font-light">
                                Nuestra dirección
                            </h3>

                            <p className="mt-4 text-[11px] leading-6 text-[#606666]">
                                C. Abejeras, 51, Bajo
                                <br />
                                31007 Pamplona
                                <br />
                                Navarra
                            </p>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Calle+Abejeras+51+Pamplona+Navarra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-block text-[8px] font-semibold tracking-[0.2em] text-[#00a8c7] transition-opacity hover:opacity-60"
                            >
                                CÓMO LLEGAR →
                            </a>

                        </div>


                        {/* TELÉFONO */}
                        <div className="border-b border-[#d9d9d4] px-8 py-12 text-center md:border-b-0 md:border-r">

                            <div className="mx-auto flex h-10 w-10 items-center justify-center border border-[#00a8c7] text-[#00a8c7]">
                                <span className="text-base">
                                    ☎
                                </span>
                            </div>

                            <p className="mt-5 text-[9px] font-semibold tracking-[0.3em] text-[#00a8c7]">
                                RESERVAS Y CONTACTO
                            </p>

                            <h3 className="mt-3 font-serif text-[23px] font-light">
                                682 76 90 34
                            </h3>

                            <p className="mt-4 text-[11px] leading-6 text-[#606666]">
                                Llámanos para cualquier consulta
                                <br />
                                o modificación de tu reserva.
                            </p>

                            <a
                                href="tel:+34682769034"
                                className="mt-5 inline-block text-[8px] font-semibold tracking-[0.2em] text-[#00a8c7] transition-opacity hover:opacity-60"
                            >
                                LLAMAR →
                            </a>

                        </div>


                        {/* EMAIL */}
                        <div className="px-8 py-12 text-center">

                            <div className="mx-auto flex h-10 w-10 items-center justify-center border border-[#00a8c7] text-[#00a8c7]">
                                <span className="text-base">
                                    @
                                </span>
                            </div>

                            <p className="mt-5 text-[9px] font-semibold tracking-[0.3em] text-[#00a8c7]">
                                ESCRÍBENOS
                            </p>

                            <h3 className="mt-3 font-serif text-[23px] font-light">
                                Contacto
                            </h3>

                            <p className="mt-4 text-[11px] leading-6 text-[#606666]">
                                nomadapamplona@gmail.com
                            </p>

                            <a
                                href="mailto:nomadapamplona@gmail.com"
                                className="mt-5 inline-block text-[8px] font-semibold tracking-[0.2em] text-[#00a8c7] transition-opacity hover:opacity-60"
                            >
                                ENVIAR EMAIL →
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MAPA
            ===================================================== */}
            <section className="border-y border-[#d9d9d4] bg-[#eeede9]">

                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* MAPA */}
                    <div className="relative min-h-[450px] lg:min-h-[550px]">

                        <iframe
                            title="Ubicación de Nómada Restaurante"
                            src="https://www.google.com/maps?q=Calle+Abejeras+51,+31007+Pamplona,+Navarra&output=embed"
                            className="absolute inset-0 h-full w-full border-0 grayscale"
                            loading="lazy"
                        />

                    </div>


                    {/* INFORMACIÓN */}
                    <div className="flex items-center px-8 py-16 sm:px-14 md:px-20">

                        <div className="max-w-[470px]">

                            <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                                CÓMO LLEGAR
                            </p>

                            <h2 className="mt-4 font-serif text-[34px] font-light leading-[1.1] md:text-[42px]">
                                Nos encontramos
                                <br />
                                en Pamplona
                            </h2>

                            <div className="mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                            <p className="mt-6 text-[11px] leading-[1.9] text-[#606666]">
                                Nómada está situado en la calle Abejeras,
                                en el barrio de Iturrama, Pamplona.
                            </p>

                            <p className="mt-4 text-[11px] leading-[1.9] text-[#606666]">
                                Un espacio pensado para disfrutar de nuestra
                                cocina, compartir y dejarse llevar por los
                                sabores que nos han acompañado durante nuestro
                                viaje.
                            </p>

                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Calle+Abejeras+51,+31007+Pamplona,+Navarra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-7 inline-flex items-center gap-5 bg-[#00a8c7] px-6 py-4 text-[8px] font-semibold tracking-[0.2em] text-white transition-colors hover:bg-[#008eaa]"
                            >
                                ABRIR EN GOOGLE MAPS
                                <span className="text-[16px]">
                                    →
                                </span>
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                REDES SOCIALES
            ===================================================== */}
            <section className="px-6 py-20 text-center md:py-24">

                <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                    SÍGUENOS
                </p>

                <h2 className="mt-4 font-serif text-[34px] font-light md:text-[40px]">
                    Nómada también continúa online
                </h2>

                <div className="mx-auto mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                <p className="mx-auto mt-6 max-w-[500px] text-[11px] leading-6 text-[#606666]">
                    Descubre nuestros platos, novedades y todo lo que ocurre
                    alrededor de Nómada.
                </p>


                {/* Redes */}
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <a
                        href="https://www.instagram.com/nomada_pamplona/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-[45px] min-w-[190px] items-center justify-center gap-4 border border-[#cfcfca] text-[9px] font-semibold tracking-[0.2em] transition-all duration-300 hover:border-[#00a8c7] hover:text-[#00a8c7]"
                    >
                        <span className="text-base">
                            ◎
                        </span>

                        INSTAGRAM
                    </a>



                </div>

                <p className="mt-6 text-[9px] tracking-[0.1em] text-[#8a8f8f]">
                    @nomada_pamplona
                </p>

            </section>


            {/* =====================================================
                RESERVAS
            ===================================================== */}
            <section className="bg-[#1d2626] px-6 py-20 text-center">

                <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                    TE ESPERAMOS
                </p>

                <h2 className="mt-5 font-serif text-[34px] font-light text-white md:text-[42px]">
                    Reserva tu mesa
                </h2>

                <p className="mx-auto mt-5 max-w-[500px] text-[11px] leading-6 text-white/60">
                    Ven a disfrutar de una cocina que viaja por el mundo
                    sin perder sus raíces.
                </p>

                <Link
                    href="/reservas"
                    className="mt-8 inline-flex h-[45px] items-center gap-5 bg-[#00a8c7] px-7 text-[9px] font-semibold tracking-[0.2em] text-white transition-colors hover:bg-[#008eaa]"
                >
                    RESERVAR MESA

                    <span className="text-[17px]">
                        →
                    </span>
                </Link>

            </section>


            <Footer />

        </main>
    );
}