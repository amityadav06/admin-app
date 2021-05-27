import { FaCircle, FaTrash, FaEdit } from "react-icons/fa";

const UserData = ({ data, searchTerm }) => {
  return (
    <>
      {data
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            val.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            val.role.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        })
        .map((item) => {
          const { id, name, email, role } = item;
          return (
            <section key={id} className="contaienr">
              <div className="tab-con">
                <p className="item">{name}</p>
                <p className="item">{email}</p>
                <p className="item"> {role} </p>
                <div>
                  <FaEdit className="edit" />
                  <FaTrash className="trash" />
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
};
export default UserData;
