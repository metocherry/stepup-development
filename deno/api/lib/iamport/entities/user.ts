export interface User {
    birth: number;
    birthday: string;
    certified: boolean;
    certified_at: number;
    foreigner: boolean;
    gender: string;
    // 아임포트 거래 고유 번호(아임포트에서 부여하는 거래건 당 고유한 번호(success:false일 때, 사전 validation에 실패한 경우라면 imp_uid는 null일 수 있음))
    imp_uid: string;
    // 가맹점에서 생성/관리하는 고유 주문번호
    merchant_uid: string;
    name: string;
    origin: string;
    pg_provider: string;
    pg_tid: string;
    // 사이트 별 개인식별 고유 키 입니다. 고객을 식별할 수 있는 고유 키이나, 사이트별로 고유한 식별 키 입니다.
    unique_in_site: string;
    // 개인별로 할당된 고유 식별 키 입니다. 개인정보인 휴대폰 번호를 키 값으로 사용하는 대신, 휴대폰 번호에 1:1로 대응하는 고유 식별 키를 활용하여 고객을 식별할 수 있습니다.
    unique_key: string;
}
