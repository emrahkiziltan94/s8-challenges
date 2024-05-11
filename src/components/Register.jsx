import { useState } from "react";

const Register = (props) => {
    const { handleChange } = props;

    return (<>
        <input type="text" name="ad soyad" onChange={handleChange} />
    </>)
}

export default Register;