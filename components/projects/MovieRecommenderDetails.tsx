// components/projects/MovieRecommenderDetails.tsx
// Pre-adjust and add github link for source code.
"use client";

import React from "react";
import Image from "next/image";

export function MovieRecommenderDetails() {
    return (
        <div className="space-y-8">
            {/* 1. Video Demo */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    1. Video Demo
                </h3>
                <video
                    src="./videos/movie-recommender/movie-recommender-preview.mp4"
                    controls
                    poster="/images/movie-recommender-card-images/movie-recommender-thumbnail.png"
                    className="mt-2 w-full rounded-md shadow-lg"
                />
            </div>

            {/* 2. Algorithm Overview */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    2. Algorithm Overview
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    The Movie Recommender uses a hybrid of collaborative and content-based
                    filtering to suggest films tailored to your tastes.
                </p>
            </div>

            {/* 3. Methodology */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    3. Methodology
                </h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-900 dark:text-gray-100">
                    <li>Collects and analyzes user ratings and genre preferences.</li>
                    <li>Performs matrix factorization to predict unseen ratings. Uses Euclidean Distance formula to calculate difference form inputted movie with movies in database</li>
                    <li>Renders a list of the top 10 personalized movie picks.</li>
                </ul>
            </div>

            {/* 4. Flowchart */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    4. Flowchart
                </h3>
                <div className="mt-2 flex justify-center">
                    <Image
                        src="./images/movie-recommender-card-images/movie-recommender-screenshot2.png"
                        alt="Algorithm Flowchart"
                        width={600}
                        height={400}
                        className="rounded-md shadow-md"
                    />
                </div>
            </div>

            {/* 5. Tech Stack & Integration */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    5. Tech Stack & Integration
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    Backend: FastAPI (Python) with PostgreSQL storage
                    Frontend: React (TypeScript)
                    Real-time updates via WebSockets to reflect rating changes instantly.
                </p>
            </div>
        </div>
    );
}
