// components/projects/StockDetails.tsx
// Pre-adjust and add github link for source code.
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function StockDetails() {
    return (
        <div className="space-y-8">
            {/* 1. Video Demo */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    1. Video Demo
                </h3>
                <video
                    src="/videos/stock-predictor/stock-preview.mp4"
                    controls
                    poster="/images/stock-predictor-card-images/stock-thumbnail.png"
                    className="mt-2 w-full rounded-md shadow-lg"
                />
            </div>

            {/* 2. Model Overview */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    2. Model Overview
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    Our “Stockseer” service runs a <strong>linear regression</strong> model
                    trained on two years of historical data from{" "}
                    <a
                        href="https://pypi.org/project/yfinance/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        yfinance
                    </a>
                    . Users enter a company name—which we resolve via TwelveData’s
                    symbol-search API—and then view live OHLC quotes alongside next-day
                    price predictions.
                </p>
            </div>

            {/* 3. Key Metrics Table */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    3. Key Metrics
                </h3>
                <table className="mt-2 w-full table-auto border-collapse bg-white dark:bg-gray-800">
                    <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Metric
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-800 dark:text-gray-200">
                            Value
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {[
                        ["Prediction", "$123.45"],
                        ["Open", "$120.00"],
                        ["High", "$125.00"],
                        ["Low", "$119.50"],
                        ["Close", "$122.30"],
                    ].map(([metric, value]) => (
                        <tr key={metric} className="border-t dark:border-gray-600">
                            <td className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100">
                                {metric}
                            </td>
                            <td className="px-4 py-2 text-sm font-medium text-gray-800 dark:text-white">
                                {value}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* 4. Role & Tech Stack */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    4. Role & Tech Stack
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    As backend lead, I integrated the regression model into our FastAPI
                    server and connected it to the Next.js frontend—making predictions
                    accessible to everyone. We used TwelveData for symbol lookup and
                    CORS-enabled endpoints to fetch OHLC data in real time.
                </p>
            </div>

            {/* 5. Full Report */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    5. Full Report
                </h3>
                <div className="mt-2">
                    <Button variant="outline" asChild className="inline-flex items-center">
                        <a
                            href="/PDFs/AAAI_AI_project_4_Report.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2"
                        >
                            <Image
                                src="/icons/pdf-icon.svg"
                                alt="PDF icon"
                                width={20}
                                height={20}
                            />
                            <span className="text-gray-900 dark:text-gray-100">
                View Full Report
              </span>
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
