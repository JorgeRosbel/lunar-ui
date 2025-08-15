export const GlowStatsCards = `---
type TCard = { value:string | number; text:string }

interface ICardsProps {
    data: TCard[];
} 

const { data } = Astro.props as ICardsProps;

---


<section class="w-full flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1200px] gap-5 px-3">
        {
            data.map(item => 
                <article class="flex relative flex-col gap-8 p-5 items-center justify-center rounded-[1em] min-h-40
                transition-all duration-200">
                    <span class="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-b from-black to-black/40 dark:from-white dark:to-white/40 blur-xl lef-1/2 -translate-y-1/2 absolute">{item.value}</span>
                    <span class="font-bold relative hover:scale-115 transition-all duration-200 text-6xl text-transparent bg-clip-text bg-gradient-to-b from-black to-black/40 dark:from-white dark:to-white/40
                    before:absolute before:bottom-[-10px] before:w-full before:h-[3px] before:bg-gradient-to-r before:from-black/10 before:via-black before:to-black/10
                    dark:before:from-white/10 dark:before:via-white dark:before:to-white/10">
                        {item.value}
                    </span>
                    <span class="text-black/80 dark:text-white/80 text-[1.1rem] font-semibold uppercase">{item.text}</span>
                </article>
            )
        }
    </div>
</section>`;
