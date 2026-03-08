import dayjs from 'dayjs';
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

import { navLinks, navIcons } from '#constants';
import useWindowStore from '#store/window';


const Navbar = () => {
    const { openWindow } = useWindowStore();
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const audioElementRef = useRef(null);


    const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    };

    useEffect(() => {
        if (!audioElementRef.current) return;

        if (isAudioPlaying) {
            audioElementRef.current.play().catch(() => {});
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);


//  useEffect(() => {
//     if (isAudioPlaying) {
//       audioElementRef.current.play();
//     } else {
//       audioElementRef.current.pause();
//     }
//   }, [isAudioPlaying]);

    return (
        <nav className='gap-5'>
            <div>
                <img src="/images/logo.svg" />
                <p className="font-bold">Tarun's Portfolio</p>
                <ul>
                    {
                        navLinks.map(({ id, name, type }) => (
                            <li key={id} onClick={() => openWindow(type)}>
                                <p>{name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        navIcons.map(({ id, img }) => (
                            <li key={id}>
                                <img src={img} alt={`icon-${id}`} className='icon-hover' />
                            </li>
                        ))
                    }
                </ul>
                <time>{dayjs().format("ddd MMM D | h:mm A")}</time>
                
                <button
                    onClick={toggleAudioIndicator}
                    className="flex items-center space-x-0.5 cursor-pointer"
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
                            active: isAudioPlaying,
                        })}
                        style={{
                            animationDelay: `${bar * 0.1}s`,
                        }}
                        />
                    ))}
                </button>

            </div>
        </nav>
    )
}

export default Navbar