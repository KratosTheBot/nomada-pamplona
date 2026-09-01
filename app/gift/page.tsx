import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Gift() {
    return (
        <main className="min-h-screen bg-[#f5f4f1] text-[#202626]">

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative h-[500px] overflow-hidden">

                <Image
                    src="/images/main/Inauguracion.jpg"
                    alt="Nómada Restaurante"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* NAVBAR */}
                <div className="absolute left-0 top-0 z-50 w-full">
                    <Navbar />
                </div>

                {/* HERO CONTENT */}
                <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

                    <div>

                        <p className="text-[9px] font-medium tracking-[0.35em] text-[#00a8c7]">
                            REGALA NÓMADA
                        </p>

                        <h1 className="mt-5 font-serif text-[45px] font-light leading-[1.05] text-white md:text-[62px]">
                            Regala una
                            <br />
                            experiencia
                        </h1>

                        <div className="mx-auto mt-7 h-[1px] w-9 bg-[#00a8c7]" />

                        <p className="mx-auto mt-5 max-w-[500px] text-[11px] leading-5 text-white/90">
                            Un viaje por diferentes rincones del mundo
                            a través de nuestra cocina.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRODUCCIÓN
            ===================================================== */}
            <section className="px-6 py-20 md:px-12 md:py-28">

                <div className="mx-auto max-w-[950px] text-center">

                    <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                        BONO REGALO
                    </p>

                    <h2 className="mt-4 font-serif text-[35px] font-light leading-tight md:text-[45px]">
                        Un regalo que se
                        <br />
                        convierte en un viaje
                    </h2>

                    <div className="mx-auto mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                    <p className="mx-auto mt-7 max-w-[650px] text-[12px] leading-[1.9] text-[#5c6262]">
                        Regala la experiencia Nómada y sorprende a quien más
                        quieres con un viaje gastronómico por diferentes partes
                        del mundo, sin salir de Pamplona.
                    </p>

                    <p className="mx-auto mt-4 max-w-[650px] text-[12px] leading-[1.9] text-[#5c6262]">
                        Nuestro bono regalo está pensado para disfrutar de
                        nuestro Menú Degustación, donde producto, tradición,
                        creatividad y sabores internacionales se encuentran
                        en cada plato.
                    </p>

                </div>

            </section>


            {/* =====================================================
                EXPERIENCIA
            ===================================================== */}
            <section className="border-y border-[#d9d9d4] bg-[#eeede9]">

                <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">

                    {/* IMAGEN */}
                    <div className="relative min-h-[480px] md:min-h-[570px]">

                        <Image
                            src="/images/main/degustacion.jpg"
                            alt="Menú degustación Nómada"
                            fill
                            className="object-cover"
                        />

                    </div>


                    {/* TEXTO */}
                    <div className="flex items-center px-8 py-16 sm:px-14 md:px-20">

                        <div className="max-w-[480px]">

                            <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                                MENÚ DEGUSTACIÓN
                            </p>

                            <h2 className="mt-4 font-serif text-[34px] font-light leading-[1.1] md:text-[42px]">
                                Un recorrido por
                                <br />
                                nuestra cocina
                            </h2>

                            <div className="mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                            <p className="mt-6 text-[11px] leading-[1.9] text-[#5c6262]">
                                Nuestro Menú Degustación es una muestra de la
                                filosofía de Nómada: una cocina que viaja,
                                aprende y evoluciona sin perder el respeto por
                                el producto.
                            </p>

                            <p className="mt-5 text-[11px] leading-[1.9] text-[#5c6262]">
                                Una experiencia pensada para sentarse a la mesa,
                                dejarse sorprender y disfrutar de un recorrido
                                gastronómico creado por nuestro equipo.
                            </p>

                            <div className="mt-7 border-l border-[#00a8c7] pl-5">

                                <p className="font-serif text-[21px] font-light leading-[1.3] text-[#202626]">
                                    El mejor regalo es compartir
                                    una experiencia.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                QUÉ INCLUYE
            ===================================================== */}
            <section className="px-6 py-20 md:px-12 md:py-28">

                <div className="mx-auto max-w-[1000px]">

                    <div className="mb-12 text-center">

                        <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                            LA EXPERIENCIA
                        </p>

                        <h2 className="mt-4 font-serif text-[34px] font-light md:text-[42px]">
                            Regala Nómada
                        </h2>

                        <div className="mx-auto mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                    </div>


                    <div className="grid grid-cols-1 border-y border-[#d9d9d4] md:grid-cols-3">

                        {/* 01 */}
                        <div className="border-b border-[#d9d9d4] px-8 py-10 text-center md:border-b-0 md:border-r">

                            <span className="font-serif text-[25px] font-light text-[#00a8c7]">
                                01
                            </span>

                            <h3 className="mt-4 font-serif text-[22px] font-light">
                                Elige el regalo
                            </h3>

                            <p className="mt-4 text-[10px] leading-5 text-[#666c6c]">
                                Accede al sistema de compra y selecciona
                                el bono regalo que quieras adquirir.
                            </p>

                        </div>


                        {/* 02 */}
                        <div className="border-b border-[#d9d9d4] px-8 py-10 text-center md:border-b-0 md:border-r">

                            <span className="font-serif text-[25px] font-light text-[#00a8c7]">
                                02
                            </span>

                            <h3 className="mt-4 font-serif text-[22px] font-light">
                                Personalízalo
                            </h3>

                            <p className="mt-4 text-[10px] leading-5 text-[#666c6c]">
                                Puedes indicar los datos del beneficiario
                                y añadir una dedicatoria especial.
                            </p>

                        </div>


                        {/* 03 */}
                        <div className="px-8 py-10 text-center">

                            <span className="font-serif text-[25px] font-light text-[#00a8c7]">
                                03
                            </span>

                            <h3 className="mt-4 font-serif text-[22px] font-light">
                                Regala el viaje
                            </h3>

                            <p className="mt-4 text-[10px] leading-5 text-[#666c6c]">
                                Completa la compra y sorprende a esa persona
                                especial con una experiencia Nómada.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA COMPRA
            ===================================================== */}
            <section className="bg-[#1d2626] px-6 py-24 text-center">

                <div className="mx-auto max-w-[750px]">

                    <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                        BONO REGALO NÓMADA
                    </p>

                    <h2 className="mt-5 font-serif text-[36px] font-light leading-tight text-white md:text-[48px]">
                        Regala el sabor
                        <br />
                        de viajar
                    </h2>

                    <div className="mx-auto mt-7 h-[1px] w-9 bg-[#00a8c7]" />

                    <p className="mx-auto mt-7 max-w-[550px] text-[11px] leading-6 text-white/60">
                        Compra tu bono regalo directamente a través de
                        CoverManager y prepara una experiencia gastronómica
                        que recordar.
                    </p>

                    <a
                        href="https://www.covermanager.com/eco/buy_products/nomada/spanish?source=button-motor-web"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-9 inline-flex h-[50px] items-center gap-6 bg-[#00a8c7] px-8 text-[9px] font-semibold tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#008eaa]"
                    >
                        COMPRAR BONO REGALO

                        <span className="text-[18px] font-light">
                            →
                        </span>
                    </a>

                    <p className="mt-5 text-[8px] tracking-[0.1em] text-white/35">
                        COMPRA SEGURA A TRAVÉS DE COVERMANAGER
                    </p>

                </div>

            </section>


            {/* =====================================================
                INFORMACIÓN
            ===================================================== */}
            <section className="bg-[#f5f4f1] px-6 py-20 text-center">

                <div className="mx-auto max-w-[700px]">

                    <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                        NÓMADA
                    </p>

                    <h2 className="mt-4 font-serif text-[31px] font-light md:text-[38px]">
                        Una experiencia para compartir
                    </h2>

                    <p className="mx-auto mt-5 max-w-[550px] text-[11px] leading-6 text-[#606666]">
                        Si tienes cualquier duda sobre los bonos regalo,
                        puedes ponerte en contacto con nosotros.
                    </p>

                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

                        <Link
                            href="/contact"
                            className="inline-flex h-[43px] items-center gap-4 border border-[#cfcfca] px-6 text-[8px] font-semibold tracking-[0.2em] transition-all duration-300 hover:border-[#00a8c7] hover:text-[#00a8c7]"
                        >
                            CONTACTO
                            <span className="text-[15px]">
                                →
                            </span>
                        </Link>

                        <Link
                            href="/reservas"
                            className="inline-flex h-[43px] items-center gap-4 bg-[#00a8c7] px-6 text-[8px] font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#008eaa]"
                        >
                            RESERVAR MESA
                            <span className="text-[15px]">
                                →
                            </span>
                        </Link>

                    </div>

                </div>

            </section>


            <Footer />

        </main>
    );
}