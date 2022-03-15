import "./hookFunC.css"
import React,{useState,useEffect} from "react"
import ReactDOM from "react-dom";
/*
使用 hook 技术可以让你在不使用 class 的情况下使用 state, 
及处理生命周期的回调, React 16.8.0 版本开始支持 hook 技术
hook 在 class 内部是不起作用的
Hook 使用规则:
1、只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2、只能在 React 的函数组件中调用 Hook,不要在其他 JavaScript 函数中调用。自定义hook 除外
*/
function HookFunC(){

    /********************* State Hook **************************/
    /*
    通过在函数组件里调用 useState 来给组件添加一些内部 state
    React 会在重复渲染时保留这个 state
    useState 会返回一对值：当前状态和一个让你更新状态的函数
    调用更新状态的函数时,不会把新的状态和旧的状态进行合并, 调用更新状态函数后,React 会重新渲染组件
    */
    const [count, setCount] = useState(0); //这里 useState() 返回了两个值,第一个值赋值给了 count,第二个值赋值给 了 setCount, 这种语法称为数组解构
    // 上面 setCount 有两种写法:
    // 1. setCount(newValue) 这种是直接设置一个新值
    // 2. setCount((value)=>{return newValue}) // 这种是传入一个函数,这个函数会把原来的值传过来, 然后需要你返回一个新的值
    // 如果我们用过多个状态是,可以声明多个状态变量, 
    // 下面我们声明一个 age 的状态,一个 person 的状态, 一个 dataList 的状态
    // 在初始化的时候我们可以设置状态的具体值,也可以指定状态的类型
    const [age, setAge] = useState(20);
    const [person, setPerson] = useState({name:'张三',age:18,gender:'男'})
    const [dataList, setDataList] = useState(Array);

    // 下面 button的事件回调中的 setCount() 对比 class 中的this.setState{count:this.state.count+1} 是不是简洁了
    // 这里调用 setCount 后,React 会重新渲染组件
    // return <div className="content">
    //     <p> 你已经点击了{count}次了</p>
    //     <button onClick={()=>setCount(count+1)}> 
    //             点击我
    //     </button>
    // </div>

    /********************* Effect Hook **************************/
    // useEffact 可以在函数式组件中执行副作用操作,用于模拟类组件中的生命周期钩子
    // useEffact 接收两个参数
    // 第一个参数是函数: 这个函数会在第一次渲染的时候调用一次(类似类组件中的 componentDidMount()),
    //      另外还会根据传入的第二个参数触发该函数的调用, 
    //      这个函数还可以返回一个函数,这个函数会在组件将要卸载的时候调用,类似类组件中的 componentWillUnmount()
    // 第二个参数是一个数组, 当这个参数不传时,默认监听所有状态的改变,只要有状态的改变,就会触发第一个函数调用,
    //      当这个参数传入的是一个空数组时,意味着所有状态的改变都不触发第一个函数的调用,
    //      当这个参数传入的数组不为空时,会监听数组中的每个状态的改变,任一个状态的改变都会触发第一个函数的调用,
    // 第一个参数和第二个参数合起来用就相当于类组件中的 componentDidUpdate()
    // useEffact 可以写多份,用来处理不同状态改变时要做的事情
    // 

    // 下面我们可以打开控制台查看对应的输出来验证
    useEffect(() => {
        console.log("count 的值", count);
        console.log("age 的值", age);
        
    },[count,age]);

    useEffect(() => {
        console.log("这里传空数组,只在第一次渲染时调用");
        
    },[]);

    useEffect(() => {
        console.log("这里不传第二个参数,所有状态改变的时候都调用");
    });

    useEffect(() => {
        return ()=>{
            console.log("这里只在组件卸载的时候调用");
        }
    },[]);

    function addCount(){
        setCount(count+1);
    }
    function changeAge(){
        setAge(age+5);
    }

    function changePerson(){
        setPerson({name:'张四',age:19,gender:'女'});
    }
    function changeData(){
        setDataList([0,9,8,7]);
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    
    // return <div className="content">
    //     <p> 你已经点击了{count}次了</p>
    //     <button onClick={addCount}> 
    //         点我+1
    //     </button>
    //     <p> 年龄{age}</p>
    //     <button onClick={changeAge}> 
    //         修改年龄
    //     </button>
    //     <p> 姓名{person.name},年龄{person.age},性别{person.gender}</p>
    //     <button onClick={changePerson}> 
    //         修改人物
    //     </button>
    //     <p> dataList 是{dataList}</p>
    //     <button onClick={changeData}> 
    //         修改Data
    //     </button>
    //     <p></p>
    //     <button onClick={unmount}> 
    //         卸载组件
    //     </button>
    // </div>


    /********************* Ref Hook **************************/
    // 用来在函数组件中存储/查找组件内的标签或任意其他数据
    const inputRef = React.useRef();
    const show = ()=>{
        alert(inputRef.current.value);
    }

    return <div className="content">
        <input type="text" ref={inputRef}/>
        <p/>
        <button onClick={show}>
            点我显示输入内容
        </button>
    </div>


}

export default HookFunC