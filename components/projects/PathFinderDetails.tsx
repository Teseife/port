// components/projects/PathFinderDetails.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function PathFinderDetails() {
    return (
        <div className="space-y-8">
            {/* 1. Overview */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    1. Overview
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    <strong>Path-Finder in Grid World</strong> visualizes classic pathfinding algorithms on a 2D grid with obstacles and weighted “turf” regions. Users select BFS, DFS, Greedy Best-First, or A* to see step-by-step exploration and the resulting optimal path.
                </p>
            </div>

            {/* 2. A* Algorithm Demo */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    2. A* Algorithm Demo
                </h3>
                <div className="mt-2 flex justify-center">
                    <Image
                        src="./images/path-finder-card-images/pathfinder-a-star.png"
                        alt="A* path from start to finish"
                        width={700}
                        height={400}
                        className="rounded-md shadow-md"
                    />
                </div>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    In this example, A* uses a Manhattan heuristic to expand nodes and finds the shortest route (red line) from the start point (Blue point) to the goal (Red point), avoiding obstacles (black) and minimizing weighted turf costs (green).
                </p>
            </div>

            {/* 3. Key Features */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    3. Key Features
                </h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-900 dark:text-gray-100">
                    <li>Configurable grid with custom obstacle (“enclosure”) and turf files.</li>
                    <li>Real-time Matplotlib rendering of node expansion and solution path.</li>
                    <li>Switch between BFS, DFS, Greedy Best-First Search, and A* instantly.</li>
                    <li>Weighted movement: turf areas incur higher cost than open cells.</li>
                </ul>
            </div>

            {/* 4. Tech Stack & Usage */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    4. Tech Stack & Usage
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    Built in Python with <em>Matplotlib</em> for visualization and
                      <em>NumPy</em> for grid computations. Run locally:
                </p>
                <pre className="mt-2 bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm text-gray-800 dark:text-gray-200">
          git clone https://github.com/Teseife/Path-Finder-in-Grid-World.git{"\n"}
                    cd Path-Finder-in-Grid-World{"\n"}
                    pip install matplotlib numpy{"\n"}
                    python search.py
        </pre>
            </div>

            {/* 5. GitHub Link */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    5. GitHub Repository
                </h3>
                <div className="mt-2">
                    <Button asChild variant="outline" className="inline-flex items-center">
                        <a
                            href="https://github.com/Teseife/Path-Finder-in-Grid-World"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-gray-900 dark:text-gray-100"
                        >
                            <Image
                                src="./icons/github.svg"
                                alt="GitHub icon"
                                width={20}
                                height={20}
                            />
                            <span>View on GitHub</span>
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
