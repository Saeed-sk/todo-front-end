import { useEffect, useRef } from "react";

export function MainClockShow() {
    const clockRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = clockRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let radius = canvas.height / 2;

        const intervalId = setInterval(drawClock, 1000);
        drawClock(); // یک بار فوری هم رسم کن

        function drawClock() {
            // ۱. ریست ترنسفورم و پاک کردن همهٔ بوم
            if (!canvas) return;
            ctx?.setTransform(1, 0, 0, 1, 0, 0);
            ctx?.clearRect(0, 0, canvas.width, canvas.height);

            // ۲. جابجایی مرکز به وسط بوم
            ctx?.translate(radius, radius);

            // ۳. محاسبهٔ شعاع نهایی
            const r = radius * 0.90;

            if (ctx){
                drawFace(ctx, r);
                drawNumbers(ctx, r);
                drawTime(ctx, r);
            }
        }

        function drawFace(ctx: CanvasRenderingContext2D, r: number) {
            const grad = ctx.createRadialGradient(0, 0, r * 0.95, 0, 0, r * 1.05);
            grad.addColorStop(0, "#333");
            grad.addColorStop(0.5, "white");
            grad.addColorStop(1, "#333");

            ctx.beginPath();
            ctx.arc(0, 0, r, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();

            ctx.strokeStyle = grad;
            ctx.lineWidth = r * 0.1;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0, 0, r * 0.1, 0, 2 * Math.PI);
            ctx.fillStyle = "#333";
            ctx.fill();
        }

        function drawNumbers(ctx: CanvasRenderingContext2D, r: number) {
            ctx.font = `${r * 0.15}px Arial`;
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";

            for (let num = 1; num <= 12; num++) {
                const ang = (num * Math.PI) / 6;
                ctx.rotate(ang);
                ctx.translate(0, -r * 0.85);
                ctx.rotate(-ang);
                ctx.fillText(num.toString(), 0, 0);
                ctx.rotate(ang);
                ctx.translate(0, r * 0.85);
                ctx.rotate(-ang);
            }
        }

        function drawTime(ctx: CanvasRenderingContext2D, r: number) {
            const now = new Date();
            let hour = now.getHours() % 12;
            const minute = now.getMinutes();
            const second = now.getSeconds();

            // ساعت
            const hourAng =
                (hour * Math.PI) / 6 +
                (minute * Math.PI) / (6 * 60) +
                (second * Math.PI) / (360 * 60);
            drawHand(ctx, hourAng, r * 0.5, r * 0.07);

            // دقیقه
            const minAng = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
            drawHand(ctx, minAng, r * 0.8, r * 0.07);

            // ثانیه
            const secAng = (second * Math.PI) / 30;
            drawHand(ctx, secAng, r * 0.9, r * 0.02);
        }

        function drawHand(
            ctx: CanvasRenderingContext2D,
            pos: number,
            length: number,
            width: number
        ) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0, 0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <canvas
            ref={clockRef}
            width={400}
            height={400}
            style={{ display: "block", margin: "0 auto" }}
        >
            مرورگر شما از canvas پشتیبانی نمی‌کند.
        </canvas>
    );
}
