import React from 'react'


const Card = (props: any) => {
    const thing = () => {
        switch (props.color) {
            case 'pink':
                return (
                    <a
                        className="tile tile-lg tile-pink ripple-effect"
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                        {props.headline}
                                        <br/><b>{props.source}</b>
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
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                    {props.headline}
                                    <br/><b>{props.source}</b>
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
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                    {props.headline}
                                    <br/><b>{props.source}</b>
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
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img tile-img-bg"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                    {props.headline}
                                    <br/><b>{props.source}</b>
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
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img tile-img-bg"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">{props.headline}
                                    <br/><b>{props.source}</b></span>
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
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                    {props.headline}
                                    <br/><b>{props.source}</b>
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
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                    {props.headline}
                                    <br/><b>{props.source}</b>
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
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">{props.headline}
                                    <br/><b>{props.source}</b></span>
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
                        href={props.url}
                        target="_blank"
                    >
                        <span className="content-wrapper">
                            <span className="tile-content">
                                <span
                                    className="tile-img tile-img-bg"
                                    style={{
                                        backgroundImage: `url(${props.img})`,
                                        backgroundSize: "cover"
                                    }}
                                ></span>
                                <span className="tile-holder tile-holder-sm">
                                    <span className="title">
                                    {props.headline}
                                    <br/><b>{props.source}</b>
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
