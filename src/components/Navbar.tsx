"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BookingLink } from "./BookingLink";

const links = [
  { name: "Serviços", href: "#servicos" },
  { name: "Processo", href: "#processo" },
  { name: "Localização", href: "#localizacao" },
];

export function Navbar() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  function close() {
    dialog.current?.close();
  }
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const changed = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", changed);
    return () => {
      document.body.style.overflow = previous;
      desktop.removeEventListener("change", changed);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Lavajato do Paulinho, início"
        >
          <Image src="/logo.jpg" width={48} height={48} alt="" />
          <span>
            <small>Lavajato do</small>
            <strong>
              Paulinho<span className="brand-dot">.</span>
            </strong>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
        <BookingLink className="nav-booking">Agendar lavagem</BookingLink>
        <button
          ref={opener}
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => {
            dialog.current?.showModal();
            setOpen(true);
          }}
        >
          <Menu aria-hidden="true" />
        </button>
      </div>
      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-menu"
        aria-label="Menu de navegação"
        onClose={() => {
          setOpen(false);
          opener.current?.focus();
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const focusable = Array.from(
            dialog.current?.querySelectorAll<HTMLElement>(
              "a[href], button:not([disabled])",
            ) ?? [],
          );
          if (!focusable.length) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
      >
        <div className="mobile-menu-top">
          <span>
            Lavajato do <strong>Paulinho</strong>
          </span>
          <button
            className="icon-button"
            onClick={close}
            aria-label="Fechar menu"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Navegação mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.name}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <BookingLink />
        <p>
          Av. Brasil Norte, 1310
          <br />
          Cidade Jardim, Anápolis
        </p>
      </dialog>
    </header>
  );
}
