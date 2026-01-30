import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src="/images/gal2.png" alt="Tarun" className='w-20 rounded-full' />
                <h3>Let's Connect</h3>
                <p>I build modern, scalable web applications. Specializing in full-stack development. Available for full-time opportunities and selective projects.</p>
                <p>tarun.gajjalwar.com</p>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ background: bg }}>
                            <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                                <img src={icon} alt={text} className='size-5' />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default WindowWrapper(Contact, 'contact')