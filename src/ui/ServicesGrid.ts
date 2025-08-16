export const ServicesGrid = `---
interface IService {
    title:string;
    description:string;
    list: string[];
    action:string;
}

interface IServiceSection {
    h2:string;
    h3:string;
    cards:IService[];
}

const { h2, h3, cards } = Astro.props as IServiceSection;
---



<section class="w-full flex flex-col items-center justify-center gap-3">
    <h2 class="text-3xl font-bold text-black dark:text-white">{h2}</h2>
    <h3 class="text-[1.2rem] text-black/80 dark:text-white/80 max-w-[700px] text-center mb-10">{h3}</h3>

    <div class="w-full max-w-[1200px] px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 my-5">
        {
            cards.map((card,index) => 
                <article class="px-5 group py-6 relative border-[2px] border-black/30 dark:border-white/30 rounded min-h-[400px] flex flex-col justify-between
                        hover:border-black dark:hover:border-white 
                        transition-all duration-200 before:absolute before:h-7 before:w-7 before:bg-black/20 dark:before:bg-white/20  before:top-0 before:right-0 before:-translate-y-1/2
                        before:translate-x-1/2 before:rotate-45">
                    <span class="bg-black text-white dark:bg-white text-xl dark:text-black top-[-14px] z-30 left-[-14px] w-10 h-10 p-5 rounded-full absolute font-bold flex items-center justify-center">
                        {!(index >=9 )? "0" + (index+1): index + 1}
                    </span>
                    <p class="mt-5 font-bold text-2xl my-3 text-black dark:text-white">{card.title}</p>
                    <p class="text-black/80 dark:text-white/80 text-[1.05rem]">{card.description}</p>
                    <ul class="flex flex-col gap-1 py-5">
                        { card.list.map(item => <li class="relative pl-4 text-[1rem] font-semibold leading-[20px]
                            text-black dark:text-white
                            before:absolute before:left-0
                            before:w-[10px] before:h-[10px]
                            before:bg-black dark:before:bg-white before:rounded-full
                            before:translate-y-1/2">{item}</li>) }
                    </ul>
                    <div class="flex items-center justify-between border-t-[2px] pt-3 border-black/10 dark:border-white/20">
                        <p class="relative text-black dark:text-white w-full before:absolute before:top-1/2 before:right-0 before:w-10 before:h-1 before:bg-black/70 dark:before:bg-white/70 before:transition-all before:duration-200 group-hover:before:w-15">
                            {card.action}
                        </p>
                    </div>
                </article>
            )
        }
    </div>

</section>`;
