"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

type Dish = {
    name: string;
    price: string;
    description?: string;
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
        <div className="relative mt-4">

            {/* Tags */}
            <div
                className="flex flex-wrap gap-1.5"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >
                {items.map((id) => (
                    <span
                        key={id}
                        className={`
                            flex h-6 min-w-6 cursor-help
                            items-center justify-center
                            border px-1.5
                            text-[7px] font-medium
                            transition-all duration-200
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


            {/* Panel único */}
            {showInfo && (
                <div
                    className="
                        absolute
                        left-0
                        top-full
                        z-40
                        mt-2
                        w-[260px]
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
   PLATO
========================================================= */

function DishCard({
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
                py-7
                last:border-b-0
            "
        >

            <div className="flex items-start justify-between gap-8">

                {/* Información */}
                <div className="min-w-0">

                    <h3
                        className="
                            font-serif
                            text-[20px]
                            font-light
                            leading-[1.2]
                            text-[#202626]
                            transition-colors
                            duration-300
                            group-hover:text-[#00a8c7]
                        "
                    >
                        {dish.name}
                    </h3>


                    {dish.description && (
                        <p
                            className="
                                mt-3
                                max-w-[470px]
                                text-[10px]
                                leading-[1.75]
                                text-[#666d6d]
                            "
                        >
                            {dish.description}
                        </p>
                    )}


                    <AllergenTags items={dish.allergens} />

                </div>


                {/* Precio */}
                <span
                    className="
                        shrink-0
                        whitespace-nowrap
                        font-serif
                        text-[19px]
                        font-light
                        text-[#202626]
                    "
                >
                    {dish.price}
                </span>

            </div>

        </article>
    );
}


/* =========================================================
   SECCIÓN
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
        <section className="mb-20">

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


            <div>

                {dishes.map((dish, index) => (
                    <DishCard
                        key={`${dish.name}-${index}`}
                        dish={dish}
                    />
                ))}

            </div>

        </section>
    );
}


/* =========================================================
   PÁGINA CARTA NOCHE
========================================================= */

export default function CartaNoche() {
    return (
        <main className="min-h-screen bg-[#f5f4f1] text-[#202626]">


            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative h-[500px] overflow-hidden">

                <Image
                    src="/images/main/interior3.jpg"
                    alt="Carta noches y bocados Nómada"
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


                {/* HERO */}

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
                                text-[46px]
                                font-light
                                leading-[1.05]
                                text-white
                                md:text-[62px]
                            "
                        >
                            Carta
                            <br />
                            noches & bocados
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
                            PARA COMPARTIR · PARA DESCUBRIR · PARA DISFRUTAR
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="px-6 py-20 md:px-12 md:py-24">

                <div
                    className="
                        mx-auto
                        max-w-[850px]
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
                        NÓMADA DE NOCHE
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
                        Noches para viajar
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
                        Bocados inspirados en diferentes rincones del mundo,
                        producto de aquí y sabores que invitan a compartir.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CARTA
            ===================================================== */}

            <section className="px-6 pb-20 md:px-12 md:pb-28">

                <div className="mx-auto max-w-[1150px]">


                    {/* =================================================
                        BOCADOS
                    ================================================= */}

                    <MenuSection
                        number="01"
                        title="Noches & bocados"
                        dishes={[
                            {
                                name:
                                    "Ensaladilla estilo Nómada con caviar de lumpo, anchoas de Santoña y crujiente de boniato",
                                price: "13,50€",
                                allergens: [1, 3, 4, 7],
                            },
                            {
                                name:
                                    "Tiradito de atún rojo con salsa de soja y jengibre",
                                price: "12€",
                                description:
                                    "Cama fina de alga wakame y kikos.",
                                allergens: [4, 5, 6, 11],
                            },
                            {
                                name:
                                    "Patatas bravas con mahonesa de chipotle",
                                price: "8,50€",
                                allergens: [3],
                            },
                            {
                                name:
                                    "Croquetas de jamón ibérico",
                                price: "12€",
                                allergens: [1, 3, 7],
                            },
                            {
                                name:
                                    "Nachos tex-mex Nómada",
                                price: "14€",
                                allergens: [7],
                            },
                            {
                                name:
                                    "Manitas de ministro en tempura con mayonesa de piparras",
                                price: "16€",
                                allergens: [1, 3],
                            },
                            {
                                name:
                                    "Huevo a baja temperatura con espuma de patata trufada, lascas de jamón ibérico y patata paja",
                                price: "14€",
                                allergens: [3, 7],
                            },
                            {
                                name:
                                    "Gyozas japonesas de cocido madrileño, sus sacramentos y su consomé al miso rojo",
                                price: "14€",
                                allergens: [1, 6, 7, 9],
                            },
                            {
                                name: "Pan Bao",
                                price: "14€",
                                description:
                                    "Costilla de cerdo mechada con salsa barbacoa de hoisin y mayonesa picante.",
                                allergens: [1, 3, 6],
                            },
                            {
                                name: "Baja Fish Tacos",
                                price: "14€",
                                description:
                                    "Bacalao en tempura, mayonesa de chipotle y pico de gallo.",
                                allergens: [1, 3, 4],
                            },
                            {
                                name:
                                    "Nuestra versión de pulpo a la gallega",
                                price: "15€",
                                description:
                                    "Pan rústico con rabas de calamar, ali-oli de ajo negro y cebolleta china.",
                                allergens: [1, 3, 13],
                            },
                            {
                                name:
                                    "Hamburguesa de vaca madurada",
                                price: "17€",
                                description:
                                    "Pan brioche, queso cheddar, guacamole, jalapeños y bacon.",
                                allergens: [1, 3, 7],
                            },
                            {
                                name:
                                    "Hamburguesa de vaca madurada con pan rústico",
                                price: "17€",
                                description:
                                    "Queso de Roncal, salsa de pimiento del piquillo, rúcula y bacon.",
                                allergens: [1, 7],
                            },
                        ]}
                    />


                    {/* =================================================
                        POSTRES
                    ================================================= */}

                    <div className="mx-auto max-w-[650px]">

                        <MenuSection
                            number="02"
                            title="Postres"
                            dishes={[
                                {
                                    name:
                                        "Plato de queso de Roncal con membrillo y nueces",
                                    price: "8,50€",
                                    allergens: [7, 8],
                                },
                                {
                                    name:
                                        "Torrija caramelizada con helado de leche merengada",
                                    price: "7,50€",
                                    allergens: [1, 3, 7],
                                },
                                {
                                    name:
                                        "Brownie de chocolate y nueces con helado de vainilla",
                                    price: "7,50€",
                                    allergens: [1, 3, 7, 8],
                                },
                                {
                                    name:
                                        "Tarta de queso con helado de frambuesa",
                                    price: "7€",
                                    allergens: [1, 3, 7],
                                },
                            ]}
                        />

                    </div>

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

                <div className="mx-auto max-w-[1000px]">

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
                                    className="flex items-center gap-3"
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

            <section className="bg-[#1d2626] px-6 py-20 text-center">

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
                    Tu mesa te espera
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
                    Ven a compartir, descubrir nuevos sabores y disfrutar
                    de Nómada cuando cae la noche.
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


            <Footer />


        </main>
    );
}