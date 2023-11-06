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