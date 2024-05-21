export default function TodoItem(props) {
  const badgeClassName =
    props.priority === "High"
      ? "badge-danger"
      : props.priority === "Medium"
      ? "badge-warning"
      : "badge-info";

  const isCompleted = props.completed ? "completed" : "";

  return (
    <li>
      <div>
        <h6 className={`title ${isCompleted}`}>
          {props.title}
          <span className={`ml-2 badge ${badgeClassName}`}>
            {props.priority}
          </span>
        </h6>
        <p className="description">{props.description}</p>
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
  );
}
