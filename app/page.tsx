import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer/Footer";
import Platos from "@/components/platos/Platos";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4f1] text-[#1e2525]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative h-[720px] min-h-[650px] w-full overflow-hidden">

        {/* Imagen de fondo */}
        <Image
          src="/images/main/Interior.jpg"
          alt="Nómada Restaurante"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Oscurecido */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Degradado inferior */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />

        <Navbar />

        {/* CONTENIDO HERO */}
        <div className="relative z-10 mx-auto flex h-[calc(100%-110px)] w-full max-w-[1400px] items-center px-8 lg:px-14">

          <div className="max-w-[650px]">

            <h1 className="font-serif text-[43px] font-light leading-[1.05] tracking-[-0.025em] text-white sm:text-[50px] lg:text-[57px]">
              Cocina tradicional
              <br />
              con un mundo de sabores
            </h1>

            <p className="mt-5 max-w-[350px] text-[13px] font-light leading-5 text-white/95">
              experiencia gastronómica variada
              <br />
              creativa y llena de personalidad
            </p>

            {/* Línea azul */}
            <div className="mt-6 h-[2px] w-7 bg-[#00a8c7]" />

            {/* Botón */}
            <Link
              href="/reserve"
              className="mt-7 inline-flex h-[48px] items-center gap-6 bg-[#00a8c7] px-5 text-[10px] font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#008eaa]"
            >
              RESERVAR MESA

              <span className="text-xl font-light leading-none">
                ⟶
              </span>
            </Link>

          </div>
        </div>
      </section>


      {/* =========================================================
          PRESENTACIÓN DEL RESTAURANTE
      ========================================================= */}
      <section
        id="experiencia"
        className="border-b border-[#d8d8d4] bg-[#f5f4f1] my-5"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[43%_57%]">

          {/* Imagen restaurante */}
          <div className="relative h-[390px] overflow-hidden lg:h-[400px]">
            <Image
              src="/images/main/interior3.jpg"
              alt="Interior de Nómada"
              fill
              className="object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex items-center px-10 py-14 sm:px-16 lg:px-[75px]">

            <div className="max-w-[450px]">

              <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                NUESTRO RESTAURANTE
              </p>

              <h2 className="mt-3 font-serif text-[31px] font-light uppercase leading-[1.05] tracking-[-0.01em] text-[#202626]">
                UN LUGAR PARA
                <br />
                COMPARTIR
              </h2>

              <div className="mt-5 h-[1px] w-8 bg-[#00a8c7]" />

              <p className="mt-5 max-w-[370px] text-[11px] leading-[1.7] text-[#505656]">
                En nuestro restaurante combinamos la esencia de la cocina tradicional con toques modernos que resaltan cada ingrediente. Además, incorporamos platos inspirados en diferentes partes del mundo, creando una experiencia gastronómica variada, creativa y llena de personalidad, siempre desde el respeto por el producto y el amor por la gastronomía.
              </p>

              <p className="mt-1 max-w-[370px] text-[11px] leading-[1.7] text-[#505656]">
                «Cada receta cuenta una historia, desde los sabores de siempre hasta propuestas innovadoras que fusionan culturas y técnicas culinarias.»
              </p>

              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-4 text-[9px] font-semibold tracking-[0.22em] text-[#009bb8]"
              >
                CONOCE MÁS SOBRE NÓMADA
                <span className="text-lg font-light">
                  ⟶
                </span>
              </Link>

            </div>
          </div>

        </div>
      </section>


      <Platos />

      {/* =========================================================
          RESERVA
      ========================================================= */}
      <section
        id="reservar"
        className="relative overflow-hidden bg-[#202828] px-6 py-20 text-center"
      >

        <div className="relative z-10 mx-auto max-w-[650px]">

          <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
            VIVE LA EXPERIENCIA
          </p>

          <h2 className="mt-4 font-serif text-4xl font-light text-white sm:text-5xl">
            Te esperamos en Nómada
          </h2>

          <p className="mx-auto mt-5 max-w-[500px] text-sm font-light leading-6 text-white/70">
            Una mesa, buenos ingredientes y un viaje por diferentes
            rincones del mundo sin salir de Pamplona.
          </p>

          <Link
            href="/reserve"
            className="mt-8 inline-flex h-[48px] items-center gap-6 bg-[#00a8c7] px-7 text-[10px] font-semibold tracking-[0.2em] text-white transition-colors hover:bg-[#008eaa]"
          >
            RESERVAR MESA
            <span className="text-xl">
              ⟶
            </span>
          </Link>

        </div>
      </section>


      <Footer />

    </main>
  );
}