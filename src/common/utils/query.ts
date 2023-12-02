function parseQueryString(url: string) {
    // URL에서 쿼리스트링을 추출합니다.
    const queryString = url.split('?')[1];
	
    // 쿼리스트링이 없으면 빈 객체를 반환합니다.
    if (!queryString) {
        return {};
    }
	
    // 쿼리스트링을 '&' 기준으로 분리하여 각 파라미터로 나눕니다.
    const params = queryString.split('&');
	
    // 파라미터들을 객체로 변환합니다.
    const queryObject = {};
    params.forEach(param => {
        const [key, value] = param.split('=');
        // @ts-ignore
        queryObject[key] = decodeURIComponent(value.replace(/\+/g, ' '));
    });
	
    // 파라미터 객체를 반환합니다.
    return queryObject;
}

export { parseQueryString };
