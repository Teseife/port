"use client"
import { useScroll, useTransform, motion } from "motion/react"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface TimelineEntry {
    title: string
    content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            setHeight(rect.height)
        }
    }, [ref])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <div className="flex items-center gap-6 mb-8">
                    {/* Circular Profile Picture */}

                    <div>
                        <h2 className="text-lg md:text-4xl mb-2 text-neutral-900 dark:text-white max-w-4xl">
                            Changelog from my journey
                        </h2>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm mr-4">
                            Hi, I'm Thomas Seife. I was born and raised in Ethiopia, where I spent the first 14 years of my life before moving to the U.S. for school. Since then, I've been actively involved in numerous academic and personal projects. My fascination with technology began the moment I encountered a laptop in the 3rd grade, sparking a lifelong passion for understanding how things work and leading me to pursue a career in computer science.
                        </p>

                    </div>
                    <div className="relative h-20 w-40 md:h-35 md:w-35 rounded-full overflow-hidden ring-2 ring-neutral-200 dark:ring-neutral-700 ml-10">
                        <Image
                            src="./images/about-images/profile.png"
                            alt="Profile Picture"
                            fill
                            style={{
                                objectFit: "cover",
                                // tweak these percentages to focus on the exact part of the image:
                                objectPosition: "40% 110%",
                                transform: "scale(1.3)",
                            }}
                            className="transition-transform duration-500"
                        />
                    </div>



                </div>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-600 dark:text-neutral-400">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-600 dark:text-neutral-400">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
                >
                    {/*<motion.div*/}
                    {/*    style={{*/}
                    {/*        height: heightTransform,*/}
                    {/*        opacity: opacityTransform,*/}
                    {/*    }}*/}
                    {/*    className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-yellow-300 dark:from-red-700 via-blue-500 dark:via-purple-500/50 to-transparent"*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    )
}