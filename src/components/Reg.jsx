import React, { useState } from 'react'

const Reg = () => {
    const [user, setUser] = useState({ name: "arul", age: 21, gender: "Male", isMarried: true,Country:"India" ,bio:"Write something...."})
    function changeout(e) {
        const name=e.target.name;
        const value = e.target.type == "checkbox" ? e.target.checked : e.target.value;
        setUser({ ...user, [name]:value });

    }

    return (
        <div>

            <table >
                <tbody>
                    <tr>
                        <td>Firstname:</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Married:</td>
                        <td>{user.isMarried ? "Maried" : "Single"}</td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td>{user.Country }</td>
                    </tr>
                    <tr>
                        <td>Content:</td>
                        <td>{user.bio }</td>
                    </tr>
                </tbody>

            </table>
            <input
                type="text"
                id="name"
                name='name'
                placeholder="Enter User Name"
                value={user.name}
                onChange={changeout}
            />
            <input
                type="text"
                id="name"
                name='age'
                placeholder="Enter User Name"
                value={user.age}
                onChange={changeout}
            />
            <div>
                <label htmlFor="">
                    <input type="radio" name="gender" id="male" checked={user.gender == 'Male'} onChange={changeout} value="Male" />
                    Male
                </label>
                <label htmlFor="">
                    <input type="radio" name="gender" id="male" checked={user.gender == 'Female'} onChange={changeout} value='Female' />
                    Female
                </label>
                <label htmlFor="">
                    <input type="checkbox" name="isMarried" id="ismarried" checked={user.isMarried} onChange={changeout} value="isMarried"/>
                    Is Married
                </label>
                <label htmlFor=""> Select Country
                    <select name="Country" id="Country" onChange={changeout} value={user.Country}>
                        <option value="India">India</option>
                        <option value="Usa">Usa</option>
                        <option value="Germany">Germany</option>
                    </select>
                </label>
                <label htmlFor="">
                    <textarea name="bio" id="" cols={30} rows={5} value={user.bio}onChange={changeout} placeholder='Write something.....'></textarea>
                </label>
            </div>
        </div>
    )
}

export default Reg
