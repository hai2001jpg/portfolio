type ThemeToggleProps = {
    onToggle: () => void;
};

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
    return (
        <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-lg transition-colors duration-300 hover:bg-surface-hover cursor-pointer"
            aria-label="Toggle color theme"
            onClick={onToggle}
        >
            <svg aria-hidden="true" className="theme-icon-sun size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
            <svg aria-hidden="true" className="theme-icon-moon size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.35 15.35A9 9 0 0 1 8.65 3.65a9 9 0 1 0 11.7 11.7Z" />
            </svg>
        </button>
    );
}
