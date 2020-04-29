import React, { useEffect, useState } from 'react'


const useForm = initialValue => {
    const [stateVal, setStateVal] = useState(initialValue)

    return [
        stateVal, e => {
            setStateVal({
                ...stateVal,
                [e.target.name]: e.target.value
            })
        }
    ]
}

export default function UseEffect() {
    const [values, setValues] = useForm({
        email: "",
        password: "",
        firstName: "" 
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values.email, values.password)
    }

    useEffect(() => {
        console.log('remder')
    }, [values])

    return (
        <div>
            {/* e => setValues({...values, [e.target.name]: e.target.value}) if useState */}
            <form onSubmit={handleSubmit}>
            <input type="text" name="email" value={values.email} onChange={setValues}></input>
            <input type="password" name="password" value={values.password} onChange={setValues}></input>
            <input type="text" name="firstName" value={values.firstName} onChange={setValues}></input>
            <input type="submit" value="submit" />
            </form>

        </div>
    )
}
