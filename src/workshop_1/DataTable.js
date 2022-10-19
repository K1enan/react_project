import React, { useState } from 'react';


const DataTable = () => {

    let studentItems = [{ id: 1, firstName: 'Kenan', lastName: 'Almousa', age: '39', birthdate: '1983-01-01', country: 'Sweden', city: 'Nybro' }];
    const [studentList, setStudentList] = useState(studentItems);
    const [student, setStudent] = useState({ id: 0, firstName: '', lastName: '', age: 0, birthdate: '', country: '', city: '' });

    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    const TableRow = (props) => {


        const TableAction = (props) => {

            const clickDatails = () => {

              
                setStudent(props.student)
              
            }

            return (
                <div>
                    <button onClick={clickDatails}>Datails</button>
                </div>
            );

        };


        return (
            <tbody>
                {props.students.map
                    (item =>
                        <tr key={item}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td>
                            <td><TableAction student={item}></TableAction></td>
                        </tr>)
                }
            </tbody>

        );
    };


    const DisplayData = () => {
return(

    <div>
        <p>FirstName: {student.firstName}</p>
        <p>LastName: {student.lastName} </p>
    </div>
)

}

    return (
        <div className='container'>
            <div className='col-5 offset-3'>
                <h5>Student List</h5>
                <table className="table" >
                    <TableHeader></TableHeader>
                    <TableRow students={studentList}></TableRow>
                </table>
                <DisplayData />     
            </div>
        </div>
    );

};
export default DataTable;