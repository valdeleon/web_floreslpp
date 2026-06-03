"use client"; // Necesario en Next.js para usar animaciones e interactividad del lado del cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FLORES_CATALOGO = [
  {
    id: 1,
    nombre: "Ramo de Girasoles Eternos",
    descripcion: "Hermoso ramo de girasoles hechos a mano, ideal para regalar.",
    precio: "$15.00",
    imagen: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    nombre: "Tulipanes de Colores",
    descripcion: "Tulipanes individuales o en ramo del color que más te guste.",
    precio: "$12.00",
    imagen: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    nombre: "Ramo de Rosas Premium",
    descripcion: "Rosas detalladas con limpiapipas de alta calidad que durarán para siempre.",
    precio: "$20.00",
    imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60"
  }
];

// Configuración de la animación base al hacer scroll
const animacionScroll = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

export default function Home() {
  const numeroTelefono = "1234567890"; // Cambialo por tu número real
  const mensajeWhatsapp = encodeURIComponent("¡Hola JFMoments! Me interesan tus hermosas flores de limpiapipas. ¿Me das más información?");
  const enlaceWhatsapp = `https://wa.me/${numeroTelefono}?text=${mensajeWhatsapp}`;

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION (Animación de entrada directa) */}
      <header className="bg-gradient-to-r from-pink-400 to-rose-300 text-white text-center py-24 px-4 shadow-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
            🌸 JFMoments 🌸
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            Flores y ramos artesanales hechos 100% a mano con limpiapipas. El regalo perfecto para capturar instantes eternos.
          </p>
          <a 
            href={enlaceWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-white text-pink-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-pink-100 transition duration-300 transform hover:scale-105"
          >
            Haz tu pedido por WhatsApp
          </a>
        </motion.div>
      </header>

      {/* 2. SECCIÓN SOBRE MÍ / HISTORIA (Se activa al bajar) */}
      <motion.section 
        className="max-w-4xl mx-auto py-20 px-6 text-center"
        variants={animacionScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Se ejecuta solo una vez al alcanzar el 30% de la sección
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Nuestra Historia</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          En <span className="font-semibold text-pink-500">JFMoments</span>, cada flor está diseñada con dedicación, paciencia y mucho amor. 
          Buscamos transformar materiales sencillos en hermosas piezas de arte que alegren 
          tus espacios o se conviertan en un recuerdo inolvidable para alguien especial.
        </p>
      </motion.section>

      {/* 3. CATÁLOGO DE PRODUCTOS */}
      <section className="bg-white py-20 px-6 shadow-inner">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center text-pink-600 mb-12"
            variants={animacionScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Nuestro Catálogo
          </motion.h2>
          
          {/* Tarjetas con animaciones independientes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLORES_CATALOGO.map((flor, index) => (
              <motion.div 
                key={flor.id} 
                className="border border-pink-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }} // Delay escalonado para que aparezcan una por una
              >
                <div className="h-64 overflow-hidden relative bg-gray-100">
                  <Image
                    src={flor.imagen}
                    alt={flor.nombre}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-110 transition duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{flor.nombre}</h3>
                    <p className="text-gray-600 text-sm mb-4">{flor.descripcion}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-extrabold text-pink-600">{flor.precio}</span>
                    <a 
                      href={enlaceWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                      Preguntar
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-pink-600 text-white text-center py-8 px-4">
        <p className="text-sm">© {new Date().getFullYear()} JFMoments - Hecho con amor 🌸</p>
        <p className="text-xs text-pink-200 mt-2">Página web oficial - Catálogo de Flores Eternas</p>
      </footer>

    </div>
  );
}