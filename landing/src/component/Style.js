import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

export default function InvestCard({icon, text}) {
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
            <div style={{
                marginLeft: 8,
                marginRight: 8,
                width: 48,
                height: 48,
                backgroundColor: "red"
            }}>{icon}</div>
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

export function FaqCard({title, content, button, setButton}) {
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