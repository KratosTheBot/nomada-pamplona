import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            {/* =========================================================
          FOOTER
      ========================================================= */}
            <footer className="bg-[#171e1e] px-6 py-12 text-white">

                <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">

                    {/* Logo */}
                    <div>
                        <Image
                            src="/images/main/Logo.png"
                            alt="Nómada"
                            width={150}
                            height={70}
                            className="mx-auto w-[130px] md:mx-0"
                        />
                    </div>

                    {/* Dirección */}
                    <div>
                        <p className="text-[9px] font-semibold tracking-[0.3em] text-[#00a8c7]">
                            ENCUÉNTRANOS
                        </p>

                        <p className="mt-3 text-xs leading-6 text-white/70">
                            Calle Abejeras 51, Pamplona, Navarra
                            <br />
                            España
                        </p>
                    </div>

                    {/* Contacto */}
                    <div>
                        <p className="text-[9px] font-semibold tracking-[0.3em] text-[#00a8c7]">
                            CONTACTO
                        </p>

                        <p className="mt-3 text-xs leading-6 text-white/70">
                            <Link
                                href="https://www.instagram.com/nomada_pamplona"
                                className="group flex items-center gap-3 text-[9px] font-medium tracking-[0.2em] text-[#ffffff] transition-colors hover:text-[#00a8c7]"
                            >
                                INSTAGRAM

                            </Link>
                        </p>
                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-[1200px] border-t border-white/10 pt-5 text-center">
                    <p className="text-[8px] tracking-[0.2em] text-white/30">
                        © {new Date().getFullYear()} NÓMADA · TODOS LOS DERECHOS RESERVADOS
                    </p>
                </div>

            </footer>
        </div>
    )
}
