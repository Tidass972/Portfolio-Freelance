"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
function LogoColumn({ logos, columnIndex, currentTime }) {
    const CYCLE_DURATION = 2000;
    const columnDelay = columnIndex * 200;
    const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
    const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION) % logos.length;
    const currentLogo = logos[currentIndex];
    if (!currentLogo) {
        return null;
    }
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    };
    return (<motion.div className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
            delay: columnIndex * 0.1,
            duration: 0.5,
            ease: "easeOut",
        }}>
      <AnimatePresence mode="wait">
        <motion.div key={`${currentLogo.id}-${currentIndex}`} className="absolute inset-0 flex items-center justify-center" initial={{ y: "10%", opacity: 0 }} animate={{
            y: "0%",
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
            },
        }} exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
        }}>
          <div className="relative w-full h-full">
            {isValidUrl(currentLogo.src) ? (<Image src={currentLogo.src} alt={currentLogo.name} width={80} height={80} className="object-contain" onError={() => console.error('Failed to load image:', currentLogo.src)} onLoadingComplete={() => console.log('Image loaded:', currentLogo.src)}/>) : (<div className="text-red-500">Invalid image URL</div>)}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>);
}
export function LogoCarousel({ columns = 2, logos = [] }) {
    const validColumns = Math.max(columns, 1);
    const [logoColumns, setLogoColumns] = useState([]);
    const [time, setTime] = useState(0);
    const distributeLogos = useCallback((logos) => {
        const shuffled = [...logos].sort(() => Math.random() - 0.5);
        const result = Array.from({ length: validColumns }, () => []);
        shuffled.forEach((logo, index) => {
            const column = result[index % validColumns];
            if (column) {
                column.push(logo);
            }
        });
        const maxLength = Math.max(...result.map((col) => col.length));
        result.forEach((col) => {
            while (col.length < maxLength && shuffled.length > 0) {
                const randomIndex = Math.floor(Math.random() * shuffled.length);
                const logo = shuffled[randomIndex];
                if (logo) {
                    col.push(logo);
                }
            }
        });
        return result;
    }, [validColumns]);
    useEffect(() => {
        setLogoColumns(distributeLogos(logos));
    }, [logos, distributeLogos]);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev + 100);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (<div className="flex justify-center gap-4 py-8">
      {logoColumns.map((columnLogos, index) => (<LogoColumn key={index} logos={columnLogos} columnIndex={index} currentTime={time}/>))}
    </div>);
}
