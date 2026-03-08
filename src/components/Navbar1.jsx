import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import clsx from "clsx";

import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef(null);

  // ⏰ Live Clock


  // 🎵 Audio Play / Pause
  useEffect(() => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      audioElementRef.current.play().catch(() => {});
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between gap-5 px-4 py-2">
      
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <img src="/images/logo.svg" alt="logo" className="h-8" />
        <p className="font-bold">Tarun's Portfolio</p>

        <ul className="flex gap-4">
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => openWindow(type)}
              className="cursor-pointer hover:text-blue-500"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-3">
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                alt={`icon-${id}`}
                className="icon-hover h-5 cursor-pointer"
              />
            </li>
          ))}
        </ul>

        <time className="text-sm">
          {time.format("ddd MMM D | h:mm A")}
        </time>

        {/* AUDIO BUTTON */}
        <button
          onClick={toggleAudioIndicator}
          className="ml-4 flex items-end space-x-0.5"
        >
          <audio
            ref={audioElementRef}
            className="hidden"
            src="/audio/Paradise.mp3"
            loop
          />

          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={clsx("indicator-line", {
                active: isIndicatorActive,
              })}
              style={{
                animationDelay: `${bar * 0.1}s`,
              }}
            />
          ))}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
