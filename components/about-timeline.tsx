import { Timeline } from "@/components/ui/timeline"
import {Button} from "@/components/ui/button";


export default function TimelineDemo() {
    const data = [
        {
            title: "Education",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Graduated with a A.A From FSCJ and now set to Graduate with a Bachelors in Computer Science Dec 2025!
                    </p>
                    <div className="grid grid-cols-2 gap-4">

                        <img
                            src="images/about-images/UNF_horizontal_blue.png"
                            alt="UNF logo"
                            className="w-auto h-18 filter brightness-0 invert "

                        />

                        <img
                            src="images/about-images/fscj-logo-hor-white.png"
                            alt="startup template"
                            className="w-auto h-12 filter brightness-0 invert "
                        />

                    </div>
                </div>
            ),
        },
        {
            title: "Hobbies",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        When I am not working on school or personal projects I usually go to the gym or play pickle ball ( Not that good yet! LOL).
                        I also love to bake and I&apos;m  also a passionate car enthusiast! I take some amateur photos of random events around me from time-to-time as well. You can check out my small gallery
                        <Button asChild variant="ghost" size="sm">
                        <a href= "/Gallery"
                           className=" text-blue-400"
                           rel="noopener noreferrer"
                        > here

                        </a>
                    </Button>  if you are interested!
                    </p>

                    <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-neutral-200 ">
                        Hover over the Pie if you want the Recipe!
                    </p>


                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="images/about-images/pie-birds.png"
                                alt="hero template"
                                width={500}
                                height={500}
                                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                            />
                            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                <div className="text-white text-xs md:text-sm space-y-1">
                                    <h4 className="font-semibold text-sm md:text-base">Ingredients</h4>
                                    <ul className="list-disc list-inside">
                                        <li>2 cups fresh cherries (Frozen is fine)</li>
                                        <li>2 cups blueberries (Frozen is fine)</li>
                                        <li>¾ cup sugar</li>
                                        <li>3 tbsp cornstarch</li>
                                        <li>1 tbsp lemon juice</li>
                                        <li>1 tsp vanilla</li>
                                        <li>Pinch of salt</li>
                                        <li>
                                            <Button asChild variant="outline" size="sm">
                                                <a
                                                    href="https://www.food.com/recipe/cherry-blueberry-pie-342242"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    How to make
                                                </a>
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img
                            src="images/about-images/pie-slice.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="images/about-images/denver-snow.JPEG"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="images/about-images/light-rainbow.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        // {
        //     title: "Changelog",
        //     content: (
        //         <div>
        //             <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        //                 Deployed 5 new components on Aceternity today
        //             </p>
        //             <div className="mb-8">
        //                 <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //                     ✅ Card grid component
        //                 </div>
        //                 <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //                     ✅ Startup template Aceternity
        //                 </div>
        //                 <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //                     ✅ Random file upload lol
        //                 </div>
        //                 <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //                     ✅ Himesh Reshammiya Music CD
        //                 </div>
        //                 <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //                     ✅ Salman Bhai Fan Club registrations open
        //                 </div>
        //             </div>
        //             <div className="grid grid-cols-2 gap-4">
        //                 <img
        //                     src="https://assets.aceternity.com/pro/hero-sections.png"
        //                     alt="hero template"
        //                     width={500}
        //                     height={500}
        //                     className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //                 />
        //                 <img
        //                     src="https://assets.aceternity.com/features-section.png"
        //                     alt="feature template"
        //                     width={500}
        //                     height={500}
        //                     className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //                 />
        //                 <img
        //                     src="https://assets.aceternity.com/pro/bento-grids.png"
        //                     alt="bento template"
        //                     width={500}
        //                     height={500}
        //                     className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //                 />
        //                 <img
        //                     src="https://assets.aceternity.com/cards.png"
        //                     alt="cards template"
        //                     width={500}
        //                     height={500}
        //                     className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //                 />
        //             </div>
        //         </div>
        //     ),
        // },
    ]
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    )
}
