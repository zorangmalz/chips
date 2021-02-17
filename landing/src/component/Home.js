import React from "react"
import { ChipsStory, Header, HotChips, NewChips, PersonalAsset } from "./Style"

import tada from "../icon/tada.png"

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
                paddingBottom: 100,
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
                <NewChips 
                    corporName="주식회사 밴드 프로토콜"
                    step="Series A"
                    currentFund={1000000000}
                    totalFund={1250000000}
                />
                <NewChips 
                    corporName="주식회사 밴드 프로토콜"
                    step="Series A"
                    currentFund={1000000000}
                    totalFund={1250000000}
                />
                <div style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#040a27",
                    marginTop: 16,
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
                <HotChips 
                    logo={tada}
                    corporName="TADA"
                    kCorporName="타다"
                    currentValue={100000}
                    pastValue={80000}
                />
                <HotChips 
                    logo={tada}
                    corporName="TADA"
                    kCorporName="타다"
                    currentValue={90000}
                    pastValue={100000}
                />
                <HotChips 
                    logo={tada}
                    corporName="TADA"
                    kCorporName="타다"
                    currentValue={100000}
                    pastValue={80000}
                />
                <HotChips 
                    logo={tada}
                    corporName="TADA"
                    kCorporName="타다"
                    currentValue={100000}
                    pastValue={80000}
                />
                <div style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#040a27",
                    marginTop: 16,
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
                <ChipsStory 
                    title="주식회사 조랑말즈 시리즈 A 투자 유치… 본격 시동나서"
                    date="2021 - 02 -18"
                />
                <div style={{
                    width: "100%",
                    height: 1,
                    opacity: 0.1,
                    backgroundColor: "#151f4e",
                    marginTop: 16,
                }} />
                <div style={{
                    marginTop: 32,
                    marginBottom: 16,
                    
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#040a27",
                    alignSelf: "center",
                }}>시드 단계 이후 후속투자를 고민중인가요?</div>
                <div style={{
                    marginBottom: 16,

                    opacity: 0.6,
                    fontSize: 16,
                    color: "#040a27",
                    lineHeight: 1.5,
                    alignSelf: "center",
                    width: "86%",
                }}>지분 희석 NO! 국내 최고의 투자 기관들과 함께 
                투자를 진행합니다.</div>
                <div style={{
                    width: "86%",
                    height: 48,
                    border: "1px solid #94a6fc",
                    backgroundColor: "#ffffff",
                    borderRadius: 4,
                    cursor: "pointer",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                }}>
                    <div style={{
                        fontSize: 16,
                        opacity: 0.6,
                        color: "#040a27"
                    }}>칩스에서 투자 받기</div>
                </div>
            </div>
        </div>
    )
}