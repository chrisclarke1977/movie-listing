import React from "react"

// const styles = {
//     j15kd9e6: {
//         backgroundColor: '#fff'
//     }
// j1nljlif: {
//     boxShadow: 0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);
//   }
// }

const Card = ({
    label,
    title,
    poster,
    description,
    date = Date.now(),
}) => <div className="j15kd9e6 j1nljlif ji1kkbr j6afj2p j16eh91b">
        <div className="j1tffn7n">
            <div className="jixdxz3">
                <div className="j4f2n9i ja16k5a jq3r98f">{label}
                </div>
            </div>
            <div className="jufvfp7">
                <span className="j59oks2 j1n0vc23 jtyxnne">{title}
                </span>
                <span className="j59oks2 j1n0vc23 josmip3 ja8lyrx">{date}
                </span>
            </div>
            <div className="jdui6xd">
                <button className="jr0u89w j1g2vga5" tabindex="0" type="button">
                    <span className="jsbmc5e">
                        <svg className="j2dfb39" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                            <path fill="none" d="M0 0h24v24H0z">
                            </path>
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                            </path>
                        </svg>
                    </span>
                    <span className="jb3bkca">
                    </span>
                </button>
            </div>
        </div>
        <div className="jlot6f4 johwbon" style={{ width: "342px", height: "513px", backgroundImage: `url(${poster})` }} title={title}>
        </div>
        <div className="je949g9">
            <p className="j59oks2 j1n0vc23">{description}
            </p>
        </div>
        <div className="j1h57870 j1hvhsto jb01ynw">
            <button className="jr0u89w j1g2vga5" tabindex="0" type="button" aria-label="Add to favorites">
                <span className="jsbmc5e">
                    <svg className="j2dfb39" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                        <path fill="none" d="M0 0h24v24H0z">
                        </path>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                        </path>
                    </svg>
                </span>
                <span className="jb3bkca">
                </span>
            </button>
            <button className="jr0u89w j1g2vga5" tabindex="0" type="button" aria-label="Share">
                <span className="jsbmc5e">
                    <svg className="j2dfb39" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                        <path fill="none" d="M0 0h24v24H0z">
                        </path>
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z">
                        </path>
                    </svg>
                </span>
                <span className="jb3bkca">
                </span>
            </button>
            <button className="jr0u89w j1g2vga5 jmi1k2d" tabindex="0" type="button" aria-expanded="false" aria-label="Show more">
                <span className="jsbmc5e">
                    <svg className="j2dfb39" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">
                        </path>
                        <path fill="none" d="M0 0h24v24H0z">
                        </path>
                    </svg>
                </span>
                <span className="jb3bkca">
                </span>
            </button>
        </div>
    </div>

export default Card;
