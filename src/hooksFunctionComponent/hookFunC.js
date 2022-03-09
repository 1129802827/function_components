import "./hookFunC.css"
import React, {useState,useEffect} from "react"
/*
使用 hook 技术可以让你在不使用 class 的情况下使用 state, 
及处理生命周期的回调, React 16.8.0 版本开始支持 hook 技术
hook 在 class 内部是不起作用的
Hook 使用规则:
1、只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2、只能在 React 的函数组件中调用 Hook,不要在其他 JavaScript 函数中调用。自定义hook 除外
*/
function HookFunC(){
    /*
    通过在函数组件里调用 useState 来给组件添加一些内部 state
    React 会在重复渲染时保留这个 state
    useState 会返回一对值：当前状态和一个让你更新状态的函数
    调用更新状态的函数时,不会把新的状态和旧的状态进行合并, 调用更新状态函数后,React 会重新渲染组件
    */
    const [count, setCount] = useState(0); //这里 useState() 返回了两个值,第一个值赋值给了 count,第二个值赋值给 了 setCount, 这种语法称为数组解构
    // 如果我们用过多个状态是,可以声明多个状态变量, 
    // 下面我们声明一个 age 的状态,一个 person 的状态, 一个 dataList 的状态
    // 在初始化的时候我们可以设置状态的具体值,也可以指定状态的类型
    const [age, setAge] = useState(20);
    const [person, setPerson] = useState({name:'张三',age:18,gender:'男'})
    const [dataList, setDataList] = useState(Array);

    useEffect(() => {
        console.log("count ====== " + {count});
        document.title = `点击了 ${count} 次`;
    });
    
    // 下面 button的事件回调中的 setCount() 对比 class 中的this.setState{count:this.state.count+1} 是不是简洁了
    // 这里调用 setCount 后,React 会重新渲染组件
    return <div className="content">
        <p> 你已经点击了{count}次了</p>
        <button onClick={()=>setCount(count+1)}> 
            点击我
        </button>
    </div>
}

export default HookFunC