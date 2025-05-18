// components/projects/CustomYoloV5Details.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CustomYoloV5Details() {
    return (
        <div className="space-y-8">
            {/* 1. Team Presentation */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    1. Team Presentation
                </h3>
                <div className="mt-2 flex justify-center">
                    <Image
                        src="/images/custom-yolov5-card-images/obj-prezy.webp"
                        alt="Team presenting Custom YOLOv5 on Raspberry Pi"
                        width={800}
                        height={500}
                        className="rounded-md shadow-md"
                    />
                </div>
            </div>

            {/* 2. Live Demo */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    2. Live Demo
                </h3>
                <div className="mt-2 flex justify-center">
                    <Image
                        src="/images/custom-yolov5-card-images/obj.jpg"
                        alt="Custom YOLOv5 detection on Raspberry Pi webcam"
                        width={800}
                        height={500}
                        className="rounded-md shadow-md"
                    />
                </div>
            </div>

            {/* 3. Model Training & Accuracy */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    3. Model Training & Accuracy
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    We built a custom training dataset in Roboflow—adding labels for bottles, phones, people and cats—and fine-tuned it on top of the standard 330k COCO weights. This specialized data improved our model’s mean Average Precision (mAP) from 67% to 70%, reducing false positives and strengthening detection reliability in real-world scenarios.
                </p>
            </div>

            {/* 4. Performance & Limitations */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    4. Performance & Limitations
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    Running YOLOv5 on a Raspberry Pi 5 with a USB webcam yields an average
                    <strong> 2.5–3.7 FPS</strong>. While this limits full real-time fluidity,
                    it demonstrates that high-quality object detection can be deployed
                    on low-power, edge-level hardware.
                </p>
            </div>

            {/* 5. Objectives & GitHub */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    5. Objectives & GitHub
                </h3>
                <p className="mt-2 text-gray-900 dark:text-gray-100">
                    Our goal is to prove that advanced vision models can be adapted for
                    small devices. See code, setup instructions and detailed documentation
                    on GitHub:
                </p>
                <div className="mt-4">
                    <Button asChild variant="outline" className="inline-flex items-center">
                        <a
                            href="https://github.com/Teseife/Custom-YOLOv5-RaspberryPi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-gray-900 dark:text-gray-100"
                        >
                            <Image
                                src="/icons/github.svg"
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
