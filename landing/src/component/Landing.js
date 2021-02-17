import '../App.css';
import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

//스타일
import InvestCard, { CorporCard, FaqCard } from './Style';
import { GiPlainArrow } from "react-icons/gi"

//이미지
import chips from "../icon/chips.png"
import graychips from "../icon/graychips.png"
import exit from "../icon/exit.png"
import rise from "../icon/rise.png"
import ipo from "../icon/ipo.png"
import sample from "../icon/sample.png"

import ReactGA from 'react-ga';

function Landing() {
    const [faqOne, setFaqOne] = useState(false)
    const [faqTwo, setFaqTwo] = useState(false)
    const [faqThree, setFaqThree] = useState(false)
    const history = useHistory()

    useEffect(() => {
        ReactGA.initialize("UA-189830512-1");
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);


    function funding() {
        console.log("click!")
        ReactGA.event({
            category: "funding",
            action: "펀딩 페이지로 이동",
        });
        history.push("/home")
    }

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
            <div style={{
                maxWidth: 450,
                width: "100%",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                paddingBottom: 200,
                borderBottom: "1px solid rgba(20, 31, 77, 0.4)"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
                    paddingTop: 12,
                    paddingBottom: 12,
                    backgroundColor: "#ffffff",
                    borderBottom: "1px solid rgba(20, 31, 77, 0.1)",
                    marginBottom: 36,
                }}>
                    <img alt="" src={chips} style={{
                        width: 24,
                        height: 16,
                        marginLeft: "7%",
                        marginRight: 8,
                    }} />
                    <div style={{
                        fontSize: 20,
                        fontWeight: 600,
                        color: "#4c6bf9"
                    }}>Chips</div>
                </div>
                <div style={{
                    marginLeft: "7%",
                    marginRight: "7%",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#151f4e",
                    lineHeight: 1.5,
                    marginBottom: 32,
                }}>유망 스타트업에 <br /> 누구보다 빠르게 투자하세요!</div>
                <div style={{
                    width: "100%",
                    position: "relative",
                    zIndex: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <div style={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9))"
                    }} />
                    <CorporCard
                        title="10년 전 테슬라"
                        currentFund={1050000000}
                        totalFund={1200000000}
                        Deadline={10}
                    />
                    <CorporCard
                        title="10년 전 테슬라"
                        currentFund={1050000000}
                        totalFund={1200000000}
                        Deadline={10}
                    />
                    <CorporCard
                        title="10년 전 테슬라"
                        currentFund={1050000000}
                        totalFund={1200000000}
                        Deadline={10}
                    />
                    <CorporCard
                        title="10년 전 테슬라"
                        currentFund={1050000000}
                        totalFund={1200000000}
                        Deadline={10}
                    />
                </div>
                <div
                    onClick={funding}
                    style={{
                        width: "86%",
                        height: 48,
                        borderRadius: 4,
                        alignSelf: "center",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#ffffff",
                        backgroundColor: "#4c6bf9",
                        marginBottom: 24,
                    }}>모의투자 시작하기</div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#7f99fe",
                    paddingTop: 32,
                    paddingBottom: 32,
                    marginBottom: 32
                }}>
                    <div style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        lineHeight: 1.5,
                        color: "#ffffff",
                        textAlign: "left",
                        marginLeft: "7%",
                        marginRight: "7%",
                        marginBottom: 53,
                    }}>Chips는 <br />
          검증된 초기 스타트업에 <br />
          공모를 통해 투자하고 <br />
          자유롭게 거래할 수 있는 <br />
          투자 플랫폼입니다.</div>
                    <img alt="" src={sample} style={{
                        width: 241,
                        height: 324,
                        alignSelf: "flex-end",
                        marginRight: "7%",
                    }} />
                </div>
                <div style={{
                    marginLeft: "7%",
                    marginRight: "7%",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#151f4e",
                    lineHeight: 1.5,
                    marginBottom: 8,
                }}>국밥 한그릇 값으로 <br />
        간편하게 투자할 수 있어요.</div>
                <div style={{
                    marginRight: "7%",
                    marginLeft: "7%",
                    lineHeight: 1.5,
                    color: "#151f4e",
                    opacity: 0.6,
                    fontSize: 16,
                    marginBottom: 16
                }}>공모에 참여하기 위한 최소 금액은 <br />
        단돈 만원입니다.  또한 보유한 지분은 <br />
        자유롭게 거래할 수 있습니다.</div>
                <div style={{
                    fontSize: 48,
                    fontWeight: 600,
                    color: "#4c6bf9",
                    marginLeft: "7%",
                    marginBottom: 8,
                }}>Chips</div>
                <div style={{
                    marginLeft: "7%",
                    marginRight: "7%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 16
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: 120,
                        marginRight: 16,
                    }}>
                        <div style={{
                            fontSize: 14,
                            lineHeight: 1.43,
                            color: "#151f4e",
                            opacity: 0.6,
                            marginBottom: 8,
                        }}>최소 투자 금액</div>
                        <div style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "#5aca75"
                        }}>5,000원</div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: 120,
                        marginRight: 16,
                    }}>
                        <div style={{
                            fontSize: 14,
                            lineHeight: 1.43,
                            color: "#151f4e",
                            opacity: 0.6,
                            marginBottom: 8,
                        }}>투자기간</div>
                        <div style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            color: "#5aca75"
                        }}>없음</div>
                    </div>
                </div>
                <div style={{
                    fontSize: 36,
                    fontWeight: 600,
                    color: "#151f4e",
                    lineHeight: 1.33,
                    marginLeft: "7%",
                    marginBottom: 16,
                }}>vs</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    overflowX: "scroll",
                    whiteSpace: "nowrap",
                }}>
                    {/* 개인 투자 조합 */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "7%",
                        marginBottom: 16,
                    }}>
                        <div style={{
                            fontSize: 20,
                            fontWeight: 600,
                            color: "#040a27",
                            marginBottom: 8
                        }}>개인 투자 조합</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            width: 200,
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginRight: 20,
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#040a27",
                                    marginBottom: 8
                                }}>최소 투자 금액</div>
                                <div style={{
                                    fontSize: 20,
                                    fontWeight: 500,
                                    color: "#da1414"
                                }}>3,000 만원</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start"
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#040a27",
                                    marginBottom: 8
                                }}>투자기간</div>
                                <div style={{
                                    fontSize: 20,
                                    fontWeight: 500,
                                    color: "#da1414"
                                }}>최소 7년</div>
                            </div>
                        </div>
                    </div>
                    {/* 크라우드 펀딩 */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "7%",
                        marginBottom: 16,
                    }}>
                        <div style={{
                            fontSize: 20,
                            fontWeight: 600,
                            color: "#040a27",
                            marginBottom: 8
                        }}>크라우드 펀딩</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            width: 200,
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginRight: 20,
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#040a27",
                                    marginBottom: 8
                                }}>최소 투자 금액</div>
                                <div style={{
                                    fontSize: 20,
                                    fontWeight: 500,
                                    color: "#da1414"
                                }}>200 만원</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start"
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#040a27",
                                    marginBottom: 8
                                }}>의무보유기간</div>
                                <div style={{
                                    fontSize: 20,
                                    fontWeight: 500,
                                    color: "#da1414"
                                }}>최소 6개월</div>
                            </div>
                        </div>
                    </div>
                    {/* KONEX */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "7%",
                        marginBottom: 16,
                    }}>
                        <div style={{
                            fontSize: 20,
                            fontWeight: 600,
                            color: "#040a27",
                            marginBottom: 8
                        }}>KONEX</div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            width: 200,
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                marginRight: 20,
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#040a27",
                                    marginBottom: 8
                                }}>최소 투자 금액</div>
                                <div style={{
                                    fontSize: 20,
                                    fontWeight: 500,
                                    color: "#da1414"
                                }}>3,000 만원</div>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start"
                            }}>
                                <div style={{
                                    fontSize: 14,
                                    opacity: 0.6,
                                    color: "#040a27",
                                    marginBottom: 8
                                }}>투자기간</div>
                                <div style={{
                                    fontSize: 20,
                                    fontWeight: 500,
                                    color: "#da1414"
                                }}>없음</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    fontSize: 14,
                    lineHeight: 1.43,
                    color: "#151f4e",
                    opacity: 0.6,
                    marginTop: 16,
                    marginBottom: 32,
                    marginLeft: "7%"
                }}>* 거래소 기능 추후 지원 예정</div>
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 32,
                    paddingBottom: 48,
                    backgroundColor: "#f4f6ff",
                    marginBottom: 32
                }}>
                    <div style={{
                        marginLeft: "7%",
                        marginRight: "7%",
                        fontSize: 24,
                        fontWeight: "bold",
                        lineHeight: 1.5,
                        color: "#151f4e",
                        marginBottom: 16,
                    }}>위험하지만 매력적인 투자 <br />
          칩스와 함께 시작해봐요.</div>
                    <InvestCard
                        icon={exit}
                        text="기업 가치가 성장해 구주를 
            매각하는 경우"
                    />
                    <InvestCard
                        icon={rise}
                        text="M&A가 일어나 다른 회사와 
            합병하게 되는 경우"
                    />
                    <InvestCard
                        icon={ipo}
                        text="IPO를 통해 증권 거래소에 
            상장하는 경우"
                    />
                    <GiPlainArrow
                        style={{
                            alignSelf: "center",
                            marginBottom: 16
                        }}
                        color="#151f4e"
                        size={50}
                    />
                    <div style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#5aca75",
                        alignSelf: "center",
                        marginBottom: 16
                    }}>투자자에게 수익분배</div>
                    <div style={{
                        fontSize: 14,
                        opacity: 0.6,
                        color: "#151f4e",
                        marginBottom: 8,
                        marginLeft: "7%",
                        marginRight: "7%"
                    }}>* 위 상황들이 무조건적인 수익을 담보하지 않습니다.</div>
                    <div style={{
                        fontSize: 14,
                        opacity: 0.6,
                        color: "#151f4e",
                        marginLeft: "7%",
                        marginRight: "7%"
                    }}>* 유동성에 따른 투자 손실이 발생할 수 있습니다.</div>
                </div>
                <div style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#151f4e",
                    lineHeight: 1.5,
                    marginLeft: "7%",
                    marginBottom: 16,
                }}>FAQ</div>
                <FaqCard
                    title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    button={faqOne}
                    setButton={setFaqOne}
                />
                <FaqCard
                    title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    button={faqTwo}
                    setButton={setFaqTwo}
                />
                <FaqCard
                    title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    button={faqThree}
                    setButton={setFaqThree}
                />
                <div style={{
                    marginTop: 8,
                    marginBottom: 32,
                    opacity: 0.6,
                    fontSize: 14,
                    color: "#151f4e",
                    marginRight: "7%",
                    alignSelf: "flex-end",
                    textDecorationLine: "underline",
                    cursor: "pointer"
                }}>더 궁금한 질문이있나요?</div>
                <div style={{
                    width: "86%",
                    borderRadius: 10,
                    backgroundColor: "#5aca75",
                    paddingTop: 20,
                    paddingBottom: 20,
                    alignSelf: "center",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer"
                }}>
                    <div style={{
                        marginRight: 20,
                        marginLeft: 20,
                        fontSize: 14,
                        color: "#ffffff",
                        marginBottom: 8,
                    }}>어떤 서비스인지 자세히 체험해보세요.</div>
                    <div style={{
                        maxWidth: 270,
                        fontSize: 20,
                        marginRight: 20,
                        marginLeft: 20,
                        color: "#ffffff",
                        fontWeight: "bold",
                        lineHeight: 1.2,
                    }}>모의투자 + 설문조사를 완료하면
          스타벅스 기프티콘을 드려요!</div>
                </div>
            </div>
            <div style={{
                maxWidth: 450,
                width: "100%",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                paddingTop: 16,
                paddingBottom: 20
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "7%",
                    marginBottom: 8,
                }}>
                    <img alt="" src={graychips} style={{
                        width: 24,
                        height: 16,
                        marginRight: 8
                    }} />
                    <div style={{
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: 1.2,
                        color: "#989898",
                    }}>Chips</div>
                </div>
                <div style={{
                    fontSize: 14,
                    opacity: 0.4,
                    color: "#000000",
                    marginLeft: "7%",
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(20, 31, 77, 0.2)",
                    marginBottom: 8,
                    width: "86%"
                }}>Start up For Everyone</div>
                <div style={{
                    fontSize: 14,
                    opacity: 0.4,
                    color: "#000000",
                    marginLeft: "7%",
                    marginBottom: 8,
                }}>주식회사 조랑말즈</div>
                <div style={{
                    fontSize: 14,
                    opacity: 0.4,
                    color: "#000000",
                    marginLeft: "7%",
                    marginBottom: 8,
                }}>대표자 : 이지행, 김현명</div>
                <div style={{
                    fontSize: 14,
                    opacity: 0.4,
                    color: "#000000",
                    marginLeft: "7%",
                    marginBottom: 8,
                }}>Email : hyunmyung137@gmail.com</div>
                <div style={{
                    fontSize: 14,
                    opacity: 0.4,
                    color: "#000000",
                    marginLeft: "7%",
                    marginBottom: 8,
                    width: "86%"
                }}>주소 : 서울 특별시 종로구 창경궁로 35길 38 킹고 스타트업 스페이스 306호</div>
                <div style={{
                    fontSize: 14,
                    opacity: 0.4,
                    color: "#000000",
                    marginLeft: "7%",
                }}>사업자 번호 : 123-23-12313</div>
            </div>
        </div>
    );
}

export default Landing;