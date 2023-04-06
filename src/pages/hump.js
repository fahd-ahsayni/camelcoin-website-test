import TheHump1 from "@/shared/TheHump1";
import TheHump2 from "@/shared/TheHump2";
import TheHump3 from "@/shared/TheHump3";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function TheHump() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  function handleSwipeRight() {
    if (activeComponentIndex > 0) {
      setActiveComponentIndex(activeComponentIndex - 1);
    }
  }

  function handleSwipeLeft() {
    if (activeComponentIndex < 2) {
      setActiveComponentIndex(activeComponentIndex + 1);
    } else {
      setActiveComponentIndex(0);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (activeComponentIndex < 2) {
        setActiveComponentIndex(activeComponentIndex + 1);
      } else {
        setActiveComponentIndex(0);
      }
    }, 7500);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeComponentIndex]);

  return (
    <section className="bg-blue-gray-50 dark:bg-[#0d1117] h-screen w-screen flex items-center justify-center overflow-y-auto overflow-x-hidden">
      <div>
        <div
          onTouchStart={(event) => {
            const touchStartX = event.touches[0].clientX;
            event.currentTarget.addEventListener(
              "touchmove",
              (event) => {
                const touchEndX = event.touches[0].clientX;
                const deltaX = touchStartX - touchEndX;
                if (deltaX > 50) {
                  handleSwipeLeft();
                } else if (deltaX < -50) {
                  handleSwipeRight();
                }
              },
              { passive: true }
            );
          }}
          onTouchEnd={(event) => {
            event.currentTarget.removeEventListener("touchmove", () => {}, {
              passive: true,
            });
          }}
        >
          {activeComponentIndex === 0 && <TheHump1 />}
          {activeComponentIndex === 1 && (
            <div className="w-screen flex items-center justify-center">
              <TheHump2 />
            </div>
          )}
          {activeComponentIndex === 2 && (
            <div className="w-screen flex items-center justify-center">
              <TheHump3 />
            </div>
          )}
        </div>
        <div className="fixed inset-0 flex items-center">
          <div className="absolute lg:left-16 ml-4">
            <button
              className="bg-gray-50/70 backdrop-blur-sm flex justify-center items-center h-14 w-14 shadow-xl rounded-full"
              onClick={handleSwipeRight}
            >
              <AiOutlineLeft className="w-8 h-8 text-gray-900 dark:text-camel-700" />
            </button>
          </div>
          <div className="absolute right-16 mr-4">
            <button
              className="bg-gray-50/70 backdrop-blur-sm flex justify-center items-center h-14 w-14 shadow-xl rounded-full"
              onClick={handleSwipeLeft}
            >
              <AiOutlineRight className="w-8 h-8 text-gray-900 dark:text-camel-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
