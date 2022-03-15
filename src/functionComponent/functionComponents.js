import './functionComponent.css';

function FunctionComponents(props){

    return <div className="content">
        <div>简单函数组件: 组件内只包含一个render 方法,不能使用 this, state,使用起来比较简单</div>
        <div>没有使用 hooks 无法处理生命周期的回调</div>
    </div>

}

export default FunctionComponents

