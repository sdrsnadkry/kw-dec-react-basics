import TodoItem from "./components/todoItem";

export default function App() {
  return (
    <div className="wrapper">
      <section className="content">
        <header className="header" id="header">
          <h3 className="heading">TODO APP</h3>
          <p>Manage all your task from one place</p>
        </header>

        <div className="lecture">
          <form className="lecture-add" id="lecture-add">
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Enter your task "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="priority"
                    className="form-control"
                    placeholder="Select your priority "
                  >
                    <option value="0">Low</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="forn-group">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Enter your description "
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="success" type="submit">
              Add
            </button>
          </form>
          <div id="lecture-list">
            <ul>
              <TodoItem
                completed={true}
                title="Complete assignment 1 (HTML / CSS)"
                description="Description of your task goes here"
                priority="Medium"
              />
              <TodoItem
                completed={true}
                title="Complete assignment 1 (HTML / CSS)"
                description="Description of your task goes here"
                priority="Medium"
              />

              <li>
                <div>
                  <h6 className="title completed ">
                    Complete assignment 1 (HTML / CSS){" "}
                    <span className="ml-2 badge badge-danger">High</span>{" "}
                  </h6>
                  <p className="description">
                    Description of your task goes here{" "}
                  </p>
                </div>
                <div>
                  <button className="btn btn-danger">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <h6 className="title completed ">
                    Complete assignment 223123 (HTML / CSS){" "}
                    <span className="ml-2 badge badge-danger">High</span>
                  </h6>
                  <p className="description">
                    Description of your task goes here
                  </p>
                </div>

                <div>
                  <button className="btn btn-danger">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <h6 className="title completed ">
                    Complete assignment 3 (JS Basics){" "}
                    <span className="ml-2 badge badge-warning">Medium</span>
                  </h6>
                  <p className="description">
                    Description of your task goes here
                  </p>
                </div>
                <div>
                  <button className="btn btn-danger">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <h6 className="title">
                    Complete assignment 4 (Fetch and display data){" "}
                    <span className="ml-2 badge badge-info">Low</span>
                  </h6>
                  <p className="description">
                    Description of your task goes here
                  </p>
                </div>
                <div>
                  <button className="btn btn-success">
                    <i className="fas fa-check"></i>
                  </button>
                  <button className="btn btn-warning">
                    <i className="fas fa-pencil"></i>
                  </button>
                  <button className="btn btn-danger">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <h6 className="title">
                    Complete assignment 5 (Create an TODO app){" "}
                    <span className="ml-2 badge badge-info">Low</span>
                  </h6>
                  <p className="description">
                    Description of your task goes here
                  </p>
                </div>
                <div>
                  <button className="btn btn-success">
                    <i className="fas fa-check"></i>
                  </button>
                  <button className="btn btn-warning">
                    <i className="fas fa-pencil"></i>
                  </button>
                  <button className="btn btn-danger">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
