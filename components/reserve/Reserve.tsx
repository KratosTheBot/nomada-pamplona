"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

declare global {
    interface Window {
        iFrameResize?: (options?: object, element?: HTMLElement) => void;
    }
}

export default function Reserve() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleIframeLoad = () => {
        if (window.iFrameResize && iframeRef.current) {
            window.iFrameResize({}, iframeRef.current);
        }
    };

    return (
        <main className="min-h-screen bg-[#f5f4f1] text-[#202626]">

            {/* =====================================================
          COVERMANAGER SCRIPT
      ===================================================== */}
            <Script
                src="https://www.covermanager.com/js/iframeResizer/iframeResizer.min.js"
                strategy="afterInteractive"
            />

            {/* =====================================================
          HEADER
      ===================================================== */}
            <header className="absolute left-0 top-0 z-50 w-full">

                <div className="mx-auto flex max-w-[1400px] items-start justify-between px-10 py-4 lg:px-12">



                    <Navbar />
                </div>

            </header>


            {/* =====================================================
          HERO RESERVAS
      ===================================================== */}
            <section className="relative flex min-h-[390px] items-center justify-center overflow-hidden">

                {/* Imagen */}
                <Image
                    src="/images/main/Interior.jpg"
                    alt="Nómada Restaurante"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Contenido */}
                <div className="relative z-10 px-6 pt-12 text-center text-white">

                    <p className="text-[9px] font-medium tracking-[0.35em] text-[#00a8c7]">
                        NÓMADA RESTAURANTE
                    </p>

                    <h1 className="mt-4 font-serif text-[42px] font-light leading-none md:text-[55px]">
                        Reserva tu mesa
                    </h1>

                    <div className="mx-auto mt-6 h-[1px] w-8 bg-[#00a8c7]" />

                    <p className="mx-auto mt-5 max-w-[480px] text-[11px] font-light leading-5 text-white/90 md:text-[12px]">
                        Elige el día y la hora y prepárate para disfrutar
                        de una experiencia gastronómica única.
                    </p>

                </div>

            </section>


            {/* =====================================================
          ZONA DE RESERVAS
      ===================================================== */}
            <section className="bg-[#f5f4f1] px-5 py-14 md:px-10 md:py-20">

                <div className="mx-auto max-w-[1050px]">


                    {/* =================================================
              COVERMANAGER
          ================================================= */}
                    <div className="overflow-hidden border border-[#deded9] bg-white">

                        <iframe
                            ref={iframeRef}
                            id="nomada"
                            title="Reservas"
                            src="https://www.covermanager.com/reservation/module_restaurant/nomada/spanish"
                            allow="payment"
                            frameBorder="0"
                            height="550"
                            width="100%"
                            onLoad={handleIframeLoad}
                            className="block min-h-[550px] w-full"
                        />

                    </div>

                </div>

            </section>


            {/* =====================================================
          INFORMACIÓN RESTAURANTE
      ===================================================== */}
            <section className="border-t border-[#d8d8d3] bg-[#eeede9]">

                <div className="mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-3">

                    {/* LOCALIZACIÓN */}
                    <div className="border-b border-[#d8d8d3] px-8 py-10 text-center md:border-b-0 md:border-r">

                        <p className="text-[8px] font-semibold tracking-[0.3em] text-[#00a8c7]">
                            ENCUÉNTRANOS
                        </p>

                        <h3 className="mt-3 font-serif text-[21px] font-light">
                            Nómada
                        </h3>

                        <p className="mt-3 text-[10px] leading-5 text-[#666c6c]">
                            Pamplona
                            <br />
                            Navarra
                        </p>

                    </div>


                    {/* HORARIO */}
                    <div className="border-b border-[#d8d8d3] px-8 py-10 text-center md:border-b-0 md:border-r">

                        <p className="text-[8px] font-semibold tracking-[0.3em] text-[#00a8c7]">
                            HORARIOS
                        </p>

                        <h3 className="mt-3 font-serif text-[21px] font-light">
                            Ven a visitarnos
                        </h3>

                        <p className="mt-3 text-[10px] leading-5 text-[#666c6c]">
                            Consulta disponibilidad
                            <br />
                            al realizar tu reserva.
                        </p>

                    </div>


                    {/* CONTACTO */}
                    <div className="px-8 py-10 text-center">

                        <p className="text-[8px] font-semibold tracking-[0.3em] text-[#00a8c7]">
                            CONTACTO
                        </p>

                        <h3 className="mt-3 font-serif text-[21px] font-light">
                            Estamos para ti
                        </h3>

                        <p className="mt-3 text-[10px] leading-5 text-[#666c6c]">
                            Reservas y consultas
                            <br />
                            Nómada Restaurante
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CTA
      ===================================================== */}
            <section className="bg-[#1d2626] px-6 py-16 text-center">

                <p className="text-[8px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                    COCINA QUE VIAJA
                </p>

                <h2 className="mt-4 font-serif text-[31px] font-light text-white md:text-[38px]">
                    Te esperamos en Nómada
                </h2>

                <p className="mx-auto mt-4 max-w-[480px] text-[10px] leading-5 text-white/60">
                    Una mesa, buenos ingredientes y un viaje por diferentes
                    rincones del mundo sin salir de Pamplona.
                </p>

                <Link
                    href="/"
                    className="mt-7 inline-flex h-[43px] items-center gap-5 bg-[#00a8c7] px-6 text-[8px] font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#008eaa]"
                >
                    VOLVER AL INICIO

                    <span className="text-[16px] font-light">
                        →
                    </span>
                </Link>

            </section>


            <Footer />

        </main>
    );
}