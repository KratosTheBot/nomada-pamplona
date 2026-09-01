"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [cartaOpen, setCartaOpen] = useState(false);
    const [vinosOpen, setVinosOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setCartaOpen(false);
        setVinosOpen(false);
    };

    return (
        <header className="relative z-50 mx-auto w-full max-w-[1400px] px-8 py-5 lg:px-14">

            {/* =====================================================
                CABECERA
            ===================================================== */}

            <div className="flex items-start justify-between">

                {/* LOGO */}
                <Link href="/" className="block" onClick={closeMenu}>
                    <Image
                        src="/images/main/Logo.png"
                        alt="Nómada"
                        width={170}
                        height={80}
                        priority
                        className="h-auto w-[145px] object-contain"
                    />
                </Link>


                {/* =================================================
                    NAVEGACIÓN DESKTOP
                ================================================= */}

                <nav className="hidden items-center gap-10 pt-5 md:flex">

                    {/* INICIO */}
                    <Link
                        href="/"
                        className="text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                    >
                        INICIO
                    </Link>


                    {/* CARTA */}
                    <div className="group relative">

                        <button
                            type="button"
                            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                        >
                            CARTA & MENU

                            <span className="text-[8px] transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                        </button>

                        <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                            <div className="border-t-2 border-[#00a8c7] bg-[#f5f4f1] py-2 shadow-lg">

                                <Link
                                    href="/carta/mediodia"
                                    className="block px-5 py-3 text-[9px] tracking-[0.15em] text-[#202626] transition-colors hover:bg-[#e8e7e2] hover:text-[#00a8c7]"
                                >
                                    CARTA MEDIODÍA
                                </Link>

                                <Link
                                    href="/menu"
                                    className="block px-5 py-3 text-[9px] tracking-[0.15em] text-[#202626] transition-colors hover:bg-[#e8e7e2] hover:text-[#00a8c7]"
                                >
                                    MENU DEL DIA
                                </Link>

                                <Link
                                    href="/menu/degustacion"
                                    className="block px-5 py-3 text-[9px] tracking-[0.15em] text-[#202626] transition-colors hover:bg-[#e8e7e2] hover:text-[#00a8c7]"
                                >
                                    MENU DEGUSTACIÓN MEDIODÍA
                                </Link>

                                <Link
                                    href="/carta/bocados"
                                    className="block px-5 py-3 text-[9px] tracking-[0.15em] text-[#202626] transition-colors hover:bg-[#e8e7e2] hover:text-[#00a8c7]"
                                >
                                    CARTA NOCHES & BOCADOS
                                </Link>

                            </div>
                        </div>
                    </div>


                    {/* VINOS & CÓCTELES */}
                    <div className="group relative">

                        <button
                            type="button"
                            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                        >
                            VINOS & CÓCTELES

                            <span className="text-[8px] transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                        </button>

                        <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                            <div className="border-t-2 border-[#00a8c7] bg-[#f5f4f1] py-2 shadow-lg">

                                <Link
                                    href="/vinos"
                                    className="block px-5 py-3 text-[9px] tracking-[0.15em] text-[#202626] transition-colors hover:bg-[#e8e7e2] hover:text-[#00a8c7]"
                                >
                                    VINOS
                                </Link>

                                <Link
                                    href="/cocktails"
                                    className="block px-5 py-3 text-[9px] tracking-[0.15em] text-[#202626] transition-colors hover:bg-[#e8e7e2] hover:text-[#00a8c7]"
                                >
                                    CÓCTELES
                                </Link>

                            </div>
                        </div>
                    </div>


                    {/* RESTO */}
                    <Link
                        href="/gift"
                        className="text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                    >
                        REGALA NÓMADA
                    </Link>

                    <Link
                        href="/about"
                        className="text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                    >
                        SOBRE NOSOTROS
                    </Link>

                    <Link
                        href="/contact"
                        className="text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                    >
                        CONTACTO
                    </Link>

                </nav>


                {/* =================================================
                    BOTÓN MÓVIL
                ================================================= */}

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="mt-4 flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                >

                    <span
                        className={`h-px bg-white transition-all duration-300 ${menuOpen
                                ? "w-7 translate-y-[4px] rotate-45"
                                : "w-7"
                            }`}
                    />

                    <span
                        className={`h-px bg-white transition-all duration-300 ${menuOpen
                                ? "w-7 -rotate-45"
                                : "w-7"
                            }`}
                    />

                    <span
                        className={`h-px bg-white transition-all duration-300 ${menuOpen
                                ? "w-0 opacity-0"
                                : "w-5"
                            }`}
                    />

                </button>

            </div>


            {/* =====================================================
                MENÚ MÓVIL
            ===================================================== */}

            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen
                        ? "max-h-[700px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >

                <nav className="mt-8 border-t border-white/20 pb-6 pt-5">

                    {/* INICIO */}
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="block py-4 text-[11px] font-medium tracking-[0.25em] text-white"
                    >
                        INICIO
                    </Link>


                    {/* CARTA */}
                    <div className="border-t border-white/10">

                        <button
                            type="button"
                            onClick={() => setCartaOpen(!cartaOpen)}
                            className="flex w-full items-center justify-between py-4 text-left text-[11px] font-medium tracking-[0.25em] text-white"
                        >
                            <span>CARTA & MENU</span>

                            <span
                                className={`text-[9px] transition-transform duration-300 ${cartaOpen ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>


                        <div
                            className={`overflow-hidden transition-all duration-300 ${cartaOpen
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                        >

                            <Link
                                href="/carta/mediodia"
                                onClick={closeMenu}
                                className="block py-3 pl-5 text-[10px] tracking-[0.15em] text-white/70"
                            >
                                CARTA MEDIODÍA
                            </Link>

                            <Link
                                href="/menu"
                                onClick={closeMenu}
                                className="block py-3 pl-5 text-[10px] tracking-[0.15em] text-white/70"
                            >
                                MENU DEL DIA
                            </Link>

                            <Link
                                href="/menu/degustacion"
                                onClick={closeMenu}
                                className="block py-3 pl-5 text-[10px] tracking-[0.15em] text-white/70"
                            >
                                MENU DEGUSTACIÓN MEDIODÍA
                            </Link>

                            <Link
                                href="/carta/bocados"
                                onClick={closeMenu}
                                className="block py-3 pl-5 text-[10px] tracking-[0.15em] text-white/70"
                            >
                                CARTA NOCHES & BOCADOS
                            </Link>

                        </div>

                    </div>


                    {/* VINOS */}
                    <div className="border-t border-white/10">

                        <button
                            type="button"
                            onClick={() => setVinosOpen(!vinosOpen)}
                            className="flex w-full items-center justify-between py-4 text-left text-[11px] font-medium tracking-[0.25em] text-white"
                        >
                            <span>VINOS & CÓCTELES</span>

                            <span
                                className={`text-[9px] transition-transform duration-300 ${vinosOpen ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>


                        <div
                            className={`overflow-hidden transition-all duration-300 ${vinosOpen
                                    ? "max-h-40 opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                        >

                            <Link
                                href="/vinos"
                                onClick={closeMenu}
                                className="block py-3 pl-5 text-[10px] tracking-[0.15em] text-white/70"
                            >
                                VINOS
                            </Link>

                            <Link
                                href="/cocktails"
                                onClick={closeMenu}
                                className="block py-3 pl-5 text-[10px] tracking-[0.15em] text-white/70"
                            >
                                CÓCTELES
                            </Link>

                        </div>

                    </div>


                    {/* REGALA NÓMADA */}
                    <Link
                        href="/gift"
                        onClick={closeMenu}
                        className="block border-t border-white/10 py-4 text-[11px] font-medium tracking-[0.25em] text-white"
                    >
                        REGALA NÓMADA
                    </Link>


                    {/* SOBRE NOSOTROS */}
                    <Link
                        href="/about"
                        onClick={closeMenu}
                        className="block border-t border-white/10 py-4 text-[11px] font-medium tracking-[0.25em] text-white"
                    >
                        SOBRE NOSOTROS
                    </Link>


                    {/* CONTACTO */}
                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="block border-t border-white/10 py-4 text-[11px] font-medium tracking-[0.25em] text-white"
                    >
                        CONTACTO
                    </Link>

                </nav>

            </div>

        </header>
    );
}

