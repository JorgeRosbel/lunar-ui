export const PricingCards = `---
interface TServiceCard {
    title:string;
    description:string;
    price:string;
    features: string[];
    button_text:string;
}

interface IServicesForms {
    h2:string;
    h3:string;
    cards: TServiceCard[];
}

const { h2, h3, cards  } = Astro.props as IServicesForms;

---
<section class="w-full flex items-center justify-center flex-col gap-5 my-10">
    <h2 class="text-3xl font-semibold text-black dark:text-white">{h2}</h2>
    <h3 class="text-[1.2rem] text-black/80 dark:text-white/80 max-w-[700px] text-center">{h3}</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 gap-8 w-full max-w-[1200px] my-5">
        {
            cards.map(card => 
                <article
                class="flex flex-col gap-3 min-h-[400px] py-4 px-6
                        border-[2px] border-black/30 dark:border-white/30 rounded-[10px]
                        hover:border-black dark:hover:border-white 
                        transition-all duration-200
                        hover:-translate-y-[10px] group 
                        hover:shadow-[2px_3px_20px_rgba(0,0,0,0.3)]
                        dark:hover:shadow-[2px_3px_20px_rgba(255,255,255,0.3)]"
                >
                <p
                    class="relative w-max font-bold text-[1.8rem]
                        bg-clip-text text-transparent
                        bg-gradient-to-b from-black to-black/40 group-hover:to-black/80
                        dark:from-white dark:to-white/40 dark:group-hover:to-white/80
                        before:absolute before:bottom-[-5px] before:left-0
                        before:w-full before:h-[3px]
                        before:bg-gradient-to-r 
                        before:from-white/20 before:via-black before:to-white/20
                        dark:before:from-black/20 dark:before:via-white dark:before:to-black/20"
                >
                    {card.title}
                </p>

                <p class="text-[1rem] text-black/70 dark:text-white/70 mt-3">
                    {card.description}
                </p>

                <p class="mt-8 flex inline-fex items-center gap-1
                            font-bold text-3xl text-black dark:text-white"
                >
                    {card.price}
                    <span class="text-[0.8rem] text-black/50 dark:text-white/60">
                    /month
                    </span>
                </p>

                <ul class="flex flex-col gap-1">
                    {card.features.map(feat => 
                    <li
                        class="relative pl-4 text-[0.9rem] font-semibold leading-[20px]
                            text-black dark:text-white
                            before:absolute before:left-0
                            before:w-[10px] before:h-[10px]
                            before:bg-black dark:before:bg-white
                            before:translate-y-1/2"
                    >
                        {feat}
                    </li>
                    )}
                </ul>

                <div class="h-full flex flex-col justify-end items-center py-4">
                    <button
                    id={card.title}
                    class="min-w-[90%] max-w-[90%] py-3 rounded cursor-pointer
                            text-[0.9rem] font-semibold
                            bg-black text-white
                            dark:bg-white dark:text-black
                            transition-colors duration-200
                            hover:bg-black/85 dark:hover:bg-white/85"
                    >
                    {card.button_text}
                    </button>
                </div>
                </article>
            )
        }
    </div>
</section>
`;
