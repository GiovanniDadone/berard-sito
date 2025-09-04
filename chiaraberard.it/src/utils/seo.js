// src/utils/seo.js
import { useEffect, useRef } from 'react';

export const useSEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  keywords,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  locale = 'it_IT',
  author = 'Chiara Berard',
  publishedTime,
  modifiedTime,
  siteName = 'Chiara Berard - Valle d\'Aosta Aperta'
}) => {
  // Ref per tenere traccia degli elementi creati dinamicamente
  const createdElements = useRef(new Set());

  useEffect(() => {
    // Pulisci elementi precedenti per evitare duplicati
    createdElements.current.forEach(element => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    createdElements.current.clear();

    // Aggiorna il title della pagina
    if (title) {
      document.title = title;
    }

    // Funzione per creare o aggiornare meta tag
    const updateOrCreateMeta = (name, content, isProperty = false) => {
      if (!content) return;
      
      const attribute = isProperty ? 'property' : 'name';
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
        createdElements.current.add(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Funzione per creare o aggiornare link tag
    const updateOrCreateLink = (rel, href, attributes = {}) => {
      if (!href) return;
      
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        Object.entries(attributes).forEach(([key, value]) => {
          link.setAttribute(key, value);
        });
        document.head.appendChild(link);
        createdElements.current.add(link);
      }
      
      link.setAttribute('href', href);
    };

    // Meta tag base SEO
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('keywords', keywords);
    updateOrCreateMeta('author', author);
    updateOrCreateMeta('robots', 'index,follow');
    updateOrCreateMeta('language', locale);
    
    // Open Graph meta tags
    updateOrCreateMeta('og:title', title, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:image', ogImage, true);
    updateOrCreateMeta('og:url', canonical || window.location.href, true);
    updateOrCreateMeta('og:type', ogType, true);
    updateOrCreateMeta('og:locale', locale, true);
    updateOrCreateMeta('og:site_name', siteName, true);
    
    // Meta tag specifici per articoli (utile per comunicati stampa elettorali)
    if (ogType === 'article') {
      updateOrCreateMeta('article:author', author, true);
      updateOrCreateMeta('article:published_time', publishedTime, true);
      updateOrCreateMeta('article:modified_time', modifiedTime, true);
    }

    // Twitter Card meta tags
    updateOrCreateMeta('twitter:card', twitterCard, true);
    updateOrCreateMeta('twitter:title', title, true);
    updateOrCreateMeta('twitter:description', description, true);
    updateOrCreateMeta('twitter:image', ogImage, true);

    // Link canonico
    updateOrCreateLink('canonical', canonical || window.location.href);
    
    // Preconnect per ottimizzare il caricamento di immagini esterne
    if (ogImage && ogImage.startsWith('http')) {
      try {
        const imageUrl = new URL(ogImage);
        updateOrCreateLink('preconnect', imageUrl.origin);
      } catch (error) {
        console.warn('Invalid ogImage URL:', ogImage);
      }
    }

    // Cleanup function per rimuovere elementi quando il componente si smonta
    return () => {
      createdElements.current.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      createdElements.current.clear();
    };
  }, [title, description, canonical, ogImage, keywords, ogType, twitterCard, locale, author, publishedTime, modifiedTime, siteName]);
};

// Hook per aggiungere dati strutturati JSON-LD
export const useStructuredData = (structuredData) => {
  const scriptRef = useRef();

  useEffect(() => {
    // Rimuovi script precedente se esistente
    if (scriptRef.current && scriptRef.current.parentNode) {
      scriptRef.current.parentNode.removeChild(scriptRef.current);
    }

    if (!structuredData) return;

    // Crea nuovo script con dati strutturati
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, [structuredData]);
};

// Hook per gestire favicon dinamico
export const useFavicon = (faviconUrl) => {
  useEffect(() => {
    if (!faviconUrl) return;

    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconUrl;
    
    if (!link.parentNode) {
      document.head.appendChild(link);
    }
  }, [faviconUrl]);
};