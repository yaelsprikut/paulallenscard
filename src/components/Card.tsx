import React from 'react'
import styled from 'styled-components'

const Card = (props: any) => {
    const thing = () => {
        switch (props.color) {
            case 'pink':
                return (
                    <a
                        className="tile tile-lg tile-pink ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/google_spec.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                        Google Guidelines
                                    </span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            case 'purple':
                return (
                    <a
                        className="tile tile-lg tile-sqr tile-purple ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/materialreel.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                        Material Design Reel
                                    </span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            case 'cyan':
                return (
                    <a
                        className="tile tile-lg tile-sqr tile-cyan ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/principles.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                        Material Design{' '}
                                        <span className="caption">PDF</span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            case 'amber':
                return (
                    <a
                        className="tile tile-lg tile-sqr tile-amber ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img tile-img-bg"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/doodlearchive.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                        Doodle Archive
                                    </span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            case 'blue':
                return (
                    <a
                        className="tile tile-lg tile-light-blue ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img tile-img-bg"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/googleplus.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">Google+</span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            case 'red':
                return (
                    <a
                        className="tile tile-lg tile-sqr tile-red ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/design-minutes.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                        Design Minutes
                                    </span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            case 'indigo':
                return (
                    <a
                        className="tile tile-lg tile-sqr tile-indigo ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/cast.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                        Google Cast UX
                                    </span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            case 'orange':
                return (
                    <a
                        className="tile tile-lg tile-sqr tile-deep-orange ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/glass.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">Glass Design</span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            case 'green':
                return (
                    <a
                        className="tile tile-lg tile-light-green ripple-effect"
                        href="#"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img tile-img-bg"
                                    style={{
                                        backgroundImage:
                                            'url(https://www.google.com/design/images/webdesigner.png)',
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                        Google Web Designer
                                    </span>
                                </span>
                            </span>
                        </span>
                    </a>
                )
                break
            default:
                return false
                break
        }
    }
    return <>{thing()}</>
}

export default Card
