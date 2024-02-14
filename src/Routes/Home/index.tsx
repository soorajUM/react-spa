import Form from "../../Components/InfraStructure/Form";

import { validateRegister } from "../../Validation";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        formStructure={[
          {
            field: "name",
            label: "Name",
          },
          {
            field: "email",
            label: "Email",
          },
          {
            field: "phone",
            label: "Phone",
          },
        ]}
        emptyForm={{
          name: "",
          email: "",
          phone: "",
        }}
        validateFunction={validateRegister}
        onSubmit={(d) => console.log(d)}
      />
    </div>
  );
};

export default Home;
