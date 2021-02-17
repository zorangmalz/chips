import React from "react"
import "../App.css"
import { MdKeyboardArrowDown } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"

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

export function CorporCard({ title, currentFund, totalFund, Deadline }) {
    const rate = currentFund/totalFund*100
    const eok = Math.floor(currentFund/100000000)
    const cheon = (currentFund%100000000)/10000000
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
                    marginLeft: 20,
                    marginRight: 20,
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