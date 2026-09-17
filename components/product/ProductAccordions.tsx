"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface ProductAccordionsProps {
  luxury: string[];
  packaging: string;
  care: string[];
  shipping: string;
}

function AccordionRow({ title, content }: AccordionItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#2A2A2A] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E8E3D9]">
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#E8E3D9]/50 shrink-0"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-sm text-[#E8E3D9]/60 leading-relaxed">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProductAccordions({ luxury, packaging, care, shipping }: ProductAccordionsProps) {
  const items: AccordionItem[] = [
    {
      title: "Especificaciones de Lujo Técnico",
      content: (
        <ul className="space-y-2">
          {luxury.map((spec, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#E8E3D9]/30 mt-0.5">✦</span>
              {spec}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Empaque Inflable de Protección",
      content: <p>{packaging}</p>,
    },
    {
      title: "Guía de Cuidados",
      content: (
        <ul className="space-y-2">
          {care.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#E8E3D9]/30 mt-0.5">—</span>
              {step}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Envío y Devoluciones",
      content: <p>{shipping}</p>,
    },
  ];

  return (
    <div className="border-t border-[#2A2A2A]">
      {items.map((item) => (
        <AccordionRow key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
