// src/components/PageTransition.tsx
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import {useLocation} from "react-router";

export const PageTransition = () => {
    const overlayRef = useRef<HTMLDivElement>(null)
    const { pathname } = useLocation()

    // useLayoutEffect(() => {
    //     const el = overlayRef.current
    //     if (!el) return
    //     // document.getElementsByTagName('main')[0].style.opacity = '0'
    //     // Timeline جدید برای هر بار تغییر مسیر
    //     const tl = gsap.timeline({
    //         defaults: { ease: 'power1.inOut' },
    //         onComplete: () => {
    //             tl.kill()
    //             document.getElementsByTagName('main')[0].style.opacity = '1'
    //         }
    //     })
    //
    //     tl
    //         .set(el, { autoAlpha: 1, scale: 0 })
    //         .to(el, { scale: 50, duration: 0.6 })
    //         .to(el, { autoAlpha: 0, duration: 0.4 }, '-=0.2')
    //     // clean-up خودکار
    //     return () => {
    //         tl.kill()
    //         gsap.set(el, { clearProps: 'all' })
    //     }
    // }, [pathname])

    return <div ref={overlayRef} className={'overlay'} />
}