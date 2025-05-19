// components/projects/PokemonColosseumDetails.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PokemonColosseumDetails() {
    return (
        <div className="space-y-8">
            {/* 1. Project Overview */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    1. Project Overview
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    <strong>Pokemon Colosseum</strong> is a command-line battle simulator written
                    in Python. It faithfully re-creates classic turn-based Pokémon combat, allowing
                    two players to battle using pre-defined Pokémon with unique stats and moves.
                </p>
            </div>

            {/* 2. Gameplay Features */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    2. Gameplay Features
                </h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-900 dark:text-gray-100">
                    <li>Turn-based player vs player or player vs basic AI battle logic.</li>
                    <li>Custom Pokémon stats: HP, Attack, Defense, Speed, and Type.</li>
                    <li>Move system includes power, accuracy, and potential status effects.</li>
                    <li>Implements common Pokémon mechanics like switching, status recovery, and turn order priority.</li>
                    <li>Battle log interface prints outcome summaries after every turn.</li>
                </ul>
            </div>

            {/* 3. Technical Design */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    3. Technical Design
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    This project was developed using Python 3 without external libraries, making it
                    highly portable and easy to run across environments. It demonstrates clean object-oriented
                    programming principles through its use of classes for Pokémon, Moves, and Battle logic.
                </p>
            </div>

            {/* 4. GitHub Link */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    4. GitHub Repository
                </h3>
                <div className="mt-2">
                    <Button asChild variant="outline" className="inline-flex items-center">
                        <a
                            href="https://github.com/Teseife/Pokemon-Colosseum"
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
