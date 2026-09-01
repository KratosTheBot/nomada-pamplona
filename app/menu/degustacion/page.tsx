"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const images = [
    "/images/degustacion/01.jpg",
    "/images/degustacion/02.jpg",
    "/images/degustacion/03.jpg",
    "/images/degustacion/04.jpg",
];


const dishes = [
    {
        number: "01",
        name: "Tostada de ceviche de corvina estilo peruano.",
    },
    {
        number: "02",
        name: "Sushi crispy de salmón, mayonesa japonesa, eneldo y aguacate.",
    },
    {
        number: "03",
        name: "Falso arroz de pulpo y gambón.",
    },
    {
        number: "04",
        name: "Tataki de atún rojo a la parrilla",
        description:
            "Con crema romescu, brocolini y salsa de naranja.",
    },
    {
        number: "05",
        name: "Sorbete daiquiri de mango.",
    },
    {
        number: "06",
        name: "Carrillera de ternera guisada al vino tinto",
        description:
            "Con cremoso de patata trufada.",
    },
    {
        number: "07",
        name: "Torrija caramelizada",
        description:
            "Con helado de caramelo salado.",
    },
];


/* =========================================================
   CARRUSEL
========================================================= */

function ImageCarousel() {

    const [current, setCurrent] = useState(0);


    /* Cambio automático */

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((previous) =>
                previous === images.length - 1
                    ? 0
                    : previous + 1
            );

        }, 5000);


        return () => clearInterval(interval);

    }, []);


    const previousImage = () => {

        setCurrent((previous) =>
            previous === 0
                ? images.length - 1
                : previous - 1
        );

    };


    const nextImage = () => {

        setCurrent((previous) =>
            previous === images.length - 1
                ? 0
                : previous + 1
        );

    };


    return (

        <div
            className="
                relative
                h-[500px]
                w-full
                overflow-hidden
                md:h-[650px]
            "
        >

            {/* IMÁGENES */}

            {images.map((image, index) => (

                <div
                    key={image}
                    className={`
                        absolute
                        inset-0
                        transition-opacity
                        duration-1000
                        ${index === current
                            ? "opacity-100"
                            : "opacity-0"
                        }
                    `}
                >

                    <Image
                        src={image}
                        alt={`Menú degustación Nómada ${index + 1}`}
                        fill
                        priority={index === 0}
                        className="
                            object-cover
                            object-center
                        "
                    />

                </div>

            ))}


            {/* OSCURECER */}

            <div
                className="
                    absolute
                    inset-0
                    bg-black/25
                "
            />


            {/* FLECHA IZQUIERDA */}

            <button
                type="button"
                onClick={previousImage}
                aria-label="Imagen anterior"
                className="
                    absolute
                    left-5
                    top-1/2
                    z-10
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    border
                    border-white/40
                    text-white
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white/10
                "
            >
                ←
            </button>


            {/* FLECHA DERECHA */}

            <button
                type="button"
                onClick={nextImage}
                aria-label="Imagen siguiente"
                className="
                    absolute
                    right-5
                    top-1/2
                    z-10
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    border
                    border-white/40
                    text-white
                    transition-all
                    duration-300
                    hover:border-white
                    hover:bg-white/10
                "
            >
                →
            </button>


            {/* INDICADORES */}

            <div
                className="
                    absolute
                    bottom-8
                    left-1/2
                    z-10
                    flex
                    -translate-x-1/2
                    gap-2
                "
            >

                {images.map((_, index) => (

                    <button
                        key={index}
                        type="button"
                        onClick={() => setCurrent(index)}
                        aria-label={`Ir a imagen ${index + 1}`}
                        className={`
                            h-[2px]
                            transition-all
                            duration-300
                            ${index === current
                                ? "w-8 bg-white"
                                : "w-4 bg-white/40"
                            }
                        `}
                    />

                ))}

            </div>


            {/* TEXTO */}

            <div
                className="
                    absolute
                    inset-0
                    z-[5]
                    flex
                    items-center
                    justify-center
                    px-6
                    text-center
                "
            >

                <div>

                    <p
                        className="
                            text-[9px]
                            font-medium
                            tracking-[0.4em]
                            text-[#00a8c7]
                        "
                    >
                        EXPERIENCIA NÓMADA
                    </p>


                    <h1
                        className="
                            mt-5
                            font-serif
                            text-[45px]
                            font-light
                            leading-[1.05]
                            text-white
                            md:text-[68px]
                        "
                    >
                        Menú
                        <br />
                        degustación
                    </h1>


                    <div
                        className="
                            mx-auto
                            mt-7
                            h-[1px]
                            w-9
                            bg-[#00a8c7]
                        "
                    />


                    <p
                        className="
                            mt-5
                            text-[9px]
                            tracking-[0.25em]
                            text-white/80
                        "
                    >
                        MEDIODÍA
                    </p>

                </div>

            </div>

        </div>

    );
}


/* =========================================================
   PASE
========================================================= */

function TastingDish({
    number,
    name,
    description,
}: {
    number: string;
    name: string;
    description?: string;
}) {

    return (

        <article
            className="
                group
                border-b
                border-[#d9d9d4]
                py-8
                last:border-b-0
            "
        >

            <div
                className="
                    flex
                    items-start
                    gap-6
                "
            >

                {/* NÚMERO */}

                <span
                    className="
                        pt-1
                        font-serif
                        text-[12px]
                        font-light
                        text-[#00a8c7]
                    "
                >
                    {number}
                </span>


                {/* CONTENIDO */}

                <div>

                    <h3
                        className="
                            font-serif
                            text-[22px]
                            font-light
                            leading-[1.3]
                            text-[#202626]
                            transition-colors
                            duration-300
                            group-hover:text-[#00a8c7]
                        "
                    >
                        {name}
                    </h3>


                    {description && (

                        <p
                            className="
                                mt-2
                                text-[10px]
                                leading-6
                                text-[#6a7070]
                            "
                        >
                            {description}
                        </p>

                    )}

                </div>

            </div>

        </article>

    );
}


/* =========================================================
   PÁGINA
========================================================= */

export default function MenuDegustacion() {

    return (

        <main
            className="
                min-h-screen
                bg-[#f5f4f1]
                text-[#202626]
            "
        >


            {/* =====================================================
                HERO + NAVBAR
            ===================================================== */}

            <section className="relative">

                {/* NAVBAR */}

                <div
                    className="
                        absolute
                        left-0
                        top-0
                        z-50
                        w-full
                    "
                >

                    <Navbar />

                </div>


                {/* CARRUSEL */}

                <ImageCarousel />

            </section>


            {/* =====================================================
                INTRODUCCIÓN
            ===================================================== */}

            <section
                className="
                    px-6
                    py-20
                    md:px-12
                    md:py-24
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[800px]
                        text-center
                    "
                >

                    <p
                        className="
                            text-[9px]
                            font-semibold
                            tracking-[0.35em]
                            text-[#00a8c7]
                        "
                    >
                        UNA EXPERIENCIA
                    </p>


                    <h2
                        className="
                            mt-4
                            font-serif
                            text-[34px]
                            font-light
                            md:text-[44px]
                        "
                    >
                        Un viaje en siete pasos
                    </h2>


                    <div
                        className="
                            mx-auto
                            mt-6
                            h-[1px]
                            w-8
                            bg-[#00a8c7]
                        "
                    />


                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-[650px]
                            text-[11px]
                            leading-[2]
                            text-[#626969]
                        "
                    >
                        Un recorrido por nuestra cocina a través de
                        diferentes técnicas, productos y sabores.
                        Una experiencia diseñada para disfrutar
                        de Nómada desde el primer bocado hasta el último.
                    </p>

                </div>

            </section>


            {/* =====================================================
                MENÚ
            ===================================================== */}

            <section
                className="
                    px-6
                    pb-24
                    md:px-12
                    md:pb-32
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[850px]
                    "
                >

                    {/* CABECERA */}

                    <div className="mb-6 flex items-end gap-5">

                        <span
                            className="
                                font-serif
                                text-[13px]
                                text-[#00a8c7]
                            "
                        >
                            01
                        </span>


                        <h2
                            className="
                                font-serif
                                text-[32px]
                                font-light
                                md:text-[38px]
                            "
                        >
                            Menú degustación
                        </h2>

                    </div>


                    <div
                        className="
                            h-[1px]
                            bg-[#202626]
                        "
                    />


                    {/* PASES */}

                    <div>

                        {dishes.map((dish) => (

                            <TastingDish
                                key={dish.number}
                                number={dish.number}
                                name={dish.name}
                                description={dish.description}
                            />

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                PRECIO
            ===================================================== */}

            <section
                className="
                    bg-[#202626]
                    px-6
                    py-24
                    text-center
                "
            >

                <p
                    className="
                        text-[9px]
                        font-semibold
                        tracking-[0.35em]
                        text-[#00a8c7]
                    "
                >
                    MENÚ DEGUSTACIÓN
                </p>


                <div
                    className="
                        mt-6
                        font-serif
                        text-[58px]
                        font-light
                        leading-none
                        text-white
                        md:text-[72px]
                    "
                >
                    56€
                </div>


                <p
                    className="
                        mt-3
                        text-[9px]
                        tracking-[0.2em]
                        text-white/50
                    "
                >
                    IVA INCLUIDO
                </p>


                <div
                    className="
                        mx-auto
                        mt-8
                        h-[1px]
                        w-8
                        bg-[#00a8c7]
                    "
                />


                <div
                    className="
                        mx-auto
                        mt-7
                        max-w-[500px]
                    "
                >

                    <p
                        className="
                            text-[10px]
                            leading-6
                            text-white/70
                        "
                    >
                        Menú exclusivo servicio de mediodía.
                    </p>


                    <p
                        className="
                            mt-2
                            text-[9px]
                            italic
                            text-white/40
                        "
                    >
                        El precio no incluye bebidas.
                    </p>

                </div>

            </section>


            {/* =====================================================
                RESERVA
            ===================================================== */}

            <section
                className="
                    bg-[#f5f4f1]
                    px-6
                    py-20
                    text-center
                "
            >

                <p
                    className="
                        text-[9px]
                        font-semibold
                        tracking-[0.35em]
                        text-[#00a8c7]
                    "
                >
                    NÓMADA
                </p>


                <h2
                    className="
                        mt-5
                        font-serif
                        text-[34px]
                        font-light
                        md:text-[42px]
                    "
                >
                    Reserva tu experiencia
                </h2>


                <div
                    className="
                        mx-auto
                        mt-6
                        h-[1px]
                        w-8
                        bg-[#00a8c7]
                    "
                />


                <p
                    className="
                        mx-auto
                        mt-6
                        max-w-[550px]
                        text-[11px]
                        leading-6
                        text-[#626969]
                    "
                >
                    Descubre nuestro menú degustación y déjate llevar
                    por un viaje gastronómico por diferentes rincones
                    del mundo.
                </p>


                <Link
                    href="/reservas"
                    className="
                        mt-8
                        inline-flex
                        h-[46px]
                        items-center
                        gap-5
                        bg-[#00a8c7]
                        px-7
                        text-[9px]
                        font-semibold
                        tracking-[0.2em]
                        text-white
                        transition-colors
                        duration-300
                        hover:bg-[#008eaa]
                    "
                >
                    RESERVAR MESA

                    <span className="text-[17px]">
                        →
                    </span>

                </Link>

            </section>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />

        </main>

    );
}