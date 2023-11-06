import { Component } from "react"

class AddTodo extends Component {
    constructor() { 
        this.input = null
    }
    /**
     * 当一个元素使用ref属性绑定一个函数时，在组件mount之后，就会
     * 检查ref绑定的值，如果绑定的值是一个函数时，那么将调用这个函数并将
     * 这个元素的dom节点对象传入，以便组件内进行访问， 不论是vue还是react
     * 都希望将操作dom这一层封装起来，使使用者不再直接的进行dom操作，因为
     * 如果使用者自行操作dom节点，而数据并不进行更新，那么将会造成数据与dom表现
     * 不一致的问题。
     * @param {*} node 
     */
    refInput(node) {
    this.input = node;
    }
    onSubmit(ev) {
        ev.preventDefault();
        const input = this.input;
        if (! input.value.trim()) {
            return;
        }
        this.props.onAdd(input.value);
        input.value = '';
    }
    render() {
  return (
    <div className="add-todo">
          <form onSubmit={this.onSubmit}>
        <input className="new-todo" ref={this.refInput} />
        <button className="add-btn" type="submit">
          添加
        </button>
      </form>
    </div>
  )
  }
}
export default AddTodo