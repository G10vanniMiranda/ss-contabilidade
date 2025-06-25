
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function SaibaMAisButton() {
    return (
        <Link
            href="https://wa.me/5569993533868"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 bg-zinc-500 text-white rounded-full font-semibold shadow hover:bg-zinc-700 transition"
        >
            Saiba mais
        </Link>
    );
}