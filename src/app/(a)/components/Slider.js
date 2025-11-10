'use client'

import { useState, useEffect } from "react";

const slides = [
    {
        id: 1,
        image: "/images/1.jpg",
        title: "جدیدترین کالکشن",
        description: "استایل ورزشی خودت رو با جدیدترین محصولات تکمیل کن",
        buttonText: "خرید کن",
        buttonLink: "/shop",
    },
    {
        id: 2,
        image: "/images/2.png",
        title: "کفش‌های پرطرفدار",
        description: "کفش‌های راحت و مدرن برای همه فعالیت‌ها",
        buttonText: "مشاهده محصولات",
        buttonLink: "/shop",
    },
    {
        id: 3,
        image: "/images/3.jpg",
        title: "لباس‌های ورزشی",
        description: "با لباس‌های حرفه‌ای بهترین عملکرد را داشته باش",
        buttonText: "خرید کن",
        buttonLink: "/shop",
    },
];

export default function Slider() {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % length);
        }, 5000);
        return () => clearInterval(timer);
    }, [length]);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
              <div
                    key={slide.id}
                    className={`slide ${index === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    {index === current && (
                        <div className="content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                            <div className="cursor-pointer btn">{slide.buttonText}</div>
                        </div>
                    )}
                </div>
            ))}
            <style jsx>{`
                .slider {
                    width: 100%;
                    height: 80vh;
                    position: relative;
                    overflow: hidden;
                    opacity: 90%;
                }
                .slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                    background-size: cover;
                    background-position: center;
                }
                .slide.active {
                    opacity: 1;
                }
                .content {
                    position: absolute;
                    bottom: 25%;
                    left: 10%;
                    color: white;
                    max-width: 500px;
                    animation: fadeIn 1s ease forwards;
                }
                .content h2 {
                    font-size: 3rem;
                    margin-bottom: 20px;
                }
                .content p {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                }
                .btn {
                    display: inline-block;
                    padding: 12px 30px;
                    background: #000;
                    color: #fff;
                    text-decoration: none;
                    font-weight: bold;
                    border-radius: 5px;
                    transition: background 0.3s ease;
                    cursor: pointer;
                }
                .btn:hover {
                    background: #555;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
