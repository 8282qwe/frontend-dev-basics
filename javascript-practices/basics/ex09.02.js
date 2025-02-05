/*
    URL 다루기

    자바스크립트에서 url 를 다루워야 하는 예

    1. 리다이렉트
    location.href = url;

    2. ajax 통신
    $.ajax(url)
    fetch(url)
    axios(url)
*/



var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";

// 1. escape: URL 전부를 encoding, 사용(x), deprecated
let url2 = escape(url);
console.log(url2);

// 2. encodeURI: URL 전체 중 파라미터만 encoding 한다. url 전체를 encoding 해야 하는 경우 사용(o)
let url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent: 값만 encoding해야 하는 경우 사용(o), url 전체를 encoding 해야 하는 경우 사용(x)
// 밑에는 잘못된 예시
let url4 = encodeURIComponent(url);
console.log(url4);

// 3-2. encodeURIComponent 사용 예
// 만들어야 할 URL: http://www.mysite.com/user?name=둘리&email=dooly@gmail.com
url = "http://www.mysite.com/user";
let formData = {
    name: "둘리",
    email: "dooly@gmail.com",
};

let toQueryString = function (query) {
    let qs = [];
    for (let prop in query) {
        qs.push(`${prop}=${encodeURIComponent(query[prop])}`);
    }
    return qs.join("&");
};

console.log(`${url}?${toQueryString(formData)}`);