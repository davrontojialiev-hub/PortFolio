import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Находим все элементы с классом .fade-in-element внутри контейнера
        const elements = containerRef.current?.querySelectorAll('.fade-in-element');
        if (!elements || elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Если элемент появился в зоне видимости хотя бы на 10%
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Отписываемся от слежки, чтобы анимация сработала только 1 раз
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Чувствительность (0.1 = 10% элемента видно на экране)
                rootMargin: '0px 0px -50px 0px' // Анимация начнется чуть раньше, чем элемент полностью вылезет
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return containerRef;
};