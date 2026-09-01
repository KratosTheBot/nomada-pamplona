"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import Footer from "@/components/footer/Footer";

type Dish = {
    name: string;
    price: string;
    description?: string;
    allergens?: number[];
    note?: string;
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
   TAGS DE ALÉRGENOS
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


            {/* =================================================
                PANEL ÚNICO
            ================================================= */}
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

                    <p className="text-[7px] font-semibold tracking-[0.25em] text-[#00a8c7]">
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
                                        flex h-5 w-5 shrink-0
                                        items-center justify-center
                                        border border-[#00a8c7]
                                        text-[7px]
                                        text-[#00a8c7]
                                    "
                                >
                                    {id}
                                </span>

                                <span className="text-[9px] text-white/80">
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
        <article className="group border-b border-[#d9d9d4] py-7 last:border-b-0">

            <div className="flex items-start justify-between gap-8">

                {/* Información */}
                <div className="min-w-0">

                    <h3
                        className="
                            font-serif
                            text-[21px]
                            font-light
                            leading-[1.15]
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
                                max-w-[430px]
                                text-[10px]
                                leading-[1.75]
                                text-[#666d6d]
                            "
                        >
                            {dish.description}
                        </p>
                    )}


                    {dish.note && (
                        <p
                            className="
                                mt-2
                                text-[9px]
                                italic
                                leading-5
                                text-[#858b8b]
                            "
                        >
                            {dish.note}
                        </p>
                    )}


                    {/* ALÉRGENOS */}
                    <AllergenTags items={dish.allergens} />

                </div>


                {/* Precio */}
                <span
                    className="
                        shrink-0
                        whitespace-nowrap
                        font-serif
                        text-[20px]
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

            {/* Cabecera */}
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


            {/* Platos */}
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
   PÁGINA
   ========================================================= */

export default function CartaMediodia() {
    return (
        <main className="min-h-screen bg-[#f5f4f1] text-[#202626]">


            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative h-[500px] overflow-hidden">

                <Image
                    src="/images/main/interior3.jpg"
                    alt="Carta mediodía Nómada"
                    fill
                    priority
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/55" />


                {/* NAVBAR */}

                <div className="absolute left-0 top-0 z-50 w-full">

                    <Navbar />

                </div>


                {/* HERO CONTENT */}

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
                            Carta
                            <br />
                            mediodía
                        </h1>


                        <div className="mx-auto mt-7 h-[1px] w-9 bg-[#00a8c7]" />


                        <p
                            className="
                                mt-5
                                text-[10px]
                                tracking-[0.15em]
                                text-white/80
                            "
                        >
                            COCINA QUE VIAJA · SABORES QUE SE QUEDAN
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="px-6 py-20 md:px-12 md:py-24">

                <div className="mx-auto max-w-[850px] text-center">

                    <p
                        className="
                            text-[9px]
                            font-semibold
                            tracking-[0.35em]
                            text-[#00a8c7]
                        "
                    >
                        NUESTRA CARTA
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
                        Un viaje a través del sabor
                    </h2>


                    <div className="mx-auto mt-6 h-[1px] w-8 bg-[#00a8c7]" />


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
                        Una carta que une producto, tradición y diferentes
                        culturas gastronómicas. Platos pensados para compartir,
                        descubrir y disfrutar.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CARTA
            ===================================================== */}

            <section className="px-6 pb-20 md:px-12 md:pb-28">

                <div className="mx-auto max-w-[1150px]">

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-x-16
                            lg:grid-cols-2
                        "
                    >

                        {/* =================================================
                            IZQUIERDA
                        ================================================= */}

                        <div>

                            <MenuSection
                                number="01"
                                title="Entrantes"
                                dishes={[
                                    {
                                        name: "Cecina de vaca Angus",
                                        price: "22€",
                                        description:
                                            "Con pan de cristal y almendras.",
                                        allergens: [1, 8],
                                    },
                                    {
                                        name: "Ensalada Nómada",
                                        price: "15€",
                                        description:
                                            "Queso azul, manzana caramelizada, jamón de pato y nueces.",
                                        allergens: [7, 8, 10],
                                    },
                                    {
                                        name: "Croquetas de cocido Euskal-Txerri",
                                        price: "14€",
                                        description:
                                            "6 unidades.",
                                        allergens: [1, 3, 7],
                                    },
                                    {
                                        name: "Croquetas de jamón ibérico",
                                        price: "12€",
                                        description:
                                            "6 unidades.",
                                        allergens: [1, 3, 7],
                                    },
                                    {
                                        name: "Pulpo a la parrilla",
                                        price: "27€",
                                        description:
                                            "Con patatas Cambray al mojo picón y mayonesa de pimentón.",
                                        allergens: [3, 7, 13],
                                    },
                                ]}
                            />


                            <MenuSection
                                number="02"
                                title="Un viaje por el mundo"
                                dishes={[
                                    {
                                        name: "Pan Bao",
                                        price: "14€",
                                        description:
                                            "3 unidades. Papada ibérica a la parrilla con mayonesa de Kimchi, col y Teriyaki.",
                                        allergens: [1, 3, 4, 5, 6, 8],
                                    },
                                    {
                                        name: "Tacos de atún rojo",
                                        price: "16€",
                                        description:
                                            "3 unidades. A la parrilla con guacamole, pico de gallo, mayonesa chipotle y Takis.",
                                        allergens: [1, 3, 6, 7],
                                    },
                                    {
                                        name: "Sushi Crispy",
                                        price: "14€",
                                        description:
                                            "3 unidades. De salmón, mayonesa japonesa, eneldo y aguacate.",
                                        allergens: [1, 3, 4, 6, 8],
                                    },
                                    {
                                        name: "Ceviche de corvina estilo peruano",
                                        price: "17€",
                                        description:
                                            "Choclo frito, camote y chips de plátano.",
                                        allergens: [1, 4],
                                    },
                                ]}
                            />

                        </div>


                        {/* =================================================
                            DERECHA
                        ================================================= */}

                        <div>

                            <MenuSection
                                number="03"
                                title="De tradición"
                                dishes={[
                                    {
                                        name: "Tataki de atún rojo a la parrilla",
                                        price: "22€",
                                        description:
                                            "Con crema de romescu, brocolini y salsa de naranja.",
                                        allergens: [4, 8],
                                    },
                                    {
                                        name: "Merluza del Cantábrico",
                                        price: "19€",
                                        description:
                                            "Con almejas en salsa verde.",
                                        allergens: [2, 4, 13],
                                    },
                                    {
                                        name: "Solomillo de vaca madurada",
                                        price: "26€",
                                        description:
                                            "Patatas fritas, pimientos del piquillo y salsa demi-glace.",
                                        allergens: [1],
                                        note: "Supl. escalope de foie +3€",
                                    },
                                    {
                                        name: "Carrillera de ternera guisada",
                                        price: "19€",
                                        description:
                                            "Al vino tinto con cremoso de patata trufada.",
                                        allergens: [7, 12],
                                    },
                                    {
                                        name: "Magret de pato",
                                        price: "21€",
                                        description:
                                            "Sobre puré de camote, salsa de vino Oporto, cebolletas glaseadas y triguero.",
                                        allergens: [7],
                                    },
                                ]}
                            />


                            <MenuSection
                                number="04"
                                title="Arroces y pastas"
                                dishes={[
                                    {
                                        name: "Falso arroz de pulpo y gambón",
                                        price: "18€",
                                        description:
                                            "Con ali-oli.",
                                        allergens: [1, 2, 3, 4, 13],
                                        note: "Para 2 personas",
                                    },
                                    {
                                        name: "Arroz a la Llauna",
                                        price: "34€",
                                        description:
                                            "De calamar, carabinero y cangrejo en tempura con ali-oli de lima.",
                                        allergens: [1, 2, 3, 13],
                                    },
                                    {
                                        name: "Canelones de pato gratinados",
                                        price: "18€",
                                        description:
                                            "Sobre salsa demi-glace.",
                                        allergens: [1, 3, 7],
                                    },
                                ]}
                            />

                        </div>

                    </div>


                    {/* =================================================
                        POSTRES
                    ================================================= */}

                    <div className="mx-auto max-w-[600px]">

                        <MenuSection
                            number="05"
                            title="Dulce tentación"
                            dishes={[
                                {
                                    name: "Tarta de queso",
                                    price: "7€",
                                    description:
                                        "Con helado de frambuesa.",
                                    allergens: [1, 3, 7],
                                },
                                {
                                    name: "Torrija",
                                    price: "7,50€",
                                    description:
                                        "Caramelizada con helado de caramelo salado.",
                                    allergens: [1, 3, 7],
                                },
                                {
                                    name: "Brownie de chocolate y nueces",
                                    price: "7,50€",
                                    description:
                                        "Con helado de vainilla.",
                                    allergens: [1, 3, 7, 8],
                                },
                                {
                                    name: "Canutillos de Dubai",
                                    price: "8€",
                                    description:
                                        "Relleno de crema de pistacho y chocolate blanco con helado de chocolate negro.",
                                    allergens: [1, 3, 7, 8],
                                },
                                {
                                    name: "Sorbete daiquiri de mango",
                                    price: "7€",
                                    description: "",
                                    allergens: [3, 6, 7, 8],
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


                        <div className="mx-auto mt-5 h-[1px] w-8 bg-[#00a8c7]" />

                    </div>


                    {/* LISTADO */}

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
                CTA
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
                    Reserva tu mesa
                </h2>


                <div className="mx-auto mt-6 h-[1px] w-8 bg-[#00a8c7]" />


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
                    Ven a descubrir nuestra carta y disfruta de un viaje
                    gastronómico por diferentes rincones del mundo.
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