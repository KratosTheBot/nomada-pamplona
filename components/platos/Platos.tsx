import Image from "next/image";
import Link from "next/link";
export default function Platos() {
    return (
        <div>

            {/* =========================================================
          PLATOS QUE HABLAN
          ========================================================= */}
            <section
                id="carta"
                className="bg-[#f5f4f1] px-4 py-5 sm:px-8"
            >

                <div className="mx-auto max-w-[1400px]">

                    {/* Título */}
                    <div className="mb-3 text-center">
                        <p className="text-[9px] font-semibold tracking-[0.35em] text-[#00a8c7]">
                            PLATOS QUE HABLAN
                        </p>
                    </div>

                    {/* Galería */}
                    <div className="grid grid-cols-2 gap-[3px] md:grid-cols-4">

                        <div className="group relative aspect-[1.45/1] overflow-hidden">
                            <Image
                                src="/images/main/degustacion.jpg"
                                alt="Plato Nómada"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="group relative aspect-[1.45/1] overflow-hidden">
                            <Image
                                src="/images/main/bao.jpg"
                                alt="Plato Nómada"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="group relative aspect-[1.45/1] overflow-hidden">
                            <Image
                                src="/images/main/carrilleras.jpeg"
                                alt="Plato Nómada"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        <div className="group relative aspect-[1.45/1] overflow-hidden">
                            <Image
                                src="/images/main/falso.jpeg"
                                alt="Plato Nómada"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                    </div>

                    {/* Instagram */}
                    <div className="flex justify-center pt-4">
                        <Link
                            href="https://www.instagram.com/nomada_pamplona"
                            className="group flex items-center gap-3 text-[9px] font-medium tracking-[0.2em] text-[#4e5555] transition-colors hover:text-[#00a8c7]"
                        >
                            VER MÁS EN INSTAGRAM

                            <span className="flex h-[15px] w-[15px] items-center justify-center rounded-[4px] border border-[#687070] text-[8px] transition-colors group-hover:border-[#00a8c7]">
                                ◎
                            </span>
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    )
}
