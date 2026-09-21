"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

function AccordionRow({ title, content }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e4e4e4] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left hover:opacity-70 transition-opacity"
      >
        <span className="font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[0.15em] text-black">
          {title}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-black/40 shrink-0 ml-4">
          <ChevronDown size={15} />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-[14px] text-black/60 leading-relaxed">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ProductAccordionsProps {
  details: string;
  care: string[];
  shipping: string;
}

export function ProductAccordions({ details, care, shipping }: ProductAccordionsProps) {
  return (
    <div>
      <AccordionRow
        title="Detalles"
        content={<p className="leading-relaxed">{details}</p>}
      />
      <AccordionRow
        title="Guía de Cuidados"
        content={<ul className="space-y-1.5">{care.map((s, i) => <li key={i} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-black/30 shrink-0" />{s}</li>)}</ul>}
      />
      <AccordionRow title="Envíos y Devoluciones" content={<p className="whitespace-pre-line">{shipping}</p>} />
    </div>
  );
}
