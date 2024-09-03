import React from 'react'
import style from "./animation1.module.css"
export default function Animation1() {
    return (
        /* From Uiverse.io by BlackisPlay */
        <div id={style.triangle}>
            <svg id={style.Layer_1} data-name="Layer 1" version="1.1" viewBox="0 0 2000 2000">
                <polygon
                    className={style.cls-1}
                    points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"
                ></polygon>
                <polygon
                    className={style.cls-3}
                    points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"
                ></polygon>
                <g id={style.Layer_2} data-name="Layer 2">
                    <polygon
                        className={style.cls-2}
                        points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"
                    ></polygon>
                </g>
            </svg>
        </div>

    )
}
