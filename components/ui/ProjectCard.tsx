import Image, { type ImageProps } from "next/image"

type ProjectCardProps = {
    description: string,
    duration: string,
    href?: string | null,
    stack: string[],
    src?: ImageProps["src"] | null,
}

export default function ProjectCard({ description, href, duration, stack, src }: ProjectCardProps) {
    return (
        <article className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <p className="dm-mono text-sm uppercase text-black/50">
                        {duration}
                    </p>

                    <p className="max-w-3xl leading-7 text-black/75 text-pretty">
                        {description}
                    </p>
                </div>

                <ul className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <li
                            key={tech}
                            className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>

                {href && (
                    <a href={href} target="_blank" rel="noreferrer"
                        className="mt-4 rounded-full bg-black px-5 py-3 text-white w-max self-start hover:-translate-y-0.5 hover:bg-gray-800 
                        duration-300 flex flex-row items-center gap-2">
                        Live demo
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-4" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg>
                    </a>
                )}
            </div>
            {src && <Image src={src} alt="Project screenshot"
                className="rounded-sm aspect-video object-contain w-full lg:w-3/5 h-auto" />}
        </article>
    )
}
