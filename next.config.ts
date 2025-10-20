import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com'], // Asegúrate de que sea 'i.imgur.com' y no solo 'imgur.com'
  },
};

module.exports = nextConfig;