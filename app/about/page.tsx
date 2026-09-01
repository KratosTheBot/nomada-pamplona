import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-[#f5f4f1] text-[#202626]">

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative h-[550px] overflow-hidden">

                <Navbar />

                <Image
                    src="/images/about/nomada.jpg"
                    alt="Nómada Restaurante"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Contenido */}
                <div className="relative z-10 flex h-full items-start justify-center  text-center pt-20" >

                    <div>

                        <p className="text-[9px] font-medium tracking-[0.35em] text-[#00a8c7]">
                            NUESTRA HISTORIA
                        </p>

                        <h1 className="mt-5 font-serif text-[45px] font-light leading-[1.05] text-white md:text-[62px]">
                            Un viaje que
                            <br />
                            nos trajo hasta aquí
                        </h1>

                        <div className="mx-auto mt-7 h-[1px] w-9 bg-[#00a8c7]" />

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRODUCCIÓN
            ===================================================== */}
            <section className="px-6 py-20 md:px-12 md:py-28">

                <div className="mx-auto max-w-[1000px]">

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.5fr] md:gap-20">

                        {/* Título lateral */}
                        <div>

                            <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                                NÓMADA
                            </p>

                            <h2 className="mt-4 font-serif text-[35px] font-light leading-[1.05] md:text-[42px]">
                                Una cocina
                                <br />
                                con historia
                            </h2>

                            <div className="mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                        </div>


                        {/* Texto */}
                        <div className="text-[12px] leading-[1.9] text-[#555c5c]">

                            <p>
                                En Nómada creemos que la cocina es un viaje, y
                                nuestra historia como socios, es precisamente,
                                el reflejo de ese recorrido.
                            </p>

                            <p className="mt-6">
                                Nos conocimos en la escuela de hostelería de
                                Pamplona, donde descubrimos una pasión compartida
                                por la gastronomía y un deseo común: explorar el
                                mundo a través de sus sabores. Tras finalizar
                                nuestra formación, cada uno emprendió su propio
                                camino, viajando y trabajando en diferentes países,
                                aprendiendo de cocinas locales, técnicas
                                tradicionales y tendencias contemporáneas.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                IMAGEN + TRAYECTORIA
            ===================================================== */}
            <section className="border-y border-[#d9d9d4] bg-[#eeede9]">

                <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">

                    {/* Imagen */}
                    <div className="relative min-h-[450px] md:min-h-[580px]">

                        <Image
                            src="/images/about/interior2.jpg"
                            alt="Interior del restaurante Nómada"
                            fill
                            className="object-cover"
                        />

                    </div>


                    {/* Texto */}
                    <div className="flex items-center px-8 py-16 sm:px-14 md:px-20">

                        <div className="max-w-[500px]">

                            <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                                EL VIAJE
                            </p>

                            <h2 className="mt-4 font-serif text-[32px] font-light leading-[1.1] md:text-[39px]">
                                Aprender del mundo
                                <br />
                                para llevarlo a la mesa
                            </h2>

                            <div className="mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                            <p className="mt-6 text-[11px] leading-[1.9] text-[#5c6262]">
                                Esa trayectoria – tanto nacional como
                                internacional- nos permitió absorber lo mejor
                                de cada cultura culinaria: desde los guisos más
                                clásicos hasta la frescura de la cocina moderna,
                                pasando por sabores y métodos de lugares tan
                                diversos como Asia, América latina o Europa.
                            </p>

                            <p className="mt-5 text-[11px] leading-[1.9] text-[#5c6262]">
                                Cada viaje, cada cocina y cada experiencia fueron
                                dejando una huella en nuestra forma de entender
                                la gastronomía.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SEGUNDA PARTE DE LA HISTORIA
            ===================================================== */}
            <section className="px-6 py-20 md:px-12 md:py-28">

                <div className="mx-auto max-w-[1000px]">

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_0.8fr] md:gap-20">

                        {/* Texto */}
                        <div className="text-[12px] leading-[1.9] text-[#555c5c]">

                            <p>
                                Años después el destino volvió a cruzar nuestros
                                caminos. Con la experiencia acumulada, una visión
                                clara y el deseo de unir nuestras filosofías
                                culinarias, decidimos crear un espacio que
                                representara todo lo vivido.
                            </p>

                            <p className="mt-6">
                                Así nació Nómada, un restaurante que fusiona
                                cocina tradicional, toques modernos y platos
                                inspirados en distintas partes del mundo,
                                siempre desde el respeto por el producto y el
                                amor por la gastronomía.
                            </p>

                        </div>


                        {/* Frase */}
                        <div className="flex items-center">

                            <div className="border-l border-[#00a8c7] pl-7">

                                <p className="font-serif text-[26px] font-light leading-[1.25] text-[#202626] md:text-[31px]">
                                    Un lugar donde cada plato cuenta una
                                    historia.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FRASE FINAL
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#1d2626] px-6 py-24 text-center md:py-32">

                <div className="mx-auto max-w-[800px]">

                    <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                        NUESTRA FILOSOFÍA
                    </p>

                    <h2 className="mt-7 font-serif text-[34px] font-light leading-[1.2] text-white md:text-[48px]">
                        En cada plato que servimos
                        <br />
                        hay un trozo de viaje
                    </h2>

                    <div className="mx-auto mt-8 h-[1px] w-9 bg-[#00a8c7]" />

                    <p className="mt-7 text-[11px] leading-6 text-white/60">
                        El viaje que nos trajo hasta aquí.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="bg-[#f5f4f1] px-6 py-20 text-center">

                <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                    VIVE EL VIAJE
                </p>

                <h2 className="mt-4 font-serif text-[32px] font-light md:text-[40px]">
                    Te esperamos en Nómada
                </h2>

                <p className="mx-auto mt-5 max-w-[500px] text-[11px] leading-6 text-[#606666]">
                    Ven a descubrir una cocina que viaja por el mundo,
                    sin perder de vista sus raíces.
                </p>

                <Link
                    href="/reserve"
                    className="mt-8 inline-flex h-[45px] items-center gap-5 bg-[#00a8c7] px-7 text-[9px] font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#008eaa]"
                >
                    RESERVAR MESA

                    <span className="text-[17px] font-light">
                        →
                    </span>
                </Link>

            </section>


            <Footer />

        </main>
    );
}