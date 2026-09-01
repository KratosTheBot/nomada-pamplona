"use client";

import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


type Wine = {
    name: string;
    description: string;
    price: string;
};


type WineSectionProps = {
    number: string;
    title: string;
    wines: Wine[];
};


/* =========================================================
   SECCIÓN DE VINOS
========================================================= */

function WineSection({
    number,
    title,
    wines,
}: WineSectionProps) {

    return (
        <section className="mb-20 md:mb-24">

            {/* CABECERA DE CATEGORÍA */}

            <div className="mb-5 flex items-end gap-5">

                <span
                    className="
                        font-serif
                        text-[12px]
                        font-light
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


            {/* VINOS */}

            <div>

                {wines.map((wine, index) => (

                    <article
                        key={`${wine.name}-${index}`}
                        className="
                            group
                            border-b
                            border-[#d9d9d4]
                            py-7
                            transition-colors
                            duration-300
                            hover:bg-[#eeede9]
                        "
                    >

                        <div
                            className="
                                flex
                                items-start
                                justify-between
                                gap-6
                                px-3
                                md:px-5
                            "
                        >

                            {/* INFORMACIÓN */}

                            <div className="min-w-0">

                                <h3
                                    className="
                                        font-serif
                                        text-[19px]
                                        font-medium
                                        leading-[1.3]
                                        text-[#202626]
                                        transition-colors
                                        duration-300
                                        group-hover:text-[#00a8c7]
                                        md:text-[21px]
                                    "
                                >
                                    {wine.name}
                                </h3>


                                <p
                                    className="
                                        mt-2
                                        font-serif
                                        text-[11px]
                                        italic
                                        leading-5
                                        text-[#727979]
                                    "
                                >
                                    {wine.description}
                                </p>

                            </div>


                            {/* PRECIO */}

                            <div
                                className="
                                    shrink-0
                                    pt-1
                                    font-serif
                                    text-[17px]
                                    font-light
                                    text-[#202626]
                                    md:text-[19px]
                                "
                            >
                                {wine.price}
                            </div>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}


/* =========================================================
   PÁGINA CARTA DE VINOS
========================================================= */

export default function CartaVinos() {

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
                    src="/images/main/vinos.jpg"
                    alt="Carta de vinos Nómada"
                    fill
                    priority
                    className="
                        object-cover
                        object-center
                    "
                />


                {/* OSCURECER */}

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
                                tracking-[0.4em]
                                text-[#00a8c7]
                            "
                        >
                            NÓMADA
                        </p>


                        <h1
                            className="
                                mt-5
                                font-serif
                                text-[48px]
                                font-light
                                leading-[1.05]
                                text-white
                                md:text-[68px]
                            "
                        >
                            Carta
                            <br />
                            de vinos
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
                            VINOS · TERRITORIO · VIAJE
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
                        max-w-[750px]
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
                        NUESTRA SELECCIÓN
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
                        Un viaje a través del vino
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
                            max-w-[620px]
                            text-[11px]
                            leading-[2]
                            text-[#626969]
                        "
                    >
                        Una selección de vinos que recorre diferentes
                        territorios, variedades y formas de entender
                        el vino. Desde Navarra hasta los grandes clásicos
                        nacionales, con propuestas para acompañar cada
                        momento de la experiencia Nómada.
                    </p>

                </div>

            </section>


            {/* =====================================================
                CARTA
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
                        max-w-[900px]
                    "
                >


                    {/* =================================================
                        ESPUMOSOS
                    ================================================= */}

                    <WineSection
                        number="01"
                        title="Espumosos"
                        wines={[
                            {
                                name: "LETE-VAUTRAIN",
                                description:
                                    "«Brut Millesime · Pinot noir, Pinot meunier, Chardonnay» · Champagne",
                                price: "58€",
                            },
                            {
                                name: "JULIA BERNET Ú",
                                description:
                                    "«Brut nature» · Xarel·lo ecológico · Corpinnat",
                                price: "26€",
                            },
                            {
                                name: "KIMERA ESPUMOSO ANCESTRAL",
                                description:
                                    "«Garnatxa blanca» · Navarra",
                                price: "24€",
                            },
                        ]}
                    />


                    {/* =================================================
                        BLANCOS
                    ================================================= */}

                    <WineSection
                        number="02"
                        title="Blancos"
                        wines={[
                            {
                                name: "IRACHE 1891",
                                description:
                                    "«Chardonnay» · Navarra",
                                price: "9,80€",
                            },
                            {
                                name: "ORQUIDEA",
                                description:
                                    "«Sauvignon blanc» · Navarra",
                                price: "18€",
                            },
                            {
                                name: "PAGO DE CIRSUS",
                                description:
                                    "«Chardonnay» · Navarra",
                                price: "21€",
                            },
                            {
                                name: "PAGOS DE GALIR",
                                description:
                                    "«Godello» · Valedoras",
                                price: "24€",
                            },
                            {
                                name: "BERMEJO MALVASIA SECO",
                                description:
                                    "«Malvasia» · Lanzarote",
                                price: "31€",
                            },
                            {
                                name: "HIRUTZA TXAKOLI",
                                description:
                                    "«Hondarribi zuri» · Txakoli",
                                price: "22€",
                            },
                            {
                                name: "FRIZZANTE BORNOS",
                                description:
                                    "«Verdejo» · Rueda",
                                price: "23€",
                            },
                        ]}
                    />


                    {/* =================================================
                        ROSADOS
                    ================================================= */}

                    <WineSection
                        number="03"
                        title="Rosados"
                        wines={[
                            {
                                name: "IRACHE 1891",
                                description:
                                    "«Tempranillo» · Navarra",
                                price: "9,80€",
                            },
                            {
                                name: "LA HUELLA DE AITANA CUVE",
                                description:
                                    "Navarra",
                                price: "29€",
                            },
                        ]}
                    />


                    {/* =================================================
                        TINTOS
                    ================================================= */}

                    <WineSection
                        number="04"
                        title="Tintos"
                        wines={[
                            {
                                name: "IRACHE ROBLE 1891",
                                description:
                                    "«Tempranillo» · Navarra",
                                price: "9,80€",
                            },
                            {
                                name: "KIMERA",
                                description:
                                    "«Garnacha» · Navarra",
                                price: "19€",
                            },
                            {
                                name: "AZPILICUETA ORIGEN",
                                description:
                                    "«Tempranillo» · Rioja",
                                price: "36€",
                            },
                            {
                                name: "LA CRUCICA",
                                description:
                                    "«Tempranillo» · Navarra",
                                price: "15,60€",
                            },
                            {
                                name: "PSI",
                                description:
                                    "«Tempranillo» · Ribera del Duero",
                                price: "49€",
                            },
                            {
                                name: "TARSUS CRIANZA",
                                description:
                                    "«Tinto país»",
                                price: "39€",
                            },
                            {
                                name: "SAN ROMÁN",
                                description:
                                    "«Tinta de Toro» · Toro",
                                price: "48€",
                            },
                            {
                                name: "MAURO",
                                description:
                                    "«Tempranillo, Syrah» · Ribera del Duero",
                                price: "48€",
                            },
                            {
                                name: "BIKOTE",
                                description:
                                    "«Garnacha» · Navarra",
                                price: "26€",
                            },
                            {
                                name: "MIMAO",
                                description:
                                    "«Garnacha» · Navarra",
                                price: "22€",
                            },
                            {
                                name: "MANCUSO",
                                description:
                                    "«Garnacha» · Cariñena",
                                price: "22€",
                            },
                            {
                                name: "ARTUKE PIES NEGROS",
                                description:
                                    "«Tempranillo» · Rioja",
                                price: "22,50€",
                            },
                            {
                                name: "CONTINO RV",
                                description:
                                    "«Tempranillo, Garnacha» · Rioja",
                                price: "39€",
                            },
                        ]}
                    />


                    {/* =================================================
                        SIDRA
                    ================================================= */}

                    <WineSection
                        number="05"
                        title="Sidra"
                        wines={[
                            {
                                name: "SAGARDOA / SIDRA EUSKAL SAGARDOA",
                                description:
                                    "Guipúzcoa",
                                price: "9€",
                            },
                        ]}
                    />

                </div>

            </section>


            {/* =====================================================
                FRASE FINAL
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
                        mx-auto
                        mt-5
                        max-w-[650px]
                        font-serif
                        text-[34px]
                        font-light
                        leading-[1.25]
                        text-white
                        md:text-[44px]
                    "
                >
                    Cada vino tiene un lugar,
                    <br />
                    cada lugar tiene una historia.
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
                        max-w-[500px]
                        text-[10px]
                        leading-6
                        text-white/60
                    "
                >
                    Déjate aconsejar por nuestro equipo y encuentra
                    el vino que mejor acompañe tu experiencia.
                </p>

            </section>


            {/* =====================================================
                RESERVAS
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
                    Ven a descubrirnos
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
                    Cocina, vino y una experiencia para dejarse llevar.
                </p>

            </section>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />

        </main>

    );
}