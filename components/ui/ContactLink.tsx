import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type ContactLinkProps = {
    onClick: () => void;
};

export default function ContactLink({ onClick }: ContactLinkProps) {
    const t = useTranslations("ContactLink");

    return (
        <Link
            href="/#contact"
            className="group relative min-w-40 overflow-hidden rounded-full bg-action px-4 py-2 text-action-ink
            transition duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={onClick}
        >
            <span
                className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full
                bg-action-hover transition-transform duration-500 ease-out group-hover:scale-[18]"
                aria-hidden="true"
            />
            <span className="relative z-10 flex flex-row items-center justify-center gap-2 text-nowrap">
                {t("label")}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-4" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg>
            </span>
        </Link>
    );
}
