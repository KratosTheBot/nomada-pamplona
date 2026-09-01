"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";


type Dish = {
    name: string;
    allergens?: number[];
};


const allergens: Record<number, string> = {
    1: "Gluten",
    2: "Crustáceos",
    3: "Huevos",
    4: "Pescado",
    5: "Cacahuetes",
    6: "Soja",
    7: "Lácteos",
    8: "Frutos secos",
    9: "Apio",
    10: "Mostaza",
    11: "Granos de sésamo",
    12: "Dióxido de azufre y sulfitos",
    13: "Moluscos",
    14: "Altramuces",
};


/* =========================================================
   ALÉRGENOS
========================================================= */

function AllergenTags({
    items = [],
}: {
    items?: number[];
}) {

    const [showInfo, setShowInfo] = useState(false);

    if (!items.length) return null;

    return (
        <div className="relative mt-3">

            {/* TAGS */}

            <div
                className="flex flex-wrap gap-1.5"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >

                {items.map((id) => (

                    <span
                        key={id}
                        className={`
                            flex
                            h-6
                            min-w-6
                            cursor-help
                            items-center
                            justify-center
                            border
                            px-1.5
                            text-[7px]
                            font-medium
                            transition-all
                            duration-200
                            ${showInfo
                                ? "border-[#00a8c7] bg-[#00a8c7] text-white"
                                : "border-[#bfc4c2] text-[#697171]"
                            }
                        `}
                    >
                        {id}
                    </span>

                ))}

            </div>


            {/* PANEL */}

            {showInfo && (

                <div
                    className="
                        absolute
                        left-0
                        top-full
                        z-40
                        mt-2
                        w-[250px]
                        border
                        border-[#d7d8d3]
                        bg-[#202626]
                        p-4
                        shadow-xl
                    "
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                >

                    <p
                        className="
                            text-[7px]
                            font-semibold
                            tracking-[0.25em]
                            text-[#00a8c7]
                        "
                    >
                        ALÉRGENOS
                    </p>


                    <div className="mt-3 space-y-2">

                        {items.map((id) => (

                            <div
                                key={id}
                                className="flex items-center gap-3"
                            >

                                <span
                                    className="
                                        flex
                                        h-5
                                        w-5
                                        shrink-0
                                        items-center
                                        justify-center
                                        border
                                        border-[#00a8c7]
                                        text-[7px]
                                        text-[#00a8c7]
                                    "
                                >
                                    {id}
                                </span>

                                <span
                                    className="
                                        text-[9px]
                                        text-white/80
                                    "
                                >
                                    {allergens[id]}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            )}

        </div>
    );
}


/* =========================================================
   PLATO DEL MENÚ
========================================================= */

function MenuDish({
    dish,
}: {
    dish: Dish;
}) {

    return (

        <article
            className="
                group
                border-b
                border-[#d9d9d4]
                py-6
                last:border-b-0
            "
        >

            <div className="flex items-start gap-6">

                {/* Decoración */}

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


                {/* Plato */}

                <div>

                    <h3
                        className="
                            font-serif
                            text-[20px]
                            font-light
                            leading-[1.3]
                            text-[#202626]
                            transition-colors
                            duration-300
                            group-hover:text-[#00a8c7]
                        "
                    >
                        {dish.name}
                    </h3>


                    <AllergenTags
                        items={dish.allergens}
                    />

                </div>

            </div>

        </article>

    );
}


/* =========================================================
   SECCIÓN DEL MENÚ
========================================================= */

function MenuSection({
    number,
    title,
    dishes,
}: {
    number: string;
    title: string;
    dishes: Dish[];
}) {

    return (

        <section className="mb-16">

            {/* CABECERA */}

            <div className="mb-4 flex items-end gap-5">

                <span
                    className="
                        font-serif
                        text-[13px]
                        font-light
                        text-[#00a8c7]
                    "
                >
                    {number}
                </span>


                <h2
                    className="
                        font-serif
                        text-[30px]
                        font-light
                        leading-none
                        text-[#202626]
                        md:text-[36px]
                    "
                >
                    {title}
                </h2>

            </div>


            <div className="h-[1px] bg-[#202626]" />


            {/* PLATOS */}

            <div>

                {dishes.map((dish, index) => (

                    <MenuDish
                        key={`${dish.name}-${index}`}
                        dish={dish}
                    />

                ))}

            </div>

        </section>

    );
}


/* =========================================================
   PÁGINA
========================================================= */

export default function MenuDia() {

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
                "
            >

                <Image
                    src="/images/main/interior3.jpg"
                    alt="Menú del día Nómada"
                    fill
                    priority
                    className="object-cover object-center"
                />


                {/* OSCURECER IMAGEN */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/55
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
                        relative
                        z-10
                        flex
                        h-full
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
                                tracking-[0.35em]
                                text-[#00a8c7]
                            "
                        >
                            NÓMADA RESTAURANTE
                        </p>


                        <h1
                            className="
                                mt-5
                                font-serif
                                text-[48px]
                                font-light
                                leading-[1.05]
                                text-white
                                md:text-[64px]
                            "
                        >
                            Menú
                            <br />
                            del día
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
                                text-[10px]
                                tracking-[0.15em]
                                text-white/80
                            "
                        >
                            COCINA DE TEMPORADA · PRODUCTO · TRADICIÓN
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRO
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
                        DE LUNES A VIERNES
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
                        El menú de Nómada
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
                            max-w-[650px]
                            text-[11px]
                            leading-[1.9]
                            text-[#626969]
                        "
                    >
                        Una propuesta que cambia con la temporada y que
                        reúne nuestra forma de entender la cocina:
                        producto, tradición y un pequeño viaje por el mundo.
                    </p>

                </div>

            </section>


            {/* =====================================================
                MENÚ
            ===================================================== */}

            <section
                className="
                    px-6
                    pb-20
                    md:px-12
                    md:pb-28
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[900px]
                    "
                >


                    {/* =================================================
                        PRIMEROS
                    ================================================= */}

                    <MenuSection
                        number="01"
                        title="Primeros platos"
                        dishes={[
                            {
                                name:
                                    "Cogollos de Tudela a la brasa con vinagreta de queso azul, nueces y anchoas.",
                                allergens: [4, 7, 8],
                            },
                            {
                                name:
                                    "Menestra de verduras de temporada.",
                            },
                            {
                                name:
                                    "Falso arroz de calamar con ali-oli de lima.",
                                allergens: [1, 3, 13],
                            },
                            {
                                name:
                                    "Ensaladilla estilo Nómada con caviar de lumpo y chips de boniato.",
                                allergens: [3, 4, 7],
                            },
                        ]}
                    />


                    {/* =================================================
                        SEGUNDOS
                    ================================================= */}

                    <MenuSection
                        number="02"
                        title="Segundos platos"
                        dishes={[
                            {
                                name:
                                    "Merluza a la cosquera.",
                                allergens: [4],
                            },
                            {
                                name:
                                    "Sepia a la plancha con ali-oli y patatas panaderas.",
                                allergens: [3, 13],
                            },
                            {
                                name:
                                    "Picaña de vaca madurada con chimichurri y patatas.",
                            },
                            {
                                name:
                                    "Cordero de Navarra al chilindrón.",
                                allergens: [12],
                            },
                        ]}
                    />


                    {/* =================================================
                        POSTRES
                    ================================================= */}

                    <MenuSection
                        number="03"
                        title="Postres"
                        dishes={[
                            {
                                name:
                                    "Fresas con chantilly de vainilla y teja de pan dulce.",
                                allergens: [1, 3, 7],
                            },
                            {
                                name:
                                    "Macedonia de frutas con helado de mango.",
                                allergens: [7],
                            },
                            {
                                name:
                                    "Tarta de queso con helado de frambuesa.",
                                allergens: [1, 3, 7],
                            },
                        ]}
                    />

                </div>

            </section>


            {/* =====================================================
                PRECIO DEL MENÚ
            ===================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-[#202626]
                    px-6
                    py-20
                    text-center
                "
            >

                {/* Decoración */}

                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        h-[1px]
                        w-20
                        -translate-x-1/2
                        bg-[#00a8c7]
                    "
                />


                <p
                    className="
                        text-[9px]
                        font-semibold
                        tracking-[0.35em]
                        text-[#00a8c7]
                    "
                >
                    MENÚ COMPLETO
                </p>


                <div
                    className="
                        mt-5
                        font-serif
                        text-[54px]
                        font-light
                        leading-none
                        text-white
                    "
                >
                    22,50€
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
                        max-w-[600px]
                        text-[10px]
                        leading-6
                        text-white/70
                    "
                >

                    <p>
                        Pan (incluye el primer servicio), agua o vino
                        y gaseosa incluidos.
                    </p>

                </div>


                {/* HORARIO */}

                <div
                    className="
                        mx-auto
                        mt-8
                        flex
                        max-w-[500px]
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        border-t
                        border-white/10
                        pt-7
                    "
                >

                    <p
                        className="
                            text-[8px]
                            font-semibold
                            tracking-[0.25em]
                            text-[#00a8c7]
                        "
                    >
                        HORARIO
                    </p>


                    <p
                        className="
                            text-[10px]
                            text-white/70
                        "
                    >
                        Lunes a viernes · 13:30 — 16:00
                    </p>


                    <p
                        className="
                            mt-1
                            text-[8px]
                            italic
                            text-white/40
                        "
                    >
                        Excepto festivos
                    </p>

                </div>

            </section>


            {/* =====================================================
                ALÉRGENOS
            ===================================================== */}

            <section
                className="
                    border-t
                    border-[#d9d9d4]
                    bg-[#eeede9]
                    px-6
                    py-16
                    md:px-12
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-[1000px]
                    "
                >

                    <div className="text-center">

                        <p
                            className="
                                text-[8px]
                                font-semibold
                                tracking-[0.3em]
                                text-[#00a8c7]
                            "
                        >
                            INFORMACIÓN
                        </p>


                        <h2
                            className="
                                mt-3
                                font-serif
                                text-[29px]
                                font-light
                            "
                        >
                            Alérgenos
                        </h2>


                        <div
                            className="
                                mx-auto
                                mt-5
                                h-[1px]
                                w-8
                                bg-[#00a8c7]
                            "
                        />

                    </div>


                    <div
                        className="
                            mx-auto
                            mt-9
                            grid
                            max-w-[900px]
                            grid-cols-2
                            gap-x-8
                            gap-y-3
                            sm:grid-cols-3
                            md:grid-cols-4
                        "
                    >

                        {Object.entries(allergens).map(
                            ([id, name]) => (

                                <div
                                    key={id}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <span
                                        className="
                                            flex
                                            h-6
                                            w-6
                                            shrink-0
                                            items-center
                                            justify-center
                                            border
                                            border-[#bfc4c2]
                                            text-[7px]
                                            text-[#596161]
                                        "
                                    >
                                        {id}
                                    </span>


                                    <span
                                        className="
                                            text-[9px]
                                            text-[#626969]
                                        "
                                    >
                                        {name}
                                    </span>

                                </div>

                            )
                        )}

                    </div>


                    <p
                        className="
                            mx-auto
                            mt-9
                            max-w-[700px]
                            text-center
                            text-[8px]
                            leading-5
                            text-[#888e8e]
                        "
                    >
                        Si tienes alguna alergia o intolerancia alimentaria,
                        por favor, comunícaselo a nuestro equipo antes de
                        realizar tu pedido.
                    </p>

                </div>

            </section>


            {/* =====================================================
                RESERVAS
            ===================================================== */}

            <section
                className="
                    bg-[#151c1c]
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
                        text-white
                        md:text-[42px]
                    "
                >
                    Reserva tu mesa
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
                        max-w-[520px]
                        text-[11px]
                        leading-6
                        text-white/60
                    "
                >
                    Disfruta de nuestro menú del día y déjate llevar
                    por el viaje gastronómico de Nómada.
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

            <footer
                className="
                    bg-[#101616]
                    px-6
                    py-10
                    text-center
                "
            >

                <Image
                    src="/images/main/Logo.png"
                    alt="Nómada Restaurante"
                    width={120}
                    height={55}
                    className="
                        mx-auto
                        w-[100px]
                        opacity-75
                    "
                />


                <p
                    className="
                        mt-5
                        text-[7px]
                        tracking-[0.2em]
                        text-white/30
                    "
                >
                    © {new Date().getFullYear()} NÓMADA · TODOS LOS DERECHOS
                    RESERVADOS
                </p>

            </footer>

        </main>
    );
}