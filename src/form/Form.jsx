import React, { useState } from 'react'
import './form.css'


const Form = () => {
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        Password: "",
        confirmpassword: "",
        gender: "",

    })

    const [Errors, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;//called every time  a user types or changes form field.

        setFormData(prev => ({
            ...prev,/// use the spred operator to keep other values unchanged

            [name]: value// update formData usig the input name as key &the value as  the new value

        }))
    }
    const validation = () => {
        const newErrors = {};

        const { name, email, age, Password, confirmpassword, gender } = FormData;

        if (!name.trim()) newErrors.name = "name is required";
        else if (!/^[A-Za-z\s]*$/.test(name)) newErrors.name = "name should omly in alphabets";

        if (!email) newErrors.email = "email is required!"
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "email is invalid"

        if (!age) newErrors.age = "age is required!"
        else if (isNaN(age) || age < 1 || age > 120) newErrors.age = "age must be between 1 and 120"

        if (!Password) newErrors.Password = "password is required"
        else if (Password.length < 8) newErrors.Password = "password must be 8  characters";

        if (!confirmpassword) newErrors.confirmpassword = "please confirm password";
        else if (Password !== confirmpassword) newErrors.confirmpassword = "password do not matchl";

        if (!gender) newErrors.gender = "gender is required";

        return newErrors;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validation();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
        } else {
            setError({});
            alert("form submitted successfully");
            console.log('form data:', FormData);
            setFormData({
                name: "",
                email: "",
                age: "",
                Password: "",
                confirmpassword: "",
                gender: "",

            })

        }
    }


    return (

        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name='name' value={FormData.name} placeholder='name' onChange={handleChange} />
                {Errors.name && <p style={{ color: 'red' }}>{Errors.name}</p>}
            </div>


            {/* email */}
            <div>
                <input type="email" name='email' placeholder='your email' onChange={handleChange} />
                {Errors.email && <p style={{ color: 'red' }}>{Errors.email}</p>}

            </div>
            {/* age */}
            <div>
                <input type="text" name='age' value={FormData.age} placeholder='your age' onChange={handleChange} />
                {Errors.age && <p style={{ color: 'red' }}>{Errors.age}</p>}


            </div>

            {/* Password */}

            <div>
                <input type="password" name='Password' value={FormData.Password} placeholder='your password' onChange={handleChange} />
                {Errors.Password && <p style={{ color: 'red' }}>{Errors.Password}</p>}

            </div>
            {/*confirm password */}
            <div>
                <input type="password" name='confirmpassword' value={FormData.confirmpassword} placeholder='confirm  password' onChange={handleChange} />
                {Errors.confirmpassword && <p style={{ color: 'red' }}>{Errors.confirmpassword}</p>}


            </div>
            <div>
                {/* male */}
                <label >
                    <input type="radio" name='gender' value='male' checked={FormData.gender === 'male'} placeholder='your password' onChange={handleChange} />
                    Male
                </label>
                {/* female */}
                <label >
                    <input type="radio" name='gender' value='female' checked={FormData.gender === 'female'} placeholder='your password' onChange={handleChange} />
                    Female
                </label>
                {Errors.gender && <p style={{ color: 'red' }}>{Errors.gender}</p>}

            </div>
            <button type='submit'>submit</button>
        </form>

    )
}

export default Form
