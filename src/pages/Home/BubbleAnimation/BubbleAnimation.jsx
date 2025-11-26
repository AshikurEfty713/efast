export function BubbleAnimation() {
    const colors = [
        // Blue
        ["rgba(59, 130, 246, 0.25)", "rgba(59, 130, 246, 0)"],
        // Pink
        ["rgba(236, 72, 153, 0.25)", "rgba(236, 72, 153, 0)"],
        // Orange
        ["rgba(249, 115, 22, 0.25)", "rgba(249, 115, 22, 0)"],
        // Yellow
        ["rgba(234, 179, 8, 0.25)", "rgba(234, 179, 8, 0)"],
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {[...Array(20)].map((_, i) => {
                const [c1, c2] = colors[i % colors.length]; // rotate colors

                return (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                            width: `${Math.random() * 150 + 60}px`,
                            height: `${Math.random() * 150 + 60}px`,

                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,

                            background: `radial-gradient(
                                circle at ${Math.random() * 100}% ${Math.random() * 100}%,
                                ${c1},
                                ${c2}
                            )`,

                            borderRadius: `
                                ${Math.random() * 60 + 40}% 
                                ${Math.random() * 60 + 40}% / 
                                ${Math.random() * 60 + 40}% 
                                ${Math.random() * 60 + 40}%
                            `,

                            filter: "blur(30px)",
                            opacity: 0.65,

                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 20 + 20}s`,
                        }}
                    />
                );
            })}
        </div>
    );
}
