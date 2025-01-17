import { CTASubtitleButton } from "@/components/buttons/CTAButtons";
import { FillMode } from "@/components/util/constants";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";
import Image from "next/image";
import { useEffect } from "react";

const REGISTRATION_URL = "https://lu.ma/kscale-ai-day";

const HeaderSection = () => {
  useEffect(() => {
    const canvas = document.getElementById("planetCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    // Mouse/touch position tracking
    let mouseX = 0;
    let mouseY = 0;
    const updatePointerPosition = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = clientX - rect.left;
      mouseY = clientY - rect.top;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePointerPosition(e.clientX, e.clientY);
    };

    const handleMouseOut = () => {
      // Move pointer off-screen when mouse leaves canvas
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        updatePointerPosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    // Add all event listeners
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseout", handleMouseOut);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchcancel", handleTouchEnd);

    // Set canvas size to match display size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star configuration
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      sizeMultiplier: number;
      opacity: number;
      speed: number;
      hue: number;
      interactive: number;
    }> = [];
    // Double the stars but still adjust for mobile
    const NUM_STARS = window.innerWidth < 768 ? 100 : 200;
    const CONNECTION_DISTANCE = window.innerWidth < 768 ? 100 : 150;
    const MOUSE_RADIUS = window.innerWidth < 768 ? 100 : 200;

    // Initialize stars
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        sizeMultiplier: 1,
        opacity: 0.6 + Math.random() * 0.2,
        speed: Math.random() * 0.5 + 0.1,
        hue: 220 + Math.random() * 40,
        interactive: 0,
      });
    }

    const drawLines = (star1: (typeof stars)[0], star2: (typeof stars)[0], distance: number) => {
      if (!ctx) return;
      const opacity = 1 - distance / CONNECTION_DISTANCE;
      const averageInteractive = (star1.interactive + star2.interactive) / 2;
      const hue = 220 + averageInteractive * 40;

      ctx.beginPath();
      ctx.moveTo(star1.x, star1.y);
      ctx.lineTo(star2.x, star2.y);
      ctx.strokeStyle = `hsla(${hue}, 80%, 80%, ${opacity * 0.6})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Add score tracking
    let score = 0;
    let scoreElement: HTMLDivElement | null = null;

    const createScoreElement = () => {
      // Check if element already exists
      if (document.getElementById("star-score")) return;

      scoreElement = document.createElement("div");
      scoreElement.id = "star-score";
      scoreElement.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 24px;
        color: white;
        z-index: 100;
        transition: transform 0.3s;
      `;
      document.body.appendChild(scoreElement);
    };

    // Define score thresholds and effects
    const SCORE_THRESHOLDS = {
      START: 30,
      WOBBLE: 40,
      CHAOS: 70,
      WIN: 100,
    };

    const updateScoreDisplay = () => {
      if (!scoreElement) return;

      const chaos = Math.min(
        1,
        (score - SCORE_THRESHOLDS.WOBBLE) / (SCORE_THRESHOLDS.CHAOS - SCORE_THRESHOLDS.WOBBLE)
      );

      if (score >= SCORE_THRESHOLDS.WOBBLE) {
        const shake = Math.sin(Date.now() / 100) * (10 * chaos);
        const rotate = Math.sin(Date.now() / 150) * (5 * chaos);
        scoreElement.style.transform = `translateX(-50%) translate(${shake}px, ${shake}px) rotate(${rotate}deg)`;
      } else {
        scoreElement.style.transform = "translateX(-50%)";
      }

      scoreElement.textContent = `Stars: ${score}`;
    };

    const checkVictory = () => {
      if (score >= SCORE_THRESHOLDS.WIN) {
        // Victory animation
        stars.forEach((star) => {
          star.sizeMultiplier = 3.0;
          star.hue = (Date.now() / 10) % 360;
        });

        if (scoreElement) {
          scoreElement.textContent = "YOU WIN! 🌟";
          scoreElement.style.fontSize = "32px";
          scoreElement.style.transform = `
            translateX(-50%)
            scale(${1 + Math.sin(Date.now() / 200) * 0.2})
            rotate(${Math.sin(Date.now() / 300) * 10}deg)
          `;
          scoreElement.style.color = `hsl(${(Date.now() / 10) % 360}, 80%, 80%)`;
        }
      }
    };

    const drawStars = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let interactiveStars = 0;

      stars.forEach((star, i) => {
        // Move star
        star.y = (star.y + star.speed) % canvas.height;

        // Mouse interaction
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          star.x += dx * force * 0.02;
          star.y += dy * force * 0.02;
          star.interactive = Math.min(1, star.interactive + 0.05);
        } else {
          star.interactive = Math.max(0, star.interactive - 0.02);

          // Repulsion from nearby stars when not influenced by mouse
          stars.slice(i + 1).forEach((otherStar) => {
            const starDx = star.x - otherStar.x;
            const starDy = star.y - otherStar.y;
            const starDistance = Math.sqrt(starDx * starDx + starDy * starDy);

            if (starDistance < CONNECTION_DISTANCE && starDistance > 0) {
              // Exponential repulsion force that grows stronger at closer distances
              const normalizedDistance = starDistance / CONNECTION_DISTANCE;
              const repulsionForce = 0.5 * Math.pow(1 - normalizedDistance, 2);
              const moveX = (starDx / starDistance) * repulsionForce;
              const moveY = (starDy / starDistance) * repulsionForce;

              star.x += moveX;
              star.y += moveY;
              otherStar.x -= moveX;
              otherStar.y -= moveY;
            }
          });
        }

        // Keep stars within bounds
        if (star.x < 0) star.x = 0;
        if (star.x > canvas.width) star.x = canvas.width;

        // Very subtle opacity variation
        star.opacity = 0.6 + Math.sin(Date.now() * 0.0003 + star.x) * 0.1;

        // Draw star with color based on interactive state
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * star.sizeMultiplier, 0, Math.PI * 2);
        const hue = star.hue + star.interactive * 40;
        ctx.fillStyle = `hsla(${hue}, 80%, 80%, ${star.opacity})`;
        ctx.fill();

        // Draw connections to nearby stars
        stars.slice(i + 1).forEach((otherStar) => {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < CONNECTION_DISTANCE) {
            drawLines(star, otherStar, distance);
          }
        });

        // Count interactive stars
        if (star.interactive > 0.5) {
          interactiveStars++;
        }
      });

      // Update score based on interactive stars
      score = interactiveStars;

      // Show score element when threshold reached
      if (score >= SCORE_THRESHOLDS.START && !scoreElement) {
        createScoreElement();
      }

      updateScoreDisplay();
      checkVictory();

      requestAnimationFrame(drawStars);
    };

    drawStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseout", handleMouseOut);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchcancel", handleTouchEnd);
      if (scoreElement) {
        document.body.removeChild(scoreElement);
      }
    };
  }, []);

  return (
    <header className="col-span-full grid grid-cols-subgrid min-h-[90svh] auto-rows-auto items-center text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw]">
      <div className="absolute inset-0">
        <Image
          sizes={"100vw"}
          src={photoPaths.LANDING_IMAGE}
          alt={photoPathAltText.LANDING_IMAGE_ALT}
          fill
          className="object-cover"
          priority={true}
          loading={"eager"}
        />
        <canvas
          id="planetCanvas"
          className="absolute inset-0 w-full h-full mix-blend-screen opacity-60"
        />
      </div>
      <hgroup className="z-10 text-filament col-span-full flex flex-col items-center text-center mb-12 gap-4 max-w-3xl mx-auto">
        <h1 className="text-heading-lg font-apparat mb-4">K-Scale AI Day</h1>
        <CTASubtitleButton
          className="w-fit min-w-[200px]"
          mode={FillMode.FILL}
          href={REGISTRATION_URL}
        >
          Apply Now
        </CTASubtitleButton>
      </hgroup>
    </header>
  );
};

export default HeaderSection;
