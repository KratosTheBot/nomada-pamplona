import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="relative z-50 mx-auto flex w-full max-w-[1400px] items-start justify-between px-8 py-5 lg:px-14">

            {/* LOGO */}
            <Link href="/" className="block">
                <Image
                    src="/images/main/Logo.png"
                    alt="Nómada"
                    width={170}
                    height={80}
                    priority
                    className="h-auto w-[145px] object-contain"
                />
            </Link>


            {/* =====================================================
                NAVEGACIÓN DESKTOP
            ===================================================== */}
            <nav className="hidden items-center gap-10 pt-5 md:flex">

                {/* =================================================
                    INICIO
                ================================================= */}
                <div className="group relative">

                    <Link
                        href="/"
                        className="text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                    >
                        INICIO
                    </Link>

                </div>


                {/* =================================================
                    CARTA
                ================================================= */}
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

                    {/* Dropdown */}
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


                {/* =================================================
                    MENÚS
                ================================================= */}
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

                    {/* Dropdown */}
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


                {/* =================================================
                    EXPERIENCIA
                ================================================= */}
                <div className="group relative">

                    <Link
                        href="/gift"
                        className="flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                    >
                        REGALA NÓMADA
                    </Link>

                </div>

                <div className="group relative">

                    <Link
                        href="/about"
                        className="flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                    >
                        SOBRE NOSOTROS
                    </Link>

                </div>

                <div className="group relative">

                    <Link
                        href="/contact"
                        className="flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-white transition-opacity hover:opacity-60"
                    >
                        CONTACTO
                    </Link>

                </div>

            </nav>


            {/* =====================================================
                MENÚ MÓVIL
            ===================================================== */}
            <button
                type="button"
                className="mt-4 flex flex-col gap-1.5 md:hidden"
                aria-label="Abrir menú"
            >
                <span className="h-px w-7 bg-white" />
                <span className="h-px w-7 bg-white" />
                <span className="h-px w-5 self-end bg-white" />
            </button>

        </header>
    );
}