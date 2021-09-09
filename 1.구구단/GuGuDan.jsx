const React = require('react'); // script cdn 으로 react나 react-dom 을 불러오는 게 아니라 node의 module-system 을 이용하여 require 하는 것
const { useState, useRef } = React;

const GuGuDan = () => {

    // 함수형 컴포넌트 state 초기값 설정
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult(value + ' 딩동댕');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <> 
            <div>{ first } 곱하기 { second } 는?</div>
            <form onSubmit={ onSubmitForm }>
                <input
                    ref={ inputRef }
                    type="number"
                    onChange={ onChangeInput }
                    value={ value }
                />  
                <button type="submit">입력</button> 
            </form>
            <div id="result">{ result }</div>
        </>
    )
    // return 메소드 최상단 태그 <></>는 <React.Fragment></React.Fragment> 약어같은 것
}

module.exports = GuGuDan; // 일케 해줘야지만 다른데서 쓸 수 있음