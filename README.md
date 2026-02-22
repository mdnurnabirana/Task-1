# ZaviSoft - Frontend Implementation Task

Pixel-perfect **Next.js** implementation of the provided Figma design.

**Live Demo:** [https://zavisoft-zeta.vercel.app/](https://zavisoft-zeta.vercel.app/)  
**Figma Design:** [https://www.figma.com/design/tL4Vl3H0y0XE5N7aqvvlE2/Frontend-task](https://www.figma.com/design/tL4Vl3H0y0XE5N7aqvvlE2/Frontend-task)

---

## Routes

- `/` → Home / Landing Page (product listing + featured sections)  
- `/products/[id]` → Product Detail Page  
- `/cart` → Cart Page (bonus – local state implementation)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Data Fetching:** Axios  
- **State Management:** React Context API (for Cart)  
- **Others:** Framer Motion, Swiper, react-hot-toast, react-icons, react-loader-spinner

---

## Features

- Fully **responsive** (mobile + desktop)  
- **API integration** for products & categories (Platzi Fake Store)  
- **Loading / Empty / Error states** implemented  
- **Cart functionality**: add/remove items, persists in local storage (bonus)  
- **Minimal animations & transitions** for enhanced UX (bonus)  
- Clean, modular component structure with meaningful commits  

---

## API Endpoints

- **Products:** [https://fakeapi.platzi.com/en/rest/products/](https://fakeapi.platzi.com/en/rest/products/)  
- **Categories:** [https://fakeapi.platzi.com/en/rest/categories/](https://fakeapi.platzi.com/en/rest/categories/)

---

## Notes

- Everything except **products/categories** is static, based on Figma design  
- Cart is **frontend-only** using local Context (no backend)  
- UI includes **loading, error, and empty states** for better user experience  

---

**Submitted by:** Md. Nurnabi Rana
