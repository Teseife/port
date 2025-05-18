// components/projects/AeroDetails.tsx
"use client";

import React from "react";
import Image from "next/image";

export function AeroDetails() {
    return (
        <div className="space-y-8">
            {/* 1. Video Preview */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    1. Video Preview
                </h3>
                <video
                    src="/videos/aero/aero-preview.mp4"
                    controls
                    poster="/images/aero-card-images/aero-thumbnail.png"
                    className="mt-2 w-full rounded-md shadow-lg"
                />
            </div>

            {/* 2. High-level Overview */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    2. High-level Overview
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    <strong>AeroAtlas</strong> is a web application combining machine learning with
                    real-time geo-data to generate personalized travel itineraries in seconds.
                    Built over a 4-month sprint, our five-member team delivered an MVP that won the
                    Audience Choice Award among 48 competing teams.
                </p>
            </div>

            {/* 3. Award Photo */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    3. Award Photo
                </h3>
                <div className="mt-2 flex justify-center">
                    <Image
                        src="/images/aero-card-images/aero-award-team.png"
                        alt="AeroAtlas team with Audience Choice award"
                        width={800}
                        height={500}
                        className="rounded-md shadow-md"
                    />
                </div>
            </div>

            {/* 4. Contributions & Process */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    4. Contributions & Process
                </h3>
                <Image
                    src="/images/aero-card-images/aero-contributors-grid.png"
                    alt="AeroAtlas contributors and roles"
                    width={1000}
                    height={400}
                    className="mt-2 rounded-md shadow-md"
                />
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    As Project Manager, I used Teamplate to assign tickets, ran weekly Agile
                    sprints, and partnered with our Creative Director to transform a Framer
                    prototype into a polished Next.js interface.
                </p>
            </div>

            {/* 5. Feature List */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    5. Key Features
                </h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-900 dark:text-gray-100">
                    <li>Analyzes destination popularity via social APIs.</li>
                    <li>Visualizes optimized routes with Mapbox integrations.</li>
                    <li>Updates itineraries in real-time for traffic & weather.</li>
                    <li>Exports plans to PDF or adds them directly to user calendars.</li>
                </ul>
            </div>

            {/* 6. Tech Stack & Roadmap */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    6. Tech Stack & Roadmap
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    Backend: FastAPI (Python)
                    Frontend: Next.js (TypeScript + Tailwind CSS, CORS enabled)
                    Next steps include performance optimization and feature expansion, with full
                    deployment targeted for Q4 2025.
                </p>
            </div>
        </div>
    );
}
