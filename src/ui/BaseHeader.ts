export const BaseHeader = `---
import { Image } from "astro:assets";

type TLink = { label: string; path: string };
type TLogo = { metadata: ImageMetadata; alt: string };

interface IHeader {
    links: TLink[];
    title: string;
    logo?: TLogo;
}

const { links, title, logo } = Astro.props as IHeader;
---

<header
    class="w-full fixed top-0 left-0 z-50 flex items-center justify-center h-16 border-b border-b-black/10 bg-white dark:bg-black dark:border-b-white/10" 
>
    <div class="w-full max-w-[1200px] flex justify-between px-6 md:px-3">
        <a href="/" class="flex items-center justify-center gap-3">
            {
                logo && (
                    <Image
                        src={logo.metadata}
                        alt="Company logo"
                        width={40}
                        height={logo.metadata.height}
                        format="png"
                        quality={100}
                        loading="eager"
                        decoding="sync"
                    />
                )
            }
            <p class="font-bold text-xl text-black dark:text-white">{title}</p>
        </a>

        <ul class="md:flex z-50 md:gap-5 md:border-none font-semibold md:items-center md:static md:translate-0 md:flex-row md:w-max justify-center bg-white dark:bg-black
        w-[100vw] gap-2 absolute bottom-0 translate-y-[100%] left-0 flex-col py-4 items-start px-5 hidden border-y border-black/16 dark:border-white/10">
            {
                links.map((item) => (
                    <li
                        class=" text-black/70 dark:text-white/80 transition-all duration-200 md:hover:bg-transparent md:p-0 md:w-max
        hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 w-full p-2 cursor-pointer"
                    >
                        <a aria-label={item.label} href={item.path}>{item.label}</a>
                    </li>
                ))
            }
        </ul>

        <div class="flex items-center justify-center ga-5">
            <button
                aria-label="dark-mode-toggle"
                class="cursor-pointer transition-all duration-200 hover:dark:bg-white/20 hover:bg-black/3 p-2 rounded"
                id="dark-toggle"
            >
                <svg
                    class="dark:text-white text-black hidden dark:block"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
                    <g stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="1" x2="12" y2="4"></line>
                        <line x1="12" y1="20" x2="12" y2="23"></line>
                        <line x1="1" y1="12" x2="4" y2="12"></line>
                        <line x1="20" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line>
                        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"
                        ></line>
                        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line>
                        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line>
                    </g>
                </svg>

                <svg
                class="dark:text-white text-black dark:hidden block"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8z"
                />
            </svg>

            </button>

        <button 
            id="menu-btn" 
            class="flex flex-col md:hidden gap-1 p-2 cursor-pointer transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/20"
            aria-label="Open menu" 
            aria-expanded="false"
        >
            <span class="block h-1 w-6 bg-black dark:bg-white transition-all"></span>
            <span class="block h-1 w-6 bg-black dark:bg-white transition-all"></span>
            <span class="block h-1 w-6 bg-black dark:bg-white transition-all"></span>
        </button>

        </div>
    </div>
</header>

<script>
  function initialize() {
    const e = document.documentElement;
    const theme = localStorage.getItem('theme') || null;

    if (theme) {
      e.className = theme;
    } else {
      e.classList.remove('dark');
    }

    const D = document.getElementById('dark-toggle');
    const menu = document.querySelector('header ul');
    const menuBtn = document.getElementById('menu-btn');

    if (D && menu && menuBtn) {
      D.onclick = () => {
        e.classList.toggle('dark');
        localStorage.setItem('theme', e.className.length > 0 ? e.className : '');
      };
     
      menuBtn.onclick = () => {
        const isOpen = menu.classList.toggle("hidden");
        menuBtn.setAttribute("aria-expanded", String(!isOpen));
      }
    }
  }

  initialize();
</script>
`;
