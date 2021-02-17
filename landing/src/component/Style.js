import React from "react"
import "../App.css"

//아이콘
import { MdKeyboardArrowDown } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import { IoIosNotificationsOutline } from "react-icons/io"

//이미지
import chips from "../icon/chips.png"

//Landing
export default function InvestCard({ icon, text }) {
    return (
        <div style={{
            marginRight: "7%",
            marginLeft: "7%",
            width: "86%",
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: "#ffffff",
            borderRadius: 4,
            marginBottom: 16,

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center"
        }}>
            <img alt="" src={icon} style={{
                marginLeft: 8,
                marginRight: 8,
                width: 48,
                height: 48,
            }} />
            <div style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#151f4e",
                lineHeight: 1.5,
                marginRight: 20,
                maxWidth: 230,
            }}>{text}</div>
        </div>
    )
}

//Landing
export function FaqCard({ title, content, button, setButton }) {
    return (
        <div style={{
            width: "86%",
            alignSelf: "center",
            paddingBottom: 8,
            borderBottom: "1px solid rgba(20, 31, 77, 0.1)",
            marginBottom: 8,

            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div style={{
                    maxWidth: 250,
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "#151f4e"
                }}>{title}</div>
                <MdKeyboardArrowDown
                    onClick={() => setButton(!button)}
                    style={{
                        cursor: "pointer",
                    }}
                    size={30}
                    color="#151f4e"
                />
            </div>
            {button ?
                <div style={{
                    maxWidth: 250,
                    fontSize: 12,
                    color: "#151f4e",
                    marginTop: 8
                }}>{content}</div>
                :
                <></>
            }
        </div>
    )
}

//Landing
export function CorporCard({ title, currentFund, totalFund, Deadline }) {
    const rate = currentFund / totalFund * 100
    const eok = Math.floor(currentFund / 100000000)
    const cheon = (currentFund % 100000000) / 10000000
    return (
        <>
            <div className="boxShadow" style={{
                width: "86%",
                paddingTop: 20,
                paddingBottom: 20,
                borderRadius: 10,
                backgroundColor: "#ffffff",
                marginBottom: 16,
                zIndex: 0,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <div style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 4,
                }}>
                    <div style={{
                        fontSize: 14,
                        color: "#202426"
                    }}>{title}</div>
                    <AiFillStar
                        width={24}
                        height={24}
                        color="#FFDE27"
                    />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    width: "90%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "50%"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            marginBottom: 8,
                        }}>
                            <div style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: "#202426"
                            }}>{eok}억 {cheon}천만원</div>
                            <div style={{
                                fontSize: 14,
                                color: "#202426"
                            }}>{rate.toFixed(1)}%</div>
                        </div>
                        <div style={{
                            backgroundColor: "#DBDBDB",
                            width: "100%",
                            height: 4,
                        }}>
                            <div style={{
                                backgroundColor: "#4C6BF9",
                                height: 4,
                                width: `${rate}%`
                            }} />
                        </div>
                    </div>
                    <div style={{
                        width: "24%",
                        height: 28,
                        backgroundColor: "#5ACA75",
                        borderRadius: 5,

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div style={{
                            color: "#ffffff",
                            fontSize: 14,
                            fontWeight: "bold",
                        }}>D - {Deadline}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function Header() {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingTop: 12,
                paddingBottom: 12,
                backgroundColor: "#ffffff",
                borderBottom: "1px solid rgba(20, 31, 77, 0.1)",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "7%",
                    cursor: "pointer"
                }}>
                    <img alt="" src={chips} style={{
                        width: 24,
                        height: 16,
                        marginRight: 8,
                    }} />
                    <div style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: "#4c6bf9"
                    }}>Chips</div>
                </div>
                <IoIosNotificationsOutline
                    style={{
                        marginRight: "7%",
                        cursor: "pointer"
                    }}
                    size={24}
                    color="#040a27"
                />
            </div>
        </>
    )
}

//콤마 생성
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Home
export function PersonalAsset({ currentAsset, pastAsset }) {
    const money = numberWithCommas(currentAsset)

    //증가량
    function upDown(x, y) {
        if (x > y) {
            return `+ ${numberWithCommas(x-y)} (${((x-y)/x).toFixed(1)} %)`
        } else if (x < y) {
            return `- ${numberWithCommas(y-x)} (${((y-x)/x).toFixed(1)} %)`
        } else {
            return `0 (0 %)`
        }
    }
    return (
        <div style={{
            width: "86%",
            paddingTop: 20,
            paddingBottom: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e1e6fd",
            alignSelf: "center",
            borderRadius: 10,
        }}>
            <div style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#040a27",
                marginBottom: 8,
            }}>{money} 원</div>
            <div style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#5aca75",
                marginBottom: 16,
            }}>{upDown(currentAsset, pastAsset)}</div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "50%"
            }}>
                <div style={{
                    width: "50%",
                    height: 32,
                    borderRadius: 5,
                    backgroundColor: "#ffffff",
                    marginRight: 8,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}>
                    <div style={{
                        fontSize: 12,
                        color: "#040a27",
                        opacity: 0.6,
                    }}>자세히</div>
                </div>
                <div style={{
                    width: "50%",
                    height: 32,
                    borderRadius: 5,
                    backgroundColor: "#4c6bf9",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}>
                    <div style={{
                        fontSize: 12,
                        color: "#ffffff",
                        fontWeight: "bold",
                    }}>거래하기</div>
                </div>
            </div>
        </div>
    )
}

//Home
export function NewChips({ corporName, step, currentFund, totalFund }) {
    const rate = (currentFund / totalFund * 100).toFixed(0)
    const eok = Math.floor(currentFund / 100000000)
    const cheon = (currentFund % 100000000) / 10000000
    return (
        <div style={{
            width: "86%",
            borderRadius: 10,
            marginBottom: 16,
            marginLeft: "7%",

            display: "flex",
            flexDirection: "column",
            backgroundColor: "#151f4e"
        }}>
            <div style={{
                marginTop: 20,
                marginLeft: "6%",
                marginRight: "6%",
                fontSize: 20,
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: 8,
            }}>{corporName}</div>
            <div style={{
                marginBottom: 8,
                width: "88%",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                alignSelf: "center",
            }}>
                <div style={{
                    width: "73%",
                    height: 4,
                    borderRadius: 4,
                    backgroundColor: "#ffffff"
                }}>
                    <div style={{
                        width: `${rate}%`,
                        height: 4,
                        backgroundColor: "#4c6bf9",
                        borderRadius: 4,
                    }} />
                </div>
                <div style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#ffffff"
                }}>{rate} %</div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                alignSelf: "center",

                width: "88%",
                marginBottom: 8,
            }}>
                <div style={{
                    fontSize: 14,
                    color: "#ffffff"
                }}>투자 단계</div>
                <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#ffffff"
                }}>{step}</div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                alignSelf: "center",

                width: "88%",
                marginBottom: 8,
            }}>
                <div style={{
                    fontSize: 14,
                    color: "#ffffff"
                }}>공모 금액</div>
                <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#ffffff"
                }}>{eok}억 {cheon}천 만원</div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                alignSelf: "center",

                width: "88%",
                marginBottom: 20,
            }}>
                <div style={{
                    fontSize: 14,
                    color: "#ffffff"
                }}>모집 기간</div>
                <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#ffffff"
                }}>21.02.09 ~ 21.03.10</div>
            </div>
        </div>
    )
}

//Home
export function HotChips({logo, corporName, kCorporName, currentValue, pastValue}) {
    //증가량
    function upDown(x, y) {
        if (x > y) {
            return `${numberWithCommas(x-y)}`
        } else if (x < y) {
            return `${numberWithCommas(y-x)}`
        } else {
            return `0`
        }
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            width: "86%",
            marginBottom: 16,
            marginLeft: "7%",
        }}>
            <div style={{
                width: 64,
                height: 64,
                borderRadius: 15,
                backgroundColor: "#fdf3f2",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <img 
                    alt=""
                    src={logo}
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: 5,
                    }}
                />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                minWidth: 180,
                width: "70%",
                maxWidth: 230,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 4,
                    width: "100%",
                }}>
                    <div style={{
                        width: "30%",
                        textAlign: "left",

                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#040a27",
                    }}>{corporName}</div>
                    <div style={{
                        width: "30%",
                        textAlign: "right",

                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#040a27",
                    }}>{upDown(currentValue, pastValue)}</div>
                    <div style={{
                        width: "30%",
                        textAlign: "right",

                        fontSize: 16,
                        fontWeight: "bold",
                        color: currentValue - pastValue > 0 ? "#5aca75" : "#da1414",
                    }}>{currentValue > pastValue ? "+" : null}{((currentValue - pastValue)/currentValue).toFixed(2)}%</div>
                </div>
                <div style={{
                    opacity: 0.4,
                    fontSize: 12,
                    color: "#040a27"
                }}>{kCorporName}</div>
            </div>
        </div>
    )
}

//Home
export function ChipsStory({img, title, date}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            width: "86%",
            marginLeft: "7%",
            marginBottom: 16,
        }}>
            <img alt="" src={img}
                style={{
                    width: 72,
                    height: 72,
                    borderRadius: 5,
                    marginRight: 8,
                    backgroundColor: "#151f4e"
                }}
            />
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",

                minWidth: 170,
                maxWidth: 220,
                width: "70%",
                height: 72,
            }}>
                <div style={{
                    fontSize: 16,
                    color: "#040a27",
                    lineHeight: 1.5,
                }}>{title}</div>
                <div style={{
                    fontSize: 12,
                    color: "#040a27",
                    opacity: 0.6,
                }}>{date}</div>
            </div>
        </div>
    )
}