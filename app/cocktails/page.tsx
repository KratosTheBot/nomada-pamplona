"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


type Cocktail = {
    name: string;
    description?: string;
    price: string;
    alcoholFree?: boolean;
};


const cocktailImages = [
    "/images/cocteles/cocktail1.jpg",
    "/images/cocteles/cocktail2.jpg",
    "/images/cocteles/cocktail3.jpg",
    "/images/cocteles/cocktail4.jpg",
];


/* =========================================================
   CARRUSEL
========================================================= */

function CocktailCarousel() {

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((previous) =>
                previous === cocktailImages.length - 1
                    ? 0
                    : previous + 1
            );

        }, 4500);

        return () => clearInterval(interval);

    }, []);


    const previousImage = () => {

        setCurrent((previous) =>
            previous === 0
                ? cocktailImages.length - 1
                : previous - 1
        );

    };


    const nextImage = () => {

        setCurrent((previous) =>
            previous === cocktailImages.length - 1
                ? 0
                : previous + 1
        );

    };


    return (
        <div className="relative mx-auto max-w-[1050px]">

            {/* IMAGEN */}

            <div
                className="
                    relative
                    h-[280px]
                    overflow-hidden
                    md:h-[430px]
                "
            >

                {cocktailImages.map((image, index) => (

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
                            alt={`Cóctel Nómada ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover"
                        />

                    </div>

                ))}


                {/* DEGRADADO */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-transparent
                        to-transparent
                    "
                />


                {/* FLECHA IZQUIERDA */}

                <button
                    type="button"
                    onClick={previousImage}
                    aria-label="Imagen anterior"
                    className="
                        absolute
                        left-4
                        top-1/2
                        z-10
                        flex
                        h-10
                        w-10
                        -translate-y-1/2
                        items-center
                        justify-center
                        border
                        border-white/60
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-[#202626]
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
                        right-4
                        top-1/2
                        z-10
                        flex
                        h-10
                        w-10
                        -translate-y-1/2
                        items-center
                        justify-center
                        border
                        border-white/60
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-[#202626]
                    "
                >
                    →
                </button>


                {/* INDICADORES */}

                <div
                    className="
                        absolute
                        bottom-5
                        left-1/2
                        z-10
                        flex
                        -translate-x-1/2
                        gap-2
                    "
                >

                    {cocktailImages.map((_, index) => (

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
                                    : "w-4 bg-white/50"
                                }
                            `}
                        />

                    ))}

                </div>

            </div>

        </div>
    );
}


/* =========================================================
   ITEM COCTEL
========================================================= */

function CocktailItem({
    cocktail,
}: {
    cocktail: Cocktail;
}) {

    return (

        <article
            className="
                group
                border-b
                border-[#d9d9d4]
                py-7
                last:border-b-0
            "
        >

            <div
                className="
                    flex
                    items-start
                    justify-between
                    gap-6
                "
            >

                <div className="flex items-start gap-5">

                    <span
                        className="
                            mt-2
                            h-1
                            w-1
                            shrink-0
                            rounded-full
                            bg-[#00a8c7]
                            transition-transform
                            duration-300
                            group-hover:scale-[2]
                        "
                    />


                    <div>

                        <h3
                            className="
                                font-serif
                                text-[20px]
                                font-medium
                                leading-[1.3]
                                text-[#202626]
                                transition-colors
                                duration-300
                                group-hover:text-[#00a8c7]
                                md:text-[22px]
                            "
                        >
                            {cocktail.name}
                        </h3>


                        {cocktail.description && (

                            <p
                                className="
                                    mt-2
                                    max-w-[600px]
                                    font-serif
                                    text-[11px]
                                    italic
                                    leading-6
                                    text-[#727979]
                                "
                            >
                                {cocktail.description}
                            </p>

                        )}


                        {cocktail.alcoholFree && (

                            <span
                                className="
                                    mt-3
                                    inline-flex
                                    border
                                    border-[#00a8c7]
                                    px-3
                                    py-1
                                    text-[7px]
                                    font-medium
                                    tracking-[0.15em]
                                    text-[#00a8c7]
                                "
                            >
                                CON O SIN ALCOHOL
                            </span>

                        )}

                    </div>

                </div>


                <span
                    className="
                        shrink-0
                        pt-1
                        font-serif
                        text-[18px]
                        font-light
                        text-[#202626]
                        md:text-[20px]
                    "
                >
                    {cocktail.price}
                </span>

            </div>

        </article>
    );
}


/* =========================================================
   SECCIÓN
========================================================= */

function CocktailSection({
    number,
    title,
    cocktails,
}: {
    number: string;
    title: string;
    cocktails: Cocktail[];
}) {

    return (

        <section className="mb-24">

            <div className="mb-5 flex items-end gap-5">

                <span
                    className="
                        font-serif
                        text-[12px]
                        text-[#00a8c7]
                    "
                >
                    {number}
                </span>


                <h2
                    className="
                        font-serif
                        text-[32px]
                        font-light
                        leading-none
                        text-[#202626]
                        md:text-[40px]
                    "
                >
                    {title}
                </h2>

            </div>


            <div className="h-[1px] bg-[#202626]" />


            <div>

                {cocktails.map((cocktail) => (

                    <CocktailItem
                        key={cocktail.name}
                        cocktail={cocktail}
                    />

                ))}

            </div>

        </section>
    );
}


/* =========================================================
   PÁGINA
========================================================= */

export default function Cocteles() {

    return (

        <main
            className="
                min-h-screen
                bg-[#f5f4f1]
                text-[#202626]
            "
        >

            {/* =====================================================
                HERO
            ===================================================== */}

            <section
                className="
                    relative
                    h-[500px]
                    overflow-hidden
                    md:h-[700px]
                "
            >

                <Image
                    src="/images/cocteles/cocktails.jpg"
                    alt="Nómada - Cócteles"
                    fill
                    priority
                    className="
                        object-cover
                        object-center
                    "
                />


                {/* OSCURECER HERO */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/45
                    "
                />


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


                {/* CONTENIDO HERO */}

                <div
                    className="
                        absolute
                        inset-0
                        z-10
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
                                tracking-[0.45em]
                                text-[#00a8c7]
                            "
                        >
                            NÓMADA
                        </p>


                        <h1
                            className="
                                mt-6
                                font-serif
                                text-[52px]
                                font-light
                                leading-[1]
                                text-white
                                md:text-[76px]
                            "
                        >
                            Cócteles
                        </h1>


                        <div
                            className="
                                mx-auto
                                mt-8
                                h-[1px]
                                w-10
                                bg-[#00a8c7]
                            "
                        />


                        <p
                            className="
                                mt-6
                                text-[9px]
                                tracking-[0.35em]
                                text-white/80
                            "
                        >
                            SABORES · MEZCLAS · VIAJE
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRODUCCIÓN
            ===================================================== */}

            <section
                className="
                    px-6
                    py-20
                    md:px-12
                    md:py-28
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[700px]
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
                        LA BARRA NÓMADA
                    </p>


                    <h2
                        className="
                            mt-5
                            font-serif
                            text-[34px]
                            font-light
                            leading-tight
                            md:text-[46px]
                        "
                    >
                        Un viaje servido en copa
                    </h2>


                    <div
                        className="
                            mx-auto
                            mt-7
                            h-[1px]
                            w-8
                            bg-[#00a8c7]
                        "
                    />


                    <p
                        className="
                            mt-7
                            text-[11px]
                            leading-[2]
                            text-[#626969]
                        "
                    >
                        Cócteles que recorren diferentes lugares del mundo
                        a través de sus ingredientes. Mezclas frescas,
                        especiadas y sorprendentes creadas para acompañar
                        la experiencia Nómada.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CARRUSEL
            ===================================================== */}

            <section
                className="
                    px-6
                    pb-24
                    md:px-12
                "
            >

                <div
                    className="
                        mx-auto
                        mb-10
                        max-w-[1050px]
                        text-center
                    "
                >

                    <p
                        className="
                            text-[8px]
                            font-medium
                            tracking-[0.35em]
                            text-[#727979]
                        "
                    >
                        DESCUBRE LA BARRA
                    </p>

                </div>


                <CocktailCarousel />

            </section>


            {/* =====================================================
                CARTA
            ===================================================== */}

            <section
                className="
                    px-6
                    pb-28
                    md:px-12
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[900px]
                    "
                >

                    <CocktailSection
                        number="01"
                        title="Cócteles Nómada"
                        cocktails={[
                            {
                                name: "PISCO SOUR NÓMADA",
                                description:
                                    "Pisco, Spicy Mango, Habanero y Lima.",
                                price: "8€",
                            },
                            {
                                name: "MEXA-JAPO NÓMADA",
                                description:
                                    "Mezcal, Yuzu, Spicy, Habanero y Lima.",
                                price: "9€",
                            },
                            {
                                name: "MOSCOW MULE",
                                description:
                                    "Vodka, Ginger Beer y Lima.",
                                price: "8€",
                            },
                            {
                                name: "LITCHY",
                                description:
                                    "Ginebra, Yuzu, Hibiscus y Licor Litchy.",
                                price: "7€",
                                alcoholFree: true,
                            },
                        ]}
                    />


                    <CocktailSection
                        number="02"
                        title="Clásicos"
                        cocktails={[
                            {
                                name: "SPRITZ 0.0",
                                description:
                                    "Cóctel sin alcohol.",
                                price: "6€",
                                alcoholFree: true,
                            },
                            {
                                name: "MOJITO",
                                description:
                                    "Clásico mojito.",
                                price: "8€",
                            },
                        ]}
                    />

                </div>

            </section>


            {/* =====================================================
                RESERVAS
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
                    NÓMADA
                </p>


                <h2
                    className="
                        mt-5
                        font-serif
                        text-[34px]
                        font-light
                        text-white
                        md:text-[44px]
                    "
                >
                    Nos vemos en la barra
                </h2>


                <div
                    className="
                        mx-auto
                        mt-7
                        h-[1px]
                        w-8
                        bg-[#00a8c7]
                    "
                />


                <p
                    className="
                        mx-auto
                        mt-7
                        max-w-[520px]
                        text-[11px]
                        leading-6
                        text-white/60
                    "
                >
                    Descubre nuestra carta de cócteles y déjate llevar
                    por los sabores de Nómada.
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
                        transition-all
                        duration-300
                        hover:bg-[#008eaa]
                    "
                >
                    RESERVAR MESA

                    <span className="text-[16px]">
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