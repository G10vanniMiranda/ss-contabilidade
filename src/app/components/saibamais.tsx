
import Link from 'next/link';

export default function SaibaMAisButton() {
    return (
        <Link
            href="https://wa.me/5569993533868"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-8 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition focus:outline-none focus:ring-4 focus:ring-blue-400/40"
        >
            Fale com um Especialista
        </Link>
    );
}