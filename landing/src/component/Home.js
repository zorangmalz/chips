import React from "react"
import { Header, PersonalAsset } from "./Style"

export default function Home() {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
            <div style={{
                maxWidth: 450,
                width: "100%",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
            }}>
                <Header />
                <div style={{
                    marginTop: 16,
                    marginLeft: "7%",
                    color: "#040a27",
                    fontWeight: "bold",
                    fontSize: 18,
                    marginBottom: 16,
                }}>안녕하세요 김칩스 님</div>
                <PersonalAsset 
                    currentAsset={200200200}
                    pastAsset={200000200}
                />
                <div style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#040a27",
                    marginTop: 32,
                    marginLeft: "7%",
                    marginBottom: 8,
                }}>New Chips</div>
                <div style={{
                    fontSize: 14,
                    color: "#040a27",
                    marginLeft: "7%",
                    marginRight: "7%",
                    opacity: 0.7,
                    marginBottom: 16,
                }}>스타트업 초기투자에 참여해보세요.</div>
                <div style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#040a27",
                    marginTop: 32,
                    marginLeft: "7%",
                    marginBottom: 8,
                }}>Hot Chips</div>
                <div style={{
                    fontSize: 14,
                    color: "#040a27",
                    marginLeft: "7%",
                    marginRight: "7%",
                    opacity: 0.7,
                    marginBottom: 16,
                }}>미래의 유니콘을 거래해보세요.</div>
                <div style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#040a27",
                    marginTop: 32,
                    marginLeft: "7%",
                    marginBottom: 8,
                }}>Chips Story</div>
                <div style={{
                    fontSize: 14,
                    color: "#040a27",
                    marginLeft: "7%",
                    marginRight: "7%",
                    opacity: 0.7,
                    marginBottom: 16,
                }}>칩스 스타트업들의 다양한 소식을 접해보세요.</div>
            </div>
        </div>
    )
}