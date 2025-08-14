export const BaseHero = `---
interface IHero {
    h1:string;
    h2:string;
    link_1: { label:string, path:string };
    link_2: { label:string, path:string }
}

const { h1, h2, link_1, link_2  } = Astro.props as IHero
---

<section class="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div class="w-full max-w-[900px] flex flex-col items-center justify-center px-5 gap-12">
        <h1 class="text-4xl md:text-6xl font-bold text-center text-black dark:text-white">{h1}</h1>
        <h2 class="text-black/80 dark:text-white/80 text-xl md:text-2xl text-center">{h2}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 text-black/80 dark:text-white/80 gap-6 w-full md:max-w-[500px]">
            <a 
                class="dark:bg-white bg-black text-white dark:text-black font-semibold text-center py-3 rounded-2xl transition-all duration-200
                hover:bg-black/90 dark:hover:bg-white/90" 
                aria-label={link_1.label} 
                href={link_1.path}>
                {link_1.label}
            </a>
            <a 
                class="dark:bg-white/5 font-semibold text-center py-3 rounded-2xl border dark:border-white/10 border-black/15 transition-all duration-200
                hover:bg-black/3 dark:hover:bg-white/8" 
                aria-label={link_2.label} 
                href={link_2.path}>
                {link_2.label}
            </a>
        </div>
    </div>
</section>`;
